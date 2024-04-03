import React, { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import {
//   type Container,
//   Engine
// } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
// import { loadFull } from "tsparticles";
import styled from '@emotion/styled';
import { useColorMode } from "theme-ui";
import Layout from '@components/Layout';
import Section from "@components/Section";
import SEO from '@components/SEO';
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';
import Icons from "@icons";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function AboutPage() {
  // const [init, setInit] = useState(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const invertImage = isDark && "invert";
  const fill = isDark ? "#fff" : "#000";
  const size = useWindowSize();

  // useEffect(() => {
  //   initParticlesEngine(async (engine: Engine) => {
  //     await loadSlim(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);
  //
  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  return (
    <Layout>
      <SEO />
      <Section narrow>
        <AboutHeader>
          <AboutHeading>
            Geek <span>of all</span> Trades
          </AboutHeading>
          <AboutAvatar>
            <img src="/photo.png" alt="Gian Faye Paguirigan" className={invertImage}/>
          </AboutAvatar>
        </AboutHeader>
        <AboutContainer>
          <AboutIntro className={'intro-top'}>
            <p>
              I have over 10 years of working experience as a web developer mainly focusing in frontend development but have worn several hats over the years when I did automated QA testing, user experience design, content management, copywriting, graphic design, video editing, and project management.
            </p>
          </AboutIntro>
          <AboutContent>
            <AboutSection>
              <AboutText>
                You might be wondering if my tagline comes from the figure of speech, "Jack of All Trades, Master of None." That can be half true. There is an open discussion as to whether a generalist is better than a specialist, or the other way around. You can weigh in the pros and cons but it always falls back to the situation when one can be more efficient than the other. My end goal has always been <a href="/blog/everyday-is-a-starting-point">being both</a>. It can be done. How? Being able to switch between seeing things in micro versus macro. One can focus on the finer details while still being able to visualize the bigger picture &mdash; directing motion and all its tiny moving parts. &#9724;
              </AboutText>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </Section>
      {/*{init && (*/}
      {/*  <Section>*/}
      {/*    <ParticleContainer>*/}
      {/*      <Particles*/}
      {/*        id="tsparticles"*/}
      {/*        particlesLoaded={particlesLoaded}*/}
      {/*        options={{*/}
      {/*          background: {*/}
      {/*            color: {*/}
      {/*              value: "#0d47a1",*/}
      {/*            },*/}
      {/*          },*/}
      {/*          fpsLimit: 120,*/}
      {/*          interactivity: {*/}
      {/*            events: {*/}
      {/*              onClick: {*/}
      {/*                enable: true,*/}
      {/*                mode: "push",*/}
      {/*              },*/}
      {/*              onHover: {*/}
      {/*                enable: true,*/}
      {/*                mode: "repulse",*/}
      {/*              },*/}
      {/*            },*/}
      {/*            modes: {*/}
      {/*              push: {*/}
      {/*                quantity: 4,*/}
      {/*              },*/}
      {/*              repulse: {*/}
      {/*                distance: 200,*/}
      {/*                duration: 0.4,*/}
      {/*              },*/}
      {/*            },*/}
      {/*          },*/}
      {/*          particles: {*/}
      {/*            color: {*/}
      {/*              value: "#ffffff",*/}
      {/*            },*/}
      {/*            links: {*/}
      {/*              color: "#ffffff",*/}
      {/*              distance: 150,*/}
      {/*              enable: true,*/}
      {/*              opacity: 0.5,*/}
      {/*              width: 1,*/}
      {/*            },*/}
      {/*            move: {*/}
      {/*              direction: "none",*/}
      {/*              enable: true,*/}
      {/*              outModes: {*/}
      {/*                default: "bounce",*/}
      {/*              },*/}
      {/*              random: false,*/}
      {/*              speed: 6,*/}
      {/*              straight: false,*/}
      {/*            },*/}
      {/*            number: {*/}
      {/*              density: {*/}
      {/*                enable: true,*/}
      {/*              },*/}
      {/*              value: 80,*/}
      {/*            },*/}
      {/*            opacity: {*/}
      {/*              value: 0.5,*/}
      {/*            },*/}
      {/*            shape: {*/}
      {/*              type: "circle",*/}
      {/*            },*/}
      {/*            size: {*/}
      {/*              value: { min: 1, max: 5 },*/}
      {/*            },*/}
      {/*          },*/}
      {/*          detectRetina: true,*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </ParticleContainer>*/}
      {/*  </Section>*/}
      {/*)}*/}
      <Section narrow>
        <AboutContainer>
          <AboutFeature>
            <AboutSubheading>Skillset</AboutSubheading>
            <AboutContent>
              <AboutSection>
                <AboutText>
                  My current expertise is on <strong>front-end development</strong> and <strong>user experience design</strong>. If you would read this article: <a
                  href="http://htmlcssjavascript.com/web/the-front-end-engineering-spectrum-the-three-generic-types-of-front-end-engineers/" target="_blank">The Front End Engineering Spectrum - The Three Generic Types of Front End Engineers  &rarr;</a> I'd be <strong>The Core</strong> &ndash; heading towards being full-stack.
                </AboutText>
                <AboutText>
                  My approach to design is mainly intuitive but I'm familiar with most of the textbook concepts such as the Gestalt principles and common design patterns.
                </AboutText>
                <AboutText>My current snack is <strong>JAM (Javascript, APIs, Markups)</strong> mainly using <strong>React.js</strong> and messing up with components and states. This site is built with GatsbyJS, a React.js framework, coupled with GraphQL.
                </AboutText>
                <AboutText>
                  Check out my <a href="https://app.pluralsight.com/profile/gianfaye">Pluralsight Role IQ Skill Assessment  &rarr;</a> (as of April 2, 2020)
                </AboutText>
              </AboutSection>
            </AboutContent>
          </AboutFeature>
        </AboutContainer>
      </Section>
      <Section>
        <AboutDivider>
          <Section narrow>
            <AboutSectionsListWrapper>
              <AboutSectionsListContent>
                <AboutSectionListHeader>
                  My Favorite Stack
                </AboutSectionListHeader>
                <AboutSectionListText>
                  Technologies I've extensively used at work and I can say i’m quite good at
                </AboutSectionListText>
                <AboutSectionListButton href={'mailto:contact@gianfaye.com'}>
                  Let's work together
                </AboutSectionListButton>
              </AboutSectionsListContent>
              <AboutSectionsListContainerWrapper>
                <List>
                  <Item>
                    <AboutSectionContent>
                      <ImageContainer>
                        <Image src={'/skills/html5.png'} alt={'HTML5'} />
                      </ImageContainer>
                      <Title>HTML5</Title>
                    </AboutSectionContent>
                  </Item>
                  <Item>
                    <AboutSectionContent>
                      <ImageContainer>
                        <Image src={'/skills/css3.png'} alt={'CSS3'} />
                      </ImageContainer>
                      <Title>CSS3</Title>
                    </AboutSectionContent>
                  </Item>
                  <Item>
                    <AboutSectionContent>
                      <ImageContainer>
                        <Image src={'/skills/react.png'} alt={'React'} />
                      </ImageContainer>
                      <Title>React</Title>
                    </AboutSectionContent>
                  </Item>
                  <Item>
                    <AboutSectionContent>
                      <ImageContainer>
                        <Image src={'/skills/typescript.png'} alt={'TypeScript'} />
                      </ImageContainer>
                      <Title>TypeScript</Title>
                    </AboutSectionContent>
                  </Item>
                  <Item>
                    <AboutSectionContent>
                      <ImageContainer>
                        <Image src={'/skills/es6.png'} alt={'JavaScript ES6'} />
                      </ImageContainer>
                      <Title>JavaScript</Title>
                    </AboutSectionContent>
                  </Item>
                </List>
              </AboutSectionsListContainerWrapper>
            </AboutSectionsListWrapper>
          </Section>

        </AboutDivider>
      </Section>
      <Section narrow>
        <AboutContainer>
          <AboutIntro>
            <AboutSocialLinks>
              <AboutSocialLink>
                <AboutSocial href={'https://www.linkedin.com/gianfaye/'} target={'_blank'}>
                  <Icons.LinkedIn fill={fill} /> LinkedIn
                </AboutSocial>
              </AboutSocialLink>
              <AboutSocialLink>
                <AboutSocial href={'https://github.com/gianfaye'} target={'_blank'}>
                  <Icons.Github fill={fill} /> Github
                </AboutSocial>
              </AboutSocialLink>
              <AboutSocialLink>
                <AboutSocial href={'https://twitter.com/gianfaye'} target={'_blank'}>
                  <Icons.Twitter fill={fill} /> Twitter
                </AboutSocial>
              </AboutSocialLink>
            </AboutSocialLinks>
          </AboutIntro>
          <AboutContent>
            <AboutSection>
              <Headings.h2>Interests</Headings.h2>
              <AboutText>
                Aside from web technologies, I am very interested in <strong>augmented reality</strong>, <strong>cybersecurity</strong>, the <strong>maker culture</strong>, and the <strong>internet of things</strong>. If I'm not tinkering stuff on <a href="https://www.youtube.com/watch?v=iDbyYGrswtg" target="_blank">the internet</a>, I'd probably be <a
                href="/blog/coffee-getting-cold-alarm-device-arduino">tinkering things IRL</a>.
              </AboutText>
            </AboutSection>
          </AboutContent>
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
  color: ${p => p.theme.colors.primary};

  span{
    font-size: 70px;
    line-height: 0.9;
    display: inherit;
    opacity: 0.2;
    margin-bottom: 16px;
    margin-right: 150px;
    color: ${p => p.theme.colors.grey};
  }

  ${mediaqueries.tablet`
    font-size: 100px;
  `}
  ${mediaqueries.phablet`
    font-size: 60px;
  `}
`;

const AboutSubheading = styled.h2`
  position: relative;
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  width: 60%;
  font-size: 100px;
  line-height: 1;
  color: ${p => p.theme.colors.primary};
  margin-top: 50px;

  ${mediaqueries.tablet`
    font-size: 80px;
    margin-top: 20px;
  `}
  ${mediaqueries.phablet`
    font-size: 40px;
    margin: 20px;
  `}
`;

const AboutAvatar = styled.div`
  width: 50%;

  img{
    max-width: 500px;
    width: 100%;

    &.invert{
      filter: invert(1);
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;

  ${mediaqueries.tablet`
    flex-direction: column;
  `}
`;

const AboutIntro = styled.div`
  width: 30%;
  padding: 30px;

  &.intro-top{
    margin-top: -60px;
  }

  p{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 20px;
    position: relative;
    color: ${p => p.theme.colors.primary};

    span{
      margin-right: 6px;
    }
  }

  svg{
    padding: 10px;
    width: 50px;
    height: 50px;
    background: #eee;
    margin-right: 10px;
  }

  ${mediaqueries.desktop_medium`
    padding: 0;
  `}

  ${mediaqueries.tablet`
    padding: 30px;
    margin-top: -60px;
    width: 100%;
  `}

  ${mediaqueries.phablet`
    padding: 30px 20px;
  `}
`;

const AboutFeature = styled.div`
  width: 100%;
  padding: 50px;

  ${mediaqueries.phablet`
    padding: 0;
  `}
`;

const AboutContent = styled.div`
  width: 70%;
  padding: 50px;
  margin: 0 auto;

  h2{
    font-family: ${p => p.theme.fonts.sansSerif};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    color: ${p => p.theme.colors.primary};
  }

  p{
    color: ${p => p.theme.colors.primary};
  }

  ${mediaqueries.tablet`
   width: 100%;
    padding: 0 30px;
  `}

  ${mediaqueries.phablet`
    padding: 0 20px;
  `}
`;

const AboutSection = styled.div`
  display: block;
  position: relative;
`;


const AboutText = styled.p`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const AboutDivider = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${p => p.theme.colors.background};
  position: relative;
`;

const AboutSectionsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
`;

const AboutSectionsListContent = styled.div`
  flex: 1;
  padding: 50px;

  ${mediaqueries.phablet`
    padding: 30px;
  `}
`;

const AboutSectionsListContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutSectionListHeader = styled.h3`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${p => p.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 20px;
`;

const AboutSectionListText = styled.p`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const AboutSectionListButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: ${p => p.theme.colors.primary};
  color: #fff;
  border-radius: 3px;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${p => p.theme.colors.hover};
  }
`;

const AboutSocialLinks = styled.div`
  display: flex;
`;

const AboutSocialLink = styled.div`
  margin-right: 20px;
  a{
    text-decoration: none;
    color: ${p => p.theme.colors.primary};
    display: flex;
    align-items: center;
  }

  svg{
    width: 25px;
    height: 25px;
    margin-right: 10px;
    fill: ${p => p.theme.colors.primary};
  }
`;

const AboutSocial = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  display: flex;
  align-items: center;
`;

const ParticleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const Item = styled.li`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const AboutSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const Title = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${p => p.theme.colors.primary};
  font-size: 20px;
  margin-top: 20px;
`;
