import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import { graphql, useStaticQuery } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Progress from '@components/Progress';
import Section from '@components/Section';
import Subscription from '@components/Subscription';

import mediaqueries from '@styles/media';
import { debounce } from '@utils';

import ProjectAside from '../sections/project/Project.Aside';
import ProjectHero from '../sections/project/Project.Hero';
import ProjectControls from '../sections/project/Project.Controls';
import ProjectsNext from '../sections/project/Project.Next';
import ProjectSEO from '../sections/project/Project.SEO';
import ProjectShare from '../sections/project/Project.Share';

import { Template } from "@types";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
          }
        }
      }
    }
  }
`;

const Project: Template = ({ pageContext, location }) => {
  const contentSectionRef = useRef<HTMLElement>(null);

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;

  const { project, works, mailchimp, next, categories } = pageContext;

  let disqusConfig = {
    url: `${'https://gianfaye.com'+location.pathname}`,
    identifier: project.id,
    title: project.title,
  };

  useEffect(() => {
    const calculateBodySize = throttle(() => {
      const contentSection = contentSectionRef.current;

      if (!contentSection) return;

      /**
       * If we haven't checked the content's height before,
       * we want to add listeners to the content area's
       * imagery to recheck when it's loaded
       */
      if (!hasCalculated) {
        const debouncedCalculation = debounce(calculateBodySize);
        const $imgs = contentSection.querySelectorAll('img');

        $imgs.forEach($img => {
          // If the image hasn't finished loading then add a listener
          if (!$img.complete) $img.onload = debouncedCalculation;
        });

        // Prevent rerun of the listener attachment
        setHasCalculated(true);
      }

      // Set the height and offset of the content area
      setContentHeight(contentSection.getBoundingClientRect().height);
    }, 20);

    calculateBodySize();
    window.addEventListener('resize', calculateBodySize);

    return () => window.removeEventListener('resize', calculateBodySize);
  }, []);

  return (
    <Layout>
      <ProjectSEO project={project} works={works} location={location} />
      <ProjectHero
        project={project}
        works={works}
        categories={categories}
      />
      <ProjectAside contentHeight={contentHeight}>
        {/*<Progress contentHeight={contentHeight} />*/}
      </ProjectAside>
      <MobileControls>
        <ProjectControls />
      </MobileControls>
      <ProjectBody ref={contentSectionRef}>
        <MDXRenderer content={project.body}>
          <ProjectShare />
        </MDXRenderer>
      </ProjectBody>
      <CommentsContainer>
        <CommentCount config={disqusConfig} placeholder={''} />
        <Disqus config={disqusConfig} />
      </CommentsContainer>
      {/*{mailchimp && project.subscription && <Subscription />}*/}
      {next.length > 0 && (
        <NextProject narrow>
          <FooterNext>Explore more projects</FooterNext>
          <ProjectsNext projects={next} />
          <FooterSpacer />
        </NextProject>
      )}
    </Layout>
  );
};

export default Project;

const MobileControls = styled.div`
  position: relative;
  padding-top: 40px;
  transition: background 0.2s linear;
  text-align: center;

  ${mediaqueries.tablet_up`
    display: none;
  `}
`;

const CommentsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 700px;
  margin-bottom: 100px;

  ${mediaqueries.desktop_medium`
    max-width: 507px;
    padding: 0 40px;
  `}
`;

const ProjectBody = styled.article`
  position: relative;
  //padding: 160px 0 35px 0;
  padding: 80px 0 35px 0;
  transition: background 0.2s linear;

  ${mediaqueries.desktop`
    padding-left: 0;
  `}

  ${mediaqueries.tablet`
    padding: 70px 0 80px;
    margin: 0 40px;
  `}

  ${mediaqueries.phablet`
    padding: 60px 0;
    margin: 0 40px;
  `}
`;

const NextProject = styled(Section)`
  display: block;
`;

const FooterNext = styled.h3`
  position: relative;
  opacity: 0.25;
  margin-bottom: 50px;
  font-weight: 400;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: '';
    position: absolute;
    background: ${p => p.theme.colors.grey};
    width: ${(980 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 11px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}
  }
`;

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`;
