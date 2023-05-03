import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({chefData}) => {
  console.log(chefData)
  const {chefName,chefPicture,yearsOfExperience,likes}=chefData
  return (
    <div>
      <div className="home-bg">
       
        <div className="container col-1 ">
          <Card style={{ width: "18rem" }}>
           <div className="p-2">
           <Card.Img  variant="top" src={chefPicture}/>
           </div>
            <Card.Body>
              <Card.Title>Name: <span className='text-warning'>{chefName}</span> </Card.Title>
              <div>
                <p>Year Of Experience:{yearsOfExperience}</p>
              </div>
              <p> <FaThumbsUp/> {likes}</p>

              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <Link to="/chefdetails"> <Button variant="primary">Go somewhere</Button></Link>
             
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
