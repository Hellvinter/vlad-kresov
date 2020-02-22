import React from "react";
import styled from "styled-components";

import Navigation from "./navigation";

function MainSidebar() {
  return (
    <Section>
      <Avatar height="100" width="100" src="/avatar/me.jpg" />
      <Navigation />
    </Section>
  );
}

// Styled Components.

const Section = styled.section`
  position: fixed;
  top:0;
  z-index: 3;
  width: 15%
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c5167;
`;

// 6.25rem = 100px with font-size = 16px
const Avatar = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  margin-top: 2rem;
  border-radius: 50%;
`;

export default MainSidebar;
