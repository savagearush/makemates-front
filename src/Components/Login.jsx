import React, { Fragment } from "react";
import "./register.css";

const Login = () => {
  return (
    <Fragment>
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
              <input type="submit" name="Login" id="registerBtn" />
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
