import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Groups from './Components/Groups';
import GroupExpenses from './Components/GroupExpenses';
import CreateGroup from './Components/CreateGroup';
import Statistics from './Components/Statistics';
import Users from './Components/Users';
import VipPersonalExpenses from './Components/VipPersonalExpences';
function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:id" element={<GroupExpenses />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/statistika" element={<Statistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/personal-expences" element={<VipPersonalExpenses />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
