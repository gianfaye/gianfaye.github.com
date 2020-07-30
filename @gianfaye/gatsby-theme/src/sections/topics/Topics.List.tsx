import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Bio from '@components/Bio';
import Topics from '@components/Topics';
import TopicsList from '@components/TopicsList';
import Icons from '@icons';
import mediaqueries from '@styles/media';
import { ITopic } from '@types';

import { GridLayoutContext } from '../articles/Articles.List.Context';

const topicQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            hero {
              heading
              maxWidth
            }
          }
        }
      }
    }
  }
`;

const TopicsHero: React.FC<ITopic> = ({ topics, topic }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );


  const results = useStaticQuery(topicQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';
  //const featuredTopic = topics.find(topic => topic.featured);

  // if (!featuredTopic) {
  //   throw new Error(`
  //     No featured Topic found.
  //     Please ensure you have at least featured Topic.
  // `);
  // }

  return (
    <Section relative id="Articles__Hero">
      <HeadingContainer>
        {/*<HeroHeading dangerouslySetInnerHTML={{ __html: 'Explore topics I post about' }} />*/}
        <HeroHeading>
          <HeroHeadingLabel>Topics</HeroHeadingLabel>
          <Topics topics={topics}/>
        </HeroHeading>
      </HeadingContainer>
      {/*<SubheadingContainer>*/}
      {/*  /!*<Topics topics={topics} />*!/*/}
      {/*  <GridControlsContainer>*/}
      {/*    <GridButton*/}
      {/*      onClick={() => setGridLayout('tiles')}*/}
      {/*      active={tilesIsActive}*/}
      {/*      data-a11y="false"*/}
      {/*      title="Show articles in Tile grid"*/}
      {/*      aria-label="Show articles in Tile grid"*/}
      {/*    >*/}
      {/*      <Icons.Tiles />*/}
      {/*    </GridButton>*/}
      {/*    <GridButton*/}
      {/*      onClick={() => setGridLayout('rows')}*/}
      {/*      active={!tilesIsActive}*/}
      {/*      data-a11y="false"*/}
      {/*      title="Show articles in Row grid"*/}
      {/*      aria-label="Show articles in Row grid"*/}
      {/*    >*/}
      {/*      <Icons.Rows />*/}
      {/*    </GridButton>*/}
      {/*  </GridControlsContainer>*/}
      {/*</SubheadingContainer>*/}
    </Section>
  );
};

export default TopicsHero;

const SubheadingContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // margin-bottom: 100px;
  padding: 20px 0;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `};

  ${mediaqueries.phablet`
    display: none;
  `};
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  margin: 0 auto;

  ${mediaqueries.tablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  //margin: 100px 0;
  margin: 80px 0 100px 0;
  display: inline-block;
  width: 100%;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 60px 0 80px 0;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  //vertical-align: middle;
  //display: table-cell;

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 24px;
  `}
`;

const HeroHeadingLabel = styled.span`
  display: block;
  vertical-align: middle;
  margin-right: 15px;
  margin-bottom: 100px;

  ${mediaqueries.phablet`
    margin-right: 8px;
    display: block;
  `}
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background: ${p => p.theme.colors.hover};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }

  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;

    path {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;
