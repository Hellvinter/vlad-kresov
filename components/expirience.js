import React from "react";
import styled from "styled-components";

import { expirience } from "../Data/info";

function WorkExpirience() {
  return (
    <Expririence id="expirience">
      <h2> Expirience </h2>
      <h3>Self-employed software developer</h3>
      <SubHeading>september 2018 - current</SubHeading>
      <ExpirienceWrapper>
        <p>{expirience.firstParagraph}</p>
        <br />
        <p>{expirience.secondParagraph}</p>
        <br />
        <p>{expirience.thirdParagraph}</p>
        <br />
        <p>{expirience.fourthParagraph}</p>
        <br />
        <p>{expirience.fifthParagraph}</p>
        <br />
      </ExpirienceWrapper>
    </Expririence>
  );
}

const Expririence = styled.section`
  padding-top: 1.5rem;
  width: 40%;
  margin: 0 auto;
  text-align: center;
`;

const SubHeading = styled.h4`
  margin: 0 auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid #3cb371;
`;

const ExpirienceWrapper = styled.div`
  text-align: left;
  border-bottom: 1px solid #3cb371;
  margin-bottom: 2.5rem;
`;

export default WorkExpirience;
