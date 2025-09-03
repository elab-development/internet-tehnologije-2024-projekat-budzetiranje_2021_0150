import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateGroup.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "Ana" },
    { id: 2, name: "Marko" },
    { id: 3, name: "Marija" },
    { id: 4, name: "Ivana" },
    { id: 5, name: "Nikola" },
  ]);

  const handleMemberChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedMembers(selectedOptions);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Grupa "${groupName}" je uspešno kreirana!`);
    navigate("/groups");
  };

  return (
    <>
    <Navigation/>
    <div className="create-group-container">
      <h2>Kreiraj Novu Grupu</h2>
      <form className="create-group-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupName">Naziv grupe:</label>
          <input
            type="text"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Unesite naziv grupe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="members">Izaberite članove:</label>
          <select
            id="members"
            multiple
            value={selectedMembers}
            onChange={handleMemberChange}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <small>Držite Ctrl (Cmd na Mac-u) za višestruki izbor.</small>
        </div>

        <button type="submit" className="submit-button">
          Kreiraj Grupu
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default CreateGroup;
