import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-router-dom";

import ChefCard from "../../Chef/ChefCard";
import Header from "../../Shared/Header/Header";
import "./Home.css";

const Home = () => {
  const [chefDatas,setChefDatas]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/allData")
    .then(res=>res.json())
    .then(data=>setChefDatas(data))
  },[])

  // console.log(chefDatas)

  return (
   <div>
    <Header/>
    <h1 className="text-center">THE TEAM</h1>
     <div className="container  chefCard  " >
     {
      chefDatas.map(chefData=><ChefCard key={chefData.id}
        chefData={chefData}></ChefCard>)
     }
     </div>
     <div>
     <div className="container mt-5">
      <h1>Contact Us</h1>
      
    </div>
     </div>
   </div>
  );
};

export default Home;
