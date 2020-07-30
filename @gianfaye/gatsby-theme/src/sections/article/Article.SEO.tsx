import React from 'react';

import SEO from '@components/SEO';

import { IArticle, ITopic } from '@types';
import { graphql, useStaticQuery } from 'gatsby';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
          }
        }
      }
    }
  }
`;

interface ArticleSEOProps {
  article: IArticle;
  topics: ITopic[];
  location: Location;
  imagelocation?: string;
}

const ArticleSEO: React.FC<ArticleSEOProps> = ({
  article,
  topics,
  location,
  imagelocation,
}) => {
  const results = useStaticQuery(siteQuery);
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;

  const topicsName = topics.map(topic => (topic.name));
  const topicsSlug = topics.map(topic => (topic.slug));
  const topicsBio = topics.map(topic => (topic.bio));

  // Checks if the source of the image is hosted on Contentful
  if (`${article.hero.seo.src}`.includes('ctfassets')) {
    imagelocation = `https:${article.hero.seo.src}`;
  } else {
    imagelocation = `${siteUrl + article.hero.seo.src}`;
  }

  return (
    <SEO
      topicName={topicsName}
      topicsBio={topicsBio}
      topicsSlug={topicsSlug}
      canonicalUrl={article.canonical_url}
      dateforSEO={article.dateForSEO}
      description={article.excerpt}
      image={imagelocation}
      isBlogPost={true}
      articlepathName={siteUrl + location.pathname}
      published={article.date}
      timeToRead={article.timeToRead}
      title={article.title}
      isSecret={article.secret}
    >
    </SEO>
  );
};

export default ArticleSEO;
