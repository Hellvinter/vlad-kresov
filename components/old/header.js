import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <PageHeader className="grid-header">
      <Overlay></Overlay>
      <HeadingWrapper>
        <Heading>Vlad Kresov</Heading>
        <p>Interactive portfolio</p>
      </HeadingWrapper>
      <ToContentContainer>
        <Link to={"profile"} spy={true} smooth={true} offset={0} duration={300}>
          <ToContentArrow />
        </Link>
      </ToContentContainer>
    </PageHeader>
  );
}

const PageHeader = styled.header`
  width: 100%;
  height: 100vh; //57.525rem;
  background: url("bg/Ciri_with_Geralt1920x1080.png") top/cover no-repeat fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(48, 170, 107, 0.75);
`;

const HeadingWrapper = styled.div`
  position: relative;
  top: 30%;
  z-index: 4;
  width: 20%;
  text-align: center;
  margin: 0 auto;
  color: #fff;
`;

const Heading = styled.h1`
  border-bottom: 1px solid #fff;
`;

const ToContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 5%;
  z-index: 4;
  width: 7.169rem;
  height: 8%;
  font-size: 2.5rem;
  background-color: rgb(34, 34, 34);
`;

const clickMe = keyframes`
  % {
        top: .5rem;
    }
    50% {
        top: 1.5rem;
    }
    100% {
        top: .5rem;
    }
`;

const ToContentArrow = styled(FaChevronDown)`
  display: block;
  color: white;
  margin: 0 auto;
  position: relative;
  top: 0.5rem;
  animation: ${clickMe} 1.6s ease-in-out infinite;
`;

export default Header;
