import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Web Dev Nomad"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `html`,
            `css`,
            `nodejs`,
            `web`,
            `dev`,
            `desarrollo`,
          ]}
        />
        <img
          style={{ margin: 0 }}
          src="./laptopmountain.jpg"
          alt="Gatsby Scene"
        />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          ¿Qué pasa, familia?{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Bienvenidos a mi página web, lugar en el que encontrarás información
          sobre desarrollo web y gifs por igual.
        </p>
        <p>
          Soy un chico de Barcelona que, después de estudiar 5 meses por su
          cuenta (totalmente gratis), encontró su primer trabajo en desarrollo
          web.
        </p>
        <p>
          <i>...No está mal, ¿eh?</i>
        </p>
        <p>¿Quieres saber cómo puedes hacerlo tú también?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/blog/"
            style={{
              boxShadow: "none",
            }}
          >
            <Button marginTop="35px">Let's go</Button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
