import React, { useState } from "react";
import classes from "./ContactUs.module.css";
import Header from "../UI/Header";
const ContactUs = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const details = {
      name: name,
      email: email,
      number: number,
    };

    try {
      const response = await fetch(
        "https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
      const data = await response.json();
      console.log("Data submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <>
      <Header />
      <div className={classes.update}>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.single}>
            <label htmlFor="name"> Name :</label>
            <input
              onChange={nameChangeHandler}
              type="text"
              name="name"
              value={name}
              required
            />
          </div>
          <div className={classes.single}>
            <label htmlFor="email"> E-mail :</label>
            <input
              onChange={emailChangeHandler}
              type="email"
              name="email"
              value={email}
              required
            />
          </div>
          <div className={classes.single}>
            <label htmlFor="phone">Phone :</label>
            <input
              on
              onChange={phoneNumberChangeHandler}
              type="MobileNumber"
              name="phone"
              value={number}
              required
            />
          </div>
          <button className={classes.btn} type="submit">
            Submit Details
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
