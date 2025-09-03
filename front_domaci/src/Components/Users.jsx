import React from "react";
import "./Users.css";
import Navigation from "./Navigation";
import useUsers from "./useUsers"; 
import Footer from "./Footer";

const Users = () => {
  const { users, toggleUserRole } = useUsers();

  return (
    <>
      <Navigation />
      <div className="admin-users-page">
        <h1 className="page-title">Administracija Korisnika</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ime i Prezime</th>
              <th>Email</th>
              <th>Uloga</th>
              <th>Akcije</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className={user.role === "vip" ? "vip-role" : "regular-role"}>
                  {user.role}
                </td>
                <td>
                  <button
                    className="toggle-role-button"
                    onClick={() => toggleUserRole(user.id)}
                  >
                    {user.role === "regular" ? "Promeni u VIP" : "Promeni u Običnog"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default Users;
