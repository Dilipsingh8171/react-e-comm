import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Usercontext";

const Header = () => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true); // Loading state
  const [auth, setAuth] = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  const navigate = useNavigate();

  // Initial load to fetch user from localStorage
  useEffect(() => {
    if (load) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
      setLoad(false); // Set loading to false after initial check
    }
  }, [load]);

  const handleLogout = () => {
    setUser(null); // Update user state
    setAuth({ user: null, token: "" }); // Clear auth context
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-black text-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-red text-xl font-bold">Abacus</div>

        {/* Search Bar */}
        <div className="hidden sm:block relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 rounded-md focus:outline-none border-2"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-red-600 focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-red-700`}
        >
          <NavLink to="/home" className="hover:text-gray-200 text-red-600">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-200 text-red-600">
            About
          </NavLink>
          <NavLink to="/services" className="text-red-600 hover:text-gray-200">
            Services
          </NavLink>
          <NavLink to="/contact" className="text-red-600 hover:text-gray-200">
            Contact
          </NavLink>

          {auth?.user ? (
            <button onClick={handleLogout} className="text-red-600 hover:text-gray-200">
              Logout
            </button>
          ) : (
            <p>
              <NavLink to="/login" className="text-red-600 hover:text-gray-200 pr-2">
                Login
              </NavLink>
              <NavLink to="/register" className="text-red-600 hover:text-gray-200">
                Register
              </NavLink>
            </p>
          )}

          <span className="text-white">
            {auth?.user?.email && `Welcome, ${auth?.user?.name}`}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

