import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";  
import UserList from "./pages/UserList";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages/CreateUser" element={<Sidebar />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    
  );
};

export default App;
