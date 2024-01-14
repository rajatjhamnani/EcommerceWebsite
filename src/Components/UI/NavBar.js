import React, { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { CartContext } from "../Global/CartContext";
import { AuthContext } from "../Global/AuthContext";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../Global/ModalContext";

const NavbarComponent = (props) => {
  const { qty } = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const modalCtx = useContext(ModalContext);

  const logoutUser = () => {
    authCtx.logout();
  };

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              BUY BUDDY STORE
            </Navbar.Brand>
            <Nav className="me-auto">
              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/store">
                  Store
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/contactUs">
                  Contact Us
                </Nav.Link>
              )}
              {!isLoggedIn && (
                <Nav.Link as={NavLink} to="/auth">
                  Login
                </Nav.Link>
              )}
            </Nav>
            {isLoggedIn && (
              <div>
                <Link to="/cart">
                  <Button variant="info" onClick={() => modalCtx.modal()}>
                    Cart-{qty}
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button
                    variant="info"
                    style={{ marginLeft: "20px" }}
                    onClick={logoutUser}
                  >
                    LOGOUT
                  </Button>
                </Link>
              </div>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
