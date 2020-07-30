import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import TopicsHero from "../sections/topics/Topics.List";
import ArticlesList from "../sections/articles/Articles.List";

import { Template } from "@types";

const TopicsPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;
  const topics = pageContext.additionalContext.topics;
  const selectedTopic = {};

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <TopicsHero topics={topics} topic={selectedTopic} />
      {/*<ArticlesGradient />*/}
    </Layout>
  );
};

export default TopicsPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
  text-align: center;
`;
