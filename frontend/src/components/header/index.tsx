import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import * as Styled from "../../styles/header.styled";

const Header = () => {

  return (
    <Styled.HeaderContainer>
      <Logo />
      <Styled.Nav>
          <Styled.NavItem>
            <Link className="about" to="/about">
              About
            </Link>{" "}
          </Styled.NavItem>
          <Styled.NavItem>
            <Link className="profile" to="/profile">
              Profile
            </Link>{" "}
          </Styled.NavItem>
          <Styled.NavItem>
            <Link className="projects" to="/projects">
              Projects
            </Link>{" "}
          </Styled.NavItem>
          <Styled.NavItem>
            <Link className="users" to="/users">
              Active users
            </Link>{" "}
          </Styled.NavItem>
      </Styled.Nav>
      <Link className="login" to="/login/logout">Login/Logout</Link>
    </Styled.HeaderContainer>
  );
};

export default Header;
