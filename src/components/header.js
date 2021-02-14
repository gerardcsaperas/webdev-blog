import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )

    return (
        <div className={headerStyles.Header}>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.description}</p>
            <nav>
                <ul className={headerStyles.navUl}>
                    <li>
                        <Link
                        className="navLink"
                        activeClassName="activeNavLink"
                        to="/"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link
                        className="navLink"
                        activeClassName="activeNavLink"
                        to="/sobre-mi"
                        >
                            Sobre Mí
                        </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link
                        className="navLink"
                        activeClassName="activeNavLink"
                        to="/contacto"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
