import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

import MainSidebar from "../components/common/main_sidebar";
import MyProfile from "../components/myProfile";
import WorkExpirience from "../components/expirience";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <GlobalStyles />
      <div>
        <MainSidebar />
        <main>
          <MyProfile />
          <WorkExpirience />
        </main>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}

export default Home;
