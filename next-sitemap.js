module.exports = {
  siteUrl: "https://www.pokko.io",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: process.env.PREVIEW
      ? [
          {
            userAgent: "*",
            disallow: "/",
          },
        ]
      : [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
  },
};
