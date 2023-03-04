import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import * as Styled from "../../styles/header.styled";

const Header = () => {
  // const userData = useSelector(showUser);
  // const [name, setName] = useState<string>();
  // const [isLogined, setIsLogined] = useState(
  //   !!localStorage.getItem("USERNAME")
  // );

  // useEffect(() => {
  //   if (typeof localStorage.getItem("USERNAME") === "string") {
  //     setName(localStorage.getItem("USERNAME") as string);
  //   }
  //   if (userData.first_name) {
  //     setName(userData.first_name);
  //   }
  // }, [userData.first_name]);

  // const handleLogoutClick = () => {
  //   localStorage.removeItem("ACCESS_TOKEN");
  //   localStorage.removeItem("REFRESH_TOKEN");
  //   localStorage.removeItem("USERNAME");
  //   setIsLogined(false);
  // };

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
