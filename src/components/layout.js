import React from "react"
import Header from "./header"
import hoursDedicatedToWebDev from '../utils/hoursDedicatedToWebDev'
import layoutStyles from './Layout.module.scss'
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Layout = (props) => {

    const { children, image } = props

    return (
        <div>
            <Header />
            <Img className={layoutStyles.headerImg}  fluid={image} imgStyle={{
                objectPosition: "50% 50%",
            }}/>
            <div
            className={layoutStyles.contentContainer}
            style={
                {
                    marginTop: `${props.marginTop || -260 }px`
                }
            }
            >
                {children}
            </div>
            <footer className={layoutStyles.footer}>
                <p>© {new Date().getFullYear()}, Gerard Castrelo Saperas</p>
                <p>Experiencia total en Desarrollo Web: {hoursDedicatedToWebDev()}</p>
            </footer>
        </div>
    )
}

export default Layout