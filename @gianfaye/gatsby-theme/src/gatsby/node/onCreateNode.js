/* eslint-disable no-prototype-builtins */

const crypto = require(`crypto`);
const slugify = require('slugify');

// Create fields for post slugs and source
// This will change with schema customization with work
module.exports = ({ node, actions, getNode, createNodeId }, themeOptions) => {
  const { createNode, createNodeField, createParentChildLink } = actions;
  const contentPath = themeOptions.contentPath || 'content/posts';
  const projectPath = themeOptions.projectPath || 'content/projects';
  const basePath = themeOptions.basePath || '/';
  const articlePermalinkFormat = themeOptions.articlePermalinkFormat || ':slug';
  const projectPermalinkFormat = themeOptions.projectPermalinkFormat || ':slug';

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode && fileNode.sourceInstanceName;

  // ///////////////// Utility functions ///////////////////

  function generateArticlePermalink(slug, date) {
    const [year, month, day] = date.match(/\d{4}-\d{2}-\d{2}/)[0].split('-');
    const permalinkData = {
      year,
      month,
      day,
      slug,
    };

    const permalinkArticle = articlePermalinkFormat.replace(
      /(:[a-z_]+)/g,
      match => {
        const key = match.substr(1);
        if (permalinkData.hasOwnProperty(key)) {
          return permalinkData[key];
        }
        throw new Error(`
          We could not find the value for: "${key}".
          Please verify the articlePermalinkFormat format in theme options.
          https://github.com/narative/gatsby-theme#theme-options
        `);
      },
    );

    return permalinkArticle;
  }

  function generateProjectPermalink(slug, date) {
    const [year, month, day] = date.match(/\d{4}-\d{2}-\d{2}/)[0].split('-');
    const permalinkData = {
      year,
      month,
      day,
      slug,
    };

    const permalinkProject = projectPermalinkFormat.replace(
      /(:[a-z_]+)/g,
      match => {
        const key = match.substr(1);
        if (permalinkData.hasOwnProperty(key)) {
          return permalinkData[key];
        }
        throw new Error(`
          We could not find the value for: "${key}".
          Please verify the projectPermalinkFormat format in theme options.
          https://github.com/narative/gatsby-theme#theme-options
        `);
      },
    );

    return permalinkProject;
  }

  function generateSlug(...arguments_) {
    return `/${arguments_.join('/')}`.replace(/\/\/+/g, '/');
  }

  // ///////////////////////////////////////////////////////

  if (node.internal.type === `TopicsYaml`) {
    const slug = node.slug
      ? `/${node.slug}`
      : slugify(node.name, {
          lower: true,
        });

    const fieldData = {
      ...node,
      topicsPage: themeOptions.topicsPage || false,
      slug: generateSlug(basePath, 'topics', slug),
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Topic`),
      parent: node.id,
      children: [],
      internal: {
        type: `Topic`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Topic`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });

    return;
  }

  if (node.internal.type === `WorksYaml`) {
    const slug = node.slug
      ? `/${node.slug}`
      : slugify(node.name, {
          lower: true,
        });

    const fieldData = {
      ...node,
      worksPage: themeOptions.worksPage || false,
      slug: generateSlug(basePath, 'works', slug),
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Work`),
      parent: node.id,
      children: [],
      internal: {
        type: `Work`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Work`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });

    return;
  }

  if (node.internal.type === `Mdx` && source === contentPath) {
    const fieldData = {
      topic: node.frontmatter.topic,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero,
      secret: node.frontmatter.secret || false,
      slug: generateSlug(
        basePath,
        generateArticlePermalink(
          slugify(node.frontmatter.slug || node.frontmatter.title, {
            lower: true,
          }),
          node.frontmatter.date,
        ),
      ),
      title: node.frontmatter.title,
      subscription: node.frontmatter.subscription !== false,
      canonical_url: node.frontmatter.canonical_url,
      categories: node.frontmatter.categories || [],
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Article`),
      parent: node.id,
      children: [],
      internal: {
        type: `Article`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Article Posts`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }

  if (node.internal.type === `Mdx` && source === projectPath) {
    const fieldData = {
      work: node.frontmatter.work,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero,
      secret: node.frontmatter.secret || false,
      slug: generateSlug(
        basePath,
        generateProjectPermalink(
          slugify(node.frontmatter.slug || node.frontmatter.title, {
            lower: true,
          }),
          node.frontmatter.date,
        ),
      ),
      title: node.frontmatter.title,
      subscription: node.frontmatter.subscription !== false,
      canonical_url: node.frontmatter.canonical_url,
      categories: node.frontmatter.categories || [],
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Project`),
      parent: node.id,
      children: [],
      internal: {
        type: `Project`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(fieldData))
          .digest(`hex`),
        content: JSON.stringify(fieldData),
        description: `Project Posts`,
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }

  if (node.internal.type === `ContentfulTopic`) {
    createNodeField({
      node,
      name: `slug`,
      value: generateSlug(
        basePath,
        'topics',
        slugify(node.name, {
          lower: true,
        }),
      ),
    });

    createNodeField({
      node,
      name: `topicsPage`,
      value: themeOptions.topicsPage || false,
    });
  }

  if (node.internal.type === `ContentfulWork`) {
    createNodeField({
      node,
      name: `slug`,
      value: generateSlug(
        basePath,
        'works',
        slugify(node.name, {
          lower: true,
        }),
      ),
    });

    createNodeField({
      node,
      name: `worksPage`,
      value: themeOptions.worksPage || false,
    });
  }
};
