import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";
import Grid from "../styles/grid";

import Header from "../components/header";
import MyProfile from "../components/myProfile";
import PortfolioProjectsList from "../components/portfolioList";
import Abilities from "../components/abilities";
import WorkExpirience from "../components/expirience";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <GlobalStyles />
    <Grid />

    <div className="grid__container">
      <Header />
      <main className="grid-mainWrapper">
        <MyProfile />
        <PortfolioProjectsList />
        <Abilities />
        <WorkExpirience />
        <Footer />
      </main>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Home;
