import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <NotFoundContainer>
          <NotFoundContent>
            <Headings.h1>404: Page not found</Headings.h1>
            <NotFoundText>
              Either the <strong>aliens</strong> took my page or they abducted me while I was coding.
            </NotFoundText>
            <NotFoundText>
              <Link to={'/'}>Go back to the home page</Link>
            </NotFoundText>
          </NotFoundContent>
          {/*<NotFoundImage src={'./404.png'} />*/}
        </NotFoundContainer>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;

const NotFoundContainer = styled.div`
  margin-top: 50px;
  //text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 50px;

  ${mediaqueries.tablet`
    flex-direction: column;
  `};
`;

const NotFoundImage = styled(Image)`
  width: 100%;
  max-width: 400px;
`;

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }
`;

const NotFoundText = styled.p`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.grey};
  line-height: 1.54;
  margin-bottom: 20px;

  span{
    text-decoration: line-through;
  }

  a{
    color: ${p => p.theme.colors.primary};
    padding-bottom: 3px;
    border-bottom: 2px solid;
    font-weight: 700;
  }
`;
