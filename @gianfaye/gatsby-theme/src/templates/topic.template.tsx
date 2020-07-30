import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import TopicHero from "../sections/topic/Topic.Hero";
import TopicArticles from "../sections/topic/Topic.Articles";
import TopicsHero from "../sections/topics/Topics.Hero";

import { Template } from "@types";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const topic = pageContext.additionalContext.topic;
  const topics = pageContext.additionalContext.topics;
  const articles = pageContext.group;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={topic.name}
        description={topic.bio}
      />
      <TopicsHero topics={topics} topic={topic} />
      <Section narrow>
        {/*<TopicHero topic={topic} />*/}
        <TopicArticles articles={articles} />
        <TopicPaginator>
          <Paginator {...pageContext} />
        </TopicPaginator>
      </Section>
      {/*<TopicsGradient />*/}
    </Layout>
  );
};

export default ArticlesPage;

const TopicsGradient = styled.div`
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

const TopicPaginator = styled.div`
  text-align: center;
`;
