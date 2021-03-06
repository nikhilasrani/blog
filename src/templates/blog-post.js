import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FaArrowLeft } from "react-icons/fa"
import "./blog-post.css"
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="container">
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
          <div style={{paddingTop:20}}></div>
          <Link to="/blog" className="go-back">
            <FaArrowLeft /> Back to Blogposts
          </Link>

          <h3 className="blog-title">{post.frontmatter.title}</h3>
          <h4>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h4>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
