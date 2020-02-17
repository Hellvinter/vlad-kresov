import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

const Blog = () => (
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
      <h2>Just placeholder</h2>
    </div>

    <style jsx>{``}</style>
  </div>
);

export default Blog;
