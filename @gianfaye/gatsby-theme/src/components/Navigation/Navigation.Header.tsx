import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, navigate, graphql, useStaticQuery } from "gatsby";
import { useColorMode } from "theme-ui";

import Section from "@components/Section";
import Logo from "@components/Logo";
import MenuList from '@components/MenuList';

import Icons from "@icons";
import mediaqueries from "@styles/media";
import throttle from "lodash/throttle";
import {
  copyToClipboard,
  getWindowDimensions,
  getBreakpointFromTheme,
} from "@utils";

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

const DarkModeToggle: React.FC<{}> = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  function toggleColorMode(event) {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);

    let alignProgress = document.getElementById("alignProgress");
    if(alignProgress){
      alignProgress.classList.add("hide");
    }
  }

  return (
    <IconWrapper
      id="darkModeToggle"
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
      {/*{isDark ?*/}
      {/*  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">*/}
      {/*    <g>*/}
      {/*      <circle fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" cx="32" cy="32" r="16"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="32" y1="10" x2="32" y2="0"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="32" y1="64" x2="32" y2="54"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="54" y1="32" x2="64" y2="32"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="0" y1="32" x2="10" y2="32"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="48" y1="16" x2="53" y2="11"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="11" y1="53" x2="16" y2="48"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="48" y1="48" x2="53" y2="53"/>*/}
      {/*      <line fill="none" stroke={fill} strokeWidth="4" strokeMiterlimit="10" x1="11" y1="11" x2="16" y2="16"/>*/}
      {/*    </g>*/}
      {/*  </svg>*/}
      {/*  :*/}
      {/*  <svg width="25px" height="25px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">*/}
      {/*    <g id="Page-1" stroke="none" strokeWidth="3" fill="none" fillRule="evenodd">*/}
      {/*      <g id="icon-moon" transform="translate(29.500000, 35.000000) rotate(136.000000) translate(-29.500000, -35.000000) translate(2.000000, 4.000000)" stroke={fill} strokeWidth="4">*/}
      {/*        <path d="M1,51 C15.359,51 27,39.359 27,25 C27,15.006 20.271,6.352 12,2 C15.396,0.723 20.158,0 24,0 C41.121,0 55,13.879 55,31 C55,48.121 41.121,62 24,62 C14.495,62 5.687,57.735 0,51 C0.23,51.006 0.768,51 1,51 Z" id="Path"/>*/}
      {/*      </g>*/}
      {/*    </g>*/}
      {/*  </svg>*/}
      {/*}*/}
    </IconWrapper>
  );
};

const SharePageButton: React.FC<{}> = () => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    //copyToClipboard(window.location.href);
    copyToClipboard('contact@gianfaye.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy my email to your clipboard"
      title="Copy my email to your clipboard"
    >
      <Icons.MailtoMd fill={fill} />
      <ToolTip isDark={isDark} hasCopied={hasCopied}>
        Email copied
      </ToolTip>
    </IconWrapper>
  );
};

const ToggleMenu: React.FC<{}> = () => {
  // const [colorMode] = useColorMode();
  // const isDark = colorMode === `dark`;
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? "#fff" : "#000";

  function toggleColorMode(event) {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);

    let alignProgress = document.getElementById("alignProgress");
    if(alignProgress){
      alignProgress.classList.add("hide");
    }
  }

  const menu = [
    {
      id: 0,
      name: 'Home',
      slug: '/'
    },
    {
      id: 1,
      name: 'About',
      slug: '/about'
    },
    {
      id: 2,
      name: 'Projects',
      slug: '/projects'
    },
    {
      id: 3,
      name: 'Blog',
      slug: '/blog'
    },
    {
      id: 4,
      name: 'Timeline',
      slug: '/timeline'
    },
  ];

  return (
    <IconWrapper
      id="MenuIcon"
      isDark={isDark}
      data-a11y="false"
      aria-label="Open menu"
      title="Open menu"
      onClick={toggleColorMode}
    >
      <MenuList menu={menu}/>
      {/*<Icons.MenuIcon fill={fill}/>*/}
    </IconWrapper>
  );
};

const NavigationHeader: React.FC<{}> = () => {
  const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
  const [previousPath, setPreviousPath] = useState<string>("/");
  const { sitePlugin } = useStaticQuery(siteQuery);

  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#fff" : "#000";
  const { rootPath, basePath } = sitePlugin.pluginOptions;

  const fixedText = "I am fixed :)";
  const whenNotFixed = "I am not a fixed header :(";
  const [headerText, setHeaderText] = useState(whenNotFixed);

  useEffect(() => {
    const { width } = getWindowDimensions();
    const phablet = getBreakpointFromTheme("phablet");

    const prev = localStorage.getItem("previousPath");
    const previousPathWasHomepage =
      prev === (rootPath || basePath) || (prev && prev.includes("/page/"));
    const currentPathIsHomepage =
      location.pathname === (rootPath || basePath) || location.pathname.includes("/page/");
    const currentPage = location.pathname;
    let prevYOffset = window.pageYOffset;

    setShowBackArrow(
      previousPathWasHomepage && !currentPathIsHomepage && width <= phablet,
    );
    setPreviousPath(prev);

    const header = document.getElementById("navToolbar");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      //if (prevYOffset > window.pageYOffset) {
        //console.log("scrolling up");
        if (window.pageYOffset > sticky + 49) {
          header.classList.add("sticky");
          if (headerText !== fixedText) {
            setHeaderText(fixedText);
          }
        } else {
          header.classList.remove("sticky");
          if (headerText !== whenNotFixed) {
            setHeaderText(whenNotFixed);
          }
        }
      // } else if (prevYOffset < window.pageYOffset) {
      //   console.log("scrolling down");
      //   header.classList.remove("sticky");
      // }

      prevYOffset = window.pageYOffset;
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <NavToolbar id="navToolbar">
      <NavContainer>
        <LogoLink
          to={rootPath || basePath}
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage"
          back={showBackArrow ? "true" : "false"}
        >
          {showBackArrow && (
            <BackArrowIconContainer>
              <Icons.ChevronLeft fill={fill} />
            </BackArrowIconContainer>
          )}
          <Logo fill={fill} />
          <Hidden>Navigate back to the homepage</Hidden>
        </LogoLink>
        <NavControls>
          {showBackArrow ? (
            <button
              onClick={() => navigate(previousPath)}
              title="Navigate back to the homepage"
              aria-label="Navigate back to the homepage"
            >
              <Icons.Ex fill={fill} />
            </button>
          ) : (
            <>
              <DesktopMenu>
                <MenuContainer>
                  <MenuLinks>
                    <MenuLink as={Link} to={'/'} activeClassName={'active'}>
                      Home
                    </MenuLink>
                    <MenuLink as={Link} to={'/about'} activeClassName={'active'}>
                      About
                    </MenuLink>
                    <MenuLink as={Link} to={'/projects'} activeClassName={'active'}>
                      Projects
                    </MenuLink>
                    <MenuLink as={Link} to={'/blog'} activeClassName={'active'}>
                      Blog
                    </MenuLink>
                    <MenuLink as={Link} to={'/timeline'} activeClassName={'active'}>
                      Timeline
                    </MenuLink>
                  </MenuLinks>
                </MenuContainer>
                <SharePageButton />
                <DarkModeToggle />
               </DesktopMenu>
              <MobileMenu>
                <ToggleMenu />
              </MobileMenu>
            </>
          )}
        </NavControls>
      </NavContainer>
    </NavToolbar>
  );
};

export default NavigationHeader;

const NavToolbar = styled.div`
  width: 100%;
  padding: 0 40px;
  z-index: 999;

  &.sticky {
    background: ${p => p.theme.colors.background};
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid ${p => p.theme.colors.inputBackground};

    & + section{
      margin-top: 132px;
    }

    & > div {
      padding-top: 0;
    }

    & > div > a > div > svg{
      height: 80px;
      padding: 10px 0;
    }


  ${mediaqueries.tablet`
    &.sticky {
      & > div > a > div > svg{
        margin-left: 0;
        margin-right: 0;
      }
    }
  `};
  }

  ${mediaqueries.desktop`
    // max-width: 850px;
    // margin: 0 auto;
  `};

  ${mediaqueries.tablet`
    // max-width: 567px;
  `};
`;
const MenuContainer = styled.div`
  padding: 0 20px;
  width: 100%;

  ${mediaqueries.tablet`
    display: none;
  `};
`;
const MenuLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover a {
    opacity: 0.5;
  }
`;
const DesktopMenu = styled.div`
   position: relative;
   display: block;
   width: 100%;
   position: relative;
   display: -webkit-box;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-align-items: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   width: 100%;
   -webkit-box-pack: end;
   -webkit-justify-content: flex-end;
   -ms-flex-pack: end;
   justify-content: flex-end;

  ${mediaqueries.desktop`
    display: none !important;
  `};
`;
const MobileMenu = styled.div`
  display: none;

  ${mediaqueries.desktop`
    display: block !important;
    width: auto;

    #MenuIcon{
      margin-left: 5px;
      width: auto;
      margin: 0 0 0 auto;
    }
  `};
`;
const MenuLink = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 600;
  line-height: 1.32;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  text-decoration: none;
  //border-bottom: 2px solid;
  color: ${p => p.theme.colors.primary};
  //padding-bottom: 5px;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  padding: 20px;

  &.active{
    // border-bottom: 1px solid;
    // padding-left: 4px;
    // margin-top: 1px;

    // &::before{
    //   content: "";
    //   position: absolute;
    //   left: 5px;
    //   right: 0px;
    //   top: 25px;
    //   height: 1px;
    //   width: 5px;
    //   margin: 0px;
    //   background: ${p => p.theme.colors.primary};
    //   transform: rotate(35deg);
    // }
    //
    // &::after{
    //   content: "";
    //   position: absolute;
    //   left: 5px;
    //   right: 0px;
    //   bottom: 26px;
    //   height: 1px;
    //   width: 5px;
    //   margin: 0px;
    //   background: ${p => p.theme.colors.primary};
    //   transform: rotate(-35deg);
    // }
  }

  &:hover {
    opacity: 1 !important;
  }    max-width: 567px;

  ${mediaqueries.tablet`
    padding: 0 10px 5px 10px;
  `};
`;

const BackArrowIconContainer = styled.div`
  transition: 0.2s transform var(--ease-out-quad);
  opacity: 0;
  padding-right: 30px;
  animation: fadein 0.3s linear forwards;

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }

  ${mediaqueries.desktop_medium`
    display: none;
  `}
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  //padding: 30px;
  max-width: 1140px;
  margin: 0 auto;

  ${mediaqueries.desktop_medium`
    padding-top: 50px;
  `};

  @media screen and (max-height: 800px) {
    padding-top: 50px;
  }
`;

const LogoLink = styled(Link)<{ back: string }>`
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

  &:hover {
    ${BackArrowIconContainer} {
      transform: translateX(-3px);
    }
  }
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  max-width: 700px;

  ${mediaqueries.tablet`
     justify-content: flex-end;
  `};

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 5px 13px;
  background: ${p => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  color: ${p => (p.isDark ? "#fff" : "#000")};
  border-radius: 5px;
  font-size: 12px;
  bottom: -55px;
  right: -18px;
  opacity: ${p => (p.hasCopied ? 1 : 0)};
  transform: ${p => (p.hasCopied ? "translateY(-3px)" : "none")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 10px;
    right: 10px;
    top: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${p => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
  }
`;

const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 1;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 15px;
  margin-top: -5px;

  svg{
    padding-left: 8px;
  }

  &#MenuIcon svg{
    margin: 0;
    padding: 0;
  }

  &:hover {
    opacity: 0.5;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    display: inline-flex;
    //transform: scale(0.708);
    //margin-left: 10px;
  `}
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${p => (p.isDark ? "4px" : "2px")} solid
    ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  overflow: ${p => (p.isDark ? "visible" : "hidden")};
  top: -1px;

  &::before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${p => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${p => (p.isDark ? "14px, -14px" : "0, 0")});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${p => p.theme.colors.primary},
      0 23px 0 ${p => p.theme.colors.primary},
      23px 0 0 ${p => p.theme.colors.primary},
      -23px 0 0 ${p => p.theme.colors.primary},
      15px 15px 0 ${p => p.theme.colors.primary},
      -15px 15px 0 ${p => p.theme.colors.primary},
      15px -15px 0 ${p => p.theme.colors.primary},
      -15px -15px 0 ${p => p.theme.colors.primary};
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;

    ${p => mediaqueries.tablet`
      transform: scale(${p.isDark ? 0.92 : 0});
    `}
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${p => p.theme.colors.background};
  transform: translate(${p => (p.isDark ? "14px, -14px" : "0, 0")});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;

const Hidden = styled.span`
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
`;
