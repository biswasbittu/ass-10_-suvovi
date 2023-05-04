import React from 'react';
import { Button, Card, Col, Container,Image,Row } from 'react-bootstrap';

const chefDetails = () => {
    return (
        <div>
             <Container>
      <Row>
        <Col>
          <h2> Recipes</h2>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Recipe Cards */}
        {recipes.map((recipe) => (
          <Col key={recipe.id}>
            <Card>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
        </div>
    );
};

export default chefDetails;