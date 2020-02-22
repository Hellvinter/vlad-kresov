import React from "react";
import Link from "next/link";
import styled from "styled-components";

const routs = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Blog",
    link: "/blog"
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

// Styled components.
const Nav = styled.nav`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: inherit;
`;
// left property of UL was 15 previously
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%%;
  list-style: none;
  color: #fff;
`;

const Li = styled.li`
  padding: 0.3rem;
  margin-right: 1.7rem;
  color: #fff;
`;

const StyledLink = styled(Link)`
  color: #fff;
  &:visited {
    color: inherit;
  }
`;

export default Navigation;
