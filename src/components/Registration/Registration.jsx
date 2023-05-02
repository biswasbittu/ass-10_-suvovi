import React from "react";
import { Container } from "react-bootstrap";

const Registration = () => {
  return (
    <Container className="mx-5 w-25% ">
      <h1>Please register</h1>

      <form>
        <div classname="mb-3">
          <label  className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"      
            required
          />
          
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
           required
          />
        </div>
        
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        
        <div classname="mb-3">
          <label  className="form-label">
            Photo url
          </label>
          <input
            type="text"
            name="name"
            className="form-control"      
            required
          />
          
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </Container>
    
  );
};

export default Registration;
