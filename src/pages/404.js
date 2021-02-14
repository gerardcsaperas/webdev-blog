import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} marginTop="0">
        <SEO title="404: Not Found" />
        <div style={{textAlign: "center"}}>
            <h1>404 Not Found</h1>
            <img src="https://media.giphy.com/media/2WxWfiavndgcM/giphy.gif"></img>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
