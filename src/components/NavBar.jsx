import React from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto ">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="secondary" className="opacity-75">
        <Container>
          <Link className="text-decoration-none">
            <Navbar.Brand>Bangalore-Garden-Cafe</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-4 ">
              <Link className="text-decoration-none text-dark" to="/">Home</Link>
              <Link className="text-decoration-none text-dark" to='/blog'>Blogs</Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">User Profile</Nav.Link>

             <Link to="/login"><Button variant="secondary ">LogIn</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
