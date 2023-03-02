import React, { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./register.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    emailId: "",
    password: "",
  });

  const API_ENDPOINT = "http://localhost:5000/user/login";

  const doSubmit = async (inputs) => {
    return await axios.post(API_ENDPOINT, inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkAllInputs(inputs)) {
      // showing alert to user
      toast.promise(
        doSubmit(inputs),
        {
          loading: "Loading",
          success: ({ data }) => `${data}`,
          error: ({ response }) => `${response.data}`,
        },
        {
          success: {
            duration: 5000,
          },
          style: {
            minWidth: "250px",
            font: "bold 12px verdana",
          },
        }
      );
    }
  };

  // Check if all inputs are given
  const checkAllInputs = (inputs) => {
    // joi validaton will goes here....
    return true;
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Fragment>
      <Toaster position="top-right" />
      <div className="main">
        <div className="main__left">
          <div className="main__left__logo">MakeMates</div>
          <div className="main__left__text">Login Now</div>
          <div className="form">
            <form className="main__left__form">
              <div>
                <label htmlFor="Email">Email ID</label>
                <br />
                <input
                  type="email"
                  name="emailId"
                  id="emailId"
                  style={{ width: "440px" }}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  style={{ width: "440px" }}
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                name="Login"
                id="registerBtn"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
        <div className="main__right">
          <div className="main__right__motto">
            <div>Login and connect to the Future of Social Media</div>
          </div>
        </div>
      </div>
      <div className="footer">
        ©️ Copyright, All Right Reserved 2019-2023,{" "}
        <a href="/">MakeMates Social Communication Ltd. </a>
      </div>
    </Fragment>
  );
};

export default Login;
