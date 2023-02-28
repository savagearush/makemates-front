import React, { Fragment } from "react";
import "./register.css";

const Register = () => {
  return (
    <Fragment>
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
                  <input type="text" name="firstName" id="firstName" />
                </span>
                <span>
                  <label htmlFor="lastName">Last Name </label>
                  <br />
                  <input type="text" name="lastName" id="lastName" />
                </span>
              </div>
              <div>
                <label htmlFor="Email">Email ID</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  style={{ width: "440px" }}
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
                />
              </div>
              <div>
                <label htmlFor="Confirm Password">Confirm Password</label>
                <br />
                <input
                  type="password"
                  name="cnfPassword"
                  id="cnfPassword"
                  style={{ width: "440px" }}
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
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </span>
                <span>
                  <label htmlFor="mobNumber">Contact No </label>
                  <br />
                  <input type="text" name="mobNumber" id="mobNumber" />
                </span>
              </div>
              <input type="submit" name="Register" id="registerBtn" />
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
