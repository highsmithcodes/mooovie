module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve:'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            withWebp: true,
                            tracedSVG: {
                                color: 'coral',
                            }
                        }
                    }
                ]
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-image',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Loner Reviews`,
                short_name: `LonerR`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: "src/images/icon.png",
                crossOrigin: 'use-credentials',
                },
        },
        'gatsby-plugin-offline',
    ]
}