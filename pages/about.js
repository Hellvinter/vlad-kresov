import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";
import Grid from "../styles/grid";

import MyProfile from "../components/myProfile";
import Abilities from "../components/abilities";
import WorkExpirience from "../components/expirience";
import Footer from "../components/footer";

const About = () => (
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
      <main className="grid-mainWrapper">
        <MyProfile />
        <Abilities />
        <WorkExpirience />
        <Footer />
      </main>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default About;
