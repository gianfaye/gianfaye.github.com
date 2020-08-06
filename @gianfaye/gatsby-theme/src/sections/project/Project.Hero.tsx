import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IProject, IWork } from '@types';

import ProjectWorks from './Project.Works';
import ProjectCategories from './Project.Categories';

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
        {/*<HeroCrumbs id="ProjectBreadcrumb">*/}
        {/*  <HeroCrumb as={Link} to={'/'}>*/}
        {/*    HOME*/}
        {/*  </HeroCrumb>*/}
        {/*  <HeroCrumbSeparator>&gt;</HeroCrumbSeparator>*/}
        {/*  <HeroCrumb as={Link} to={'/projects'}>*/}
        {/*    PROJECTS*/}
        {/*  </HeroCrumb>*/}
        {/*  <HeroCrumbSeparator>&gt;</HeroCrumbSeparator>*/}
        {/*  <HeroCrumb className="active">*/}
        {/*    {project.title}*/}
        {/*  </HeroCrumb>*/}
        {/*</HeroCrumbs>*/}
        <HeroHeading id="ProjectTitle">{project.title}</HeroHeading>
        <HeroExcerpt>{project.excerpt}</HeroExcerpt>
        <HeroSubtitle hasMultipleWorks={hasMultipleWorks}>
          <ProjectWorks works={works} />
          <ProjectCategories categories={categories} />
          <ProjectMeta hasMultipleWorks={hasMultipleWorks}>
            {project.date}
          </ProjectMeta>
        </HeroSubtitle>
      </Header>
      <HeroImage id="ProjectImage__Hero">
        {hasHeroImage ? (
          <Image src={project.hero.full} />
        ) : (
          <ImagePlaceholder />
        )}
        <HeroTaglineContainer>
          <HeroTagline id="heroTagline">
            <HeroTaglineText>
              {project.title}
            </HeroTaglineText>
          </HeroTagline>
        </HeroTaglineContainer>
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

const HeroTaglineContainer = styled.div`
  ${mediaqueries.phablet`
    display: none;
  `}
`;

const HeroTagline = styled.div`
  height: 60px;
  width: 43.75vw;
  max-width: 700px;
  text-align: right;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  //position: absolute;
  position: fixed;
  bottom: 100%;
  right: 0;
  transform-origin: right bottom;
  transform: rotate(-90deg);
  width: 52.812vw;
  max-width: 845px;
  bottom: auto;
  //top: calc(100% + -15px);
  top: 50px;
  z-index: 10;
  opacity: 0;

  &.show{
    opacity: 1;
  }

  ${mediaqueries.tablet`
    width: 40vw;
  `};
`;

const HeroTaglineText = styled.span`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .2em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  padding-right: 60px;

  &::after{
    background-color: ${p => p.theme.colors.primary};
    content: '';
    display: inline-block;
    height: 1px;
    width: 40px;
    margin-left: 20px;
    position: absolute;
    right: 0;
    top: 29px;
  }
`;

const ProjectMeta = styled.div<{ hasMultipleWorks: boolean }>`
  margin-left: 7px;
  padding: 14px 5px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  height: max-content;
  opacity: 0.3;

  ${mediaqueries.phablet`
    text-align: center;
    padding: 0;
    margin: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin: 60px auto 40px auto;
  padding-left: 28px;
  max-width: 1000px;

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
    margin: 30px;
    padding: 60px 40px;
    background: #FFF;
    border: 1px solid;
  `}

`;

const HeroCrumbs = styled.div`
  display: block;
  text-decoration: none;
  padding-bottom: 3px;
  text-align: center;
  width: 100%;

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
  font-size: 60px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: 400;line-height: 1;
  margin-bottom: 15px;
  text-align: center;
  max-width: 800px;
  margin: 45px auto 20px auto;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroExcerpt = styled(Headings.h4)`
  font-size: 24px;
  font-family: "Sentinel Italic";
  font-style: italic;
  font-weight: 400;
  max-width: 700px;
  text-align: center;
  margin: 0 auto 30px auto;

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
  // padding: 0px 0 30px;
  // border-bottom: 5px solid ${p => p.theme.colors.primary};
  justify-content: center;

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
  // max-width: 944px;
  // overflow: hidden;
  margin: 0 auto;
  // box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
  //   0 18px 36px -18px rgba(0, 0, 0, 0.22);
  margin-top: 30px;

  img {
    z-index: 50;
  }

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    //width: calc(100vw - 40px);
    height: 220px;
    display: none;

    & > div {
      height: 220px;
    }
`}
`;

