import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then()
    .catch((error)=>console.log(error))
  };
  return (
    <div className="mx-auto ">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="secondary"
        className="opacity-75"
      >
        <Container>
          <Link className="text-decoration-none">
            <Navbar.Brand>Bangalore-Garden-Cafe</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-4 ">
              <Link className="text-decoration-none text-dark" to="/">
                Home
              </Link>
              <Link className="text-decoration-none text-dark" to="/blog">
                Blogs
              </Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}>
                  User Profile
                </FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogOut} variant="secondary ">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary ">LogIn</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
