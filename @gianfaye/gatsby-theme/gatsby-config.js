/* eslint-disable */

module.exports = ({
  contentTopics = 'content/topics',
  contentWorks = 'content/works',
  contentPosts = 'content/posts',
  contentProjects = 'content/projects',
  pathPrefix = '',
  sources: { local, contentful } = { local: true, contentful: false },
}) => ({
  pathPrefix,
  mapping: {
    'Mdx.frontmatter.topic': `TopicsYaml`,
    'Mdx.frontmatter.work': `WorksYaml`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
          ...rest
        }) => {
          siteMetadata.feed_url = siteMetadata.siteUrl + '/rss.xml';
          siteMetadata.image_url =
            siteMetadata.siteUrl + '/icons/icon-512x512.png';
          const siteMetadataModified = siteMetadata;
          siteMetadataModified.feed_url = `${siteMetadata.siteUrl}/rss.xml`;
          siteMetadataModified.image_url = `${siteMetadata.siteUrl}/icons/icon-512x512.png`;

          return {
            ...siteMetadataModified,
            ...rest,
          };
        },
        feeds: [
          {
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
                allArticle(sort: {order: DESC, fields: date}) {
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
                allProject(sort: {order: DESC, fields: date}) {
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
                allContentfulArticle(sort: {order: DESC, fields: date}) {
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
                allContentfulProject(sort: {order: DESC, fields: date}) {
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
                      secret
                    }
                  }
                }
              }
              `
                : `
              {
                allArticle(sort: {order: DESC, fields: date}) {
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
                allProject(sort: {order: DESC, fields: date}) {
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
                allContentfulArticle(sort: {order: DESC, fields: date}) {
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
                allContentfulProject(sort: {order: DESC, fields: date}) {
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
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer', // eslint-disable-line unicorn/prevent-abbreviations
            },
          },
        ],
        remarkPlugins: [require(`remark-slug`)], // eslint-disable-line global-require
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
