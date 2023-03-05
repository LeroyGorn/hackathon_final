import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import { useSelector } from "react-redux";
import { NavBarLinks } from "../../constants";
import * as Styled from "../../styles/header.styled";
import { showUser } from "../../redux/slices/user-slice";
import { useWindowDimension } from "../../hooks/useWindowDimesion";
import BurgerModal from "../../common/BurgerModal";

const Header = () => {
  const { width } = useWindowDimension();
  const userData = useSelector(showUser);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [isLogined, setIsLogined] = useState(
    !!localStorage.getItem("USER_NAME")
  );

  useEffect(() => {
    if (typeof localStorage.getItem("USER_NAME") === "string") {
      setName(localStorage.getItem("USER_NAME") as string);
    }
    if (userData.first_name) {
      setName(userData.first_name);
    }
  }, [userData.first_name]);

  useEffect(() => {
    if (width && width < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const handleLogoutClick = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("USER_NAME");
    setIsLogined(false);
  };

  const handleBurgerClick = () => {
    setIsOpen((old) => !old);
  };

  const handleBurgerLinkClick = () => {
    setIsOpen(false);
  };

  const burgerClassName = isOpen ? "open" : "closed";

  return (
    <Styled.HeaderContainer>
      {isMobile ? (
        <Styled.MobileMenu>
          <Logo />
          <Styled.BurgerMenu
            className={burgerClassName}
            onClick={handleBurgerClick}
          >
            <div />
            <div />
            <div />
          </Styled.BurgerMenu>
          <BurgerModal className={burgerClassName}>
            {NavBarLinks.map((linkItem) => (
              <Styled.NavItem
                key={linkItem.link}
                onClick={handleBurgerLinkClick}
              >
                <Link to={linkItem.link}>{linkItem.name}</Link>
              </Styled.NavItem>
            ))}
          </BurgerModal>
        </Styled.MobileMenu>
      ) : (
        <Styled.WebMenu>
          <Logo />
          <Styled.Nav>
            {NavBarLinks.map((linkItem) => (
              <Styled.NavItem key={linkItem.link}>
                <Link to={linkItem.link}>{linkItem.name}</Link>
              </Styled.NavItem>
            ))}
          </Styled.Nav>
          {isLogined ? (
            <Styled.LogoutWrapper>
              <Styled.UserName>
                <pre>
                  Hey {name}! <span>|</span>{" "}
                </pre>
              </Styled.UserName>
              <Styled.LogoutLink onClick={handleLogoutClick}>
                Log out
              </Styled.LogoutLink>
            </Styled.LogoutWrapper>
          ) : (
            <Link to={"/signin"}>Sign in</Link>
          )}
        </Styled.WebMenu>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
