import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
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
      <div>
        <h2>Projects </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum
          voluptates, praesentium dolor eligendi quibusdam, est rerum enim
          expedita exercitationem at voluptatum dignissimos odit? Numquam
          placeat at porro, inventore, quos incidunt sed aut laudantium corporis
          quas possimus laborum, magnam blanditiis!
        </p>
        <p>
          Till then check out my{" "}
          <a
            href="https://github.com/nikhilasrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          .
        </p>
      </div>
    </div>
    <Footer />
  </Layout>
)
export default ProjectsPage
