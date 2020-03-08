import React from "react";
//
function AboutMe() {
  return (
    <React.Fragment>
      <section className="about">
        <h3 className="heading">About me</h3>
        <div className="content-wrapper">
          <div className="content-left">
            <p>
              Hello! I'm Vlad, a software developer based in Russia. I enjoy
              building things for the web that can impact people's lives. I do
              it by using modern technologies to develop websites that solve
              problems.
            </p>
            <p>
              For all my knowledge in the Web, I owe for &nbsp;
              <a href="https://www.freecodecamp.org/">freeCodeCamp</a>,
              countless tutorials made by marvelous people and hours upon hours
              of practice. Right now I work on a huge variety of projects on a
              daily basis.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <div className="content-right"></div>
        </div>
      </section>

      <style jsx>{`
        p {
          line-height: 1.6;
        }

        a {
        }

        .about {
          max-width: 1000px;
          margin: 0 auto;
          padding: 10rem 0;
          background-color: inherit;
        }

        .heading {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0;
          margin-left: 2rem;
        }

        .heading::before {
          content: "•";
          color: #5bf5ab;
          display: inline-block;
          width: 1rem;
          margin-left: -2rem;
        }

        .heading::after {
          content: "";
          display: inline-block;
          width: 40%;
          height: 0.435rem;
          margin-left: 1rem;
          border-top: 1px solid #5bf5ab;
        }

        .content-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .content-left {
          max-width: 50%;
        }
      `}</style>
    </React.Fragment>
  );
}

export default AboutMe;
