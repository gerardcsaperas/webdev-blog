module.exports = {
  siteMetadata: {
    // edit below
    title: `Web Dev Nomad`,
    author: `Gerard Castrelo Saperas`,
    description: `Un blog sobre desarrollo web y aprendizaje autónomo.`,
    siteUrl: `https://webdevnomad.com/`,
    social: {
      twitter: `____gerard____`,
      youtube: `webdev nomad`,
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
            {
                allMdx {
                    nodes {
                        id
                        fields { slug }
                        excerpt
                        rawBody
                        timeToRead
                        frontmatter {
                            title
                            description
                            date(formatString: "MMMM DD, YYYY")
                            featuredImage {
                                childImageSharp {
                                    fluid (maxWidth: 1000, quality: 100) {
                                        base64
                                        tracedSVG
                                        srcWebp
                                        srcSetWebp
                                        originalImg
                                        originalName
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        ref: "id",
        index: ["title", "rawBody"],
        store: ["id", "slug", "date", "title", "excerpt", "description", "timeToRead", "featuredImage"],
        normalizer: ({ data }) =>
            data.allMdx.nodes.map(node => ({
                id: node.id,
                slug: node.fields.slug,
                rawBody: node.rawBody,
                excerpt: node.excerpt,
                timeToRead: node.timeToRead,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                featuredImage: node.frontmatter.featuredImage,
                date: node.frontmatter.date,
            })),
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-root-import`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/content/blog`,
            name: `blog`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/content/assets`,
            name: `assets`,
        },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
