import React, { useEffect } from "react";
import styled from "styled-components";

// INFO
const socialMedia = [
  {
    media: "https://img.icons8.com/bubbles/24/000000/github.png",
    social: "https://github.com/Hellvinter",
    alt: "GitHub",
    title: "GitHub"
  },
  {
    media: "https://img.icons8.com/color/24/000000/twitter.png",
    social: "https://twitter.com/" + "Hellvinter",
    alt: "Twitter",
    title: "Twitter"
  },
  {
    media: "https://img.icons8.com/windows/24/000000/dev.png",
    social: "https://dev.to/hellvinter",
    alt: "Dev community",
    title: "Dev community"
  },
  {
    media: "https://img.icons8.com/color/24/000000/linkedin.png",
    social: "https://www.linkedin.com/in/vladislav-kresov-9b4aa517a/",
    alt: "Linkedin",
    title: "Linkedin"
  }
];

const email = [
  {
    email: "vlad.kresov.h@outlook.com"
  }
];

// SOCIAL MEDIA.
export const Social = () => {
  return socialMedia.map((item, index) => (
    <SocialLink key={index} href={item.social} target="_blank">
      <img src={item.media} alt={item.alt} title={item.title} />
    </SocialLink>
  ));
};

// EMAIL.
export const Email = props => {
  return email.map((item, index) => (
    <ContactMe href={`mailto:${item.email}`} key={index}>
      {props.text}
    </ContactMe>
  ));
};

// FOLLOW ME ON TWITTER
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

// Styled components.
const SocialLink = styled.a`
  padding: 0.2rem;
  margin-right: 0.3rem;
`;

const ContactMe = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: capitalize;
  border: 1px solid #5bf5ab;
  color: #5bf5ab;
  transition: ease-out 0.5s;
  &:hover {
    background-color: rgb(91, 245, 171, 0.15);
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
