import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import { FaReact, FaJs } from "react-icons/fa"
import SocialHome from "../components/social-home/social-home"
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
  </Layout>
)

export default IndexPage
