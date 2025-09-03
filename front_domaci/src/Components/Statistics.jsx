import React from "react";
import "./Statistics.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Statistics = () => {
  const stats = {
    totalUsers: 1230,
    vipUsers: 250,
    regularUsers: 980,
    totalGroups: 85,
    avgExpensesPerGroup: 12.5,
    totalExpenses: 3456789,
    avgExpenseAmount: 4560,
  };

  return (
    <>
        <Navigation/>
        <div className="admin-stats-page">
        <h1 className="page-title">Admin Statistika</h1>

        <div className="stats-grid">
            <div className="stats-card">
            <h2>Ukupno korisnika</h2>
            <p className="stats-value">{stats.totalUsers}</p>
            </div>

            <div className="stats-card">
            <h2>VIP korisnici</h2>
            <p className="stats-value">{stats.vipUsers} ({((stats.vipUsers / stats.totalUsers) * 100).toFixed(2)}%)</p>
            </div>
            <div className="stats-card">
            <h2>Obični korisnici</h2>
            <p className="stats-value">{stats.regularUsers} ({((stats.regularUsers / stats.totalUsers) * 100).toFixed(2)}%)</p>
            </div>

            <div className="stats-card">
            <h2>Ukupno grupa</h2>
            <p className="stats-value">{stats.totalGroups}</p>
            </div>

            <div className="stats-card">
            <h2>Prosečan broj troškova po grupi</h2>
            <p className="stats-value">{stats.avgExpensesPerGroup}</p>
            </div>

            <div className="stats-card">
            <h2>Ukupna suma troškova</h2>
            <p className="stats-value">{stats.totalExpenses.toLocaleString()} RSD</p>
            </div>

            <div className="stats-card">
            <h2>Prosečna suma troškova</h2>
            <p className="stats-value">{stats.avgExpenseAmount.toLocaleString()} RSD</p>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default Statistics;