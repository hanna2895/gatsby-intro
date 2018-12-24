import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div>

  
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            description,
          }
        }
      }
    `
}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 850px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hannah Werman</title>
            <link rel="canonical" href="#"/>>
        </Helmet>
        <Link to={`/`}>
          <h1

          >
            {data.site.siteMetadata.title}
          </h1>
          <h4
            className={css`
              margin-bottom: ${rhythm(1.5)};
              display: inline-block;
              font-style: normal;
              /* max-width: 55%; */
            `}
          >
            {data.site.siteMetadata.description}
          </h4>
        </Link>
        <div className={css`
          float: right;
          max-width: 35%;
        `}>
          <Link
            to={`/about/`}
            className={css`
              /* float: right; */
              margin-top: -${rhythm(1.7)}
            `}
          >
            About
          </Link>
          <Link to={`/blog`}
            className={css`
              /* float: right; */
              margin-top: -${rhythm(1.7)}
            `}
          >
            Blog
          </Link>
          <Link to={`/portfolio/`}>
            Portfolio
          </Link>
          <Link to={'/contact'}
            className={css`
              margin-top: -${rhythm(1.7)}
            `}>
            Hire
          </Link>
        </div>

        {children}
      </div>

    )}
  />
  <footer className={css`
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${rhythm(2)} ${rhythm(0.5)} ${rhythm(2)};
    font-size: 12px;
    text-align: right;
  `}>
          Built with &hearts; using React, Gatsby & GraphQL.
  </footer>
  </div>
)
