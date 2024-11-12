// // Register.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !password) {
//       return "all field arre required";
//     }
//     const newUser = { name, password };
//     localStorage.setItem('user', JSON.stringify(newUser));
//     navigate('/login');
//   };

//   return (
//     <>
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <form onSubmit={handleSubmit} className="w-1/2">
//         <div className="mb-4">
//           <label>Name</label>
//           <input
//             type="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Register</button>
//       </form>
//     </div>
//     </>

//   );
// };

// export default Register;

import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8082/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      if (!res.email) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Register Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
