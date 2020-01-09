import React from "react";
import styled from "styled-components";

import { FaEmpire } from "react-icons/fa/index";
import { skills, languages } from "../Data/info";

const Stars = totalStars => {
  return (
    <InsigniaContainer>
      {[...Array(totalStars)].map(index => (
        <EmpireInsignia key={index} />
      ))}
    </InsigniaContainer>
  );
};

const AbilitiesList = props => {
  return props.arr.map(item => (
    <SkillsLi>
      <SkillsItem>
        {item.ability} {Stars(item.number)}
      </SkillsItem>
    </SkillsLi>
  ));
};

function Abilities() {
  return (
    <MyAbilities id="abilities" className="grid-abilities">
      <Heading>My Abilities</Heading>
      <SubHeading>Skills</SubHeading>
      <SkillsUl>
        <AbilitiesList arr={skills} />
      </SkillsUl>
      <SubHeading>Langueges</SubHeading>
      <SkillsUl>
        <AbilitiesList arr={languages} />
      </SkillsUl>
    </MyAbilities>
  );
}

// Styled Components.

const MyAbilities = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c5267;
`;

const Heading = styled.h2`
  font-size: 1.6em;
`;

const SubHeading = styled.h3`
  color: #c0c0c0;
`;

const SkillsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  width: 30%;
  border-bottom: 1px solid #3cb371;
  border-top: 1px solid #3cb371;
`;

const SkillsLi = styled.li`
  width: 100%;
  margin: 0.3rem 0 0.3rem 10%;
  color: #c0c0c0;
  font-size: 1.1em;
`;

const SkillsItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InsigniaContainer = styled.span`
  width: 18%;
  margin-right: 2.1rem;
  padding: 0.15rem 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  border: 1px solid #3cb371;
  border-radius: 5%;
`;

const EmpireInsignia = styled(FaEmpire)`
  margin-right: 0.2rem;
  color: #3cb371;
`;

export default Abilities;
