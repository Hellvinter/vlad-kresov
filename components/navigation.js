import React from "react";
import styled from "styled-components";
import { links } from "../Data/info";
import { Link } from "react-scroll";

const Nav = () => {
  return links.map((item, index) => (
    <NavLi className="navigation__item" key={index}>
      <NavLink
        activeClass="current"
        to={item.link}
        spy={true}
        smooth={true}
        offset={-5}
        duration={300}
      >
        {item.name}
      </NavLink>
    </NavLi>
  ));
};

function Navigation() {
  return (
    <Nav>
      <NavUl>
        <Nav />
      </NavUl>
    </Nav>
  );
}

// Some how I should make that thing sticky
const Nav = styled.nav`
  position: sticky;
  top: 10%;
  right: 5%;
  width: 7.169rem;
  height: fit-content;
`;

const NavUl = styled.ul`
  background-color: rgb(34, 34, 34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLi = styled.li`
  padding: 1.3rem 1.2rem;
`;

const NavLink = styled(Link)`
  padding: 1.3rem 1.2rem;
  color: white;

  &:hover {
    color: silver;
  }
`;
// Should figure out how to make this work it's listen on which section user is
// Then it highlight proper section
const Current = styled.p`
  background-color: #3cb371;
`;

export default Navigation;
