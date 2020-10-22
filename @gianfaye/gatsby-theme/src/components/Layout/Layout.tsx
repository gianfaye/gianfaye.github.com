import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import CustomerChat from '@components/CustomerChat/CustomerChat';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

import { globalStyles } from '@styles';
import classNames from "classnames";

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  const Cursor = () => {
    if (typeof navigator !== 'undefined' && isMobile()) return null;
    const [position, setPosition] = useState({x: -100, y: -100});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    const onMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const cursorClasses = classNames(
      'cursor',
      {
        'cursor--clicked': clicked,
        'cursor--hidden': hidden,
        'cursor--link-hovered': linkHovered
      }
    );

    return <div className={cursorClasses}
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`
                }}/>
  }

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
    return () => {}
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Cursor />
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
        {/*<CustomerChat/>*/}
      </Container>
    </ArticlesContextProvider>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;
