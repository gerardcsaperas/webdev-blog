import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import postStyles from "./blog-post.module.scss"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
        <Layout
        location={this.props.location}
        title={siteTitle}
        image={post.frontmatter.featuredImage.childImageSharp.fluid}
        marginTop="-100"
        >
            <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
            />
            <div className={postStyles.postContainer}>
                <h1>{post.frontmatter.title}</h1>
                <div className={postStyles.postInfo}>
                    <p>{post.frontmatter.date}</p>
                    <p>Tiempo de lectura: {post.timeToRead} minutos</p>
                </div>
                <hr />
                <MDXRenderer>{post.body}</MDXRenderer>
                <hr
                style={{
                    marginBottom: rhythm(1),
                }}
                />
                <Bio />
                
                <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
                >
                <li style={{width: "40%"}}>
                    {previous && (
                    <Link to={`/blog${previous.fields.slug}`} rel="prev">
                        ← {previous.frontmatter.title}
                    </Link>
                    )}
                </li>
                <li style={{width: "40%", textAlign: "right"}}>
                    {next && (
                    <Link to={`/blog${next.fields.slug}`} rel="next">
                        {next.frontmatter.title} →
                    </Link>
                    )}
                </li>
                </ul>
            </div>
        </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        body
        timeToRead
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredImage {
                childImageSharp {
                    fluid (maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
  }
`
