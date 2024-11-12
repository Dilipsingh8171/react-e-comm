// // Login.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [data, setdata] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(()=>{
//     const registeredUser = JSON.parse(localStorage.getItem('user'));
// setdata(registeredUser)
//   },[])

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !password) {
//       setError('All fields are required');
//       return;
//     }


//     if (data && data.name === name && data.password === password) {
//       localStorage.setItem('user', JSON.stringify(data));
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <>
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="w-1/2">
//         <div className="mb-4">
//           <label>Name</label>
//           <input
//             type="text"
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
//         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
//       </form>
//     </div>
//     </>

//   );
// };

// export default Login;


// import React, { useState } from 'react'
// // import Layout from "../../components/Layout"
// // import { toast } from 'react-toastify'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../context/Usercontext';


// const Login = () => {
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [auth, setAuth] = useAuth()
//     const navigate = useNavigate()
//     const location = useLocation()

//     //form function
//     const handleSubmit = async (e) => {
//         e.preventDefault()


//         await axios.post('http://localhost:8082/api/v1/auth/login', {
//             email, password,
//         }).then((res) => {
//             if (res) {
//                 alert(res.data.message)
//                 setAuth({
//                     ...auth,
//                     user: res.data.user,
//                     token: res.data.token
//                 })
//                 localStorage.setItem('auth', JSON.stringify(res.data))
//                 navigate(location.state || "/")
//             }
//         }).catch((error) => {
//             console.log(error)
//             toast.error('Something went wrong')
//         })

//     }
//     return (
//         <>

//                 <div className='login'>
//                     <form onSubmit={handleSubmit} className='mt-4'>
//                     <h1>LOGIN FORM</h1>

//                         <div className="mb-4">
//                             <input type="email" className="form-control p-2" placeholder='Enter your Email'
//                                 value={email} onChange={(e) => setemail(e.target.value)} required />
//                         </div>
//                         <div className="mb-3">
//                             <input type="password" className="form-control p-2" placeholder='Enter your password'
//                                 value={password} onChange={(e) => setpassword(e.target.value)} required />
//                         </div>
//                         <div className='mb-3 text-center'>
//                             <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>Forgot Password</button>

//                         </div>

//                         <div className='text-center'>
//                             <button type="submit" className="btn btn-primary">Login</button>

//                         </div>
//                     </form>

//                 </div>

//         </>
//     )
// }

// export default Login

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/Usercontext';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    // Form submission function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8082/api/v1/auth/login', { email, password });
            if (res) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate( "/home");
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Login Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            className="text-indigo-600 underline hover:text-indigo-800"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
