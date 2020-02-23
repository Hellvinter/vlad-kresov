import React from "react";
import styled from "styled-components";

import Navigation from "./navigation";
import { Social, Email, FollowButton } from "../contacts";
import { social, contacts } from "../../Data/info";

function MainSidebar() {
  return (
    <Section>
      <Introduction>
        <Avatar src="/avatar/me.jpg" />
        <Name>Vlad Kresov</Name>
        <SocialWrapper>
          <Social arr={social} />
        </SocialWrapper>
        <Email arr={contacts} />
      </Introduction>
      <Navigation />
      <FollowButton />
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
  justify-content: space-between;
  background-color: #3c5167;
`;

const Introduction = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

// 6.25rem = 100px with font-size = 16px
const Avatar = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  margin-top: 2rem;
  border-radius: 50%;
`;

const Name = styled.h4`
  text-transform: uppercase;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default MainSidebar;
