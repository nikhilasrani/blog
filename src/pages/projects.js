import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
const ProjectsPage = () => (
  <Layout>
    <div
      className="content-wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        height: "100%",
      }}
    >
      <SEO title="Projects" />
      <div>
        <h2>Projects </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          vitae reiciendis enim dolore omnis unde similique consectetur,
          molestias fugit nihil, atque delectus commodi, voluptatum accusantium.
          Voluptate hic omnis sapiente molestiae, ad ipsa dignissimos
          exercitationem odit animi at quibusdam, inventore in.
        </p>
        <p>Here are some of my projects...</p>
      </div>
    </div>
  </Layout>
)
export default ProjectsPage
