module.exports = {
    siteMetadata: {
        title: `Hannah Werman`,
        description: `Front End Engineer | Progressive Tech Evangelist | Nomad`,
    },
    pathPrefix: "/gatsby-portfolio",
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: '/',
                background_color: '#475A7E',
                theme_color: "#475A7E",
                display: 'minimal-ui',
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
