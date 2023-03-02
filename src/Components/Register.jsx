import React, { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    emailId: "",
    password: "",
    cnf_password: "",
    gender: "",
    contact_no: "",
  });

  const API_ENDPOINT = "http://localhost:5000/user/register";
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
          <div className="main__left__text">Sign Up Now</div>
          <div className="form">
            <form className="main__left__form">
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    width: "200px",
                    marginRight: "40px",
                  }}
                >
                  <label htmlFor="firstName">First Name </label>
                  <input
                    type="text"
                    name="first_name"
                    id="firstName"
                    onChange={handleChange}
                  />
                </span>
                <span>
                  <label htmlFor="lastName">Last Name </label>
                  <br />
                  <input
                    type="text"
                    name="last_name"
                    id="lastName"
                    onChange={handleChange}
                  />
                </span>
              </div>
              <div>
                <label htmlFor="Email">Email ID</label>
                <br />
                <input
                  type="email"
                  name="emailId"
                  id="email"
                  style={{ width: "440px" }}
                  onChange={handleChange}
                  required={true}
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
              <div>
                <label htmlFor="Confirm Password">Confirm Password</label>
                <br />
                <input
                  type="password"
                  name="cnf_password"
                  id="cnfPassword"
                  style={{ width: "440px" }}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    width: "200px",
                    marginRight: "40px",
                  }}
                >
                  <label htmlFor="gender">Gender </label>
                  <br />
                  <select
                    style={{
                      border: "none",
                      padding: "15px 10px",
                      borderRadius: "20px",
                      outline: "none",
                      width: "150px",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    }}
                    name="gender"
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </span>
                <span>
                  <label htmlFor="contact_no">Contact No </label>
                  <br />
                  <input
                    type="text"
                    name="contact_no"
                    id="contact_no"
                    onChange={handleChange}
                  />
                </span>
              </div>
              <input
                type="submit"
                name="Register"
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

export default Register;
