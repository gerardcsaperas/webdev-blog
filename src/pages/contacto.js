import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "./contacto.module.scss"

function Contacto(props) {
    const { data, location } = props
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout
        location={location}
        title={siteTitle}
        image={data.file.childImageSharp.fluid}
        marginTop="0">
            <SEO title="Contacto" />
            <div className={contactStyles.container}>
                <h1>Contacto</h1>
                <p>
                    <i>
                        ...Este podría ser el formulario de contacto menos trabajado de todo Internet, pero funciona (creo).
                    </i>
                </p>
                <form
                className={contactStyles.form}
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact"/>
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" autoComplete="off"/>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" autoComplete="off"/>
                    <label for="subject">Asunto</label>
                    <input type="text" name="subject" id="subject" autoComplete="off"/>
                    <label for="message">Mensaje</label>
                    <textarea name="message" id="message" rows="5" autoComplete="off"/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contacto

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "leio-mclaren-leiomclaren-com-e1AtwT_cGPU-unsplash.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  }
`