import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IWork } from '@types';

const Works: React.FC<IWork> = ({ works }) => {
  return (
    <WorksContainer>
      {works.map((work, index) => {
        return (
          <WorkContainer key={index} color={work.color}>
            <WorksAvatar
              as={work.worksPage ? Link : 'div'}
              to={work.slug}
            >
              <WorksAvatarInner>
                <RoundedImage
                  isEven={index % 2 == 0}
                  src={work.avatar.large}
                />
              </WorksAvatarInner>
            </WorksAvatar>
            <WorksText dangerouslySetInnerHTML={{ __html: work.name }} />
          </WorkContainer>
        );
      })}
    </WorksContainer>
  );
};

export default Works;

const WorksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 26px;
  //grid-template-columns: repeat(auto-fill,minmax(150px,215px));
  //grid-template-columns: repeat(auto-fill,minmax(200px,365px));
  grid-template-columns: repeat(auto-fill,minmax(250px,265px));
  justify-content: center;
`;

const WorkContainer = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  //height: 304px;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-end;
  align-items: baseline;
  //border-radius: 7px;
  //padding: 24px 0;
  //background-color: #${p => p.color};
  background-repeat: no-repeat;
  background-size: 100%;
  border-bottom: 3px solid ${p => p.theme.colors.primary};
  overflow: hidden;
`;

const WorksAvatar = styled.div`
  display: block;
  position: relative;
  //border-bottom: 3px solid ${p => p.theme.colors.primary};
  //height: 100%;
  width: 100%;

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const RoundedImage = styled(Image)<{ isEven: boolean }>`
  height: 150px;
  filter: grayscale(100%);

  // img {
  //   object-position: ${p => p.isEven ? `left` : `right`} !important;
  //   //object-position: right !important;
  // }
`;

const WorksAvatarInner = styled.div`
  height: 100%;
  overflow: hidden;
`;

const WorksText = styled.p`
  max-width: 430px;
  font-size: 16px;
  //margin-bottom: 20px;
  text-transform: uppercase;
  text-align: left;
  //padding: 0 60px 0 30px;
  font-weight: bold;
  display: block;
  //opacity: 0.5;
  line-height: 1.45;
  font-family: ${p => p.theme.fonts.sansSerif};
  letter-spacing: 1px;
  margin-left: 2px;
  //color: ${p => p.theme.colors.grey};
  width: 100%;
  padding: 20px;
  background: ${p => p.theme.colors.card};
  min-height: 83px;

  a {
    //color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;
