import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../src/Layout/Layout';
import Home from './components/Home';
import Dashboard from './features/dashboard/Dashboard';  
import AdminPanel from './features/AdminRoutea/AdminPanel';  
import { ProtectedRoute, AdminRoute } from './routes/ProtectedRoute';  
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Adminaccess from './features/AdminRoutea/Adminacces';
import User from './features/dashboard/User'
import Register from './features/auth/Regsiter';
import Login from './features/auth/Login'
import { useAuth } from './context/Usercontext';
import Contact from './components/Contact';
import Services from './components/Sevices';



function App() {
  
  let val = {
    role: 0 
  };

  const [user, setUser] = useState(val);  

  const [auth, setAuth] = useAuth();  
  console.log(auth)
  const handleLogin = (userData) => {
    setUser(userData);  
  };

  const handleLogout = () => {
    setUser(null);  
  };




  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,  
      children: [
        { path: '/home', element: <Home /> },
        { path: 'about', element: <About /> },  
        { path: 'services', element: <Services /> },  
        { path: 'contact', element: <Contact /> },  
        { path: 'login', element: <Login /> },  
        { path: 'register', element: <Register /> },  
        { path: '*', element: <PageNotFound /> },  

        {
          path: 'dashboard',
          element: <ProtectedRoute user={user} />, 
          children: [
            { path: '', element: <Dashboard /> },   
            { path: 'user', element: <User /> },     
          ],
        },

        {
          path: 'admin',
          element: <AdminRoute user={user} />,  
          children: [
            { path: '', element: <AdminPanel /> },     
            { path: 'adminaccess', element: <Adminaccess /> },  
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  
}

export default App;
