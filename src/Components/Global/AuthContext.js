import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    alert("are you sure you want yo logout");
    setToken(null);
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
