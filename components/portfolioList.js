import React from "react";
import styled from "styled-components";

// import WeatherApp from "../../img/projects/react_weather_app.png";
// import TodoList from "../../img/projects/react_todo.png";
// import JapaneseInn from "../../img/projects/Japanese_inn.png";
// import TravelAgency from "../../img/projects/Travel_agency.png";

const projects = [
  {
    title: "Weather App",
    subtitle: "react project",
    //projectImg: WeatherApp,
    toServer: "Watch live version",
    linkToServer: "https://hellvinter.github.io/WeatherApp/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/WeatherApp"
  },
  {
    title: "Todo list",
    subtitle: "react project",
    //projectImg: TodoList,
    toServer: "Watch live version",
    linkToServer: "https://hellvinter.github.io/ReactTodoApp/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/ReactTodoApp"
  },
  {
    title: "Japanece inn",
    subtitle: "static html page",
    //projectImg: JapaneseInn,
    toServer: "Watch live version",
    linkToServer: "https://hellvinter.github.io/Japanese_inn/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/Japanese_inn"
  },
  {
    title: "Travel agency",
    subtitle: "static html page",
    //projectImg: TravelAgency,
    toServer: "Watch live version",
    linkToServer: "https://hellvinter.github.io/Travel_agency/",
    toCode: "Watch code",
    linkToCode: "https://github.com/Hellvinter/Travel_agency"
  }
];
// Maping projects array
const ProjectsMap = () => {
  return projects.map(item => (
    <Card>
      <CardTitle>{item.title}</CardTitle>
      <CardSubTitle>{item.subtitle}</CardSubTitle>
      <PortfolioListImgContainer>
        {/* <PortfoliListImg
          src={item.projectImg}
          alt="project img"
        /> */}
      </PortfolioListImgContainer>
      <PortfoliListLinkContainer>
        <PortfoliListLink href={item.linkToServer} target="_blank">
          {item.toServer}
        </PortfoliListLink>
        <PortfoliListLink href={item.linkToCode} target="_blank">
          {item.toCode}
        </PortfoliListLink>
      </PortfoliListLinkContainer>
    </Card>
  ));
};

function PortfolioProjectsList() {
  return (
    <Portfolio id="portfolioList">
      <Heading>Projects</Heading>
      <CardSet>
        <ProjectsMap />
      </CardSet>
    </Portfolio>
  );
}

const Portfolio = styled.section`
  width: 70%;
  margin: 0 auto 2.5rem auto;
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

const PortfolioListImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const PortfoliListImg = styled.div`
  max-width: 90%;
  height: auto;
`;

const PortfoliListLinkContainer = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PortfoliListLink = styled.a`
  width: 10rem;
  padding: 0.4rem;
  margin: 0.3rem;
  text-align: center;
  color: mediumSeaGreen;
  border: 1px solid mediumSeaGreen;
  border-radius: 5%;
  &:hover {
    color: #c0c0c0;
  }
`;

export default PortfolioProjectsList;
