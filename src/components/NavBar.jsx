import React from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto ">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="secondary">
        <Container>
          <Link className="text-decoration-none">
            <Navbar.Brand>Bangalore-Garden-Cafe</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">User Profile</Nav.Link>

              <Nav.Link
                className="text-light fw-semibold"
                eventKey={2}
                href="#memes"
              >
                <Button variant="secondary ">LogIn</Button>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
