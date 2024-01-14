import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AuthForm.module.css";
import { Link } from "react-router-dom";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Global/AuthContext";
const AuthForm = (props) => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [passcode, setPasscode] = useState();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIslogin] = useState(false);

  const buttonToggleHandler = (e) => {
    e.preventDefault();
    setIslogin((prev) => {
      return !prev;
    });
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passcodeHandler = (event) => {
    setPasscode(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: passcode,
    };

    setLoading(true);
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmsyHecwTyMcmPtATrTp95uPPfPpZpVzc",
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
          }),
          headers: {
            "content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          setLoading(false);
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((data) => {
              let errorMessage = "Authentication Failed!";
              if (data && data.error.message && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);

          authCtx.login(data.idToken);

          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmsyHecwTyMcmPtATrTp95uPPfPpZpVzc",
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
          }),
          headers: {
            "content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          setLoading(false);
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((data) => {
              let errorMessage = "Authentication Failed!";
              if (data && data.error.message && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken);
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    console.log(data);
  };

  return (
    <>
      <section className={classes.auth}>
        <Form onSubmit={submitHandler}>
          <h2>{isLogin ? "Login" : "Sign up"}</h2>
          <Form.Group className={classes.lab} controlId="formBasicEmail">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={emailHandler}
            />
          </Form.Group>
          <Form.Group className={classes.lab} controlId="formBasicEmail">
            <Form.Label>psssword</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password"
              onChange={passcodeHandler}
            />
          </Form.Group>
          {loading && <p>sending request ...</p>}
          {!loading && (
            <Button variant="secondary" type="submit" className={classes.btn}>
              {isLogin ? "Login" : "Signup"}
            </Button>
          )}
        </Form>
        <div className={classes.bat}>
          <Button
            variant="secondary"
            type="submit"
            className={classes.btnn}
            onClick={buttonToggleHandler}
          >
            {isLogin ? "Create New Account" : "Login with Existing account"}
          </Button>
        </div>
      </section>
    </>
  );
};
export default AuthForm;
