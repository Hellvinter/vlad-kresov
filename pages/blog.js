import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

import MainSidebar from "../components/common/main_sidebar";

function Blog() {
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
        <div>
          <h2 style={{ textAlign: "center" }}>Just placeholder</h2>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
}

export default Blog;
