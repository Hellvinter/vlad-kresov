import React from "react";

import { Email } from "../generic_components/my_contacts";

function Introduction() {
  return (
    <React.Fragment>
      <section className="introduction">
        <h1 className="h1">Hello there, my name is </h1>
        <h2 className="h2">Vlad Kresov.</h2>
        <h3 className="h3">I solve problems.</h3>
        <p className="my-specialization">
          I'm a software developer based in Russia. I specialize in building
          high-quality websites and applications.
        </p>
        <Email text={"Get in touch"} />
      </section>
      <style jsx>{`
        .introduction {
          max-width: 1000px;
          min-height: 100vh;
          margin: 0 auto;
          padding: 10rem 0;
          background-color: inherit;
        }

        .h1 {
          font-size: 1rem;
          font-weight: 400;
          color: #5bf5ab;
        }

        .h2 {
          font-size: 4rem;
          font-weight: 600;
          color: #fff;
          padding: 0;
          margin: 0;
        }

        .h3 {
          font-size: 4rem;
          font-weight: 600;
          color: #b6bbcc;
          padding: 0;
          margin: 0;
        }

        .my-specialization {
          padding-top: 1.5rem;
          width: 25rem;
          line-height: 1.6;
        }
      `}</style>
    </React.Fragment>
  );
}

//margin: 0 10rem;
//padding: 10rem 0;

export default Introduction;
//d5dcf0
