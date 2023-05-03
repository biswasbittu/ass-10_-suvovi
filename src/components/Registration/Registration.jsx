import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const { registerUser } = useContext(AuthContext);
  console.log(registerUser);
  // const {registerUser}=useContext(AuthContext);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    registerUser(name, photo, email, password)
      .then((result) => {
        const creatUser = result.user;
        console.log(creatUser);
        setSuccess("Registration successfull");
        setError("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div>
      <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
        <div className="form_container p-5  rounded bg-white">
          <form onSubmit={handleRegister}>
            <h3 className="text-center">Sign Up</h3>
            <div className="mb-2">
              <label htmlFor="name">Full Name</label>
              <input
                // onChange={(e)=>setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Enter your Full-Name"
                className="form-control"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="purl">Photo url</label>
              <input
                // onChange={(e)=>setPhoto(e.target.value)}
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="form-control"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                // onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="form-control"
                required
              />
            </div>

            {/* Password  */}
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                // onChange={(e)=>setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="form-control"
                required
              />
            </div>
            <p className="text-warning">
              <small>{error}</small>
            </p>
            <p className="text-success">
              <small>{success}</small>
            </p>

            {/* Button section */}

            <div className="d-grid mb-2">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </form>
          <div className="d-grid mb-2">
            <button className="btn btn-primary">
              <FaGoogle /> Google
            </button>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">
              <FaGithub /> Github
            </button>
          </div>
          <p className="text-end mt-2">
            <small>
              Already have an Account please!{" "}
              <span>
                <Link to="/login">Sign In</Link>
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
