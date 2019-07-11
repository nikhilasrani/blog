import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import SocialHome from "../components/social-home/social-home"
import FooterHome from "../components/footer-home/footer-home"
import Project from "../components/Project/Project"
import ThinderPortfolio from "../images/Thinder_Portfolio.jpg"
import BacklogPortfolio from "../images/Backlog_Portfolio.jpg"
import PortfolioPage from "../images/Portfolio_Page.jpg"
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
        keywords={[`nikhil`, `dev`, `react`, `react-native`, `javascript`]}
      />
      <h1>Nikhil Asrani</h1>
      <SocialHome />
      <p className="homepage-text">
        <Link to="/blog">Blog</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link>
      </p>
    </div>
    <div className="about" style={{paddingBlock:50}}>
      <h2 style={{textAlign:"center"}}>Hey, I'm Nikhil Asrani 👋</h2>
      <p style={{textAlign:"center"}}>I'm a Frontend Developer, specialized in Javascript, particularly in ReactJS and React Native. Located in Bangalore, India. 🇮🇳 <br/>I've mostly learnt coding through self directed learning and by building some cool apps. 🚀</p>
      <p style={{textAlign:"center"}}>
        Feel free to email me at <a style={{color: "#8c8c8c", textDecoration:"none"}} href="mailto:asrani.nikhil@gmail.com"
        target="_blank"
        rel="noopener noreferrer">asrani.nikhil@gmail.com</a> or DM me on <a  style={{color: "#8c8c8c", textDecoration:"none"}} href="https://twitter.com/NikhilBAsrani"
              target="_blank"
              rel="noopener noreferrer">twitter</a> after checking out my work below. 👇</p>
    </div>
    <div><h2 style={{textAlign:"center"}}>Projects</h2>
    <div className="projects" style={{position: "relative",clear: "both", display:"block", lineHeight:40}}>
    
    <Project title="Backlog" subtitle="June 2019" 
    description="Backlog is an application that allows you to save URLs or links that you want to refer back to later. It stores all kinds of URLs and displays them as cards containing information related to that link. Once you add a link using the Add button in the navigation bar, the link and its data gets stored in the applications cloud based servers. Everytime you open the application on the same or any different device logged onto your unique account, you will be able to see your saved links."
     imageURL={BacklogPortfolio}
     imageURLAlt="Backlog Portfolio Image"
     playStore={"https://play.google.com/store/apps/details?id=com.nikhilasrani.backlog"}
     github={"https://github.com/nikhilasrani/backlog"}
     />
    <Project title="Thinder" subtitle="May 2019" 
    description="Thinder is an application that helps you decide on a place to grab a quick bite when you are feeling indecisive. After selecting your location, you will see the restaurants in and around your area and you can swipe left or right on them on whether you like them or not. Once you have a few options down, you can see them on the Saved Restaurants screen and check them out further on Zomato."
     imageURL={ThinderPortfolio}
     imageURLAlt="Thinder Portfolio Image"
     playStore={"https://play.google.com/store/apps/details?id=com.nikhilasrani.thinder&hl=en"}
     github={"https://github.com/nikhilasrani/thinder"}
     />
     <Project title="Portfolio Site" subtitle="March 2019" 
    description="This page that you are currently browsing! 
    This was built using the Gatsby framework which allows for blazing fast response times. It is built using React and GraphQL."
     imageURL={PortfolioPage}
     imageURLAlt="Portfolio Page Image"
     github={"https://github.com/nikhilasrani/blog"}
     />
     </div>
      </div>
      <FooterHome />
  </Layout>
)

export default IndexPage
