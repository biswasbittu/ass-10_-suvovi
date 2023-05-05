import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = ({chefData}) => {
  // console.log(chefData.chefPicture)
  console.log()
  const {chefName,chefPicture,yearsOfExperience,likes,numRecipes,id}=chefData
  return (
    <div>
      <div className="container">
  <div className="row">
    <div className="col">
      <div className="card">
        <img src={chefPicture} className="card-img-top" alt="Card Image"/>
        <div className="card-body">
          <h5 className="card-title">{chefName}</h5>
          <p className="card-text">Years of experience: {yearsOfExperience}</p>
          <p className="card-text">Numbers of recipes: {numRecipes}</p>
          <p className="card-text">Likes: {likes}</p>
          <Link to={`/chefdetails/${id}`} className="btn btn-primary">View Recipes</Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default ChefCard;
