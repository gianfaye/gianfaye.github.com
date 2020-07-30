import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import WorksHero from "../sections/works/Works.Hero";
import ProjectsList from "../sections/projects/Projects.List";

import { TemplateProject } from "@types";

const ProjectsPage: TemplateProject = ({ location, pageContext }) => {
  const projects = pageContext.group;
  const works = pageContext.additionalContext.works;
  const selectedWork = {};

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <WorksHero works={works} work={selectedWork} />
      <Section narrow>
        <ProjectsList projects={projects} />
        <ProjectsPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ProjectsPaginator>
      </Section>
      {/*<ProjectsGradient />*/}
    </Layout>
  );
};

export default ProjectsPage;

const ProjectsGradient = styled.div`
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

const ProjectsPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
  text-align: center;
`;
