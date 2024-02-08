import React from "react";
import './Welcome.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const Welcome = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
            <h2>Welcome to our website</h2>
            <p>
            Please log in and if you don't have an account create one.
            </p>
            <Button  variant="outlined"><NavLink to="/login">LogIn</NavLink></Button>
            <Button  variant="outlined"><NavLink to="/Signup">SignUp</NavLink></Button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
