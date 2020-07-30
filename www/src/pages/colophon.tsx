import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';

function ColophonPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <ColophonContainer>
          <ColophonContent>
            <Headings.h1>Colophon</Headings.h1>
            <ColophonText>
              Lorem
            </ColophonText>
            <ColophonText>
              {/*<Link to={'/'}>Go back to the home page</Link>*/}
            </ColophonText>
          </ColophonContent>
          {/*<ColophonImage src={'./404.png'} />*/}
        </ColophonContainer>
      </Section>
    </Layout>
  );
}

export default ColophonPage;

const ColophonContainer = styled.div`
  //margin: 100px 0;
  margin: 80px 0 100px 0;
  display: inline-block;
  //text-align: center;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  //padding: 50px;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 60px 0 80px 0;
  `}
`;

const ColophonImage = styled(Image)`
  width: 100%;
  max-width: 400px;
`;

const ColophonContent = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-content: center;
  // justify-content: center;

  h1 {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 1.15;
    color: ${p => p.theme.colors.primary};
  }
`;

const ColophonText = styled.p`
  //font-family: ${p => p.theme.fonts.sansSerif};
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
