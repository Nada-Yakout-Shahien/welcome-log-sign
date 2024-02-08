import React, { Fragment } from "react";
import Header from "../components/Header";
import "./Signup.css";
import photo from "../images/photo.jpeg";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <Fragment>
      <Header />
      <div className="signup">
        <div className="content">
          <form className="form">
            <h2>Get Started Now</h2>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter your name..." />
            </div>
            <div>
              <label htmlFor="">Email address</label>
              <input type="email" placeholder="Enter your email..." />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter your password..." />
            </div>
            <div>
              <label className="check">
                <input type="checkbox" id="check" />
                <span>
                  I agree to the <NavLink>terms&amp;policy</NavLink>
                </span>
              </label>
            </div>
            <div className="btn">
              <NavLink to="/login">SignUp</NavLink>
            </div>
            <div>
              <p className="or">or</p>
            </div>
            <div className="links">
              <Button variant="outlined">
                <NavLink to="/Google account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#1976D2"
                    />
                  </svg>
                  Sign in with Google
                </NavLink>
              </Button>
              <Button variant="outlined" className="sign-up">
                <NavLink to="/Apple account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_134_73)">
                      <path
                        d="M17.4863 -7.05128e-06C16.125 0.0918678 14.6682 0.901868 13.7663 1.99499C12.9769 2.95687 12.315 4.36874 12.5663 5.83499C12.3413 5.76562 12.1369 5.75812 11.8913 5.66999C11.2219 5.43187 10.4569 5.17499 9.50628 5.17499C7.61816 5.17499 5.68503 6.29812 4.46628 8.17499C2.69253 10.9012 3.04878 15.6994 5.74128 19.8C6.21566 20.52 6.76878 21.3056 7.45128 21.93C8.13378 22.5544 8.95878 23.0306 9.92628 23.04C10.7532 23.0494 11.3288 22.7737 11.8463 22.545C12.3638 22.3162 12.8457 22.1137 13.7513 22.11C13.7569 22.11 13.7607 22.11 13.7663 22.11C14.6682 22.1025 15.135 22.3012 15.6413 22.53C16.1475 22.7587 16.7175 23.0475 17.5463 23.04C18.5325 23.0325 19.3707 22.4925 20.0663 21.825C20.7619 21.1575 21.3338 20.3381 21.8063 19.62C22.4832 18.5887 22.755 18.0262 23.2763 16.875C23.3307 16.755 23.3325 16.6162 23.28 16.4944C23.2294 16.3725 23.13 16.2769 23.0063 16.23C21.3 15.585 20.3269 14.0756 20.1863 12.48C20.0457 10.8844 20.7207 9.24187 22.4213 8.30999C22.5469 8.24249 22.635 8.12437 22.665 7.98562C22.6932 7.84687 22.6594 7.70062 22.5713 7.58999C21.3507 6.07312 19.6332 5.17499 17.9513 5.17499C16.8788 5.17499 16.0913 5.42812 15.4463 5.66999C15.3394 5.71124 15.2607 5.70749 15.1613 5.74499C15.8157 5.39999 16.3932 4.92187 16.8263 4.36499C17.6138 3.35437 18.2213 1.91624 17.9963 0.404993C17.9588 0.157493 17.7357 -0.0187571 17.4863 -7.05128e-06ZM16.9763 1.13999C16.9444 2.10937 16.6125 3.05812 16.0613 3.76499C15.4838 4.50749 14.5125 5.02124 13.5713 5.17499C13.5882 4.24312 13.9557 3.27749 14.5163 2.59499C15.105 1.88249 16.08 1.36874 16.9763 1.13999ZM9.50628 6.13499C9.92628 6.13499 10.9013 6.33562 11.5613 6.56999C12.2213 6.80437 12.9169 7.07999 13.7363 7.07999C14.5369 7.07999 15.1707 6.80249 15.7913 6.56999C16.4119 6.33749 17.0307 6.13499 17.9513 6.13499C19.1532 6.13499 20.4525 6.75937 21.4763 7.84499C19.8375 9.00187 19.0707 10.8056 19.2263 12.555C19.3819 14.3231 20.4469 16.0012 22.1963 16.875C22.1938 16.8805 22.1913 16.8859 22.1888 16.8913C21.8142 17.7072 21.5645 18.2512 21.0113 19.095C20.5519 19.7944 20.0063 20.5594 19.4063 21.135C18.8063 21.7106 18.1707 22.0744 17.5313 22.08C16.9144 22.0856 16.5638 21.9019 16.0313 21.66C15.4988 21.4181 14.8107 21.1406 13.7513 21.15C12.6938 21.1556 11.9963 21.4219 11.4563 21.66C10.9163 21.8981 10.5619 22.0856 9.94128 22.08C9.28503 22.0744 8.67566 21.7556 8.09628 21.225C7.51691 20.6944 6.99378 19.9706 6.53628 19.275C4.01628 15.435 3.81378 10.9237 5.26128 8.69999C6.32253 7.06687 9.08628 6.13499 9.50628 6.13499Z"
                        fill="black"
                      />
                      <path
                        d="M9.50628 6.13499C9.92628 6.13499 10.9013 6.33562 11.5613 6.56999C12.2213 6.80437 12.9169 7.07999 13.7363 7.07999C14.5369 7.07999 15.1707 6.80249 15.7913 6.56999C16.4119 6.33749 17.0307 6.13499 17.9513 6.13499C19.1532 6.13499 20.4525 6.75937 21.4763 7.84499C19.8375 9.00187 19.0707 10.8056 19.2263 12.555C19.3819 14.3231 20.4469 16.0012 22.1963 16.875L22.1888 16.8913C21.8142 17.7072 21.5645 18.2512 21.0113 19.095C20.5519 19.7944 20.0063 20.5594 19.4063 21.135C18.8063 21.7106 18.1707 22.0744 17.5313 22.08C16.9144 22.0856 16.5638 21.9019 16.0313 21.66C15.4988 21.4181 14.8107 21.1406 13.7513 21.15C12.6938 21.1556 11.9963 21.4219 11.4563 21.66C10.9163 21.8981 10.5619 22.0856 9.94128 22.08C9.28503 22.0744 8.67566 21.7556 8.09628 21.225C7.51691 20.6944 6.99378 19.9706 6.53628 19.275C4.01628 15.435 3.81378 10.9237 5.26128 8.69999C6.32253 7.06687 9.08628 6.13499 9.50628 6.13499Z"
                        fill="black"
                      />
                      <path
                        d="M16.9763 1.13999C16.9444 2.10937 16.6125 3.05812 16.0613 3.76499C15.4838 4.50749 14.5125 5.02124 13.5713 5.17499C13.5882 4.24312 13.9557 3.27749 14.5163 2.59499C15.105 1.88249 16.08 1.36874 16.9763 1.13999Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_134_73">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign in with Apple
                </NavLink>
              </Button>
            </div>
            <div className="last">
              <p>
                Have an account? <NavLink to="/login">Sign In</NavLink>
              </p>
            </div>
          </form>
        </div>
        <div className="photo">
          <img src={photo} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
