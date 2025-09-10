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
import DashboardAdmin from "./pages/Admin/DashboardAdmin";

import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/tentangkami"
          element={
            <UserLayout>
              <Tentangkami />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout>
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />
        <Route
          path="/register"
          element={
            <UserLayout>
              <Register />
            </UserLayout>
          }
        />
        <Route
          path="/program"
          element={
            <UserLayout>
              <Program />
            </UserLayout>
          }
        />
        <Route
          path="/detail-program"
          element={
            <UserLayout>
              <DetailProgram />
            </UserLayout>
          }
        />
        <Route
          path="/mitra"
          element={
            <UserLayout>
              <Mitra />
            </UserLayout>
          }
        />
        <Route
          path="/dashboard-user"
          element={
            <UserLayout>
              <DashboardUser />
            </UserLayout>
          }
        />

        <Route
          path="/dashboard-admin"
          element={
            <AdminLayout>
              <DashboardAdmin />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

