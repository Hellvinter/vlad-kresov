import React from "react";
import styled from "styled-components";

import { Social, Email } from "./contacts";
import { interests, about, social, contacts, profile } from "../Data/info";

// Displaying my personal data.
const PersonalData = () => {
  return profile.map((item, index) => (
    <React.Fragment>
      <h4>Name:</h4>
      <p key={index}>
        {item.firstName} {item.lastName}
      </p>
      <h4>Age:</h4>
      <p key={index}>{item.age}</p>
      <h4>Location:</h4>
      <p key={index}>{item.location}</p>
    </React.Fragment>
  ));
};

function MyProfile() {
  return (
    <Profile id="profile" className="grid-profile">
      <SubGrid>
        <ProfileHeading>
          <h2>Profile</h2>
          <span>
            <p>I'm breathtaking Software developer</p>
            <p>(No my words, it's all Keanu ¯\_(ツ)_/¯)</p>
          </span>
        </ProfileHeading>
        <ProfileInfo>
          <AboutMe>
            <SubHeading>{about.heading}</SubHeading>
            <p>{about.text}</p>
          </AboutMe>
          <ProfileNameWrapper>
            <SubHeading>Details</SubHeading>
            <PersonalData />
          </ProfileNameWrapper>
          <ProfileContacts>
            <Social arr={social} />
            <Email arr={contacts} />
          </ProfileContacts>
        </ProfileInfo>
        <Interests>
          <InterestHeading>Interests</InterestHeading>
          <InterestsText>{interests.text}</InterestsText>
        </Interests>
      </SubGrid>
    </Profile>
  );
}

const Profile = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background: #3c5267;
`;

const SubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`;

const ProfileHeading = styled.div`
  grid-column: 5 / 9;
  grid-row: 1 / 2;
  width: 100%;
  justify-self: center;
  text-align: center;
  border-bottom: 1px solid mediumSeaGreen;
  margin-bottom: 1.5rem;
  font-size: 1.5em;
  & h2 {
    font-weight: normal;
    color: mediumSeaGreen;
  }
  & p {
    font-size: 0.85em;
    color: silver;
  }
`;

const ProfileInfo = styled.div`
  height: 100%;
  width: 100%;
  color: silver;
  grid-column: 5 / 9;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr, 1fr;
  grid-gap: 2rem;
  border-bottom: 1px solid #3cb371;
`;

const AboutMe = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  margin-left: 2rem;
`;

const SubHeading = styled.h2`
  color: #3cb371;
  font-weight: normal;
`;

const ProfileNameWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const ProfileContacts = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  width: 100%;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Interests = styled.div`
  margin-top: 1rem;
  grid-column: 5 / 9;
  grid-row: 3 / 4;
  border-bottom: 1px solid mediumSeaGreen;
  border-top: 1px solid mediumSeaGreen;
  color: silver;
`;

const InterestHeading = styled.h3`
  color: #3cb371;
`;

const InterestsText = styled.p`
  font-size: 1.1em;
`;

export default MyProfile;
