import { useState, useEffect, useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useColorMode } from "theme-ui";
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import Image from '@components/Image';
import mediaqueries from '@styles/media';
import Icons from "@icons";


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function AboutPage() {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const invertImage = isDark && "invert";
  const fill = isDark ? "#fff" : "#000";
  const size = useWindowSize();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

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
              I have over 10 years of working experience as a web developer mainly focusing in frontend development but have worn several hats over the years when I have to do automated QA testing, user experience design, content management, copywriting, graphic design, video editing, and project management.
            </p>
          </AboutIntro>
          <AboutContent>
            <AboutSection>
              <AboutText>
                You might be wondering if my tagline comes from the figure of speech, "Jack of All Trades, Master of None." That can be half true. There is an open discussion as to whether a generalist is better than a specialist, or the other way around. You can weigh in the pros and cons but it always falls back to the situation when one can be more efficient than the other. My end goal has always been <a href="/blog/everyday-is-a-starting-point">being both</a>. Rolling eyes aside, it can be done. How? Being able to switch between seeing things in micro versus macro. One can focus on the finer details while still being able to visualize the bigger picture &mdash; directing motion and all its tiny moving parts. &#9724;
              </AboutText>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </Section>
      <Section>
        <ParticleContainer>
          <Particles
            width={`${size.width}px`}
            height='300px'
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: false,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 10,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 50,
                    duration: 0.2,
                  },
                },
              },
              fpsLimit: 120,
              particles: {
                color: {
                  value: "#000",
                },
                links: {
                  color: "#000",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 0.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 150,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.3,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </ParticleContainer>
      </Section>
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
      // position: absolute;
      // left: -30px;
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
  //margin-bottom: 30px;
  display: block;
  position: relative;
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

const AboutSocialLinks = styled.ul`
  list-style-type: none;
  padding: 20px 0;

  ${mediaqueries.desktop_medium`
    padding: 50px 0;
  `}
`;

const AboutSocialLink = styled.li`
  margin-bottom: 10px;

  ${mediaqueries.phablet`
    // max-width: 150px;
    // margin: 0 auto;
    // margin-bottom: 10px;
  `}
`;

const AboutSocial = styled.a`
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  font-size: 20px;
`;

const ParticleContainer = styled.div`
  margin: 0 -40px 40px -40px;
  padding: 0;
  transition: opacity 0.25s;
  display: grid;
  grid-template-columns: 500px 1fr;
  height: 300px;
  //background: #f0f4f6;

  & canvas{
    position: relative !important;
  }

  ${mediaqueries.tablet`
    grid-template-columns: 1fr !important;
    padding: 60px !important;
  `}
`;
const AboutDivider = styled.div`
  margin: 0 -40px;
  padding: 60px 0;
  background: #f0f4f6;
  overflow: hidden;

  ${mediaqueries.tablet`
    margin-top: 60px;
    margin-bottom: 60px;
  `}
`;

const AboutSectionsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  margin: 0 auto;

  ${mediaqueries.desktop`
    grid-template-columns: 50% 1fr;
  `}
  ${mediaqueries.desktop_medium`
    grid-template-columns: 1fr !important;
    position: relative;
    display: block;
    text-align: center;
  `}
`;

const AboutSectionsListContainerWrapper = styled.div`
  position: relative;
  max-width: 825px;
`;


const AboutSectionsListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaqueries.tablet`
    padding-left: 0;
  `}
`;

const AboutSectionListHeader = styled.h3`
  font-size: 32px;
  line-height: 0.9;
  margin-bottom: 20px;
`;

const AboutSectionListText = styled.p`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.italic};
  padding-right: 20px;
  margin-bottom: 20px;
  font-style: italic;
  opacity: 0.8;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.6px;

  ${mediaqueries.phablet`
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
  `}
`;

const AboutSectionListButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  font-family: ${p => p.theme.fonts.sansSerif};
  background: ${p => p.theme.colors.projectColor};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  box-sizing: border-box;
  transition: background-color .15s ease,color .15s ease,border .15s ease;
  padding: 12px 15px;
  width: 300px;
  text-align: center;

  &:hover{
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.background};
  }

  ${mediaqueries.desktop_medium`
    margin: 0 auto;
  `}
`;

const List = styled.div`
  display: flex;

  ${mediaqueries.tablet`
    width: 100%;
    flex-flow: column;
  `}
`;

const Item = styled.div`
  min-width: 100px;
`;

const ImageContainer = styled.div`
  position: relative;
  // border-radius: 100%;
  overflow: hidden;
  transition: transform 0.3s var(--ease-out-quad),
  box-shadow 0.3s var(--ease-out-quad);
  margin: 0 auto;

  & > div {
    height: 100%;
  }

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
  `}
`;

const AboutSectionContent = styled.div`
  padding: 50px 3px;
  z-index: 600;
  display: block;
  position: relative;

  img{
    width: 100%;
  }

  ${mediaqueries.tablet`
    margin: 0 auto;
    width: 100%;
    border-radius: 100%;
    max-width: 200px;
    padding: 0;
    margin-top: 30px;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 20px;
    margin-bottom: 0;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;
