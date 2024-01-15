import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const calculateRemeaningTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remeaningDuration = adjExpirationTime - currentTime;
    return remeaningDuration;
  };

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    setToken(null);
  };
  const loginHandler = (token, expirationTime) => {
    localStorage.setItem("idToken", token);

    setToken(token);
    setTimeout(() => {
      localStorage.removeItem("idToken");
    }, 300000);
    const remeaningTime = calculateRemeaningTime(expirationTime);
    setTimeout(logoutHandler, remeaningTime);
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
