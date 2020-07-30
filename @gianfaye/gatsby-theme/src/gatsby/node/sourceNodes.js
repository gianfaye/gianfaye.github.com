module.exports = ({ actions }) => {
  actions.createTypes(`
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      topic: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      timeToRead: Int
      canonical_url: String
    }
  `);
  actions.createTypes(`
    type Project implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      work: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      timeToRead: Int
      canonical_url: String
    }
  `);
};
