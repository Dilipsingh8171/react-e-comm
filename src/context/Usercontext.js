// import { useState, useEffect, useContext, createContext } from "react";

// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);

//   //default axios

//   useEffect(() => {
//     const data = localStorage.getItem("user");
//     if (data) {
//       const parseData = JSON.parse(data);
//       console.log(parseData)
//       setAuth({
//         ...auth,
//         user: parseData,
//       });
//     }
//     //eslint-disable-next-line
//   }, []);
//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };

// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const Usercontext = createContext();
// const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });

//   //default axios
//   axios.defaults.headers.common["Authorization"] = auth?.token;

//   useEffect(() => {
//     const data = localStorage.getItem("auth");
//     if (data) {
//       const parseData = JSON.parse(data);
//       setAuth({
//         ...auth,
//         user: parseData.user,
//         token: parseData.token,
//       });
//     }
//     //eslint-disable-next-line
//   }, []);
//   return (
//     <Usercontext.Provider value={[auth, setAuth]}>
//       {children}
//     </Usercontext.Provider>
//   );
// };

// // custom hook
// const useAuth = () => useContext(Usercontext);

// export { useAuth, AuthProvider };
import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const Usercontext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [loading, setLoading] = useState(true); // Loading state

  // Set default authorization header for axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (loading) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    setLoading(false); // Set loading to false after data is retrieved
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while data is loading
  }

  return (
    <Usercontext.Provider value={[auth, setAuth]}>
      {children}
    </Usercontext.Provider>
  );
};

// Custom hook for accessing auth context
const useAuth = () => useContext(Usercontext);

export { useAuth, AuthProvider };
