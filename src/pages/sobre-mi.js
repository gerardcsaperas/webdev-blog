import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyles from "./sobre-mi.module.scss"

function SobreMi(props) {
    const { data, location } = props
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout
        location={location}
        title={siteTitle}
        image={data.file.childImageSharp.fluid}
        marginTop="0">
            <SEO title="Sobre Mí" />
            <div className={aboutStyles.container}>
                <h1>Sobre Mí</h1>
                <p>
                    <b>TL; DR:</b> Trabajo como desarrollador (y me encanta), me gusta escribir y estoy enamorado de Japón.
                </p>
                <p>
                    ¡Hola Familia!
                </p>
                <p>
                    Me llamo Gerard, en el momento en el que escribo estas líneas tengo 27 años, vivo en pueblecito de montaña cerca de Barcelona y estamos confinados a causa del covid-19.
                </p>
                <p>
                    Soy el tío que siempre pensó que la informática era extremadamente aburrida. El tío que no era capaz de entender las clases de la optativa de programación en 4º de la ESO. 
                </p>
                <p>
                    <i>...Pero también soy el tío que vé dónde están las oportunidades.</i>
                </p>
                <p>
                    En diciembre del año pasado empecé a aprender Python y SQL para data science. Al ver lo <b>mucho</b> que me gustaba programar, en febrero decidí dejar mi puesto en la empresa en la que estaba para irme a un bootcamp de data science en Lisboa.
                </p>
                <p>
                    <b>Plot Twist:</b> A principios de marzo empezamos el bootcamp y el 14 lo estaban cerrando a causa del covid.
                </p>
                <p>
                    Volví a casa de mi madre en Barcelona. Tenía dos opciones: seguir pagando el bootcamp y estudiar a distancia, o dejarlo y aprender por mi cuenta.
                </p>
                <p>
                    <i>
                        ...En muy poco tiempo de bootcamp, ya ví que no me estaba ayudando a aprender más rápido. Había estudiado por mi cuenta durante 3 meses. Mi nivel era mucho más alto que el de mis compañeros. No quería pagar 5000 € por hacer de profesor.
                    </i>
                </p>
                <p>
                    Dio la casualidad de que, en ese momento de disyuntiva, me entró la curiosidad por el desarrollo web. El próximo pago del bootcamp no era hasta el 15 de abril, así que decidí posponer mi decisión hasta entonces.
                </p>
                <p>
                    El 6 de abril hice mi primera clase en freeCodeCamp. Quedé totalmente enganchado. Dejé el bootcamp en data science. Me encerré en mi habitación y me puse a estudiar desarrollo web día sí día también durante 4 meses y medio.
                </p>
                <p>
                    A finales de agosto de 2020, recibí mi primera oferta laboral como desarrollador júnior en una empresa de Barcelona. Un pueste totalmente remoto en el que sigo a día de hoy.
                </p>
                <p>
                    No pondré las tecnologías que controlo y las que no, porqué <b>seguro</b> que estarán desactualizadas cuando lo leas. Por ejemplo, ahora mismo estoy aprendiendo administración de sistemas Linux y Ansible, a la vez que he desarrollado este blog en Gatsby y GraphQL para aprender.
                </p>
                <p>
                    <i>...Quizás por eso me gusta tanto el web dev. No se acaba nunca.</i>
                </p>
                <p>
                    En cualquier caso, con este blog quiero empezar a compartir todo aquello que pienso que puede ser útil para aquellos aspirantes a desarrollador y que no se puede explicar en 140 caracteres.
                </p>
                <p>
                    Para todo lo demás, <a target="_blank" rel="noreferrer" href="https://twitter.com/____gerard____">Twitter</a>.
                </p>

                <p>
                    ¡Un abrazo, familia!
                </p>
                <p>
                    Gerard
                </p>
            </div>
        </Layout>
    )
}

export default SobreMi

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
