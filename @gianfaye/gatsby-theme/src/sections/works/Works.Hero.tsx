import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Bio from '@components/Bio';
import Work from '@components/Work';
import WorksList from '@components/WorksList';
import Icons from '@icons';
import mediaqueries from '@styles/media';
import { IWork } from '@types';

import { GridLayoutContext } from '../articles/Articles.List.Context';

const workQuery = graphql`
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

const WorkHero: React.FC<IWork> = ({ works, work }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );


  const results = useStaticQuery(workQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';
  //const featuredWork = works.find(work => work.featured);

  // if (!featuredWork) {
  //   throw new Error(`
  //     No featured Work found.
  //     Please ensure you have at least featured Work.
  // `);
  // }

  return (
    <Section narrow id="Projects__Hero">
      <HeadingContainer>
        {/*<HeroHeading dangerouslySetInnerHTML={{ __html: 'Explore works I post about' }} />*/}
        <HeroHeading>
          <HeroHeadingLabel>Explore</HeroHeadingLabel>
          <WorksList works={works} selectedWork={work} />
        </HeroHeading>
        <HeroSubheading>
          * That are not under NDA &#x1f937; Sadly, everything I did that I'm proud of for the past 6 years can't be added here.
        </HeroSubheading>
      </HeadingContainer>
      {/*<SubheadingContainer>*/}
        {/*<Work works={works} />*/}
        {/*<GridControlsContainer>*/}
        {/*  <GridButton*/}
        {/*    onClick={() => setGridLayout('tiles')}*/}
        {/*    active={tilesIsActive}*/}
        {/*    data-a11y="false"*/}
        {/*    title="Show project in Tile grid"*/}
        {/*    aria-label="Show project in Tile grid"*/}
        {/*  >*/}
        {/*    <Icons.Tiles />*/}
        {/*  </GridButton>*/}
        {/*  <GridButton*/}
        {/*    onClick={() => setGridLayout('rows')}*/}
        {/*    active={!tilesIsActive}*/}
        {/*    data-a11y="false"*/}
        {/*    title="Show project in Row grid"*/}
        {/*    aria-label="Show project in Row grid"*/}
        {/*  >*/}
        {/*    <Icons.Rows />*/}
        {/*  </GridButton>*/}
        {/*</GridControlsContainer>*/}
      {/*</SubheadingContainer>*/}
    </Section>
  );
};

export default WorkHero;

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
  margin: 80px 0 60px 0;
  display: inline-block;

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
  vertical-align: middle;
  display: table-cell;

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

const HeroSubheading = styled.span`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-right: 35px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: right;
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 0.5px;

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 28px
  `}

  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

const HeroHeadingLabel = styled.span`
   vertical-align: middle;
   margin-right: 15px;

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
