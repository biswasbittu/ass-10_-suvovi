import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Error = () => {
    return (
        <div>
             <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <h1>Oops! Something went wrong.</h1>
          <p>{error.message}</p>
          <Button variant="primary" onClick={() => window.location.reload()}>Reload</Button>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Error;