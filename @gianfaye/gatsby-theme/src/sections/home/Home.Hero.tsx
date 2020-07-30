import React, {useContext} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import Typist from 'react-typist';

import Section from '@components/Section';
import Bio from '@components/Bio';
import Icons from '@icons';
import mediaqueries from '@styles/media';
import { ITopic } from '@types';

//import { GridLayoutContext } from './Home.List.Context';
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
              description
              avatar
            }
          }
        }
      }
    }
  }
`;

const ArticlesHero: React.FC<ITopic> = ({ topics }) => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(
    GridLayoutContext,
  );

  const results = useStaticQuery(topicQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';
  const featuredTopic = topics.find(topic => topic.featured);

  if (!featuredTopic) {
    throw new Error(`
      No featured Topic found.
      Please ensure you have at least featured Topic.
  `);
  }

  return (
    <Section relative id="Articles__Hero">
      <HomeHeroContainer>
        <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
          <HeroHeading>
            <Typist
              cursor={{hideWhenDone: true, hideWhenDoneDelay: 0, element: '/'}}
            >
              About
              <Typist.Backspace count={8} delay={200} />
              <a href="/about" title="About me" className="Hero__About">
                Web artisan
              </a>
            </Typist>
            <Typist
              cursor={{hideWhenDone: true, hideWhenDoneDelay: 0, element: '/'}}
              startDelay={1000}
            >
              Projects
              <Typist.Backspace count={20} delay={400} />
              <a href="/projects" title="Projects I worked on" className="Hero__Projects">
                Maker of things
              </a>
            </Typist>
            <Typist
              cursor={{hideWhenDone: true, hideWhenDoneDelay: 0, element: '/'}}
              startDelay={3000}
            >
              Blog
              <Typist.Backspace count={20} delay={800} />
              <a href="/blog" title="Things I write about" className="Hero__Blog">
                Geek of all trades
              </a>
            </Typist>
          </HeroHeading>

          {/*<HeroHeading dangerouslySetInnerHTML={{ __html: hero.heading }} />*/}
        </HeadingContainer>
        <SubheadingContainer>
          <Bio siteData={hero} />
          {/*<GridControlsContainer>*/}
          {/*  <GridButton*/}
          {/*    onClick={() => setGridLayout('tiles')}*/}
          {/*    active={tilesIsActive}*/}
          {/*    data-a11y="false"*/}
          {/*    title="Show articles in Tile grid"*/}
          {/*    aria-label="Show articles in Tile grid"*/}
          {/*  >*/}
          {/*    <Icons.Tiles />*/}
          {/*  </GridButton>*/}
          {/*  <GridButton*/}
          {/*    onClick={() => setGridLayout('rows')}*/}
          {/*    active={!tilesIsActive}*/}
          {/*    data-a11y="false"*/}
          {/*    title="Show articles in Row grid"*/}
          {/*    aria-label="Show articles in Row grid"*/}
          {/*  >*/}
          {/*    <Icons.Rows />*/}
          {/*  </GridButton>*/}
          {/*</GridControlsContainer>*/}
        </SubheadingContainer>
      </HomeHeroContainer>
    </Section>
  );
};

export default ArticlesHero;

const HomeHeroContainer = styled.div`
  display: flex;
  width: 100%;

  ${mediaqueries.tablet`
    margin-bottom: 80px;
    flex-direction: column;
  `};
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 100px;
  flex: 1 0 200px;
  margin: auto 0;

  ${mediaqueries.desktop`
     margin: 0;
  `};

  ${mediaqueries.tablet`
    margin: 0 auto 0px 15px;
  `};

  // ${mediaqueries.phablet`
  //   display: none;
  // `};
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  margin: 140px 0;
  max-width: unset !important;

  ${mediaqueries.desktop`
    width: 60%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
    margin: 80px 0 0 0;
  `}
`;

const HeroHeading = React.memo(styled.h1<{
  shouldCursorHide: boolean;
}>`
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}

  a {
    color: ${p => p.theme.colors.primary};
    background-size: 0 100%;
    background-repeat: no-repeat;
    text-decoration: none;
    -webkit-transition: background-size .4s ease;
    transition: background-size .4s ease;

    &:hover{
      background-size: 100% 100%;
      cursor: pointer;
    }

  }

  a.Hero__About{
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#FF7148));
    background-image: linear-gradient(180deg,transparent 65%,#FF7148 0);
  }

  a.Hero__Projects{
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#FFF72C));
    background-image: linear-gradient(180deg,transparent 65%,#FFF72C 0);
  }

  a.Hero__Blog{
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#37FE13));
    background-image: linear-gradient(180deg,transparent 65%,#37FE13 0);
  }

  .typed-cursor{
    visibility: ${p => (p.shouldCursorHide ? "hidden" : "visible")};
  }
`);

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
