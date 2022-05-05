import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { login, reset } from "../features/auth/authSlice";
// import { authState } from "../features/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      console.log("there has been an error", message);
    }

    if (isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch]);

  const { email, password } = formData;

  // onChange handler
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };

  // onSubmit handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    dispatch(login(loginData));
  };

  return (
    <>
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

export default LoginPage;
