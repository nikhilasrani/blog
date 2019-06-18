import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Project from "../components/Project/Project"
import ThinderPortfolio from "../images/Thinder_Portfolio.png"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <div style={{zIndex:3}}>
    <Header />
    </div>
    <div>
      <div>
        <h2 style={{textAlign:"center"}}>Projects </h2>

        <p style={{textAlign:"center"}}>
          Here are some of my select projects. For more, you can check out my{" "}
          <a
            href="https://github.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          .
        </p>
        
    <Project title="Backlog" subtitle="May 2019" 
    description="Thinder is an application that helps you decide on a place to grab a quick bite when you are feeling indecisive. After selecting your location, you will see the restaurants in and around your area and you can swipe left or right on them on whether you like them or not. Once you have a few options down, you can see them on the Saved Restaurants screen and check them out further on Zomato."
     imageURL={ThinderPortfolio}
     imageURLAlt="Thinder Portfolio Image"
     />
     <br/>
     </div>
      </div>
    <Footer />
  </Layout>
)
export default ProjectsPage
