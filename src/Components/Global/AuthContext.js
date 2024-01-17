import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

let logoutTimer;
const calculateRemeaningTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remeaningDuration = adjExpirationTime - currentTime;
  return remeaningDuration;
};

// const retrievedStoredToken = () => {
//   const storedToken = localStorage.getItem("idToken");
//   const storedExpirationDate = localStorage.getItem("expirationTime");

//   const remeaningTime = calculateRemeaningTime(storedExpirationDate);

//   if (remeaningTime <= 60000) {
//     localStorage.removeItem("idToken");
//     localStorage.removeItem("expirationTime");

//     return null;
//   }
//   return {
//     token: storedToken,
//     duration: remeaningTime,
//   };
// };

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");

    setToken(null);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };
  const loginHandler = (token, expirationTime, email) => {
    localStorage.setItem("idToken", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("email", email);

    setToken(token);

    const remeaningTime = calculateRemeaningTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remeaningTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}{" "}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
