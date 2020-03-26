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
                background_color: '#6b37bf',
                theme_color: "#6b37bf",
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
        // {
        //     resolve: "gatsby-plugin-web-font-loader",
        //     options: {
        //         custom: {
        //             families: ["GlacialIndifference, LeagueGothic"],
        //             urls: ["src/fonts/fonts.css"],
        //         },
        //     },
        // },
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //       name: "fonts",
        //       path: `src/fonts/`
        //     }
        // },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
}
