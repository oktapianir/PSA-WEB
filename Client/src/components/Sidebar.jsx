import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard-admin" className="hover:text-blue-300">
          Dashboard
        </Link>
        <Link to="#" className="hover:text-blue-300">
          Program
        </Link>
        <Link to="#" className="hover:text-blue-300">
          Mitra
        </Link>
        {/* Tambah menu lain di sini */}
        <button
          onClick={handleLogout}
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
