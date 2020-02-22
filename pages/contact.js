import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

import MainSidebar from "../components/common/main_sidebar";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <GlobalStyles />
      <div>
        <MainSidebar />
        <main>
          <h2 style={{ textAlign: "center" }}>Contact page placeholder</h2>
        </main>
      </div>
    </div>
  );
}

export default Contact;
