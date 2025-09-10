import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/img-logo-PSA.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm bg-white/95">
      <div className="w-full flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="w-32 h-24 flex items-center space-x-3">
          <img
            src={logo}
            alt="logo"
            // className="w-32 h-24 object-contain transform scale-110"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
           <li>
            <Link
              to="/program"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Program
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/tentangkami"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/mitra"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Mitra
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Daftar / Masuk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col space-y-1.5 focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <a
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Beranda
          </a>
          <a
            href="#program"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Program
          </a>
          <a
            href="/tentangkami"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Tentang Kami
          </a>
          {/* <a
            href="#mitra"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Mitra
          </a> */}
          <a
            href="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Kontak
          </a>
          <a
            href="#daftar"
            className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold mt-4"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
