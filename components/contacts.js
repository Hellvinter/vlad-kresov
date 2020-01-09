import React from "react";
import styled from "styled-components";

// Displaying my social media.
export const Social = props => {
  return props.arr.map((item, index) => (
    <a key={index} href={item.social} target="_blank">
      <img src={item.media} />
    </a>
  ));
};

// Displaying my email.
export const Email = props => {
  return props.arr.map((item, index) => (
    <React.Fragment>
      <a href={`mailto:${item.email}`}>
        <ContactMe key={index}>{item.email}</ContactMe>
      </a>
    </React.Fragment>
  ));
};

const ContactMe = styled.h4`
  color: silver;
  &:hover {
    color: mediumSeaGreen;
  }
`;
// Merge it with Email and make styles depends on props
const ContactMe2 = styled.h4`
  color: silver; //rgb(45,45,45);
  margin: 0;
  &:hover {
    color: mediumSeaGreen;
  }
`;
