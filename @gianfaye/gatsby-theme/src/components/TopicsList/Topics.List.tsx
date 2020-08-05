import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import OutsideClickHandler from "react-outside-click-handler";
import { useColorMode } from "theme-ui";

import Image from '@components/Image';
import { ITopic } from '@types';
import Icons from "@icons";
import mediaqueries from "@styles/media";

const TopicsList: React.FC<ITopic> = ({ topics, selectedTopic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode] = useColorMode();

  const fill = colorMode === "dark" ? "#fff" : "#000";

  const hasSelectedTopic = Object.keys(selectedTopic).length;

  const topicsBlank = {
    id: 0,
    name: 'all topics I write about',
    avatar: '',
    bio: '',
    slug: '/blog',
    topicsPage: true,
    featured: false,
    color: ''
  };

  const topicsWithDefaultAll = [ topicsBlank, ...topics ];

  return (
    <TopicsContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      {/*{ selectedTopic.avatar &&*/}
      {/*  <TopicBackground src={selectedTopic.avatar.large} />*/}
      {/*}*/}
      <CoTopicsList /*style={listWidth}*/>
        {/*{topics.map((topic, index) => (*/}
        {/*  <CoTopicAvatar style={{ left: `${index * 15}px` }} key={topic.name}>*/}
        {/*    <RoundedImage src={topic.avatar.small} />*/}
        {/*  </CoTopicAvatar>*/}
        {/*))}*/}
      </CoTopicsList>
      <NameContainer>{ hasSelectedTopic ? selectedTopic.name : topicsBlank.name}</NameContainer>
      <IconContainer>
        <Icons.ToggleOpen fill={fill} />
      </IconContainer>


      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(!isOpen)}>
          <CoTopicsListOpen>
            <IconOpenContainer>
              <Icons.ToggleClose fill={fill} />
            </IconOpenContainer>
            {topicsWithDefaultAll.map((topic, index) => (
              <CoTopicsListItemOpen key={topic.name}>
                <TopicLink
                  as={topic.topicsPage ? Link : "div"}
                  to={topic.slug}
                >
                  {/*<CoTopicAvatarOpen>*/}
                  {/*  <RoundedImage src={topic.avatar.small} />*/}
                  {/*</CoTopicAvatarOpen>*/}
                  <TopicNameOpen>{topic.name}</TopicNameOpen>
                </TopicLink>
              </CoTopicsListItemOpen>
            ))}
          </CoTopicsListOpen>
        </OutsideClickHandler>
      )}

      {/*{topics.map((topic, index) => {*/}
      {/*  //return console.log('topic', topic);*/}
      {/*  console.log('topic.color', topic.color);*/}
      {/*  return (*/}
      {/*    <TopicContainer key={index} color={topic.color}>*/}
      {/*      <TopicsAvatar*/}
      {/*        as={topic.topicsPage ? Link : 'div'}*/}
      {/*        to={topic.slug}*/}
      {/*      >*/}
      {/*        <TopicsAvatarInner>*/}
      {/*          <RoundedImage*/}
      {/*            isEven={index % 2 == 0}*/}
      {/*            src={topic.avatar.large}*/}
      {/*          />*/}
      {/*        </TopicsAvatarInner>*/}
      {/*      </TopicsAvatar>*/}
      {/*      <div>*/}
      {/*        { topic.id == selectedTopic.id ? 'SELECTED TOPIC' : 'not selected'}*/}
      {/*      </div>*/}
      {/*      <TopicsText dangerouslySetInnerHTML={{ __html: topic.name }} />*/}
      {/*    </TopicContainer>*/}
      {/*  );*/}
      {/*})}*/}
    </TopicsContainer>
  );
};

export default TopicsList;

// const TopicsContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-gap: 16px;
//   //grid-template-columns: repeat(auto-fill,minmax(150px,215px));
//   //grid-template-columns: repeat(auto-fill,minmax(200px,365px));
//   grid-template-columns: repeat(auto-fill,minmax(250px,265px));
//   justify-content: center;
// `;

const TopicsContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  //display: flex;
  display: inline-block;
  align-items: center;
  //font-size: 18px;
  color: ${p => p.theme.colors.grey};
  letter-spacing: 1px;
  cursor: pointer;
  vertical-align: middle;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    right: -20px;
    top: -16px;
    bottom: -16px;
    background: ${p => p.theme.colors.card};
    box-shadow: ${p =>
  p.isOpen ? "none" : " 0px 0px 15px rgba(0, 0, 0, 0.1)"};
    border-radius: 5px;
    z-index: 0;
    transition: opacity 0.3s;
    cursor: pointer;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }


  ${mediaqueries.phablet`
    //font-size: 14px;
    align-items: center;

    &::before {
      box-shadow: none;
      bottom: -30px;
      background: transparent;
    }

    strong {
      display: block;
      font-weight: semi-bold;
      margin-top: 6px;
    }
  `}
`;

const TopicContainer = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  height: 304px;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 7px;
  padding: 24px 0;
  background-color: #${p => p.color};
  background-repeat: no-repeat;
  background-size: 100%;
  border: 1px solid rgba(29,29,29,.1);
  overflow: hidden;
`;

const TopicsAvatar = styled.div`
  display: block;
  position: relative;
  height: 100%;
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
  height: 180px;

  img {
    object-position: ${p => p.isEven ? `left` : `right`} !important;
    //object-position: right !important;
  }
`;

const TopicBackground = styled(Image)<{ isEven: boolean }>`
  width: 300px;
  position: absolute !important;
  left: -20vw;
  top: -30px;
  z-index: 0;
  display: block;
  filter: grayscale(100%);
}
`;

const TopicsAvatarInner = styled.div`
  height: 100%;
  overflow: hidden;
`;

const TopicsText = styled.p`
  max-width: 430px;
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: left;
  padding: 0 60px 0 30px;
  font-weight: bold;
  display: block;
  //opacity: 0.5;
  line-height: 1.45;
  font-family: ${p => p.theme.fonts.sansSerif};
  //color: ${p => p.theme.colors.grey};

  a {
    //color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;


const NameContainer = styled.strong`
  position: relative;
  //max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  //font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  border-bottom: 5px solid;
  //text-transform: uppercase;
  //font-size: 14px;
  font-weight: 400;
  display: inline-block;
  margin-top: 4px;
  vertical-align: middle;

  // ${mediaqueries.desktop`
  //   max-width: 170px;
  // `}
  //
  // ${mediaqueries.phablet`
  //   max-width: 200px;
  // `}
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  display: inline-block;

  svg{
    width: 30px;
    height: 30px;
  }

  ${mediaqueries.phablet`
    position: absolute;
    right: -30px;
    bottom: 0px;
    top: 3px;
    height: 100%;
  `}
`;

const IconOpenContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: -10px;
  right: 21px;

  ${mediaqueries.desktop`
    top: 10px;
  `}

  ${mediaqueries.phablet`
    top: 67px;
    right: 37px;
  `}

  svg {
    width: 30px;
    height: 30px;
  }
`;


const CoTopicsList = styled.div`
  position: relative;
  //height: 25px;
  //margin-right: 15px;
  width: auto;
  min-width: 300px;

  ${mediaqueries.phablet`
    display: none;
  `}
`;


const CoTopicsListOpen = styled.ul`
  position: absolute;
  z-index: 2;
  left: -21px;
  right: -21px;
  top: 105px;
  padding: 50px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  list-style: none;
  transform: translateY(-2px);
  max-height: 500px;
  overflow-y: scroll;
  display: grid;
  width: 100%;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill,minmax(150px,300px));

  ${mediaqueries.desktop`
    display: block;
    left: 0;
  `}

  ${mediaqueries.phablet`
    width: 280px;
  `}
`;

const CoTopicsListItemOpen = styled.li`
  a {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const CoTopicAvatarOpen = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 15px;
  background: ${p => p.theme.colors.grey};
  overflow: hidden;
  pointer-events: none;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
    overflow: hidden;
  }
`;

const CoTopicAvatar = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  z-index: 1;
  background: ${p => p.theme.colors.grey};
  box-shadow: 0 0 0 2px ${p => p.theme.colors.background};
  transition: box-shadow 0.25s ease;
  overflow: hidden;
  pointer-events: none;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
    overflow: hidden;
  }

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const TopicLink = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-left: 10px;
  letter-spacing: 1px;

  strong {
    transition: ${p => p.theme.colorModeTransition};
  }

  &:hover strong {
    color: ${p => p.theme.colors.primary};
  }
`;

const TopicNameOpen = styled.strong`
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.colors.secondary};
  font-weight: 400;
  font-size: 16px;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 3px;

  &:hover{
    padding-bottom: 1px;
    border-bottom: 1px solid ${p => p.theme.colors.primary};
  }
`;

