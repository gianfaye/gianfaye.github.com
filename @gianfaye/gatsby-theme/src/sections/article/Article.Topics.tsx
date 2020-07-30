import React, { useState } from "react";
import styled from "@emotion/styled";
import OutsideClickHandler from "react-outside-click-handler";
import { useColorMode } from "theme-ui";
import { Link } from "gatsby";

import Image from "@components/Image";
import Icons from "@icons";
import mediaqueries from "@styles/media";
import { ITopic } from "@types";

/**
 * When generating the topic names we're also checking to see how long the
 * number of topics are. If it's only 2 topics we'll show the fullnames.
 * Otherwise it'll only preview the first names of each topic.
 */
function generateTopicNames(topics: ITopic[]) {
  return topics
    .map(topic => {
      // if (topics.length > 2) {
      //   return topic.name.split(" ")[0];
      // } else {
      //   return topic.name;
      // }
      return topic.name;
    })
    .join(", ");
}

interface TopicsProps {
  topics: ITopic[]
}

const CoTopics: React.FC<TopicsProps> = ({ topics }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode] = useColorMode();
  const names = generateTopicNames(topics);

  const fill = colorMode === "dark" ? "#fff" : "#000";
  // const listWidth = { width: `${10 + topics.length * 15}px` };

  return (
    <CoTopicsContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <CoTopicsList /*style={listWidth}*/>
        {/*{topics.map((topic, index) => (*/}
        {/*  <CoTopicAvatar style={{ left: `${index * 15}px` }} key={topic.name}>*/}
        {/*    <RoundedImage src={topic.avatar.small} />*/}
        {/*  </CoTopicAvatar>*/}
        {/*))}*/}
      </CoTopicsList>
      <NameContainer>{names}</NameContainer>
      <IconContainer>
        <Icons.ToggleOpen fill={fill} />
      </IconContainer>

      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(!isOpen)}>
          <CoTopicsListOpen>
            <IconOpenContainer>
              <Icons.ToggleClose fill={fill} />
            </IconOpenContainer>
            {topics.map(topic => (
              <CoTopicsListItemOpen key={topic.name}>
                <TopicLink
                  as={topic.topicsPage ? Link : "div"}
                  to={topic.slug}
                >
                  <CoTopicAvatarOpen>
                    <RoundedImage src={topic.avatar.small} />
                  </CoTopicAvatarOpen>
                  <TopicNameOpen>{topic.name}</TopicNameOpen>
                </TopicLink>
              </CoTopicsListItemOpen>
            ))}
          </CoTopicsListOpen>
        </OutsideClickHandler>
      )}
    </CoTopicsContainer>
  );
};

/**
 * Novela supports multiple topics and therefore we need to ensure
 * we render the right UI when there are varying amount of topics.
 */
const ArticleTopics: React.FC<TopicsProps> = ({ topics }) => {
  const hasCoTopics = topics.length > 1;

  // Special dropdown UI for multiple topics
  if (hasCoTopics) {
    return <CoTopics topics={topics} />;
  } else {
    return (
      <TopicLink
        as={topics[0].topicsPage ? Link : "div"}
        to={topics[0].slug}
      >
        {/*<TopicAvatar>*/}
        {/*  <RoundedImage src={topics[0].avatar.small} />*/}
        {/*</TopicAvatar>*/}
        <NameContainer>{topics[0].name}</NameContainer>
        {/*<HideOnMobile>,&nbsp;</HideOnMobile>*/}
      </TopicLink>
    );
  }
};

export default ArticleTopics;

const TopicAvatar = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 14px;
  background: ${p => p.theme.colors.grey};
  overflow: hidden;

  .gatsby-image-wrapper > div {
    padding-bottom: 100% !important;
  }

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
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

const CoTopicsList = styled.div`
  position: relative;
  height: 25px;
  //margin-right: 15px;

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const CoTopicsListOpen = styled.ul`
  position: absolute;
  z-index: 2;
  left: -21px;
  right: -21px;
  top: -19px;
  padding: 21px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  list-style: none;
  transform: translateY(-2px);
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

const NameContainer = styled.strong`
  position: relative;
  //max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  padding-left: 1px;

  ${mediaqueries.desktop`
    max-width: 170px;
  `}

  ${mediaqueries.phablet`
    max-width: 200px;
  `}
`;

const TopicNameOpen = styled.strong`
  position: relative;
  cursor: pointer;
  color: ${p => p.theme.colors.secondary};
  font-weight: 600;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 10px;

  ${mediaqueries.phablet`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 10px;
    height: 100%;
  `}
`;

const IconOpenContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 21px;
`;

const CoTopicsContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${p => p.theme.colors.grey};
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 10px;

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
    font-size: 14px;
    align-items: center;

    &::before {
      box-shadow: none;
      bottom: -30px;
      background: transparent;
    }


    strong {
      display: block;
      font-weight: semi-bold;
      margin-bottom: 5px;
    }
  `}
`;

const HideOnMobile = styled.span`
  ${mediaqueries.phablet`
    display: none;
  `}
`;
