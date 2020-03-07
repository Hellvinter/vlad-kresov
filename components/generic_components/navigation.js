import React from "react";
import Link from "next/link";
import styled from "styled-components";

const routs = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Future",
    link: "/future"
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

// Styled components.
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background-color: inherit;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 5rem;
  padding: 0;
`;
// margin-right: 1.7rem;
const Li = styled.li`
  padding: 0.3rem;
  margin-right: 1.5rem;
  text-transform: uppercase;
  color: #b6bbcc;
`;

export default Navigation;
