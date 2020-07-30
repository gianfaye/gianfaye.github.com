import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import fonts from '@styles/index';
import mediaqueries from '@styles/media';
import { ITopic } from '@types';

const Bio: React.FC<ITopic> = ({ siteData }) => {
  return (
    <BioContainer>
      {/*<BioAvatar*/}
      {/*  data-a11y="false"*/}
      {/*  aria-label="Bio"*/}
      {/*>*/}
      {/*  <BioAvatarInner>*/}
      {/*    <RoundedImage src={siteData.avatar} />*/}
      {/*  </BioAvatarInner>*/}
      {/*</BioAvatar>*/}
      {/*<BioText dangerouslySetInnerHTML={{ __html: siteData.description }} />*/}
      <BioHeading>
        I'm a frontend engineer and UX designer from the Philippines.
      </BioHeading>
      <BioSubheading>
        This site is a collective of my works, ideas, and autodidactism.
      </BioSubheading>

    </BioContainer>
  );
};

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
  flex-direction: column;
  max-width: 300px;
  padding: 0px 30px;
  border-left: 5px solid ${p => p.theme.colors.primary};
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 70px;
    height: 70px;
    border: 2px solid ${p => p.theme.colors.accent};
  }

  ${mediaqueries.phablet`
    height: 120px;
    width: 120px;
    margin: 0 auto;

     &::after {
      width: 130px;
      height: 130px;
     }

     &[data-a11y='true']:focus::after {
      width: 120px;
      height: 120px;
     }
  `};
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  max-width: 70px;

  ${mediaqueries.phablet`
    max-width: 120px;
  `};
`;

const BioAvatarInner = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;

  ${mediaqueries.phablet`
    height: 120px;
    width: 120px;
  `};
`;

const BioHeading = styled.p`
  max-width: 500px;
  font-size: 18px;
  line-height: 1.45;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
    max-width: unset;
  `};
`;

const BioSubheading = styled.p`
  max-width: 500px;
  font-size: 12px;
  line-height: 1.54;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  //font-weight: 600;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
    max-width: unset;
  `};
`;

const BioLink = styled(Link)`
  max-width: 500px;
  font-size: 18px;
  line-height: 1.45;
  //font-family: ${p => p.theme.fonts.sansSerif};
  //color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }

  ${mediaqueries.desktop`
    max-width: unset;
  `};
`;
