import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { CartContext } from "../Global/CartContext";

const NavbarComponent = (props) => {
  const { qty } = useContext(CartContext);

  return (
    <>
      <div>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              BUY BUDDY STORE
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>

            <Link to="/cart">
              <Button variant="info">Cart-{qty}</Button>
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
