import React from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IProject, IWork } from '@types';

import ProjectWorks from './Project.Works';
import ProjectCategories from './Project.Categories';
import {Link} from "gatsby";
//import ProjectCategories from "../article/Project.Categories";
//import ProjectWorks from "../article/Project.Works";

interface ProjectHeroProps {
  project: IProject;
  works: IWork[];
}

const ProjectHero = ({ project, works, categories }: ProjectHeroProps) => {
  const hasMultipleWorks = works.length > 1;
  const hasHeroImage =
    project.hero &&
    Object.keys(project.hero.full).length !== 0 &&
    project.hero.full.constructor === Object;

  return (
    <Hero>
      <Header>
        <HeroCrumbs>
          <HeroCrumb as={Link} to={'/'}>
            HOME
          </HeroCrumb>
          <HeroCrumbSeparator>&gt;</HeroCrumbSeparator>
          <HeroCrumb as={Link} to={'/projects'}>
            PROJECTS
          </HeroCrumb>
          <HeroCrumbSeparator>&gt;</HeroCrumbSeparator>
          <HeroCrumb className="active">
            {project.title}
          </HeroCrumb>
        </HeroCrumbs>
        <HeroHeading>{project.title}</HeroHeading>
        <HeroExcerpt>{project.excerpt}</HeroExcerpt>
        <HeroSubtitle hasMultipleWorks={hasMultipleWorks}>
          <ProjectCategories categories={categories} />
          <ProjectWorks works={works} />
          <ProjectMeta hasMultipleWorks={hasMultipleWorks}>
            {project.date} · {project.timeToRead} min read
          </ProjectMeta>
        </HeroSubtitle>
      </Header>
      <HeroImage id="ProjectImage__Hero">
        {hasHeroImage ? (
          <Image src={project.hero.full} />
        ) : (
          <ImagePlaceholder />
        )}
      </HeroImage>
    </Hero>
  );
};

export default ProjectHero;

const Hero = styled.div`
  ${p => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 20px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

const ProjectMeta = styled.div<{ hasMultipleWorks: boolean }>`
  margin-left: ${p => (p.hasMultipleWorks ? '10px' : '0')};
  padding: 10px 5px;
  width: 100%;
  text-align: right;
  font-size: 16px;
  line-height: 1.54;
  font-style: italic;

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 40px auto 120px;
  padding-left: 28px;
  max-width: 1200px;

  ${mediaqueries.desktop`
    padding-left: 0;
    max-width: calc(507px + 53px);
    margin: 60px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 60px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    padding-left: 0;
    margin: 60px 40px;
  `}

`;

const HeroCrumbs = styled.div`
  display: inline;
  text-decoration: none;
  padding-bottom: 3px;

  ${mediaqueries.tablet`
    display: none;
  `}

  ${mediaqueries.phablet`
  `}
`;

const HeroCrumbSeparator = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.32;
  display: inline;
  text-decoration: none;
  padding: 0 10px;
  color: ${p => p.theme.colors.lightGrey};
`;

const HeroCrumb = styled(Headings.h5)`
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 600;
  line-height: 1.32;
  letter-spacing: 2px;
  display: inline;
  text-decoration: none;
  //border-bottom: 2px solid;
  padding-bottom: 3px;
  color: ${p => p.theme.colors.primary};

  &.active{
    border-bottom: none;
    cursor: default;
    pointer-events: none;
  }

  &:hover{
    border-bottom: 2px solid;
  }

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 100px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: 400;
  line-height: 1.32;
  margin: 25px 0;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroExcerpt = styled(Headings.h4)`
  font-size: 26px;
  font-family: "Sentinel Italic";
  font-style: italic;
  font-weight: 400;
  margin-bottom: 20px;
  max-width: 900px;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 20px;
  `}
`;

const HeroSubtitle = styled.div<{ hasMultipleWorks: boolean }>`
  position: relative;
  display: flex;
  font-size: 18px;
  color: ${p => p.theme.colors.grey};
  padding: 0px 0 30px;
  border-bottom: 5px solid ${p => p.theme.colors.primary};

  ${p => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;

    ${p.hasMultipleWorks &&
`
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
          border-radius: 5px;
        }
    `}


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;

