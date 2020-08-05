import React from 'react';
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

export default function ProjectCategories({ categories }) {
  return (
    <ProjectCategoryContainer>
      <ProjectCategory>
        {categories}
      </ProjectCategory>
    </ProjectCategoryContainer>
  );
}

const ProjectCategoryContainer = styled.div`
  padding: 10px 0;
  min-width: fit-content;

  ${mediaqueries.phablet`
    text-align: center;
  `};
`;
const ProjectCategory = styled.span`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  font-weight: 600;
  color: ${p => p.theme.colors.background};
  background: ${p => p.theme.colors.darkBackground};
  letter-spacing: 2px;
  padding: 7px 10px 5px 10px;
  margin-top: -4px;

  ${mediaqueries.phablet`
    display: inline-block;
  `};
`;
