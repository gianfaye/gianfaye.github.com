import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle, IProject } from '@types';

import { GridLayoutContext } from '../articles/Articles.List.Context';

interface HomeLatestProps {
  articles: IArticle[];
  projects: IProject[];
  alwaysShowAllDetails?: boolean;
}

interface HomeLatestItemProps {
  article: IArticle;
  project: IProject;
  narrow?: boolean;
}

const HomeLatest: React.FC<HomeLatestProps> = ({ projects, articles, alwaysShowAllDetails }) => {
  if (!articles) return null;
  if (!projects) return null;

  const hasOnlyOneArticle = articles.length === 1;
  const hasOnlyOneProject = projects.length === 1;
  const { gridLayout = 'tiles', hasSetGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );

  useEffect(() => getGridLayout(), []);

  return (
    <HomeLatestContainer
      style={{ opacity: hasSetGridLayout ? 1 : 0 }}
      alwaysShowAllDetails={alwaysShowAllDetails}
    >

      <List
        gridLayout={gridLayout}
        hasOnlyOneArticle={hasOnlyOneArticle}
        hasOnlyOneProject={hasOnlyOneProject}
      >
        <ListItem itemType={"featured"} item={articles[3]} narrow={true} />
        <ListItem itemType={"latest"} item={articles[0]} narrow={false} />
      </List>
    </HomeLatestContainer>
  );
};

export default HomeLatest;

const ListItem: React.FC<HomeLatestItemProps> = ({ item, itemType, narrow }) => {
  if (!item) return null;

  const { gridLayout } = useContext(GridLayoutContext);
  const hasOverflow = narrow && item.title.length > 35;
  const imageSource = narrow ? item.hero.narrow : item.hero.regular;
  const hasHeroImage =
    imageSource &&
    Object.keys(imageSource).length !== 0 &&
    imageSource.constructor === Object;

  return (
    <ArticleLink to={item.slug} data-a11y="false">
      <Item gridLayout={gridLayout}>
        <ImageContainer narrow={narrow} gridLayout={gridLayout}>
          {hasHeroImage ? <Image src={imageSource} /> : <ImagePlaceholder />}
          <ItemPill>
            {itemType == 'featured' ? 'Featured Article' : 'Latest Post'}
          </ItemPill>
        </ImageContainer>
        <ArticleContent
          gridLayout={gridLayout}>
          { item.topic ?
            <ArticleTaxonomy
              gridLayout={gridLayout}>
              <span className="Article__Categories">{item.categories}</span>
              <span className="Article__Topics">{item.topic}</span>
            </ArticleTaxonomy>
          :
            <ArticleTaxonomy
              gridLayout={gridLayout}>
              <span className="Project__Work">{item.work}</span>
              <span className="Project__Date">{item.date}</span>
            </ArticleTaxonomy>
          }
          <Title dark hasOverflow={hasOverflow} gridLayout={gridLayout}
                 className={`${item.topic ? 'Article__Title' : 'Project__Title'}`}
          >
            {item.title}
          </Title>
          <Excerpt
            hasOverflow={hasOverflow}
          >
            {item.excerpt}
          </Excerpt>
          { item.topic ?
          <MetaData
            narrow={narrow}
            gridLayout={gridLayout}>
            <span className="Article__Date">{item.date}</span> &bull; &nbsp;
            <span className="Article__TimeToRead">{item.timeToRead} min read</span>
          </MetaData> :
            <MetaData
              className="Project"
              narrow={narrow}
              gridLayout={gridLayout}>
              Client: <span className="Project__Categories">{item.categories}</span>
            </MetaData>
          }
        </ArticleContent>
      </Item>
    </ArticleLink>
  );
};

const wide = '1fr';
const narrow = '457px';

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

const HomeLatestContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
  transition: opacity 0.25s;
  margin-bottom: 100px;
  ${p => p.alwaysShowAllDetails && showDetails}
`;

const listTile = p => css`
  position: relative;
  display: grid;
  grid-template-columns: ${p.reverse
  ? `${narrow} ${wide}`
  : `${wide} ${narrow}`};
  grid-template-rows: 2;
  column-gap: 30px;

  &:not(:last-child) {
    margin-bottom: 75px;
  }

  ${mediaqueries.desktop_medium`
    grid-template-columns: 1fr 1fr;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const listItemRow = p => css`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 488px;
  grid-column-gap: 96px;
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

  @media (max-width: 540px) {
    background: ${p.theme.colors.card};
  }

  ${mediaqueries.phablet`
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
`;

const listItemTile = p => css`
  position: relative;

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  @media (max-width: 540px) {
    background: ${p.theme.colors.card};
  }

  ${mediaqueries.phablet`
    margin-bottom: 40px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  `}
`;

// If only 1 article, dont create 2 rows.
const listRow = p => css`
  display: grid;
  grid-template-rows: ${p.hasOnlyOneArticle ? '1fr' : '1fr 1fr'};
`;

const List = styled.div<{
  reverse: boolean;
  gridLayout: string;
  hasOnlyOneArticle: boolean;
}>`
  ${p => (p.gridLayout === 'tiles' ? listTile : listRow)}
`;

const Item = styled.div<{ gridLayout: string }>`
  ${p => (p.gridLayout === 'rows' ? listItemRow : listItemTile)}
`;

const ImageContainer = styled.div<{ narrow: boolean; gridLayout: string }>`
  position: relative;
  height: ${p => (p.gridLayout === 'tiles' ? '280px' : '220px')};
  //box-shadow: 0 30px 60px -10px rgba(0, 0, 0, ${p => (p.narrow ? 0.22 : 0.3)}),
    0 18px 36px -18px rgba(0, 0, 0, ${p => (p.narrow ? 0.25 : 0.33)});
  //margin-bottom: ${p => (p.gridLayout === 'tiles' ? '30px' : 0)};
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

const ItemPill = styled.span`
    color: ${p => p.theme.colors.card};
    background: ${p => p.theme.colors.primary};
    display: inline;
    padding: 8px 10px 5px 12px;
    position: absolute;
    top: 10px;
    right: 10px;
    text-transform: uppercase;
    font-family: ${p => p.theme.fonts.sansSerif};
    line-height: 1;
    font-size: 10px;
    letter-spacing: 2px;
    border-radius: 3px;
    font-weight: 600;
`;

const Title = styled(Headings.h2)`
  font-size: 30px;
  font-weight: 400;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: ${p =>
  p.hasOverflow && p.gridLayout === 'tiles' ? '25px' : '10px'};
  //transition: color 0.3s ease-in-out;
  ${limitToTwoLines};
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  -webkit-transition: background-size .8s ease;
  transition: background-size .8s ease;
  background-image: -webkit-gradient(linear,left top,left bottom,color-stop(99%,transparent),color-stop(1%,${p => p.theme.colors.primary}));
  background-image: linear-gradient(180deg,transparent 99%,${p => p.theme.colors.primary} 0);


  &.Project__Title{
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#FFF72C));
    background-image: linear-gradient(180deg,transparent 65%,#FFF72C 0);
  }

  &.Article__Title{
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#37FE13));
    background-image: linear-gradient(180deg,transparent 65%,#37FE13 0);
  }

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

const Excerpt = styled.p<{
  hasOverflow: boolean;
  narrow: boolean;
}>`
  ${limitToTwoLines};
  font-size: 18px;
  line-height: 32px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 0;
  margin-top: 10px;
  color: ${p => p.theme.colors.grey};
  display: block;
  max-width: ${p => (p.narrow ? '415px' : '515px')};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const ArticleContent = styled.div<{
  gridLayout: string;
}>`
  padding: 40px;
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
  margin-top: ${p => (p.gridLayout === 'tiles' ? '20px' : '10px')};

  &.Project{
    font-size: 12px;
    font-family: ${p => p.theme.fonts.sansSerif};
    text-transform: uppercase;
    color: ${p => p.theme.colors.primary};
    letter-spacing: 2px;
    margin-top: 26px;
  }

  // .Project__Categories{
  //   color: ${p => p.theme.colors.card};
  //   background: ${p => p.theme.colors.primary};
  //   display: inline;
  //   padding: 5px;
  // }

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 0;
  `}
`;

const ArticleTaxonomy = styled.div<{
  gridLayout: string;
}>`
  font-weight: 600;
  font-size: 12px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;


  .Article__Categories,
  .Project__Work{
    color: ${p => p.theme.colors.lightGrey};
  }
  .Article__Categories{
    margin-right: 5px;
    margin-left: 1px;
  }

  .Project__Date{
    margin-left: 5px;
  }

  .Project__Work{
    margin-left: 3px;
  }

  ${mediaqueries.phablet`
    max-width: 100%;
    padding: 0;
  `}
`;

const ArticleLink = styled(Link)`
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
