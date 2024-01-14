import React, { useContext, useState } from "react";
import Header from "./Header";
import ChangePassword from "../ChangePassword/ChangePassword";
import { AuthContext } from "../Global/AuthContext";

const Home = () => {
  const authtxt = useContext(AuthContext);
  const login = authtxt.isLoggedIn;
  return (
    <>
      <Header />

      {login && <ChangePassword />}
    </>
  );
};
export default Home;
