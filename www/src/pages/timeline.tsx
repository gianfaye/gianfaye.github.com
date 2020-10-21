import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';
import Icons from "@icons";
import { useColorMode } from "theme-ui";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimelinePage() {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fillFg = isDark ? "#fafafa" : "#1A1A1B";
  const fillBg = isDark ? "#1A1A1B" : "#fafafa";
  return (
    <Layout>
      <SEO />
      <Section narrow>
        <TimelineContainer>
          <TimelineContent>
            <Headings.h1>Timeline</Headings.h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="19 May 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Rapid ES6 Training</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-05-19_course-pluralsight-rapid-es6-training.jpg" alt="Pluralsight Rapid ES6 Training Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Crash course for the JavaScript ES6 syntax, design patterns, and usage.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/rapid-es6-training'} title={'Pluralsight Rapid ES6 Training'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="11 May 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>WordPress Custom Theme Development</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-05-11_course-pluralsight-wordpress-custom-theme-development.jpg" alt="Pluralsight WordPress Custom Theme Development Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Structuring and creating a WordPress custom theme from scratch.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/wordpress-custom-theme-development'} title={'Pluralsight WordPress Custom Theme Development'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="11 May 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Introduction to WordPress Plugin Development</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-05-11_course-pluralsight-introduction-to-wordpress-plugin-development.jpg" alt="Pluralsight Introduction to WordPress Plugin Development Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Creating and integrating a WordPress plugin to a WordPress instance.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/wordpress-plugin-development-introduction'} title={'Pluralsight Introduction to WordPress Plugin Development'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="25 Apr 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>Women of React 2020</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Women of React
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-04-25_event-women-of-react-conf.jpg" alt="Women of React Conf 2020"/>
                </TimelineImage>
                <TimelineText>
                  Women of React is an online conference where women take the (virtual) stage, put together by and for women working with React.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://womenofreact.com/'} title={'Women of React'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="22 Apr 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>React Native Fundamentals</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-04-22_course-pluralsight-react-native-fundamentals.jpg" alt="Pluralsight React Native Fundamentals Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Creating components, using props and state, and making use of data from remote sources.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/react-native-fundamentals'} title={'Pluralsight React Native Fundamentals'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="22 Feb 2020"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>World IA Day 2020: The IA Element</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  UXPH, Asia Pacific College
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2020-02-22_event-world-ia-day-the-ia-element-manila.jpg" alt="World IA Day 2020: The IA Element"/>
                </TimelineImage>
                <TimelineText>
                  World IA Day was created to celebrate Information Architecture (IA) and to empower local leaders to keep growing and sharing this knowledge within their communities.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.uxph.org/events/wiad-2020/'} title={'World IA Day 2020: The IA Element'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="25 Nov 2017"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Digital Audio Fundamentals</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2017-11-25_course-pluralsight-digital-audio-fundamentals.jpg" alt="Pluralsight Digital Audio Fundamentals Certificate"/>
                </TimelineImage>
                <TimelineText>
                  An introduction to several of the most important concepts in digital audio.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/digital-audio-fundamentals'} title={'Pluralsight Digital Audio Fundamentals'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="28 Feb 2017"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Ethical Hacking: Reconnaissance/Footprinting</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2017-02-28_course-pluralsight-ethical-hacking-reconnaissance-footprinting.jpg" alt="Pluralsight Ethical Hacking: Reconnaissance/Footprinting Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Covers the process of probing a system with the intent of compromising the target.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/ethical-hacking-reconnaissance-footprinting'} title={'Pluralsight Ethical Hacking: Reconnaissance/Footprinting'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="10 Dec 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>MakeBlock Matchup</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Builtable, 3D Tayo
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-12-10_event-builtable-makeblock-matchup.jpg" alt="Builtable MakeBlock Matchup"/>
                </TimelineImage>
                <TimelineText>
                  Introduction to robotics. Make your own robot. Learn to program their blocking and movements. Event concludes with robot battles.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.facebook.com/events/1406822422680912/'} title={'Builtable Matchup and Robolympics'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="15 Nov 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Electronics Fundamentals</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-11-15_course-pluralsight-electronics-fundamentals.jpg" alt="Pluralsight Electronics Fundamentals Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Covers basic theory, DC and AC electrical circuits, electronic components, circuit design, and circuit construction methods.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/electronics-fundamentals'} title={'Pluralsight Electronics Fundamentals'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="29 Aug 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Ethical Hacking: Hacking Web Applications</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-08-29_course-pluralsight-ethical-hacking-web-applications.jpg" alt="Pluralsight Ethical Hacking: Hacking Web Applications Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Understanding how to detect and identify risks in web applications.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/ethical-hacking-web-applications'} title={'Pluralsight Ethical Hacking: Hacking Web Applications'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="29 Aug 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Ethical Hacking: Understanding Ethical Hacking</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-08-29_course-pluralsight-ethical-hacking-understanding.jpg" alt="Pluralsight Ethical Hacking: Understanding Ethical Hacking Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Learn to start thinking and looking at networks through the eyes of malicious attackers.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/ethical-hacking-understanding'} title={'Pluralsight Ethical Hacking: Understanding Ethical Hacking'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="25 Aug 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>React: Getting Started</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-08-25_course-pluralsight-react-getting-started.jpg" alt="Pluralsight React: Getting Started Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Covers the fundamental concepts about React to build practical web applications.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/react-js-getting-started'} title={'Pluralsight React: Getting Started'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="19 May 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>An Introduction to Design</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-05-19_course-pluralsight-introduction-to-design.jpg" alt="Pluralsight An Introduction to Design Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Understanding the fundamentals of design: typography, colors, perception, layout, and organization.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/design-introduction'} title={'Pluralsight An Introduction to Design'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="16 May 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Introduction to Arduino</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-05-16_course-pluralsight-introduction-to-arduino.jpg" alt="Pluralsight Introduction to Arduino Certificate"/>
                </TimelineImage>
                <TimelineText>
                  An introduction to the Arduino hardware and software platform for prototyping hardware solutions.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/arduino-introduction'} title={'Pluralsight Introduction to Arduino'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="16 May 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Bootstrap 3</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-05-16_course-pluralsight-bootstrap-3.jpg" alt="Pluralsight Bootstrap 3 Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Covers Twitter's Bootstrap 3 framework, a mobile-first responsive design framework for structuring a website's markup and styling.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/bootstrap-3'} title={'Pluralsight Bootstrap 3'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="24 Apr 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Typography for the Web</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-04-25_course-pluralsight-typography-for-the-web.jpg" alt="Pluralsight Typography for the Web Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Learn how to start thinking about type on the web by considering the many contexts for which we have to design.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/typography-for-web-1790'} title={'Pluralsight Typography for the Web'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="08 Apr 2016"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>User Experience Tips and Tricks for Developers</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Pluralsight
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2016-04-08_course-pluralsight-user-experience-tips-and-tricks-for-developers.jpg" alt="Pluralsight User Experience Tips and Tricks for Developers Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Understanding and applying basic UX principles and best practices to create a better user experience.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.pluralsight.com/courses/ux-tips-tricks-developers'} title={'Pluralsight User Experience Tips and Tricks for Developers'} target={'_blank'}>
                    Course Overview
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="13-14 Nov 2015"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>DevCon Summit 2015: Go Open Source PH</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  DevCon Philippines
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2015-11-13_event-devcon-summit-go-open-source.jpg" alt="DevCon Summit 2015: Go Open Source PH"/>
                </TimelineImage>
                <TimelineText>
                  The DevCon Summit, the Biggest Developer Conference in the Philippines, in its 5th year: DevCon Summit 2014 #GoOpenSourcePH
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://e27.co/event/devcon-summit-2015-goopensourceph/'} title={ 'DevCon Summit 2015: Go Open Source PH'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="04 June 2015"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Education fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Completed <strong>Emerging Trends in Threat Intel</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  Cybrary
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2015-06-13_course-cybrary-emerging-trends-in-threat-intel.jpg" alt="Cybrary Emerging Trends in Threat Intel Certificate"/>
                </TimelineImage>
                <TimelineText>
                  Gained an insider's knowledge of the latest trends happening in threat intel with this live classroom presented by Craig Williams, a team member of Cisco's Talos.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'https://www.brighttalk.com/webcast/12707/153641/emerging-trends-in-threat-intel'} title={'Cybrary Emerging Trends in Threat Intel'} target={'_blank'}>
                    Live Classroom Summary
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="29-30 May 2015"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>UX Summit 2015: Inspiring Innovation</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  UXMNL, UX Mastery
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2015-05-29_event-ux-summit-2015.jpg" alt="UX Summit 2015"/>
                </TimelineImage>
                <TimelineText>
                  UXMNL and UX Mastery presents UX Summit 2015: Inspiring Innovation, a 2-day event with hands-on activities related to user experience and information architecture.
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'http://slides.com/gianfaye/ux-mnl-ux-summit-2015/fullscreen'} title={ 'UX Summit 2015'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="29 Nov 2014"
                iconStyle={{ background: fillBg, color: fillFg }}
                icon={<Icons.Calendar fill={fillFg}/>}
              >
                <TimelineHeading className="vertical-timeline-element-title">
                  Attended <strong>DevCon Summit 2014: Developers Unite PH</strong>
                </TimelineHeading>
                <TimelineSubheading className="vertical-timeline-element-subtitle">
                  DevCon Philippines
                </TimelineSubheading>
                <TimelineImage>
                  <Image src="/timeline/2014-11-29_event-devcon-summit-developers-unite.jpg" alt="DevCon Summit 2014: Developers Unite PH"/>
                </TimelineImage>
                <TimelineText>
                  The DevCon Summit, the Biggest Developer Conference in the Philippines, in its 4th year: DevCon Summit 2014 #DevelopersUnitePH
                </TimelineText>
                <ExploreButtonContainer>
                  <ExploreButton href={'/blog/devcon-summit-2014'} title={'DevCon Summit 2014: Developers Unite PH'} target={'_blank'}>
                    Event Details
                  </ExploreButton>
                  <ExploreArrowContainer>
                    <ExploreArrow>
                      <Icons.ChevronLeft fill={fillFg} />
                    </ExploreArrow>
                  </ExploreArrowContainer>
                </ExploreButtonContainer>
              </VerticalTimelineElement>

            </VerticalTimeline>

          </TimelineContent>
        </TimelineContainer>
      </Section>
    </Layout>
  );
}

export default TimelinePage;

const TimelineContainer = styled.div`
  //margin: 100px 0;
  margin: 80px 0 100px 0;
  // display: inline-block;
  //text-align: center;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  //padding: 50px;

  @media only screen and (min-width: 1170px){
    .vertical-timeline-element-icon {
      top: 50%;
      margin-top: -30px;
    }
    .vertical-timeline{
      width: 100%;
    }
    .vertical-timeline-element-content-arrow{
      top: 50% !important;
      margin-top: -7px;
    }
    .vertical-timeline-element-content{
      border-radius: 0;
      box-shadow: none;
    }
    .vertical-timeline-element-content .vertical-timeline-element-date{
      top: 50%;
      font-size: 14px;
      margin-top: -21px;
      font-family: ${p => p.theme.fonts.sansSerif};
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 40px;
      font-weight: 600;
    }
    .vertical-timeline-element-content{
      border: 20px solid ${p => p.theme.colors.primary};
    }
    .vertical-timeline-element-content-arrow{
      margin-left: 20px;
      border-right-color: ${p => p.theme.colors.primary};
    }
    .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content-arrow, .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content-arrow{
      margin-right: 20px;
    }
    .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content .vertical-timeline-element-date, .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date{
      margin-right: 40px;
    }
  }

  .vertical-timeline::before{
    background: ${p => p.theme.colors.primary};
    width: 3px;
  }

  .vertical-timeline-element-icon{
     box-shadow: 0 0 0 3px ${p => p.theme.colors.primary};
  }

  .vertical-timeline-element-date{
    color: background: ${p => p.theme.colors.primary};
  }

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

const TimelineContent = styled.div`
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

const TimelineHeading = styled.h3`
  font-size: 24px;
  line-height: 1.33;
  text-align: center;
  margin: 10px 0 !important;
`;

const TimelineSubheading = styled.h4`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: center;
  margin-left: 2px;
  font-size: 14px;
`;

const TimelineImage = styled.div`
  margin: 20px -24px;
  border-top: 1px solid ${p => p.theme.colors.background};
  border-bottom: 1px solid ${p => p.theme.colors.background};

  img{
    width: 100%;
  }
`;

const TimelineText = styled.p`
  //font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.grey};
  line-height: 1.54;
  text-align: center;
  font-size: 16px !important;
  max-width: 300px;
  margin: 10px auto !important;

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

const ExploreButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
`;

const ExploreButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  font-family: ${p => p.theme.fonts.sansSerif};
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.primary};
  border: 2px solid ${p => p.theme.colors.primary};
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color .15s ease,color .15s ease,border .15s ease;
  padding: 12px 15px;
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover{
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.primary};
  }
`;

const ExploreArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${p => p.theme.colors.primary};
  width: 30px;
  margin-top: 20px;
  margin-left: -2px;
  height: 48px;
  transform: rotate(180deg);
  position: absolute;
  right: 0;
`;

const ExploreArrow = styled.div`

`;
