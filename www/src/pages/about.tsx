import React from "react";
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';

function AboutPage() {
  return (
    <Layout>
      <SEO />
      <Section narrow>
        <AboutHeader>
          <AboutHeading>
            Geek <span>of all</span> Trades
          </AboutHeading>
          <AboutAvatar>
            <img src="/photo.png" alt="Gian Faye Paguirigan"/>
          </AboutAvatar>
        </AboutHeader>
        <AboutContainer>
          <AboutIntro>
            <p>
              I'm currently working as a Senior Frontend Developer at a digital marketing agency in Makati where I handle web projects and directly communicate with clients.
            </p>
            <p>
              I have 10 years of working experience as a web developer mainly focusing in frontend development but have worn several hats over the years when I have to do automated QA testing, content management, copywriting, project management, solutions architecture, graphic design, and user experience design.
            </p>
          </AboutIntro>
          <AboutContent>
            <AboutSection>
              <AboutText>
                You might be wondering if my tagline comes from the figure of speech, "Jack of All Trades, Master of None." That can be half true. There is an open discussion as to whether a generalist is better than a specialist, or the other way around. You can weigh in the pros and cons but it always falls back to the situation when one can be more efficient than the other. My end goal has always been <a href="/blog/everyday-is-a-starting-point">being both</a>. Rolling eyes aside, it can be done. How? Being able to switch between seeing things in micro versus macro. One can focus on the finer details while still being able to visualize the bigger picture &mdash; directing motion and all its tiny moving parts.
              </AboutText>
            </AboutSection>
            <AboutSection>
              <Headings.h2>Skillset</Headings.h2>
              <AboutText>
                My current expertise is on <strong>front-end development</strong> and <strong>user experience design</strong>. If you would read this article: <a
                href="http://htmlcssjavascript.com/web/the-front-end-engineering-spectrum-the-three-generic-types-of-front-end-engineers/" target="_blank">The Front End Engineering Spectrum - The Three Generic Types of Front End Engineers  &rarr;</a> I'd be <strong>The Core</strong> &ndash; heading towards being full-stack.
              </AboutText>
              <AboutText>
                My approach to design is mainly intuitive but I'm familiar with most of the textbook concepts such as the Gestalt principles and common design patterns. My current snack is <strong>JAM (Javascript, APIs, Markups)</strong> mainly using <strong>React.js</strong> and messing up with components and states. This site is built with GatsbyJS, a React.js framework, coupled with GraphQL.
              </AboutText>
              <AboutText>
                Check out my <a href="https://app.pluralsight.com/profile/gianfaye">Pluralsight Role IQ Skill Assessment  &rarr;</a> (as of April 2, 2020)
              </AboutText>
            </AboutSection>
            <AboutSection>
              <Headings.h2>Interests</Headings.h2>
              <AboutText>
                Aside from web technologies, I am very interested in <strong>computer forensics</strong>, anything about <strong>InfoSec</strong>, the <strong>maker culture</strong>, and the <strong>Internet of Things</strong>. If I'm not tinkering stuff on <a href="https://www.youtube.com/watch?v=iDbyYGrswtg" target="_blank">the internet</a>, I'll probably be <a
                href="/blog/coffee-getting-cold-alarm-device-arduino">tinkering things IRL</a>.
              </AboutText>
            </AboutSection>
          </AboutContent>
          {/*<AboutImage src={'./404.png'} />*/}
        </AboutContainer>
      </Section>
    </Layout>
  );
}

export default AboutPage;

const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
const AboutHeading = styled.h1`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  width: 60%;
  text-align: right;
  font-size: 150px;
  line-height: 1;
  margin-right: -130px;
  margin-bottom: 60px;

  span{
    font-size: 70px;
    line-height: 0.9;
    display: inherit;
    opacity: 0.2;
    margin-bottom: 16px;
    margin-right: 150px;
  }
`;
const AboutAvatar = styled.div`
  width: 50%;

  img{
    max-width: 500px;
    width: 100%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
`;

const AboutIntro = styled.div`
  width: 30%;
  padding: 30px;
  margin-top: -60px;

  p{
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 20px;
    position: relative;
    color: ${p => p.theme.colors.grey};

    span{
      // position: absolute;
      // left: -30px;
      margin-right: 6px;
    }
  }
`;

const AboutImage = styled(Image)`
  width: 100%;
  max-width: 400px;
`;

const AboutContent = styled.div`
  width: 70%;
  padding: 50px;

  h2{
    font-family: ${p => p.theme.fonts.sansSerif};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
  }
`;

const AboutSection = styled.div`
  margin-bottom: 30px;
`;


const AboutText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -.5px;

  small{
    font-size: 0.8em;
  }

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
