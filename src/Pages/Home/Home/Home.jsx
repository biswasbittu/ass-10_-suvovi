import React from "react";
import { Button, Card } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import "./Home.css";

const Home = () => {
  return (
   <div>
    <Header/>
     <div className="home-bg">
      <h1 className="text-center">THE TEAM</h1>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://rb.gy/8zzja" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
   </div>
  );
};

export default Home;
