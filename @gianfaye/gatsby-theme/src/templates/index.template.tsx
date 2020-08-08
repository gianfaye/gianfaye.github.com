import React from "react";
import styled from "@emotion/styled";
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Icons from "@icons";
import { useColorMode } from "theme-ui";

import ArticlesHero from "../sections/home/Home.Hero";
import ArticlesList from "../sections/home/Articles.List";
import ProjectsList from "../sections/home/Projects.List";
import HomeLatest from "../sections/Home/Home.Latest";

import mediaqueries from '@styles/media';
import { Template } from "@types";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.additionalContext.articles;
  const projects = pageContext.additionalContext.projects;

  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <ArticlesHero /*topics={topics}*/ />
      <Section narrow>
        <HomeLatest articles={articles} projects={projects} />
        <ProjectsList projects={projects} />
        <ExploreButtonContainer>
          <ExploreButton as={Link} to={'/projects'}>
            Explore all Projects I worked on
          </ExploreButton>
          <ExploreArrowContainer>
            <ExploreArrow>
              <Icons.ChevronLeft fill={fill} />
            </ExploreArrow>
          </ExploreArrowContainer>
        </ExploreButtonContainer>
        <ArticlesList articles={articles} />
        <ExploreButtonContainer>
          <ExploreButton as={Link} to={'/blog'}>
            Read the Blog
          </ExploreButton>
          <ExploreArrowContainer>
            <ExploreArrow>
              <Icons.ChevronLeft fill={fill} />
            </ExploreArrow>
          </ExploreArrowContainer>
        </ExploreButtonContainer>
        <WantToContainer>
          <WantToItem>
            <WantToHeaderContainer>
              <WantToHeader>
                Need a Mentor?
              </WantToHeader>
            </WantToHeaderContainer>
            <WantToText>
              I can guide you through your learning process and provide industry-standard advice and best practices.
            </WantToText>
            <WantToButton href={'mailto:learn@gianfaye.com'}>
              Be a Student
            </WantToButton>
          </WantToItem>
          <WantToItem>
            <WantToHeaderContainer>
              <WantToHeader>
                Want to Collaborate?
              </WantToHeader>
            </WantToHeaderContainer>
            <WantToText>
              Do you have a project relevant to my skills that I can help you with? Let's talk about how we can work together.
            </WantToText>
            <WantToButton href={'mailto:work@gianfaye.com'}>
              Let's Collaborate
            </WantToButton>
          </WantToItem>
        </WantToContainer>
        {/*<ArticlesPaginator show={pageContext.pageCount > 1}>*/}
        {/*  <Paginator {...pageContext} />*/}
        {/*</ArticlesPaginator>*/}
      </Section>
      {/*<ArticlesGradient />*/}
    </Layout>
  );
};

export default ArticlesPage;


const WantToContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  grid-template-rows: 1;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
  text-align: center;
  margin: 80px 0 150px 0;

  &:not(:last-child) {
    margin-bottom: 35px;
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
const WantToItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${mediaqueries.desktop`
    grid-column-gap: 24px;
    grid-template-columns: 1fr 380px;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}

  ${mediaqueries.phablet`
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-bottom: 30px;
  `}
`;

const WantToHeaderContainer = styled.div`
  position: relative;
  margin: 20px 0 25px;
  width: 100%;
  min-height: 39px;
  text-align: center;

  &::before{
    content: "";
    display: block;
    left: 0;
    right: 0;
    top: 50%;
    border-bottom: 1px solid ${p => p.theme.colors.primary};
    position: absolute;
  }
`;

const WantToHeader = styled(Headings.h5)`
  padding: 10px 20px;
  line-height: 20px;
  display: inline-block;
  position: relative;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
`;
const WantToText = styled.p`
  width: 80%;
  color: ${p => p.theme.colors.primary};
  margin: 0 auto 24px;
  font-size: 20px;
`;
const WantToButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.background};
  background-color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color .15s ease,color .15s ease,border .15s ease;
  padding: 12px 15px;
  display: inline-block;
  cursor: pointer;
  min-width: 200px;

  &:hover{
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.accent};
  }
`;

const ExploreButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ExploreButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  font-family: ${p => p.theme.fonts.sansSerif};
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.primary};
  border: 2px solid ${p => p.theme.colors.primary};
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color .15s ease,color .15s ease,border .15s ease;
  padding: 12px 15px;
  display: block;
  cursor: pointer;
  width: 100%;
  margin-bottom: 40px;

  &:hover{
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.primary};
  }
`;

const ExploreArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${p => p.theme.colors.primary};
  width: 30px;
  margin-bottom: 40px;
  margin-left: -2px;
  height: 48px;
  transform: rotate(180deg);
  position: absolute;
  right: 0;
`;

const ExploreArrow = styled.div`

`;
