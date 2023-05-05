import React from 'react';
import { Button, Card, Col, Container,Image,Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const chefDetails = () => {
   const singleData= useLoaderData();
   const {chefName,chefPicture,description,numRecipes,yearsOfExperience,rating,likes


   }=singleData
   console.log(singleData)
    return (
        <div>
        <Card className="text-center">
      <Card.Header>Featured</Card.Header>
     <div className='d-lg-flex'>
     <Card.Img variant="top" src={chefPicture} />
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <p>
        Num of Recipes :{numRecipes}
        </p>
        <p>
        years Of Experience :{yearsOfExperience}
        </p>
        <Card.Text>
          
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </div>
      <Card.Footer className="text-muted">
        <div>
            <div className='gap-4'>
               <FaThumbsUp/> {likes}
            </div>
            <div>
                
            </div>
        </div>
        </Card.Footer>
    </Card>
        </div>
    );
};

export default chefDetails;