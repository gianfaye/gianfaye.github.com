require("dotenv").config();

const siteMetadata = {
  title: `Gian Faye Paguirigan`,
  name: `Gian Faye`,
  siteUrl: `https://gianfaye.com`,
  description: `I'm a frontend engineer and UX designer from the Philippines. This site is a collective of my works, ideas, and autodidactism.`,
  hero: {
    heading: `Geek of all trades`,
    maxWidth: 652,
    description: `I'm a frontend engineer= and  UX designer from the Philippines. This site is a collective of my works, ideas, and autodidactism.`,
    avatar: 'avatar.jpg',
  },
  social: [
    {
      url: `https://github.com/gianfaye`,
    },
    {
      url: `https://www.linkedin.com/gianfaye/`,
    },
    {
      url: `https://instagram.com/gianfaye`,
    },
    {
      url: `https://twitter.com/gianfaye`,
    },
    {
      name: 'stackoverflow',
      url: `https://stackexchange.com/users/2642726/gian-faye?tab=accounts`,
    },
    {
      name: `mailto`,
      url: `mailto:contact@gianfaye.com`,
    },
  ],
};

const plugins = [
  {
    resolve: "@gianfaye/gatsby-theme",
    options: {
      contentPosts: "content/posts",
      contentTopics: "content/topics",
      contentWorks: "content/works",
      contentProjects: "content/projects",
      rootPath: "/",
      basePath: "/",
      topicsPage: true,
      worksPage: true,
      articlePermalinkFormat: "/blog/:slug",
      projectPermalinkFormat: "/project/:slug",
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "fonts",
      path: `${__dirname}/static/fonts/`
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-36995024-1",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @gianfaye/gatsby-theme/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @gianfaye/gatsby-theme
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
