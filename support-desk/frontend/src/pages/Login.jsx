import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // onChange handler
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          <p>Please log in to get support</p>
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-contorl"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-contorl"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Log In
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
