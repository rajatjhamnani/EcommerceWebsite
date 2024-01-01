import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
const NavbarComponent = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">BUY BUDDY STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>

          <Nav.Link href="cart">
            <Button variant="info">Cart-{"0"}</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
