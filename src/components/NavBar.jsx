import React from 'react';
import { Button, Container, Nav, Navbar,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="secondary">
      <Container>
        <Link className="text-decoration-none"><Navbar.Brand >Bangalore-Garden-Cafe</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">User Profile</Nav.Link>
           
            <Button variant="btn btn-danger py-0" ><Nav.Link className='text-light fw-semibold' eventKey={2} href="#memes">
              LogIn
            </Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </>
    );
};

export default NavBar;