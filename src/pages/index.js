import React, { useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../store/context"
import Layout from "../components/layout"
import Switch from "../components/Switch/Switch"
import SEO from "../components/seo"
// import "../components/index.css"
import Project from "../components/Project/Project"
import { FaReact, FaJs, FaArrowRight } from "react-icons/fa"
import RemedicoPortfolio from "../images/remedico_logo_banner.png"
import ThinderPortfolio from "../images/Thinder_Portfolio.jpg"
import BacklogPortfolio from "../images/Backlog_Portfolio.jpg"
import PortfolioPage from "../images/Portfolio_Page.jpg"
// import Resume from "../documents/resume.pdf"

const IndexPage = () => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

  return (
    <Layout>
      <div
        css={css`
          h1,
          h2,
          p {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <SEO
          title="Nikhil Asrani | Front End Developer"
          keywords={[`nikhil`, `dev`, `react`, `react-native`, `javascript`]}
        />
        <h1>Hi, I'm Nikhil.</h1>
        <p>I build things. Mostly with React and Node</p>
      </div>
    </Layout>
  )
}
export default IndexPage

// const IndexPage = () => (
//   <Layout
//     style={{
//       height: "100%",
//       position: "absolute",
//       padding: 0,
//     }}
//   >

/* <div className="bgd-wrapper">
      
          <h2 className="homepage-text" style={{ padding:30,fontSize:40,color:"white",textAlign:"center"}}>Hi, I'm Nikhil Asrani. <span role="img" aria-label="hand wave">👋</span></h2>
          <p className="homepage-text" style={{ fontSize:20, color:"white",textAlign:"center"}}>I'm a Frontend Developer, specializing in JavaScript <FaJs className="js-icon" /> and React. <FaReact className="react-icon" /> Located in Bangalore, India. <span role="img" aria-label="Indian flag">🇮🇳</span> <br/>I've mostly learnt coding through self directed learning and by building some cool apps. <span role="img" aria-label="rocket">🚀</span></p>
    </div> */
{
  /* 
    <div>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <div
          className="projects"
          style={{
            position: "relative",
            clear: "both",
            display: "block",
            lineHeight: 40,
          }}
        >
          <Project
            title="Remedico"
            subtitle="July 2019 - Present"
            imageURL={RemedicoPortfolio}
            imageURLAlt="Remedico Portfolio Image"
            description="I currently work as a Frontend/Mobile Engineer at Remedico. Remedico is an  early stage startup and an end-to-end mobile healthcare company, allowing young people to solve their critical health problems, as they move through adolescence and early adulthood. I am one of two Frontend/App engineers where we built the end to end app experience from scratch using cross-platform hybrid app development frameworks/libraries like React Native and corresponding iOS/Android Native integrations. "
            playStore={
              "https://play.google.com/store/apps/details?id=com.remedicoapp"
            }
            appStore={"https://apps.apple.com/in/app/remedico/id1478936836"}
          />
          <Project
            title="Backlog"
            subtitle="June 2019"
            description="Backlog is an application that allows you to save URLs or links that you want to refer back to later. It stores all kinds of URLs and displays them as cards containing information related to that link. Once you add a link using the Add button in the navigation bar, the link and its data gets stored in the applications cloud based servers. Everytime you open the application on the same or any different device logged onto your unique account, you will be able to see your saved links."
            imageURL={BacklogPortfolio}
            imageURLAlt="Backlog Portfolio Image"
            playStore={
              "https://play.google.com/store/apps/details?id=com.nikhilasrani.backlog"
            }
            github={"https://github.com/nikhilasrani/backlog"}
          />
          <Project
            title="Thinder"
            subtitle="May 2019"
            description="Thinder is an application that helps you decide on a place to grab a quick bite when you are feeling indecisive. After selecting your location, you will see the restaurants in and around your area and you can swipe left or right on them on whether you like them or not. Once you have a few options down, you can see them on the Saved Restaurants screen and check them out further on Zomato."
            imageURL={ThinderPortfolio}
            imageURLAlt="Thinder Portfolio Image"
            playStore={
              "https://play.google.com/store/apps/details?id=com.nikhilasrani.thinder&hl=en"
            }
            github={"https://github.com/nikhilasrani/thinder"}
            blog={"/thinder-blog"}
          />
          <Project
            title="Portfolio Site"
            subtitle="March 2019"
            description="This page that you are currently browsing! 
    This was built using the Gatsby framework which allows for blazing fast response times. It is built using React and GraphQL."
            imageURL={PortfolioPage}
            imageURLAlt="Portfolio Page Image"
            github={"https://github.com/nikhilasrani/blog"}
            blog={"/blog-two"}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/projects" className="styled-button">
          View All Projects <FaArrowRight />
        </Link>
      </div>
    <div style={{ textAlign: "center" }} className="contact">
      <h2>Get in Touch</h2>
      <p>
        Connect with me for any opportunities, or just to say hello{" "}
        <span role="img" aria-label="hand-wave">
          👋
        </span>
        <br />
        <a
          style={{ color: "#8c8c8c", textDecoration: "none" }}
          href="mailto:asrani.nikhil@gmail.com"
        >
          asrani.nikhil@gmail.com
        </a>
        <br />
        {/* <a href={Resume} className="styled-button">View Resume</a> */
}
{
  /* </p>
    </div> */
}
//   </Layout>
// )
