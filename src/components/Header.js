import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
      <div className="home">
      <Button  variant="outlined"><NavLink to="/">Home</NavLink></Button>
      </div>
    </>
  );
};

export default Header;
