import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import Headings from "@components/Headings";
import Image from "@components/Image";

import mediaqueries from "@styles/media";

import { IProject } from "@types";

interface ProjectsNextProps {
  projects: IProject[]
}

/**
 * Sits at the bottom of our Project page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 *
 *  [..............], [.........]
 *  [.....LONG.....], [..SHORT..]
 *  [..............], [.........]
 *
 * This does NOT use Projects.List because there's a special case of only have 1 project
 * as the next one suggested project, which requires special styling we didn't want to
 * mix into the generic list component.
 */
const ProjectsNext: React.FC<ProjectsNextProps> = ({ projects }) => {
  if (!projects) return null;
  const numberOfProjects = projects.length;
  //console.log('projects', projects);
  return (
    <Grid numberOfProjects={numberOfProjects}>
      <GridItem project={projects[0]} />
      <GridItem project={projects[1]} narrow />
    </Grid>
  );
};

export default ProjectsNext;

interface GridItemProps {
  project: IProject;
  narrow?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ project, narrow }) => {
  if (!project) return null;

  const hasOverflow = narrow && project.title.length > 35;
  const imageSource = narrow ? project.hero.narrow : project.hero.regular;

  return (
    <ProjectLink
      to={project.slug}
      data-a11y="false"
      narrow={narrow ? "true" : "false"}
    >
      <Item>
        <ImageContainer>
          <Image src={imageSource} />
        </ImageContainer>
        <ProjectContent>
          <ProjectTaxonomy>
            <span className="Project__Categories">{project.categories}</span>
            <span className="Project__Works">{project.work}</span>
          </ProjectTaxonomy>
          <Title dark hasOverflow={hasOverflow}>
            {project.title}
          </Title>
          <MetaData>
            <span className="Project__Date">{project.date}</span> &bull; &nbsp;
            <span className="Project__TimeToRead">{project.timeToRead} min read</span>
          </MetaData>{" "}
        </ProjectContent>
      </Item>
    </ProjectLink>
  );
};

const wide = "1fr";
const narrow = "457px";

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  //display: -webkit-box;
  display: inline;
  white-space: normal;
  overflow: hidden;
  //min-height: 84px;
  margin-bottom: 25px;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const Grid = styled.div<{ numberOfProjects: number }>`
  position: relative;
  display: grid;
  ${p => {
  if (p.numberOfProjects === 1) {
    return `
      grid-template-columns: 1fr;
      grid-template-rows: 1
    `;
  } else {
    return `
      grid-template-columns: ${wide} ${wide};
      grid-template-rows: 2;
      `;
  }
}}
  column-gap: 30px;
  margin: 0 auto;
  max-width: ${p => (p.numberOfProjects === 1 ? "680px" : "100%")};

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const ImageContainer = styled.div<{ narrow: boolean; }>`
  position: relative;
  height: '220px';
  //box-shadow: 0 30px 60px -10px rgba(0, 0, 0, ${p => (p.narrow ? 0.22 : 0.3)}),
    0 18px 36px -18px rgba(0, 0, 0, ${p => (p.narrow ? 0.25 : 0.33)});
  overflow: hidden;
  z-index: 300;
  display: block;

  & > div {
    height: 100%;
    transition: transform 0.3s var(--ease-out-quad),
    scale 0.3s var(--ease-out-quad);
  }

  ${mediaqueries.tablet`
    height: 200px;
    //margin-bottom: 35px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
    //border-top-right-radius: 5px;
    //border-top-left-radius: 5px;
  `}
`;

const Item = styled.div`
  position: relative;

  @media (max-width: 540px) {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${p => p.theme.colors.card};
  }
`;


const Title = styled(Headings.h2)`
  font-size: 28px;
  font-weight: 400;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: '25px';
  //transition: color 0.3s ease-in-out;
  ${limitToTwoLines};
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  -webkit-transition: background-size .8s ease;
  transition: background-size .8s ease;
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(99%,transparent),color-stop(1%,${p => p.theme.colors.primary}));
  background-image: linear-gradient(180deg,transparent 99%,${p => p.theme.colors.primary} 0);

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.p<{ narrow: boolean; hasOverflow: boolean }>`
  ${limitToTwoLines};
  font-size: 16px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.grey};
  display: ${p => (p.hasOverflow ? "none" : "box")};
  max-width: ${p => (p.narrow ? "415px" : "515px")};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;


const ProjectContent = styled.div<{
  gridLayout: string;
}>`
  padding: 30px;
  background: ${p => p.theme.colors.card};
  //margin:  ${p => (p.gridLayout === 'tiles' ? '-150px 30px 20px 30px' : '110px 0 -30px -100px')};
  z-index: 600;
  display: block;
  position: relative;

  ${mediaqueries.tablet`
    margin: 0 auto;
    width: 100%;
  `}
`;

const MetaData = styled.div<{
  gridLayout: string;
}>`
  font-weight: 400;
  font-size: 16px;
  color: ${p => p.theme.colors.lightGrey};
  margin-top: ${p => (p.gridLayout === 'tiles' ? '20px' : '10px')};;
  //opacity: 0.5;
  //font-style: italic;

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 0;
  `}
`;

const ProjectTaxonomy = styled.div<{
  gridLayout: string;
}>`
  font-weight: 600;
  font-size: 12px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 2px;
  margin-bottom: ${p => (p.gridLayout === 'tiles' ? '20px' : '10px')};
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  .Project__Categories{
    margin-right: 5px;
    color: ${p => p.theme.colors.lightGrey};
    margin-left: 1px;
  }
  .Project__Works{
  }

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 0;
  `}
`;

const ProjectLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  //border-bottom: 5px solid ${p => p.theme.colors.primary};

  &:hover ${ImageContainer} > div, &:focus ${ImageContainer} > div{
    //transform: translateY(-1px);
    //box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
  }

  &:hover h2,
  &:focus h2 {
    //color: ${p => p.theme.colors.accent};
    background-size: 100% 100%;
    cursor: pointer;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    //border-radius: 5px;
  }

  ${mediaqueries.tablet`
    &:first-child{
      margin-bottom: 40px;
    }
  `}

  ${mediaqueries.phablet`

    &:hover ${ImageContainer} {
      transform: none;
      //box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
