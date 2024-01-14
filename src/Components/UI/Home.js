import React, { useContext, useState } from "react";
import Header from "./Header";
import ChangePassword from "../ChangePassword/ChangePassword";
import { AuthContext } from "../Global/AuthContext";
import image from "../images/homePage.jpg";

const Home = () => {
  const authtxt = useContext(AuthContext);
  const login = authtxt.isLoggedIn;
  return (
    <>
      <Header />
      <img src={image} alt="image" />
      {login && <ChangePassword />}
    </>
  );
};
export default Home;
