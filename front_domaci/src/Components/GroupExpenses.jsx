import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./GroupExpenses.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Pagination from "./Pagination"; 

const GroupExpenses = () => {
  const location = useLocation();
  const group = location.state?.group || { expenses: [], participants: [] };
  const users = group.participants;
  const [expenses, setExpenses] = useState(group.expenses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: "",
    paidBy: users[0] || "",
    amountPaid: "",
    debtors: [],
  });
  const [currentUser, setCurrentUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const expensesPerPage = 2;

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    setCurrentUser(role === "vip" ? "Marija" : "Ana");
  }, []);

  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpense);

  const handleAddExpense = () => setIsModalOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleDebtorChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setNewExpense((prev) => ({ ...prev, debtors: selectedOptions }));
  };

  const handleSaveExpense = () => {
    const amountPaid = parseFloat(newExpense.amountPaid);
    if (isNaN(amountPaid) || amountPaid <= 0 || newExpense.debtors.length === 0) {
      alert("Unesite ispravan iznos troška i izaberite barem jednog dužnika!");
      return;
    }

    const amountPerDebtor = amountPaid / (newExpense.debtors.length + 1);
    const debts = newExpense.debtors.map((debtor) => ({
      name: debtor,
      amountOwed: amountPerDebtor.toFixed(2),
      paid: false,
    }));

    const expense = {
      id: expenses.length + 1,
      title: newExpense.title,
      paidBy: newExpense.paidBy,
      amountPaid: amountPaid.toFixed(2),
      debts,
    };

    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setIsModalOpen(false);
    setNewExpense({ title: "", paidBy: users[0] || "", amountPaid: "", debtors: [] });
  };

  const handleMarkAsPaid = (expenseId, debtorName) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        if (expense.id === expenseId) {
          return {
            ...expense,
            debts: expense.debts.map((debt) =>
              debt.name === debtorName ? { ...debt, paid: true } : debt
            ),
          };
        }
        return expense;
      })
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNewExpense({ title: "", paidBy: users[0] || "", amountPaid: "", debtors: [] });
  };

  return (
    <>
      <Navigation />
      <div className="expenses-container">
        <div className="header">
          <h2>Troškovi grupe</h2>
          <button className="add-expense-button" onClick={handleAddExpense}>
            + Dodaj novi trošak
          </button>
        </div>
        <div className="expenses-list">
          {currentExpenses.map((expense) => (
            <div key={expense.id} className="expense-card">
              <div className="expense-header">
                <h3>{expense.title}</h3>
                <p className="expense-paid-by">
                  <strong>{expense.paidBy}</strong> platio/la
                </p>
              </div>
              <p className="expense-amount">Ukupno: {expense.amountPaid} RSD</p>
              <div className="expense-debts">
                <h4>Dugovanja:</h4>
                {expense.debts.map((debt) => (
                  <div key={debt.name} className="debt-item">
                    {debt.paid ? (
                      <span><strong>{debt.name}</strong> je platio/la dug</span>
                    ) : (
                      <>
                        <span>
                          {debt.name} duguje <strong>{debt.amountOwed} RSD</strong>
                        </span>
                        {expense.paidBy === currentUser && (
                          <button onClick={() => handleMarkAsPaid(expense.id, debt.name)}>
                            Plaćeno
                          </button>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(expenses.length / expensesPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Dodaj novi trošak</h2>
            <label>
              Naziv:
              <input
                type="text"
                name="title"
                value={newExpense.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Ko je platio:
              <select
                name="paidBy"
                value={newExpense.paidBy}
                onChange={handleInputChange}
              >
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Koliko je plaćeno (RSD):
              <input
                type="number"
                name="amountPaid"
                value={newExpense.amountPaid}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Izaberite dužnike:
              <select
                multiple
                value={newExpense.debtors}
                onChange={handleDebtorChange}
              >
                {users
                  .filter((user) => user !== newExpense.paidBy)
                  .map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
              </select>
              <small>Držite Ctrl (Cmd na Mac-u) za višestruki izbor.</small>
            </label>
            <div className="modal-actions">
              <button onClick={handleSaveExpense}>Sačuvaj</button>
              <button onClick={handleCancel}>Otkaži</button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default GroupExpenses;
