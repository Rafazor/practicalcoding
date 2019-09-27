/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        siteUrl: `https://www.onlinecodingbooks.com`,
    },
    plugins: [`gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                // Exclude specific pages or groups of pages using glob parameters
                // See: https://github.com/isaacs/minimatch
                // The example below will exclude the single `path/to/page` and all routes beginning with `category`
                exclude: ["/quiz/"],
            }
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en'
            }
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-148801842-1`,
                // Puts tracking script in the head instead of the body
                head: true,
                // enable ip anonymization
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Online Coding Books`,
                short_name: `onlineCodingBooks`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/images/icon.ico`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`
    ]
}
