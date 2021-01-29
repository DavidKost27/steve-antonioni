module.exports = {
  siteMetadata: {
    title: "Steve Antonioni",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Rancho",
          },
          {
            family: "Kaushan+Script",
          },
        ],
      },
    },

    // other plugins
  ],
};
