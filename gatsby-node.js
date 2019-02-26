//Using the Create Page API for creating pages for blogposts
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
            },
          })
        })
      })
    )
  })
  /* const postTemplate = path.resolve("src/templates/blog-post.js")

  return graphql(`
allMarkdownRemark {
    edges {
      node {
        html
        id
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }`).then(res => {
    if (res.errors) return Promise.reject(res.erorrs)

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  }) */
}
