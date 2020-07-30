import React from 'react';
import styled from "@emotion/styled";

export default function ProjectCategories({ categories }) {
  // TODO: add style to display category on individual project page
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
`;
const ProjectCategory = styled.span`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  padding: 4px 0;
  font-weight: 600;
  color: ${p => p.theme.colors.lightGrey};
  letter-spacing: 2px;
`;
