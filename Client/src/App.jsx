// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tentangkami from "./pages/Tentangkami";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Program from "./pages/Program";
import DetailProgram from "./pages/Detail-program";
import Mitra from "./pages/Mitra";
import DashboardUser from "./pages/DashboardUser";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentangkami" element={<Tentangkami />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/program" element={<Program />} />
          <Route path="/detail-program" element={<DetailProgram />} />
          <Route path="/mitra" element={<Mitra />} />
          <Route path="/dashboard-user" element={<DashboardUser />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
