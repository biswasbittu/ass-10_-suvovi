import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({chefData}) => {
  // console.log(chefData)
  const {chefName,chefPicture,yearsOfExperience,likes}=chefData
  return (
    <div>
      <div className="container">
  <div className="row">
    <div className="col">
      <div className="card">
        <img src="your-image-url" className="card-img-top" alt="Card Image"/>
        <div className="card-body">
          <h5 className="card-title">Chef Name</h5>
          <p className="card-text">Years of experience: 5</p>
          <p className="card-text">Numbers of recipes: 50</p>
          <p className="card-text">Likes: 100</p>
          <Link to="/chefdetails" className="btn btn-primary">View Recipes</Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default ChefCard;
