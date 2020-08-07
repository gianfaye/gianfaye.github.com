/* eslint-disable no-console, import/no-extraneous-dependencies, prefer-const, no-shadow */

require('dotenv').config();

const log = (message, section) =>
  console.log(`\n\u001B[36m${message} \u001B[4m${section}\u001B[0m\u001B[0m\n`);

const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

const templatesDirectory = path.resolve(__dirname, '../../templates');
const templates = {
  home: path.resolve(templatesDirectory, 'index.template.tsx'),
  articles: path.resolve(templatesDirectory, 'articles.template.tsx'),
  article: path.resolve(templatesDirectory, 'article.template.tsx'),
  projects: path.resolve(templatesDirectory, 'projects.template.tsx'),
  project: path.resolve(templatesDirectory, 'project.template.tsx'),
  topic: path.resolve(templatesDirectory, 'topic.template.tsx'),
  topics: path.resolve(templatesDirectory, 'topics.template.tsx'),
  work: path.resolve(templatesDirectory, 'work.template.tsx'),
  works: path.resolve(templatesDirectory, 'works.template.tsx'),
  category: path.resolve(templatesDirectory, 'category.template.tsx'),
};

const query = require('../data/data.query');
const normalize = require('../data/data.normalize');

// ///////////////// Utility functions ///////////////////

function buildPaginatedPath(index, basePath) {
  if (basePath === '/') {
    return index > 1 ? `${basePath}page/${index}` : basePath;
  }
  return index > 1 ? `${basePath}/page/${index}` : basePath;
}

function slugify(string, base) {
  const slug = string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return `${base}/${slug}`.replace(/\/\/+/g, '/');
}

function getUniqueListBy(array, key) {
  return [...new Map(array.map(item => [item[key], item])).values()];
}

const byDate = (a, b) => new Date(b.dateForSEO) - new Date(a.dateForSEO);

// ///////////////////////////////////////////////////////

module.exports = async ({ actions: { createPage }, graphql }, themeOptions) => {
  const {
    rootPath,
    basePath = '/',
    topicsPath = '/topics',
    worksPath = '/works',
    categoryPath = '/category',
    articlesPath = '/blog',
    projectsPath = '/projects',
    topicsPage = true,
    worksPage = true,
    pageLength = 10,
    sources = {},
    mailchimp = '',
  } = themeOptions;

  const { data } = await graphql(`
    query siteQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  // console.log(sources);
  // Defaulting to look at the local MDX files as sources.
  const { local = true, contentful = false } = sources;

  let topics;
  let works;
  let articles;
  let projects;

  const dataSources = {
    local: { topics: [], works: [], articles: [], projects: [] },
    contentful: { topics: [], works: [], articles: [], projects: [] },
    netlify: { topics: [], works: [], articles: [], projects: [] },
  };

  if (rootPath) {
    log('Config rootPath', rootPath);
  } else {
    log('Config rootPath not set, using basePath instead =>', basePath);
  }

  log('Config basePath', basePath);
  if (topicsPage) log('Config topicsPath', topicsPath);
  if (worksPage) log('Config worksPath', worksPath);

  if (local) {
    try {
      log('Querying Topics, Works, Articles, & Projects source:', 'Local');
      const localTopics = await graphql(query.local.topics);
      const localWorks = await graphql(query.local.works);
      const localArticles = await graphql(query.local.articles);
      const localProjects = await graphql(query.local.projects);

      dataSources.local.topics = localTopics.data.topics.edges.map(
        normalize.local.topics,
      );

      dataSources.local.works = localWorks.data.works.edges.map(
        normalize.local.works,
      );

      dataSources.local.articles = localArticles.data.articles.edges.map(
        normalize.local.articles,
      );

      dataSources.local.projects = localProjects.data.projects.edges.map(
        normalize.local.projects,
      );
    } catch (error) {
      console.error(error);
    }
  }

  if (contentful) {
    try {
      log('Querying Topics, Articles, & Projects source:', 'Contentful');
      const contentfulTopics = await graphql(query.contentful.topics);
      const contentfulWorks = await graphql(query.contentful.works);
      const contentfulArticles = await graphql(query.contentful.articles);
      const contentfulProjects = await graphql(query.contentful.projects);

      dataSources.contentful.topics = contentfulTopics.data.topics.edges.map(
        normalize.contentful.topics,
      );

      dataSources.contentful.works = contentfulWorks.data.works.edges.map(
        normalize.contentful.works,
      );

      dataSources.contentful.articles = contentfulArticles.data.articles.edges.map(
        normalize.contentful.articles,
      );

      dataSources.contentful.projects = contentfulProjects.data.projects.edges.map(
        normalize.contentful.projects,
      );
    } catch (error) {
      console.error(error);
    }
  }

  // Combining together all the articles from different sources
  articles = [
    ...dataSources.local.articles,
    ...dataSources.contentful.articles,
    ...dataSources.netlify.articles,
  ].sort(byDate);

  const articlesThatArentSecret = articles.filter(article => !article.secret);

  // Combining together all the articles from different sources
  projects = [
    ...dataSources.local.projects,
    ...dataSources.contentful.projects,
    ...dataSources.netlify.projects,
  ].sort(byDate);

  const projectsThatArentSecret = projects.filter(project => !project.secret);

  // Combining together all the topics from different sources
  topics = getUniqueListBy(
    [
      ...dataSources.local.topics,
      ...dataSources.contentful.topics,
      ...dataSources.netlify.topics,
    ],
    'name',
  );

  // Combining together all the works from different sources
  works = getUniqueListBy(
    [
      ...dataSources.local.works,
      ...dataSources.contentful.works,
      ...dataSources.netlify.works,
    ],
    'name',
  );

  if (
    articles.length === 0 ||
    topics.length === 0 ||
    works.length === 0 ||
    projects.length === 0
  ) {
    throw new Error(`
    You must have at least one Topic and Post. As reference you can view the
    example repository. Look at the content folder in the example repo.
    https://github.com/narative/gatsby-theme-example
  `);
  }

  const categories = articles.reduce((acc, article) => {
    return [...acc, ...article.categories];
  }, []);

  const uniqueCategories = [...new Set(categories)];

  if (uniqueCategories.length === 0 || uniqueCategories.length === 0) {
    throw new Error(`
    You must have at least one Category to create category page.
  `);
  }

  /**
   * Once we've queried all our data sources and normalized them to the same structure
   * we can begin creating our pages. First, we'll want to create all main articles pages
   * that have pagination.
   * /
   * /page/1
   * ...
   */
  log('Creating', 'home page');
  createPaginatedPages({
    edges: articlesThatArentSecret,
    pathPrefix: rootPath,
    createPage,
    pageLength,
    pageTemplate: templates.home,
    buildPath: buildPaginatedPath,
    context: {
      articles: articlesThatArentSecret,
      projects: projectsThatArentSecret,
      topics,
      works,
      basePath,
      skip: pageLength,
      limit: pageLength,
    },
  });

  /**
   * Once we've queried all our data sources and normalized them to the same structure
   * we can begin creating our pages. First, we'll want to create all main articles pages
   * that have pagination.
   * /articles
   * /articles/page/1
   * ...
   */
  log('Creating', 'articles page');
  createPaginatedPages({
    edges: articlesThatArentSecret,
    pathPrefix: articlesPath,
    createPage,
    pageLength,
    pageTemplate: templates.articles,
    buildPath: buildPaginatedPath,
    context: {
      topics,
      basePath,
      skip: pageLength,
      limit: pageLength,
    },
  });

  /**
   * Once the list of articles have bene created, we need to make individual article posts.
   * To do this, we need to find the corresponding topics since we allow for co-topics.
   */
  log('Creating', 'article posts');
  articles.forEach((article, index) => {
    // Match the Topic to the one specified in the article
    let topicsThatWroteTheArticle;
    try {
      topicsThatWroteTheArticle = topics.filter(topic => {
        const allTopics = article.topic
          .split(',')
          .map(a => a.trim().toLowerCase());

        return allTopics.some(a => a === topic.name.toLowerCase());
      });
    } catch (error) {
      throw new Error(`
        We could not find the Topic for: "${article.title}".
        Double check the topic field is specified in your post and the name
        matches a specified topic.
        Provided topic: ${article.topic}
        ${error}
      `);
    }

    /**
     * We need a way to find the next artiles to suggest at the bottom of the articles page.
     * To accomplish this there is some special logic surrounding what to show next.
     */
    let next = articlesThatArentSecret.slice(index + 1, index + 3);
    // If it's the last item in the list, there will be no articles. So grab the first 2
    if (next.length === 0) next = articlesThatArentSecret.slice(0, 2);
    // If there's 1 item in the list, grab the first article
    if (next.length === 1 && articlesThatArentSecret.length !== 2)
      next = [...next, articlesThatArentSecret[0]];
    if (articlesThatArentSecret.length === 1) next = [];

    createPage({
      path: article.slug,
      component: templates.article,
      context: {
        article,
        topics: topicsThatWroteTheArticle,
        categories: article.categories,
        basePath,
        permalink: `${data.site.siteMetadata.siteUrl}${article.slug}/`,
        slug: article.slug,
        id: article.id,
        title: article.title,
        canonicalUrl: article.canonical_url,
        mailchimp,
        next,
      },
    });
  });

  /**
   * Once we've queried all our data sources and normalized them to the same structure
   * we can begin creating our pages. First, we'll want to create all main projects pages
   * that have pagination.
   * /projects
   * /projects/page/1
   * ...
   */
  log('Creating', 'projects page');
  createPaginatedPages({
    edges: projectsThatArentSecret,
    pathPrefix: projectsPath,
    createPage,
    pageLength,
    pageTemplate: templates.projects,
    buildPath: buildPaginatedPath,
    context: {
      works,
      basePath,
      skip: pageLength,
      limit: pageLength,
    },
  });

  /**
   * Once the list of projects have bene created, we need to make individual project posts.
   * To do this, we need to find the corresponding topics since we allow for co-topics.
   */
  log('Creating', 'project posts');
  projects.forEach((project, index) => {
    // Match the Topic to the one specified in the project
    let worksThatWroteTheProject;
    try {
      worksThatWroteTheProject = works.filter(work => {
        const allTopics = project.work
          .split(',')
          .map(a => a.trim().toLowerCase());

        return allTopics.some(a => a === work.name.toLowerCase());
      });
    } catch (error) {
      throw new Error(`
        We could not find the Work for: "${project.title}".
        Double check the work field is specified in your post and the name
        matches a specified work.
        Provided work: ${project.work}
        ${error}
      `);
    }

    /**
     * We need a way to find the next artiles to suggest at the bottom of the articles page.
     * To accomplish this there is some special logic surrounding what to show next.
     */
    let next = projectsThatArentSecret.slice(index + 1, index + 3);
    // If it's the last item in the list, there will be no projects. So grab the first 2
    if (next.length === 0) next = projectsThatArentSecret.slice(0, 2);
    // If there's 1 item in the list, grab the first project
    if (next.length === 1 && projectsThatArentSecret.length !== 2)
      next = [...next, projectsThatArentSecret[0]];
    if (projectsThatArentSecret.length === 1) next = [];

    createPage({
      path: project.slug,
      component: templates.project,
      context: {
        project,
        works: worksThatWroteTheProject,
        categories: project.categories,
        basePath,
        permalink: `${data.site.siteMetadata.siteUrl}${project.slug}/`,
        slug: project.slug,
        id: project.id,
        title: project.title,
        canonicalUrl: project.canonical_url,
        mailchimp,
        next,
      },
    });
  });

  /**
   * By default the topic's page is not enabled. This can be enabled through the theme options.
   * If enabled, each topic will get their own page and a list of the articles they have written.
   */
  if (topicsPage) {
    log('Creating', 'topics page');

    topics.forEach(topic => {
      const articlesTheTopicHasWritten = articlesThatArentSecret.filter(
        article =>
          article.topic.toLowerCase().includes(topic.name.toLowerCase()),
      );
      const path = slugify(topic.slug, topicsPath);

      createPaginatedPages({
        edges: articlesTheTopicHasWritten,
        pathPrefix: topic.slug,
        createPage,
        pageLength,
        pageTemplate: templates.topic,
        buildPath: buildPaginatedPath,
        context: {
          topic,
          topics,
          originalPath: path,
          skip: pageLength,
          limit: pageLength,
        },
      });
    });
  }
  /**
   * Once we've queried all our data sources and normalized them to the same structure
   * we can begin creating our pages. First, we'll want to create all main articles pages
   * that have pagination.
   * /articles
   * /articles/page/1
   * ...
   */
  log('Creating', 'topics page');
  createPaginatedPages({
    edges: articlesThatArentSecret,
    pathPrefix: topicsPath,
    createPage,
    pageLength,
    pageTemplate: templates.topics,
    buildPath: buildPaginatedPath,
    context: {
      topics,
      basePath,
      skip: pageLength,
      limit: pageLength,
    },
  });

  /**
   * By default the work's page is not enabled. This can be enabled through the theme options.
   * If enabled, each work will get their own page and a list of the articles they have written.
   */
  if (worksPage) {
    log('Creating', 'works page');

    works.forEach(work => {
      const projectsTheWorkHasWritten = projectsThatArentSecret.filter(
        project => project.work.toLowerCase().includes(work.name.toLowerCase()),
      );
      const path = slugify(work.slug, worksPath);

      createPaginatedPages({
        edges: projectsTheWorkHasWritten,
        pathPrefix: work.slug,
        createPage,
        pageLength,
        pageTemplate: templates.work,
        buildPath: buildPaginatedPath,
        context: {
          work,
          works,
          originalPath: path,
          skip: pageLength,
          limit: pageLength,
        },
      });
    });
  }
  /**
   * Once we've queried all our data sources and normalized them to the same structure
   * we can begin creating our pages. First, we'll want to create all main projects pages
   * that have pagination.
   * /projects
   * /projects/page/1
   * ...
   */
  log('Creating', 'works page');
  createPaginatedPages({
    edges: projectsThatArentSecret,
    pathPrefix: worksPath,
    createPage,
    pageLength,
    pageTemplate: templates.works,
    buildPath: buildPaginatedPath,
    context: {
      works,
      basePath,
      skip: pageLength,
      limit: pageLength,
    },
  });
  /**
   * Creating main category pages example
   *  /category/gatsby
   * /category/gatsby/2
   */
  log('Creating', 'category pages');
  uniqueCategories.forEach(category => {
    let allArticlesOfTheCategory;
    try {
      allArticlesOfTheCategory = articles.filter(article =>
        article.categories.includes(category),
      );
    } catch (error) {
      throw new Error(`
        We could not find the Articles for: "${category}".
        Double check the categories field is specified in your post and the name
        matches a specified category.
        Category name: ${category}
        ${error}
      `);
    }
    const path = slugify(category, categoryPath);

    createPaginatedPages({
      edges: allArticlesOfTheCategory,
      pathPrefix: path,
      createPage,
      pageLength,
      pageTemplate: templates.category,
      buildPath: buildPaginatedPath,
      context: {
        category,
        originalPath: path,
        skip: pageLength,
        limit: pageLength,
      },
    });
  });
};
