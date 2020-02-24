import React, { useEffect } from "react";
import styled from "styled-components";

// Displaying my social media.
export const Social = props => {
  return props.arr.map((item, index) => (
    <SocialLink key={index} href={item.social} target="_blank">
      <img src={item.media} alt={item.alt} title={item.title} />
    </SocialLink>
  ));
};

// Displaying my email.
export const Email = props => {
  return props.arr.map((item, index) => (
    <a href={`mailto:${item.email}`}>
      <ContactMe key={index}>{item.email}</ContactMe>
    </a>
  ));
};

export const FollowButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <Follow className="twitter-embed">
      <a
        href="https://twitter.com/Hellvinter?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-show-count="false"
      >
        Follow Me
      </a>
    </Follow>
  );
};

const SocialLink = styled.a`
  padding: 0.2rem;
  margin-right: 0.3rem;
`;

const ContactMe = styled.p`
  margin-top: 0.3rem;
  color: #fff;
  &:hover {
    color: #3cb371;
  }
`;
// Merge it with Email and make styles depends on props
const ContactMe2 = styled.h4`
  color: silver; //rgb(45,45,45);
  margin: 0;
  &:hover {
    color: #3cb371;
  }
`;

const Follow = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 6rem;
`;
