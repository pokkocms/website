module.exports = {
  siteUrl: process.env.PREVIEW ? "https://preview.pokko.io" : "https://www.pokko.io",
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
