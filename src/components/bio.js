import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import bioStyles from "./bio.module.scss"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
            <div className={bioStyles.container}>
                <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                    marginRight: "2rem",
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
                />
                <p className={bioStyles.text}>
                Escrito por <strong>{author}</strong>, amante del Desarrollo Web y Japón.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                    Sígueme en Twitter
                </a>
                .
                </p>
            </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "gerard.jpg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
