import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{ height: "100%" }}>
    <SEO
      title="Nikhil Asrani | Front End Developer"
      keywords={[`nikhil`, `dev`, `react`, "react-native", "javascript"]}
    />
    <h1>Hi people 👋 </h1>
    <p>
      I really like to code. I'm currently working through React, React Native
      and Javascript
    </p>
    <p>Here are some of my projects...</p>
  </Layout>
)

export default IndexPage
