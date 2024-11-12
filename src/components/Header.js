// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/Usercontext";
// const Header = () => {
//   const [user, setUser] = useState(null);
//   const[load,issetload]=useState(true)
//   const [auth, setAuth] = useAuth();
//   // console.log(auth.user?.name);

//   const navigate = useNavigate();

//   // Initial load par user ko localStorage se fetch karein
//   useEffect(() => {
//     if(load){
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       setUser(storedUser);
//     }
//     issetload(false)
//     setAuth(null)
//   }, []);

//   const handleLogout = () => {
//     setUser(null); // state ko update karo
//     navigate("/login"); // Login page par redirect karo
//     setAuth('')
//   };

//   return (
//     <nav className="bg-black text-red-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-red text-xl font-bold">Abacus</div>

//         <div className="relative ">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-64 p-2 rounded-md focus:outline-none   border-2 "
//           />
//         </div>

//         <div className="hidden md:flex space-x-4 text-red-700 ">
//           <NavLink to="/" className=" hover:text-gray-200 text-red-600">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="hover:text-gray-200 text-red-600">
//             About
//           </NavLink>
//           <NavLink to="/services" className="text-red-600 hover:text-gray-200">
//             Services
//           </NavLink>

//           {user ? (
            
//               <button
//                 onClick={handleLogout}
//                 className="text-red-600 hover:text-gray-200"
//               >
//                 Logout
//               </button>
            
//           ) : (
//             <p>
//               <NavLink to="/login" className="text-red-600 hover:text-gray-200 pr-2">
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className="text-red-600 hover:text-gray-200"
//               >
//                 Register
//               </NavLink>
//             </p>
//           )}

//           <NavLink to="/contact" className="text-red-600 hover:text-gray-200">
//             Contact
//           </NavLink>

//           <NavLink className="text-white">
//           {auth?.user?.email ?    

//             <span className="text-white"> welcome {auth?.user?.email}</span>
//             :
//             <span>
            
//         Please login </span>
            
//            }
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Usercontext";

const Header = () => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true); // Loading state
  const [auth, setAuth] = useAuth();

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
        <div className="text-red text-xl font-bold">Abacus</div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 rounded-md focus:outline-none border-2"
          />
        </div>

        <div className="hidden md:flex space-x-4 text-red-700">
          <NavLink to="/" className="hover:text-gray-200 text-red-600">
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
          {auth?.user?.name ? (
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

          

          <NavLink className="text-white">
            {auth?.user?.email ? (
              <span className="text-white">Welcome, {auth.user.name}</span>
            ) : (
              <span></span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
