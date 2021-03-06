import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import RemedicoPortfolio from "../images/remedico_logo_banner.png"
import BacklogPortfolio from "../images/Backlog_Portfolio.jpg"
import ThinderPortfolio from "../images/Thinder_Portfolio.jpg"
import PortfolioPage from "../images/Portfolio_Page.jpg"
//import ContactManagerPortfolio from "../images/ContactManager_Portfolio.png"
const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
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
        <Project title="Remedico" subtitle="July 2019 - Present"
          imageURL={RemedicoPortfolio}
          imageURLAlt="Remedico Portfolio Image"
          description="I currently work as a Frontend/Mobile Engineer at Remedico. Remedico is an  early stage startup and an end-to-end mobile healthcare company, allowing young people to solve their critical health problems, as they move through adolescence and early adulthood. I am one of two Frontend/App engineers where we built the end to end app experience from scratch using cross-platform hybrid app development frameworks/libraries like React Native and corresponding iOS/Android Native integrations."
          playStore={"https://play.google.com/store/apps/details?id=com.remedicoapp"}
          appStore={"https://apps.apple.com/in/app/remedico/id1478936836"}
          />
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
     <br/>
     {/* <Project title="Contact Manager Application" subtitle="February 2019" 
    description="A simple CRUD application built in React that uses axios to make GET, DELETE, POST and PUT HTTP requests to a fake REST API."
     imageURL={ContactManagerPortfolio}
     imageURLAlt="Contact Manager Image"
     github={"https://github.com/nikhilasrani/contactmanager"}
     demo={"https://nikhilasrani-contactscrud.netlify.com"}
     />
     <br/><br/><br/><br/><br/> */}
     </div>
      </div>
  </Layout>
)
export default ProjectsPage
