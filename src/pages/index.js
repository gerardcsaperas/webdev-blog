import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
        <Layout location={this.props.location} title={siteTitle} image={data.file.childImageSharp.fluid}>
            <SEO title="Blog" />
            <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
            />
        </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        
      }
    }
    localSearchBlog {
      index
      store
    }
    file(relativePath: { eq: "leio-mclaren-leiomclaren-com-e1AtwT_cGPU-unsplash.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
                childImageSharp {
                    fluid (maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
    }
  }
`
