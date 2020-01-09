import React from "react";
import styled from "styled-components";

import { social, contacts, afterWord } from "../Data/info";
import { Social, Email } from "./contacts";

function Footer() {
  return (
    <MyFooter id="contact" className="grid-footer">
      <div>
        <Heading>Contacts</Heading>
        <PunchLine>"It's not a bug... it's a feature"</PunchLine>
      </div>
      <AfterWordsWrapper>
        <AfterWordsText>{afterWord.text}</AfterWordsText>
        <AfterWordsLink href={afterWord.sourceCodeLink} target="_blank">
          Link to sourse code of resume
        </AfterWordsLink>
      </AfterWordsWrapper>
      <HireMe>Contacts for hiring me</HireMe>
      <Contacts>
        <Social arr={social} />
        <Email arr={contacts} />
      </Contacts>
      <LastWishes>{afterWord.lastWord}</LastWishes>
    </MyFooter>
  );
}

const MyFooter = styled.footer`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #3c5267;
`;

const Heading = styled.h2`
  color: #3cb371;
`;

const PunchLine = styled.p`
  margin-top: -1rem;
  color: silver;
  font-size: 1.2em;
  font-style: italic;
`;

const AfterWordsWrapper = styled.div`
  width: 50%;
  text-align: center;
  margin-bottom: 3rem;
`;

const AfterWordsText = styled.p`
  margin-bottom: 3rem;
  font-size: 1.2em;
  color: #c0c0c0;
`;

const AfterWordsLink = styled.a`
  width: 10rem;
  padding: 0.4rem;
  margin: 0.3rem;
  text-align: center;
  color: mediumSeaGreen;
  border: 1px solid mediumSeaGreen;
  border-radius: 5%;
  &:hover {
    color: silver;
  }
`;

const HireMe = styled.h3`
  color: #c0c0c0;
`;

const Contacts = styled.div`
  margin: 2rem auto 0 auto;
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #3cb371;
  border-bottom: 1px solid #3cb371;
`;

const LastWishes = styled.p`
  display: inline-block;
  width: 50%;
  text-align: center;
  color: silver;
  font-size: 1.1em;
`;

export default Footer;
