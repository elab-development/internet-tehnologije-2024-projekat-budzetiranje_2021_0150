import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
 
  const [role, setRole] = useState("regular"); 

  useEffect(() => {
    
    const storedRole = sessionStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

 
  const renderNavigationLinks = () => {
    switch (role) {
      case "admin":
        return (
          <>
            <li><a href="/users">Svi Korisnici</a></li>
            <li><a href="/statistika">Statistika</a></li>
          </>
        );
      case "vip":
        return (
          <>
            <li><a href="/profile">Moj Profil</a></li>
            <li><a href="/groups">Grupe</a></li>
            <li><a href="/create-group">Napravi Grupu</a></li>
            <li><a href="/personal-expences">Licni Troskovi</a></li>
          </>
        );
      case "regular":
        return (
          <>
            <li><a href="/profile">Moj Profil</a></li>
            <li><a href="/groups">Grupe</a></li>
            <li><a href="/create-group">Napravi Grupu</a></li>
          </>
        );
      default:
        return null; 
    }
  };

  
  const handleLogout = () => {
    sessionStorage.removeItem("role"); 
    window.location.href = "/"; 
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-links">
          {renderNavigationLinks()}
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
