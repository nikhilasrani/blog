import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import { FaReact, FaJs } from "react-icons/fa"
import SocialHome from "../components/social-home/social-home"
import FooterHome from "../components/footer-home/footer-home"
import Project from "../components/Project/Project"
import ThinderPortfolio from "../images/Thinder_Portfolio.png"
const IndexPage = () => (
  <Layout
    style={{
      height: "100%",
      position: "absolute",
      padding: 0,
    }}
  >
    <div className="bgd-wrapper">
      <SEO
        title="Nikhil Asrani | Front End Developer"
        keywords={[`nikhil`, `dev`, `react`, "react-native", "javascript"]}
      />
      <h1>Nikhil Asrani</h1>
      <SocialHome />
      <p className="homepage-text">
        <u>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact className="react-icon" />
            React
          </a>
        </u>{" "}
        |{" "}
        <u>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs className="js-icon" />
            Javascript
          </a>
        </u>
      </p>
      <p className="homepage-text">
        <Link to="/blog">Blog</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link>
      </p>
    </div>
    <div><h2 style={{textAlign:"center"}}>Projects</h2>
    <div className="projects">
    <Project title="Backlog" subtitle="May 2019" 
    description="Thinder is an application that helps you decide on a place to grab a quick bite when you are feeling indecisive. After selecting your location, you will see the restaurants in and around your area and you can swipe left or right on them on whether you like them or not. Once you have a few options down, you can see them on the Saved Restaurants screen and check them out further on Zomato."
     imageURL={ThinderPortfolio}
     imageURLAlt="Thinder Portfolio Image"
     />
     </div>
    {/* <ul>
    <li><Project title="Backlog"/></li>
      <li>Thinder</li>
      <li> More...</li>
      </ul></div>
      <div><h2 style={{textAlign:"center"}}>Skills</h2>
      <ul>
    <li>Javascript</li>
      <li>React</li>
      <li> React Native</li>
      </ul>
       */}
      </div>
      <FooterHome />
  </Layout>
)

export default IndexPage
