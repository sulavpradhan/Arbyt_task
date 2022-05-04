import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { toast } from "react-toastify";
import { register } from "../features/auth/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    password1: "",
  });

  const { firstname, lastname, email, username, password, password1 } =
    formData;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== password1) {
      toast.error("Password do not match");
      console.log("password do not match");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        username,
        password,
      };
      dispatch(register(userData));
    }

    // if (isLoading) {
    //   <Spinner />;
    // }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };

  return (
    <>
      <section className="heading">
        <h1>
          {/* <FaUser /> */}
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
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={onChange}
              placeholder="Enter your firstname"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-contorl"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={onChange}
              placeholder="Enter your lastname"
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
              type="text"
              className="form-contorl"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter your username"
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

export default RegisterPage;
