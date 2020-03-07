import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

import Navigation from "../components/generic_components/navigation";

function Future() {
  return (
    <div className="page-theme">
      <Head>
        <title>Future</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <GlobalStyles />

      <main className="container">
        <Navigation />
      </main>
      <style jsx>{`
        .page-theme {
          background-color: #08223b;
        }
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
          backround-color: inherit;
        }
      `}</style>
    </div>
  );
}

export default Future;
