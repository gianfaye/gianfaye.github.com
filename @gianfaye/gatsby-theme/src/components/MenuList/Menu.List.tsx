import React, { useState } from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import styled from '@emotion/styled';
import OutsideClickHandler from "react-outside-click-handler";
import { useColorMode } from "theme-ui";

import Logo from "@components/Logo";
import Image from '@components/Image';
import { IWork } from '@types';
import Icons from "@icons";
import mediaqueries from "@styles/media";

const siteQuery = graphql`
  {
    sitePlugin(name: { eq: "@gianfaye/gatsby-theme" }) {
      pluginOptions {
        rootPath
        basePath
      }
    }
  }
`;

const MenuList: React.FC<IWork> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode] = useColorMode();
  const { sitePlugin } = useStaticQuery(siteQuery);
  const { rootPath, basePath } = sitePlugin.pluginOptions;

  const fill = colorMode === "dark" ? "#fff" : "#000";

  return (
    <MenuContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <NameContainer>Menu</NameContainer>
      <IconContainer>
        <Icons.MenuIcon fill={fill} />
      </IconContainer>

      {isOpen && (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(!isOpen)}>
          <CoMenuListOpen>
            <LogoLink
              to={rootPath || basePath}
              data-a11y="false"
              title="Navigate back to the homepage"
              aria-label="Navigate back to the homepage"
            >
              <Logo fill={fill} />
            </LogoLink>
            <IconOpenContainer>
              <Icons.CloseIcon fill={fill} />
            </IconOpenContainer>
            <MenuHeaderContainer>
              <MenuHeader>
                Explore
              </MenuHeader>
            </MenuHeaderContainer>
            <CoMenuListContainer>
              {menu.map((menuItem, index) => (
                <CoMenuListItemOpen key={menuItem.name}>
                  <MenuLink
                    as={Link}
                    to={menuItem.slug}
                  >
                    {menuItem.name}
                  </MenuLink>
                </CoMenuListItemOpen>
              ))}
            </CoMenuListContainer>
          </CoMenuListOpen>
        </OutsideClickHandler>
      )}
    </MenuContainer>
  );
};

export default MenuList;

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  left: ${p => (p.back === "true" ? "-54px" : 0)};

  ${mediaqueries.desktop_medium`
    left: 0
  `}

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -30%;
    width: 120%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
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
    height: 50px;
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
      display: inline;
      //font-weight: semi-bold;
      margin-top: 0;
    }
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
  //border-bottom: 5px solid;
  text-transform: uppercase;
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
    margin: -7px 0 0 0px !important;
  }

  ${mediaqueries.phablet`
    display: inline;
    // position: absolute;
    // right: -30px;
    // bottom: 0px;
    // top: 3px;
    // height: 100%;
  `}
`;

const IconOpenContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 21px;

  svg {
    width: 30px;
    height: 30px;
  }

  ${mediaqueries.desktop`
    top: 10px;
  `}

  ${mediaqueries.desktop_medium`
    top: 62px;
    right: 35px;
  `}
`;


const MenuHeaderContainer = styled.div`

`;

const MenuHeader = styled.h5`
  font-size: 40px;
  letter-spacing: 2px;
  margin: 30px 0 20px 0;
  text-align: left;
  color: ${p => p.theme.colors.primary};
`;


const CoMenuList = styled.div`
  position: relative;
  //height: 25px;
  //margin-right: 15px;
  width: auto;
  min-width: 80px;

  ${mediaqueries.phablet`
    display: none;
  `}
`;


const CoMenuListOpen = styled.ul`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  background: ${p => p.theme.colors.card};
  //box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  // list-style: none;
  // transform: translateY(-2px);
  // display: grid;
  //width: 100%;
  // grid-gap: 16px;
  // grid-template-columns: repeat(auto-fill,minmax(150px,300px));
  list-style-type: none;

  ${mediaqueries.desktop`
    display: block;
    left: 0;
  `}

  ${mediaqueries.desktop_medium`
    //width: 280px;
    padding: 50px 40px;
  `}
`;

const CoMenuListContainer = styled.ul`
  display: block;
  list-style-type: none;
`;

const CoMenuListItemOpen = styled.li`
  margin: 20px 0 10px 0;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  margin-left: 0;
  letter-spacing: 1px;
  text-align: left;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 10px;
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  width: 100%;
  max-width: 300px;

  ${mediaqueries.phablet`
    width: 100%;
    max-width: unset;
  `}
`;

