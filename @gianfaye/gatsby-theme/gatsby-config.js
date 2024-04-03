/* eslint-disable */

module.exports = ({
                    contentTopics = 'content/topics',
                    contentWorks = 'content/works',
                    contentClients = 'content/clients',
                    contentPosts = 'content/posts',
                    contentProjects = 'content/projects',
                    pathPrefix = '',
                    sources: { local, contentful } = { local: true, contentful: false },
                  }) => ({
  pathPrefix,
  siteMetadata: {
    title: 'Gian Faye Paguirigan | Frontend Developer',
    description: 'I\'m a frontend engineer and UX designer from the Philippines. This site is a collective of my works, ideas, and learnings.',
    siteUrl: 'https://gianfaye.com',
    feed_url: 'https://gianfaye.com/rss.xml',
    image_url: 'https://gianfaye.com/site-preview.jpg',
  },
  plugins: [
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        setup: ({ query: { site } }) => {
          const siteMetadataModified = {
            ...site.siteMetadata,
            feed_url: `${site.siteMetadata.siteUrl}/rss.xml`,
            image_url: `${site.siteMetadata.siteUrl}/icons/icon-512x512.png`,
          };
          return {
            ...siteMetadataModified,
          };
        },
        feeds: [
          {
            title: 'Gian Faye Paguirigan | gianfaye.com | Frontend Developer Philippines',
            serialize: ({ query: { site, allArticle, allContentfulArticle, allProject, allContentfulProject } }) => {
              if (local && !contentful) {
                const allLocalData = { ...allArticle, ...allProject };
                return allLocalData.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // body is raw JS and MDX; will need to be processed before it can be used
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      topic: edge.node.topic,
                      work: edge.node.work,
                    };
                  });
              } else if (!local && contentful) {
                const allContentfulData = { ...allContentfulArticle, ...allContentfulProject };
                return allContentfulData.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + '/' + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + '/' + edge.node.slug,
                      custom_elements: [{ "content:encoded": edge.node.body.childMarkdownRemark.html }],
                      topic: edge.node.topic ? edge.node.topic.name : '',
                      work: edge.node.work ? edge.node.work.name : '',
                    };
                  });
              } else {
                const allData = { ...allArticle, ...allContentfulArticle, ...allProject, ...allContentfulProject };
                return allData.edges
                  .filter(edge => !edge.node.secret)
                  .map(edge => {
                    return {
                      ...edge.node,
                      description: edge.node.excerpt,
                      date: edge.node.date,
                      url: site.siteMetadata.siteUrl + edge.node.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.slug,
                      // custom_elements: [{ "content:encoded": edge.node.body }],
                      topic: edge.node.topic ? edge.node.topic.name : '',
                      work: edge.node.work ? edge.node.work.name : '',
                    };
                  });
              }
            },
            query:
              local && !contentful
                ? `
              {
                allArticle(sort: {date: DESC}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      topic
                      secret
                    }
                  }
                }
                allProject(sort: {date: DESC}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      work
                      secret
                    }
                  }
                }
              }
              `
                : !local && contentful
                  ? `
              {
                allContentfulArticle(sort: {date: DESC}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                      topic {
                        name
                      }
                      secret
                    }
                  }
                }
                allContentfulProject(sort: {date: DESC}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                      work {
                        name
                      }
                      client {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `
                  : `
              {
                allArticle(sort: {date: DESC}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      topic
                      secret
                    }
                  }
                }
                allProject(sort: {date: DESC}) {
                  edges {
                    node {
                      body
                      excerpt
                      date
                      slug
                      title
                      work
                      secret
                    }
                  }
                }
                allContentfulArticle(sort: {date: DESC}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                      topic {
                        name
                      }
                      secret
                    }
                  }
                }
                allContentfulProject(sort: {date: DESC}) {
                  edges {
                    node {
                      excerpt
                      date
                      slug
                      title
                      body {
                        childMarkdownRemark {
                          html
                        }
                      }
                      work {
                        name
                      }
                      client {
                        name
                      }
                      secret
                    }
                  }
                }
              }
              `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPosts,
        name: contentPosts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentTopics,
        name: contentTopics,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentWorks,
        name: contentWorks,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentClients,
        name: contentClients,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentProjects,
        name: contentProjects,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [async () => import(`remark-slug`)], // eslint-disable-line global-require
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: false,
              providers: {
                include: ["Instagram"]
              }
            }
          },
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 700,
              height: 550,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 680,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ]
            }
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        displayName: process.env.NODE_ENV === `development`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `gianfaye`
      }
    },
  ],
});
