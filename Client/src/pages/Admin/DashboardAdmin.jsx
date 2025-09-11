import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardAdmin() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/total")
      .then((res) => {
        setTotalUsers(res.data.total);
      })
      .catch((err) => {
        console.error("Gagal memuat data users:", err);
      });
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-black">Selamat Datang, Admin!</h1>
      <p className="mt-4 text-gray-600">Ini adalah halaman dashboard admin.</p>

      {/* Card Total Users */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500">
          <h2 className="text-lg text-gray-700 font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
}
