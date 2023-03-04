import styled from "styled-components";
import { themes } from "./themes";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  border: 0.5px solid #878787;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 35px 80px;
  height: 100px;
`

export const Nav = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
`

export const NavItem = styled.li`
  margin: 0 20px;
  padding-bottom: 10px;
  transition: all .3s;

  a {
    text-decoration: none;
    color: ${themes.colors.primary};
  }

  &:hover,
  &.active {
    border-bottom: 3px solid ${themes.colors.primary};
  }
`