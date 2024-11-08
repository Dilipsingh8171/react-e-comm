import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Initial load par user ko localStorage se fetch karein
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    setUser(null); // state ko update karo
    navigate('/login'); // Login page par redirect karo
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyLogo</div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-200">Home</NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200">About</NavLink>
          <NavLink to="/services" className="text-white hover:text-gray-200">Services</NavLink>

          {user ? (
            <button onClick={handleLogout} className="text-white hover:text-gray-200">Logout</button>
          ) : (
            <>
              <NavLink to="/login" className="text-white hover:text-gray-200">Login</NavLink>
              <NavLink to="/register" className="text-white hover:text-gray-200">Register</NavLink>
            </>
          )}

          <NavLink to="/contact" className="text-white hover:text-gray-200">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
