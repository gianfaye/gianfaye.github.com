import React, { useState } from "react";
import styled from "@emotion/styled";
import OutsideClickHandler from "react-outside-click-handler";
import { useColorMode } from "theme-ui";
import { Link } from "gatsby";

import Image from "@components/Image";
import Icons from "@icons";
import mediaqueries from "@styles/media";
import { IWork } from "@types";

/**
 * When generating the work names we're also checking to see how long the
 * number of works are. If it's only 2 works we'll show the fullnames.
 * Otherwise it'll only preview the first names of each work.
 */
function generateWorkNames(works: IWork[]) {
  return works
    .map(work => {
      // if (works.length > 2) {
      //   return work.name.split(" ")[0];
      // } else {
      //   return work.name;
      // }
      return work.name;
    })
    .join(", ");
}

interface WorksProps {
  works: IWork[]
}

const CoWorks: React.FC<WorksProps> = ({ works }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode] = useColorMode();
  const names = generateWorkNames(works);

  const fill = colorMode === "dark" ? "#fff" : "#000";
  // const listWidth = { width: `${10 + works.length * 15}px` };

  return (
    <CoWorksContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <CoWorksList /*style={listWidth}*/>
        {/*{works.map((work, index) => (*/}
        {/*  <CoWorkAvatar style={{ left: `${index * 15}px` }} key={work.name}>*/}
        {/*    <RoundedImage src={work.avatar.small} />*/}
        {/*  </CoWorkAvatar>*/}
        {/*))}*/}
      </CoWorksList>
      <NameContainer>{names}</NameContainer>
      <IconContainer>
        <Icons.ToggleOpen fill={fill} />
      </IconContainer>

      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(!isOpen)}>
          <CoWorksListOpen>
            <IconOpenContainer>
              <Icons.ToggleClose fill={fill} />
            </IconOpenContainer>
            {works.map(work => (
              <CoWorksListItemOpen key={work.name}>
                <WorkLink
                  as={work.worksPage ? Link : "div"}
                  to={work.slug}
                >
                  <CoWorkAvatarOpen>
                    <RoundedImage src={work.avatar.small} />
                  </CoWorkAvatarOpen>
                  <WorkNameOpen>{work.name}</WorkNameOpen>
                </WorkLink>
              </CoWorksListItemOpen>
            ))}
          </CoWorksListOpen>
        </OutsideClickHandler>
      )}
    </CoWorksContainer>
  );
};

/**
 * Novela supports multiple works and therefore we need to ensure
 * we render the right UI when there are varying amount of works.
 */
const ProjectWorks: React.FC<WorksProps> = ({ works }) => {
  const hasCoWorks = works.length > 1;

  // Special dropdown UI for multiple works
  if (hasCoWorks) {
    return <CoWorks works={works} />;
  } else {
    return (
      <WorkLink
        as={works[0].worksPage ? Link : "div"}
        to={works[0].slug}
      >
        {/*<WorkAvatar>*/}
        {/*  <RoundedImage src={works[0].avatar.small} />*/}
        {/*</WorkAvatar>*/}
        <NameContainer>{works[0].name}</NameContainer>
        {/*<HideOnMobile>,&nbsp;</HideOnMobile>*/}
      </WorkLink>
    );
  }
};

export default ProjectWorks;

const WorkAvatar = styled.div`
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

const WorkLink = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-right: 10px;
  letter-spacing: 1px;

  strong {
    transition: ${p => p.theme.colorModeTransition};
  }

  &:hover strong {
    color: ${p => p.theme.colors.primary};
  }

  ${mediaqueries.phablet`
    text-align: center;
    display: block;
    margin-right: 0;

    strong{
      max-width: unset;
    }
  `};
`;

const CoWorksList = styled.div`
  position: relative;
  height: 25px;
  //margin-right: 15px;

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const CoWorksListOpen = styled.ul`
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

const CoWorksListItemOpen = styled.li`
  a {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const CoWorkAvatarOpen = styled.div`
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

const CoWorkAvatar = styled.div`
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
  min-width: 75px;
  text-align: right;

  ${mediaqueries.desktop`
    max-width: 170px;
  `}

  ${mediaqueries.phablet`
    max-width: 200px;
    text-align: center;
  `}
`;

const WorkNameOpen = styled.strong`
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

const CoWorksContainer = styled.div<{ isOpen: boolean }>`
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
