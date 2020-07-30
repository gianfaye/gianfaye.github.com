import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";
import { IProject } from "@types";

import ProjectsList from "../projects/Projects.List";

interface WorkProjectsProps {
  projects: IProject[];
}

const WorkProjects: React.FC<WorkProjectsProps> = ({ projects }) => {
  return (
    <WorkProjectsContainer>
      <ProjectsList projects={projects} alwaysShowAllDetails />
    </WorkProjectsContainer>
  );
};

export default WorkProjects;

const WorkProjectsContainer = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   ${p => p.theme.colors.card} 0%,
  //   rgba(249, 250, 252, 0) 91.01%
  // );
  // border-radius: 8px;
  // padding: 88px 98px;
  position: relative;
  z-index: 1;

  ${mediaqueries.desktop_medium`
    padding: 80px;
  `}

  ${mediaqueries.desktop`
    padding: 0;
    background: transparent;
  `}
`;
