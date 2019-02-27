import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import { FaReact, FaJs } from "react-icons/fa"
import Particles from "react-particles-js"
import SocialHome from "../components/social-home/social-home"
//"linear-gradient(to right, rgb(203, 52, 181), rgb(68, 166, 187))"

const IndexPage = () => (
  <Layout
    style={{
      height: "100%",
      position: "absolute",
      padding: 0,
      background: "purple",
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
        I really like to code. Especially with{" "}
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
        and{" "}
        <u>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs className="js-icon" />
            Javascript.
          </a>
        </u>
      </p>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  </Layout>
)

export default IndexPage
