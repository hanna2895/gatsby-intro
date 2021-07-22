import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "./about/about.css";
import hannaPhoto from "./about/Hanna1.jpg";

export default ({ data }) => (
  <Layout>
    <div className="container">
      <div className="content">
        <div className="heading-holder">
          <img
            src={hannaPhoto}
            className="home-img animated fadeInUp delay-1s"
            alt="Hanna standing in front of a door"
          />

          <h1 className="animated fadeInUp">Hi.</h1>
          <h2 className="animated fadeInUp delay-1s">
            My name is Hannah Werman.
          </h2>
          <h3 className="animated fadeInUp delay-2s">
            I’m a software engineer building towards the future of politics.
          </h3>

          <p className="animated fadeInUp delay-3s">
            I love building tech solutions that lower barriers to political
            participation, because being ‘political’ shouldn’t be intimidating.
            I’ve spent the last few years building products to make politics
            more accessible, both through fighting fake news and misinformation,
            and through making online political organizing and mobilization
            simple for individuals and campaigns.
          </p>

          <p className="animated fadeInUp delay-3s">
            I’ve worked with campaigns, startups, and entrepreneurs to create
            beautiful, usable, and robust products that solve complex problems
            in a practical way based on each organization’s unique needs.
          </p>

          <p className="animated fadeInUp delay-3s">
            Digital organizing and engagement is more important now than ever
            before - let’s talk about how I can help YOU achieve your goals in
            2020 and beyond.
          </p>

          <Link
            to={`/portfolio/`}
            className="animated fadeInUp delay-5s landing-link"
          >
            View My Work{" "}
          </Link>
        </div>
      </div>

      {/* <img src={hannaPhoto} className="animated fadeInUp delay-3s"/> */}
    </div>
  </Layout>
);

// this is a page query.
// page queries live outside the component definition and at the bottom of a file by convention
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
