import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Weather App",
    subtitle: "react project",
    projectImg: "projects/react_weather_app.png",
    toLiveVersion: "Watch live version",
    linkToLiveVersion: "https://hellvinter.github.io/WeatherApp/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/WeatherApp"
  },
  {
    title: "Todo list",
    subtitle: "react project",
    projectImg: "projects/react_todo.png",
    toLiveVersion: "Watch live version",
    linkToLiveVersion: "https://hellvinter.github.io/ReactTodoApp/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/ReactTodoApp"
  },
  {
    title: "Japanece inn",
    subtitle: "static html page",
    projectImg: "projects/Japanese_inn.png",
    toLiveVersion: "Watch live version",
    linkToLiveVersion: "https://hellvinter.github.io/Japanese_inn/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/Japanese_inn"
  },
  {
    title: "Travel agency",
    subtitle: "static html page",
    projectImg: "projects/Travel_agency.png",
    toLiveVersion: "Watch live version",
    linkToLiveVersion: "https://hellvinter.github.io/Travel_agency/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/Travel_agency"
  }
];

// Mapping projects array
const ProjectCard = () => {
  return projects.map(item => (
    <Card>
      <CardTitle>{item.title}</CardTitle>
      <CardSubTitle>{item.subtitle}</CardSubTitle>
      <CardImgContainer>
        <CardImg src={item.projectImg} alt="project img" />
      </CardImgContainer>
      <LinkContainer>
        <Link href={item.linkToLiveVersion} target="_blank">
          {item.toLiveVersion}
        </Link>
        <Link href={item.linkToCode} target="_blank">
          {item.toCode}
        </Link>
      </LinkContainer>
    </Card>
  ));
};

function PortfolioProjects() {
  return (
    <Portfolio>
      <Heading>Projects</Heading>
      <CardSet>
        <ProjectCard />
      </CardSet>
    </Portfolio>
  );
}

const Portfolio = styled.section`
  width: 70%;
  margin: 0rem auto 2.5rem auto;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 1.6em;
`;

const CardSet = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 25vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border-radius: 3%;
  box-shadow: 1px 1px 4px #000;
  background-color: #3c5267;
`;

const CardTitle = styled.h4`
  color: #3cb371;
  border-bottom: 2px solid #3cb371;
  margin-bottom: 0;
`;

const CardSubTitle = styled.p`
  color: #c0c0c0;
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 0.1rem;
`;

const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const CardImg = styled.img`
  max-width: 90%;
  height: auto;
`;

const LinkContainer = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #3cb371;
`;

const Link = styled.a`
  width: 10rem;
  padding: 0.4rem;
  margin: 0.3rem;
  text-align: center;
  color: inherit;
  border: 1px solid #3cb371;
  border-radius: 5%;
  &:hover {
    color: #c0c0c0;
  }
`;

export default PortfolioProjects;
