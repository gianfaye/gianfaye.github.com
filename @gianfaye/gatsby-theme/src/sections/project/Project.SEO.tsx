import React from 'react';

import SEO from '@components/SEO';

import { IProject, IWork } from '@types';
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

interface ProjectSEOProps {
  project: IProject;
  works: IWork[];
  location: Location;
  imagelocation?: string;
}

const ProjectSEO: React.FC<ProjectSEOProps> = ({
  project,
  works,
  location,
  imagelocation,
}) => {
  const results = useStaticQuery(siteQuery);
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;

  const worksName = works.map(work => (work.name));
  const worksSlug = works.map(work => (work.slug));
  const worksBio = works.map(work => (work.bio));

  // Checks if the source of the image is hosted on Contentful
  if (`${project.hero.seo.src}`.includes('ctfassets')) {
    imagelocation = `https:${project.hero.seo.src}`;
  } else {
    imagelocation = `${siteUrl + project.hero.seo.src}`;
  }

  return (
    <SEO
      workName={worksName}
      worksBio={worksBio}
      worksSlug={worksSlug}
      canonicalUrl={project.canonical_url}
      dateforSEO={project.dateForSEO}
      description={project.excerpt}
      image={imagelocation}
      isBlogPost={true}
      projectpathName={siteUrl + location.pathname}
      published={project.date}
      timeToRead={project.timeToRead}
      title={project.title}
      isSecret={project.secret}
    >
    </SEO>
  );
};

export default ProjectSEO;
