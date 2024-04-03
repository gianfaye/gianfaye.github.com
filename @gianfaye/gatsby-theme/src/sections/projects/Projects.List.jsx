import { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { Theme } from "@emotion/react";

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';

import { GridLayoutContext } from '../articles/Articles.List.Context';
import ProjectCategories from "../project/Project.Categories";
import ProjectWorks from "../project/Project.Works";

const ProjectsList = ({
                                                     projects,
                                                     alwaysShowAllDetails,
                                                   }) => {
  if (!projects) return null;

  const hasOnlyOneProject = projects.length === 1;
  const { gridLayout = 'tiles', hasSetGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );

  const projectPairs = projects.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  useEffect(() => getGridLayout(), []);

  return (
    <ProjectsListContainer
      style={{ opacity: hasSetGridLayout ? 1 : 0 }}
      alwaysShowAllDetails={alwaysShowAllDetails}
    >
      {projectPairs.map((ap, index) => {
        const isEven = index % 2 !== 0;
        const isOdd = index % 2 !== 1;

        return (
          <List
            key={index}
            gridLayout={gridLayout}
            hasOnlyOneProject={hasOnlyOneProject}
            reverse={isOdd}
          >
            <ListItem project={ap[0]} narrow={isOdd} />
            <ListItem project={ap[1]} narrow={isEven} />
          </List>
        );
      })}
    </ProjectsListContainer>
  );
};

export default ProjectsList;

const ListItem = ({ project, narrow }) => {
  if (!project) return null;

  let gridLayout = 'rows';
  const hasOverflow = narrow && project.title.length > 35;
  const imageSource = narrow ? project.hero.narrow : project.hero.regular;
  const hasHeroImage =
    imageSource &&
    Object.keys(imageSource).length !== 0 &&
    imageSource.constructor === Object;

  return (
    <ProjectLink to={project.slug} data-a11y="false">
      <Item gridLayout={gridLayout}>
        <ImageContainer narrow={narrow} gridLayout={gridLayout}>
          {hasHeroImage ? <Image src={imageSource} /> : <ImagePlaceholder />}
        </ImageContainer>
        <ProjectContent gridLayout={gridLayout}>
          <ProjectTaxonomy gridLayout={gridLayout}>
            <span className="Project__Works">{project.work}</span>
            <span className="Project__Date">{project.date}</span>
          </ProjectTaxonomy>
          <Title dark hasOverflow={hasOverflow} gridLayout={gridLayout}>
            {project.title}
          </Title>
          <Excerpt gridLayout={gridLayout}>
            {project.excerpt}
          </Excerpt>
          <MetaData gridLayout={gridLayout}>
            <span className="Project__Categories">{project.categories}</span>
          </MetaData>
        </ProjectContent>
      </Item>
    </ProjectLink>
  );
};

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: inline;
  white-space: normal;
  overflow: hidden;
  margin-bottom: 25px;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const showDetails = css`
  p {
    display: -webkit-box;
  }

  h2 {
    margin-bottom: 10px;
  }
`;

const ProjectsListContainer = styled.div`
  transition: opacity 0.25s;
  ${p => p.alwaysShowAllDetails && showDetails}
`;

const listItemRow = p => css`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 460px;
  grid-column-gap: 0;
  grid-template-rows: 1;
  align-items: center;
  position: relative;
  margin-bottom: 50px;

  ${mediaqueries.desktop`
    grid-column-gap: 24px;
    grid-template-columns: 1fr 380px;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 30px;
  `}
`;

const listRow = p => css`
  display: grid;
  grid-template-rows: ${p.hasOnlyOneProject ? '1fr' : '1fr 1fr'};
`;

const List = styled.div`
  ${listRow}
`;

const Item = styled.div`
  ${listItemRow}
`;

const ImageContainer = styled.div`
  position: relative;
  height: ${p => (p.gridLayout === 'tiles' ? '370px' : '380px')};
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
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
  `}
`;

const Title = styled(Headings.h2)`
  ${limitToTwoLines};
  font-size: 28px;
  font-weight: 400;
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  margin-bottom: ${p =>
  p.hasOverflow && p.gridLayout === 'tiles' ? '25px' : '10px'};
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: background-size .8s ease;
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
  `}
`;

const Excerpt = styled.p`
  ${limitToTwoLines};
  display: block;
  margin-top: 5px;
  font-size: 16px;
  line-height: 26px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 30px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    margin-bottom: 20px;
  `}
`;

const ProjectContent = styled.div`
  padding: 30px;
  background: ${p => p.theme.colors.card};
  margin: 80px 0 0px -100px;
  z-index: 600;
  display: block;
  position: relative;

  ${mediaqueries.tablet`
    margin: 0 auto;
    width: 100%;
  `}
`;

const MetaData = styled.div`
  font-weight: 400;
  font-size: 12px;
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  letter-spacing: 2px;
  margin-top: ${p => (p.gridLayout === 'tiles' ? '20px' : '10px')};
`;

const ProjectTaxonomy = styled.div`
  font-weight: 600;
  font-size: 12px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 2px;
  margin-bottom: ${p => (p.gridLayout === 'tiles' ? '20px' : '20px')};

  .Project__Works{
    margin-right: 5px;
    color: ${p => p.theme.colors.lightGrey};
    margin-left: 1px;
  }
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

  &:hover ${ImageContainer} > div, &:focus ${ImageContainer} > div{
    transform: scale(1.1);
  }

  &:hover h2,
  &:focus h2 {
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
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
