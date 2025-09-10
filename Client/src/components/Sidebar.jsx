import { useNavigate } from "react-router-dom";
import React from "react";
import {Link} from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard-admin" className="hover:text-blue-300">
          Dashboard
        </Link>
        {/* Tambah menu lain di sini */}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded text-white"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
