import React, { useContext, useState } from "react";
import classes from "./ChangePassword.module.css";
import { AuthContext } from "../Global/AuthContext";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCmsyHecwTyMcmPtATrTp95uPPfPpZpVzc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: password,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setPassword("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={classes.star}>
          <h1>Change Password</h1>
          <div className={classes.lab}>
            <label htmlFor="password">Enter new password</label>
          </div>
          <div className={classes.int}>
            <input
              id="password"
              type="password"
              minLength={7}
              onChange={passwordChangeHandler}
              value={password}
            />
          </div>
          <button type="submit">Change password</button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
