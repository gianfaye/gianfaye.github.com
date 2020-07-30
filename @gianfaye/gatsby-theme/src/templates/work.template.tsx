import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import WorkHero from "../sections/work/Work.Hero";
import WorkProjects from "../sections/work/Work.Projects";
import WorksHero from "../sections/works/Works.Hero";

import { Template } from "@types";

const ProjectsPage: Template = ({ location, pageContext }) => {
  const work = pageContext.additionalContext.work;
  const works = pageContext.additionalContext.works;
  const projects = pageContext.group;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={work.name}
        description={work.bio}
      />
      <WorksHero works={works} work={work} />
      <Section narrow>
        {/*<WorkHero work={work} />*/}
        <WorkProjects projects={projects} />
        <WorkPaginator>
          <Paginator {...pageContext} />
        </WorkPaginator>
      </Section>
      {/*<WorksGradient />*/}
    </Layout>
  );
};

export default ProjectsPage;

const WorksGradient = styled.div`
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

const WorkPaginator = styled.div`
  text-align: center;
`;
