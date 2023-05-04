import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </Col>
          {/* <Col md={4}>
            <h3>Products</h3>
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
            <a href="#">Product 4</a>
          </Col> */}
          <Col md={6}>
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </Col>
        </Row>
      </Container>
      <div className='text-center mt-4 text-dark'><small> &copy; All rights reserved. </small></div>
    </footer>
        </div>
    );
};

export default Footer;