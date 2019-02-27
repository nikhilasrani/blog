import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import Social from "../components/social/social"
import Footer from "../components/footer/footer"

const AboutPage = () => (
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
      <SEO title="About Me" />
      <div>
        <h2>About Me </h2>
        <p>Nothing to see here (as of right now...)</p>
        <p>
          You can contact me at{" "}
          <a href="https://twitter.com/NikhilBAsrani" target="_blank">
            twitter
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </Layout>
)
export default AboutPage
