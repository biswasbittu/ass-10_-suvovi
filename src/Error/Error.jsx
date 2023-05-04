import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
             <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
        <h1 className='text-center'>404</h1>
          <h1>Oops! Something went wrong.</h1>
          <h1 className='text-center'><Link to="./" ><Button variant="primary" >Home</Button></Link></h1>
          
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Error;