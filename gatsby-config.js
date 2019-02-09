module.exports = {
    siteMetadata: {
        title: `Hannah Werman`,
        description: `Front End Developer | Blockchain Enthusiast | Nomad`,
    },
    pathPrefix: "/gatsby-portfolio",
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: "#6b37bf",
                display: 'minimal-ui',
                // icon: 'src/images/icon.png',
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
        // {
        //   resolve: 'gatsby-plugin-material-ui',
        //   options: {
        //     pathToTheme: 'src/themes/default',
        //   },
        // },
    ],
}
