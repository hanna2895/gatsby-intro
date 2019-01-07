import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import './about/about.css';
import hannaPhoto from '../../public/images/Hannah Photo 1 copy.jpg';


export default ({ data }) => (
  <Layout>
    <div className='container'>
      <div className="content">
        <div className="heading-holder">
            <div>
              <h1 className="animated fadeInUp">Hi.</h1>
              <h2 className="animated fadeInUp delay-1s">My name is Hannah Werman.</h2>
              <h3 className="animated fadeInUp delay-2s">I’m a web developer and a travel & technology content writer.</h3>
            </div>


            <img src={hannaPhoto} className="animated fadeInUp delay-1s"/>

        </div>

        <p className="animated fadeInUp delay-3s">I’m passionate about helping people leverage the power of technology to improve their day-to-day lives. <br /><br/> Whether that’s through cultivating an online presence for your small business, building an app to help you take your data on the road, automating your digital marketing processes, or writing technical content for your website or blog, I’m the right girl for the job.</p>

        <p className="animated fadeInUp delay-3s">I left my previous life in the Washington DC policy world in the spring of 2018 to pursue something more fulfilling. My background in analytical research, mathematics, fintech, and web development has given me the tools to take any complex problem or idea, create a workable solution, and present it to the community in an easily digestible way.</p>

        <p className="animated fadeInUp delay-3s">I want to help YOU grow your business and automate your life. Let’s talk about how we can work together.</p>

        <a href="hire.html" className="btn btn-outline-dark animated fadeInUp delay-7s landing-link">Hire Me</a>
        <a href="portfolio.html" className="btn btn-outline-dark animated fadeInUp delay-7s landing-link">View My Work </a>

      </div>

      {/* <img src={hannaPhoto} className="animated fadeInUp delay-3s"/> */}

    </div>
  </Layout>
)

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
`
