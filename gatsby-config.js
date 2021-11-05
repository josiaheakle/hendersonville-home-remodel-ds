module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "template-site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `svxot7ob`,
        dataset: `production`,
      },

    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: `svxot7ob`,
        dataset: `production`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`, `Source Sans Pro`, `Lato`, `Merriweather`
        ],
      }
    }

  ],
};
