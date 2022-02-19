import React from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const { name, email, password, password1 } = formData;

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

    if (password !== password1) {
      toast.error("Password do not match");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
          <p>Please create an account</p>
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-contorl"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
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
            <input
              type="Password"
              className="form-contorl"
              id="password1"
              name="password1"
              value={password1}
              onChange={onChange}
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
