import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { ITopic } from '@types';

const Topics: React.FC<ITopic> = ({ topics }) => {
  return (
    <TopicsContainer>
      {topics && topics.map((topic, index) => {
        return (
          <TopicContainer key={index} color={topic.color}>
            <TopicsAvatar
              as={topic.topicsPage ? Link : 'div'}
              to={topic.slug}
            >
              <TopicsAvatarInner>
                <RoundedImage
                  isEven={index % 2 == 0}
                  src={topic.avatar.large}
                />
              </TopicsAvatarInner>
            </TopicsAvatar>
            <TopicsText dangerouslySetInnerHTML={{ __html: topic.name }} />
          </TopicContainer>
        );
      })}
    </TopicsContainer>
  );
};

export default Topics;

const TopicsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 26px;
  //grid-template-columns: repeat(auto-fill,minmax(150px,215px));
  //grid-template-columns: repeat(auto-fill,minmax(200px,365px));
  grid-template-columns: repeat(auto-fill,minmax(250px,265px));
  justify-content: center;
`;

const TopicContainer = styled.div<{ color: string }>`
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

const TopicsAvatar = styled.div`
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

const TopicsAvatarInner = styled.div`
  height: 100%;
  overflow: hidden;
`;

const TopicsText = styled.p`
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
