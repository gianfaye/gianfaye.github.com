import React from 'react';
import styled from "@emotion/styled";

export default function ArticleCategories({ categories }) {
  // TODO: add style to display category on individual article page
  return (
    <ArticleCategoryContainer>
      <ArticleCategory>
        {categories}
      </ArticleCategory>
    </ArticleCategoryContainer>
  );
}

const ArticleCategoryContainer = styled.div`
  padding: 10px 0;
`;
const ArticleCategory = styled.span`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  padding: 4px 0;
  font-weight: 600;
  color: ${p => p.theme.colors.lightGrey};
  letter-spacing: 2px;
`;
