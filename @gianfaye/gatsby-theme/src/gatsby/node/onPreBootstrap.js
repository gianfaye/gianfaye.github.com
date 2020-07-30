const fs = require('fs-extra'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = async ({ reporter }, themeOptions) => {
  const topicsPath = themeOptions.contentTopics || 'content/topics';
  const worksPath = themeOptions.contentTopics || 'content/works';
  const postsPath = themeOptions.contentPosts || 'content/posts';
  const projectsPath = themeOptions.contentPosts || 'content/projects';

  if (!fs.existsSync(topicsPath)) {
    reporter.warn(`
      Missing directory for Topics.
      We are creating the "${topicsPath}" directory for you.
      Please ensure you add your topics within "${topicsPath}"
    `);

    fs.mkdirSync(topicsPath, { recursive: true });
  }

  if (!fs.existsSync(worksPath)) {
    reporter.warn(`
      Missing directory for Works.
      We are creating the "${worksPath}" directory for you.
      Please ensure you add your works within "${worksPath}"
    `);

    fs.mkdirSync(topicsPath, { recursive: true });
  }

  if (!fs.existsSync(postsPath)) {
    reporter.warn(`
      Missing directory for Posts.
      We are creating the "${postsPath}" directory for you.
      Please ensure you add your posts within "${postsPath}"
    `);

    fs.mkdirSync(postsPath, { recursive: true });
  }

  if (!fs.existsSync(projectsPath)) {
    reporter.warn(`
      Missing directory for Projects.
      We are creating the "${projectsPath}" directory for you.
      Please ensure you add your posts within "${projectsPath}"
    `);

    fs.mkdirSync(projectsPath, { recursive: true });
  }
};
