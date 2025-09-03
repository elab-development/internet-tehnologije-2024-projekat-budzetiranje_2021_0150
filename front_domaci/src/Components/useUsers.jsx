import { useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Marko Jovanović", email: "marko.jovanovic@example.com", role: "regular" },
    { id: 2, name: "Ana Petrović", email: "ana.petrovic@example.com", role: "vip" },
    { id: 3, name: "Ivana Nikolić", email: "ivana.nikolic@example.com", role: "regular" },
    { id: 4, name: "Milan Marković", email: "milan.markovic@example.com", role: "vip" },
  ]);

  const toggleUserRole = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, role: user.role === "regular" ? "vip" : "regular" }
          : user
      )
    );
  };

  return {
    users,
    toggleUserRole,
  };
};

export default useUsers;
