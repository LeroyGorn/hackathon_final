import React from "react";
import { Link } from "react-router-dom";
import { LogoWrapper } from "../styles/header.styled";

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <img src="/logo.png" alt="main logo" height="100%" />
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
