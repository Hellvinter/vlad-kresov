import React from "react";
import Link from "next/link";
import styled from "styled-components";

const routs = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Portfolio",
    link: "/portfolio"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];

function Navigation() {
  const Links = () => {
    return routs.map((item, index) => (
      <Li key={index}>
        <Link href={item.link}>
          <a>{item.name}</a>
        </Link>
      </Li>
    ));
  };

  return (
    <Nav>
      <Ul>
        <Links />
      </Ul>
    </Nav>
  );
}
//
// Styled components.
//
const Nav = styled.nav`
  width: 100%;
  margin-bottom: 3rem;
  background-color: inherit;
`;
// left property of UL was 15 previously
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  color: #fff;
`;
// margin-right: 1.7rem;
// /
const Li = styled.li`
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: #fff;
`;

export default Navigation;
