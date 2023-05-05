import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Form } from "react-router-dom";
import FAQ from "../../../components/ExtraSection/FAQ";

import ChefCard from "../../Chef/ChefCard";
import Header from "../../Shared/Header/Header";
import "./Home.css";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [chefDatas, setChefDatas] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-biswasbittu.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => setChefDatas(data));
  }, []);

  // console.log(chefDatas)

  return (
    <div>
      <Header />
      <div className="container mt-4 d-flex">
        <Button variant="danger ">Discount 20%.</Button>
        <Marquee className="bg-secondary opacity-75 text-light fs-1 ">
        <p className="text-info ">Great Indian  Festival Sell- Every Food have 20% Off -- Booking Naw............</p>
        </Marquee>
      </div>
      <h1 className="text-center">THE TEAM</h1>
      <div className="container  chefCard  ">
        {chefDatas.map((chefData) => (
          <ChefCard key={chefData.id} chefData={chefData}></ChefCard>
        ))}
      </div>
      <div>
        <div className="container mt-5">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Home;
