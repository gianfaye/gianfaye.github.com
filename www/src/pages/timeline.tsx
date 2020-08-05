import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';

function TimelinePage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <TimelineContainer>
          <TimelineContent>
            <Headings.h1>Timeline</Headings.h1>
            <TimelineText>
              I'm <strong>Gian Faye Paguirigan</strong><small> <small> [ Pronounced as *jee&bull;yan fey pa&bull;gi&bull;ri&bull;gan* ]</small></small>, a web geek from the Philippines.
            </TimelineText>
            <Headings.h2>Summary</Headings.h2>
            <TimelineText>
              I have been working on <strong>user interfaces</strong> for the web since 2010. I started with customizing blog templates during the blogging era <small>[ remember blogspot? <small>but seriously, I started during the Friendster and Multiply era but let's not dwell on that OKAY</small> ]</small>, then creating and setting up a website and <strong>CMS</strong> from the ground up <small><small>[ without WordPress</small> &#x1F62E; <small>]</small></small>, setting up <strong>web hosting</strong> <small><small>[ ugh, cPanel</small> &#x1F644; <small>]</small></small>, setting up <strong>DNS</strong> <small><small>[ A records and stuff ~ .tk, Namecheap, GoDaddy, Name.com, you name it ]</small></small>, uploading via <strong>FTP</strong> <small> &#x1F62C;</small>, editing code in <strong>VIM</strong> and updating web pages via <strong>SSH</strong> <small>&#x1F616;</small> &mdash; <em>aaaand</em> fast forward to using <strong>version control / SCM</strong> (<strong>Git</strong> and <strong>Subversion</strong>), creating my own <strong>design system</strong> and <strong>brand bible</strong> for companies, customizing <strong>Shopify Liquid</strong> templates, drafting <strong>wireframes</strong> and <strong>mockups</strong>, creating <strong>SVGs</strong> and <strong>Symbols</strong> in <strong>Sketch</strong>, integrating with <strong>APIs</strong> and creating <strong>single-page applications (SPA)</strong> in <strong>React</strong> and <strong>Angular</strong>. From <strong>Notepad ++</strong> to <strong>Sublime Text</strong> to <strong>Webstorm</strong> <em>not</em> real quick.
            </TimelineText>
            <Headings.h2>Skillset</Headings.h2>
            <img src="/assets/images/bio/gfp-skillset-2020-04.jpg" alt="2020 Featured Skillset"/>
            <TimelineText>
              Verified by: <a href="https://app.pluralsight.com/profile/gianfaye">Pluralsight Role IQ Skill Assessment</a> (as of April 2, 2020)
            </TimelineText>
            <TimelineText>
              If you are interested to know more about my skills and the tools I use, [contact me](mailto:contact@gianfaye.com) and I will send you my CV. My current expertise is on **front-end development** and **user experience design**.
            </TimelineText>
            <TimelineText>
              If you would read this article: [The Front End Engineering Spectrum- The Three Generic Types of Front End Engineers](http://htmlcssjavascript.com/web/the-front-end-engineering-spectrum-the-three-generic-types-of-front-end-engineers/) I'd be <strong>The Core</strong> -- heading towards being full-stack.
            </TimelineText>
            <TimelineText>
              My approach to design is mainly intuitive but I'm familiar with most of the textbook concepts such as the Gestalt principles and common design patterns.
            </TimelineText>
            <TimelineText>
              My current snack is <strong>ReactJS</strong> spiced with <strong>Redux</strong> messing up with components and states.
            </TimelineText>
            <TimelineText>
              Connect with me on <a href="https://ph.linkedin.com/in/gianfaye" target="_blank">LinkedIn &rarr;</a>
            </TimelineText>
            <Headings.h2>Interests</Headings.h2>
            <TimelineText>
              Aside from web technologies, I am very interested in **forensic science** specializing in **computer forensics**, anything about **InfoSec**, the **maker culture**, and the **Internet of Things**. If I'm not tinkering stuff on <a href="https://www.youtube.com/watch?v=iDbyYGrswtg">the internet</a>, I'll probably be tinkering things IRL.
            </TimelineText>
          </TimelineContent>
          {/*<TimelineImage src={'./404.png'} />*/}
        </TimelineContainer>
      </Section>
    </Layout>
  );
}

export default TimelinePage;

const TimelineContainer = styled.div`
  //margin: 100px 0;
  margin: 80px 0 100px 0;
  display: inline-block;
  //text-align: center;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  //padding: 50px;

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

const TimelineImage = styled(Image)`
  width: 100%;
  max-width: 400px;
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

const TimelineText = styled.p`
  //font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.grey};
  line-height: 1.54;
  margin-bottom: 20px;

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
