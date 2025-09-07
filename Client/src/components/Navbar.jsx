import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-7">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* <img src={logo} alt="logo" className="w-7 h-7 object-contain"></img> */}
          <img src={logo} alt="logo" className="w-20 h-16 object-contain"></img>
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
          <li className="relative group">
            <Link
              to="/program"
              className="hover:text-blue-600 transition-colors duration-200 flex items-center group"
            >
              Program
              <svg
                className="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <ul className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <li>
                <a
                  href="#pelatihan"
                  className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-t-xl transition-colors"
                >
                  Pelatihan Teknis
                </a>
              </li>
              <li>
                <a
                  href="#sertifikasi"
                  className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Sertifikasi BNSP
                </a>
              </li>
              <li>
                <a
                  href="#magang"
                  className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-b-xl transition-colors"
                >
                  Program Magang
                </a>
              </li>
            </ul>
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
              to="/kontak"
              className="hover:text-blue-600 transition-colors duration-200 relative group"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#daftar"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Daftar / Masuk
          </a>
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
            href="#beranda"
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
            href="#tentang"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Tentang Kami
          </a>
          <a
            href="#mitra"
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Mitra
          </a>
          <a
            href="#kontak"
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
