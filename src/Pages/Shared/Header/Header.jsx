import React from "react";
import { Button, Navbar } from "react-bootstrap";
import NavBar from "../../../components/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-css bg-img">
      
      <div className=" position-absolute top-50 start-50 translate-middle ">
        <h1 className="  text-center text-info">
          Bangalore-Garden-Cafe
        </h1>
        <p className=" text-light text-center">Food Made With Love</p>
        <div className=" text-light text-center"><Button variant="danger" className="">View More</Button></div>
      </div>
    </div>
  );
};

export default Header;
