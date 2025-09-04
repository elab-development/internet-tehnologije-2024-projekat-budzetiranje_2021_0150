import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from './Components/Login';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
       
        </Routes>
      </div>
    </Router>
  );
}


export default App;
