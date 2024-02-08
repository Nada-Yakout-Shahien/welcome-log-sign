import React from "react";
import Header from "../components/Header";
import "./Update.css";
import photo from "../images/photo.jpeg";
import { NavLink } from "react-router-dom";


const Update = () => {
  return (
    <div>
      <Header />
      <div className="update">
        <div className="content">
          <form className="form">
            <h2>Update your password</h2>
            <div>
              <label htmlFor="">New Password</label>
              <input type="password" placeholder="Enter your new Password..." />
            </div>
            <div>
              <div className="pass">
                <label htmlFor="">Confirm Password</label>
              </div>
              <input
                type="password"
                placeholder="Enter your confirmed Password..."
              />
            </div>
            <div className="btn">
              <NavLink to="/login">Update</NavLink>
            </div>
            <div className="login-back">
              <NavLink to="/login">login back</NavLink>
            </div>
          </form>
        </div>
        <div className="photo">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Update;
