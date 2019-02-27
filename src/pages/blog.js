import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Footer from "../components/footer/footer"

import { FaUserEdit, FaCalendar } from "react-icons/fa"

const BlogPage = ({ data }) => (
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
      <h2>Latest Posts </h2>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by <FaUserEdit />
            {post.node.frontmatter.author} on <FaCalendar />
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read more...</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
    <Footer />
  </Layout>
)
export const PageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
export default BlogPage
