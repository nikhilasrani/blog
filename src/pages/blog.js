import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import "./blog.css"
import headshot from "../images/nikhilasrani.png"
import Header from "../components/header/header"
const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div style={{zIndex:3}}>
    <Header  />
    </div>
    <div
      className="content-wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        height: "100%",
        zIndex:0
      }}
    >
      <h2>Blog posts </h2>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="blog-post-list-item">
          <h3>{post.node.frontmatter.title}</h3>
          <span className="post-avatar-date">
            <img src={headshot} alt="headshot of me" className="headshot" />{" "}
            <p>
              {post.node.frontmatter.author} on {post.node.frontmatter.date}
            </p>
          </span>
          <br />
          <br />
          <Link className="read-more" to={post.node.frontmatter.path}>
            Read More
          </Link>
          <br />
          <br />
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
