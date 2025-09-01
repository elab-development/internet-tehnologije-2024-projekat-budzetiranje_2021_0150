import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Groups.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Pagination from "./Pagination"; 

const Groups = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const groupsPerPage = 2;

  const groups = [
    { id: 1, name: "More", participants: ["Marija", "Ana"], expenses: [{ id: 1, title: 'Večera u restoranu', paidBy: 'Marija', amountPaid: 3000, debts: [{ name: 'Ana', amountOwed: 1500 }] }, { id: 2, title: 'Namirnice', paidBy: 'Ana', amountPaid: 2000, debts: [{ name: 'Marija', amountOwed: 1000 }] }] },
    { id: 2, name: "Planinarenje", participants: ["Marko", "Nikola"], expenses: [{ id: 3, title: 'Oprema za kampovanje', paidBy: 'Marko', amountPaid: 5000, debts: [{ name: 'Nikola', amountOwed: 2500 }] }] },
    { id: 3, name: "Roštilj", participants: ["Ivana", "Marko", "Ana"], expenses: [{ id: 4, title: 'Meso i piće', paidBy: 'Ivana', amountPaid: 4000, debts: [{ name: 'Marko', amountOwed: 1500 }, { name: 'Ana', amountOwed: 1500 }] }] },
    { id: 4, name: "Putovanje", participants: ["Marija", "Nikola", "Ivana"], expenses: [{ id: 5, title: 'Troškovi prevoza', paidBy: 'Nikola', amountPaid: 6000, debts: [{ name: 'Marija', amountOwed: 2000 }, { name: 'Ivana', amountOwed: 2000 }] }] },
  ];

  
  const indexOfLastGroup = currentPage * groupsPerPage;
  const indexOfFirstGroup = indexOfLastGroup - groupsPerPage;
  const currentGroups = groups.slice(indexOfFirstGroup, indexOfLastGroup);

  const navigateToGroupPage = (group) => {
    navigate(`/groups/${group.id}`, { state: { group } });
  };

  return (
    <>
      <Navigation />
      <div className="groups-container">
        {currentGroups.map((group) => (
          <div
            key={group.id}
            className="group-card"
            onClick={() => navigateToGroupPage(group)}
          >
            <h3 className="group-name">{group.name}</h3>
            <p className="group-participants">
              Učesnici: {group.participants.join(", ")}
            </p>
            <p className="group-expenses">Broj troškova: {group.expenses.length}</p>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(groups.length / groupsPerPage)}
        onPageChange={setCurrentPage}
      />

      <Footer />
    </>
  );
};

export default Groups;
