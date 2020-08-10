/* eslint-disable */

/**
 * In order to improve the topicing experience we'll set a fallback for hero images
 * when they're not provided. This will allow you to write articles without immediately
 * adding a hero image.
 *
 * @param {Object} heroSource
 */
function normalizeHero(article) {
  let hero = {
    full: {},
    regular: {},
    narrow: {},
    seo: {},
  };

  if (article.hero) {
    hero = {
      full: article.hero.full.fluid,
      regular: article.hero.regular.fluid,
      narrow: article.hero.narrow.fluid,
      seo: article.hero.seo.fixed,
    };
  } else {
    console.log('\u001B[33m', `Missing hero for "${article.title}"`);
  }

  return hero;
}

function normalizeAvatar(topic) {
  let avatar = {
    small: {},
    medium: {},
    large: {},
  };

  if (topic.avatar) {
    avatar = {
      small: topic.avatar.small.fluid,
      medium: topic.avatar.medium.fluid,
      large: topic.avatar.large.fluid,
    };
  } else {
    console.log('\u001B[33m', `Missing avatar for "${topic.name}"`);
  }

  return avatar;
}

module.exports.local = {
  articles: ({ node: article }) => {
    return {
      ...article,
      hero: normalizeHero(article),
    };
  },
  projects: ({ node: project }) => {
    return {
      ...project,
      hero: normalizeHero(project),
    };
  },
  topics: ({ node: topic }) => {
    return {
      ...topic,
      avatar: normalizeAvatar(topic),
    };
  },
  works: ({ node: work }) => {
    return {
      ...work,
      avatar: normalizeAvatar(work),
    };
  },
  clients: ({ node: client }) => {
    return {
      ...client,
      avatar: normalizeAvatar(client),
    };
  },
};

module.exports.contentful = {
  articles: ({ node: article }) => {
    const topic = article.topic.reduce((curr, next, index, array) => {
      if (array.length === 1) {
        return next.name;
      }

      return `${curr + next.name}, `;
    }, ``);

    return {
      ...article,
      topic,
      body: article.body.childMdx.body,
      timeToRead: article.body.childMdx.timeToRead,
    };
  },
  projects: ({ node: project }) => {
    const work = project.work.reduce((curr, next, index, array) => {
      if (array.length === 1) {
        return next.name;
      }

      return `${curr + next.name}, `;
    }, ``);

    return {
      ...project,
      work,
      body: project.body.childMdx.body,
      timeToRead: project.body.childMdx.timeToRead,
    };
  },
  topics: ({ node: topic }) => {
    return {
      ...topic,
      social: topic.social.map(s => ({ url: s })),
      slug: topic.fields.slug,
      topicsPage: topic.fields.topicsPage,
    };
  },
  works: ({ node: work }) => {
    return {
      ...work,
      social: work.social.map(s => ({ url: s })),
      slug: work.fields.slug,
      worksPage: work.fields.worksPage,
    };
  },
  clients: ({ node: client }) => {
    return {
      ...client,
      social: client.social.map(s => ({ url: s })),
      slug: client.fields.slug,
      clientsPage: client.fields.clientsPage,
    };
  },
};
