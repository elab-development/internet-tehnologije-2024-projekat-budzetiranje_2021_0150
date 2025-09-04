import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Groups.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Pagination from "./Pagination"; 

const Groups = () => {
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  });

  const [authToken] = useState(sessionStorage.getItem("auth_token"));

  const groupsPerPage = 5;

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/groups", {
          params: {
            page: pagination.currentPage,
            per_page: groupsPerPage,
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data && response.data.data) {
          setGroups(response.data.data);
          setPagination((prev) => ({
            ...prev,
            currentPage: response.data.meta.current_page,
            totalPages: response.data.meta.last_page,
            totalItems: response.data.meta.total,
          }));
        } else {
          console.error("Nepravilna struktura podataka:", response);
        }
      } catch (error) {
        console.error("Greška prilikom dobijanja grupa:", error);
      }
    };

    fetchGroups();
  }, [pagination.currentPage, authToken]);

  const handlePageChange = (pageNumber) => {
    setPagination((prev) => ({ ...prev, currentPage: pageNumber }));
  };

  const navigateToGroupPage = (groupId) => {
    navigate(`/groups/${groupId}`);
  };

  return (
    <>
      <Navigation />
      <div className="groups-container">
        {groups.length > 0 ? (
          groups.map((group) => (
            <div
              key={group.id}
              className="group-card"
              onClick={() => navigateToGroupPage(group.id)}
            >
              <h3 className="group-name">{group.name}</h3>
              <p className="group-participants">
                Učesnici: {group.users.map((user) => user.username).join(", ")}
              </p>
              <p className="group-expenses">
                Troškovi: {group.expenses.length}
              </p>
            </div>
          ))
        ) : (
          <p className="no-groups">Nema grupa za prikazivanje</p>
        )}
      </div>

  
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />
    </>
  );
};

export default Groups;
