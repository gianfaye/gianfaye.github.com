import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";

import mediaqueries from "@styles/media";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;
const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <>
      {/*<FooterGradient />*/}
      <FooterContainer>
        <FooterTopContainer>
          <FooterHeading>
            Everything Else.
          </FooterHeading>
          <FooterRow className="col-1-3">
            <FooterColumn>
              <FooterRow className="col-2">
                <FooterColumn>
                  <FooterMainLinks>
                    <FooterMainLink as={Link} to={'/'}>Home</FooterMainLink>
                    <FooterMainLink as={Link} to={'/about'}>About</FooterMainLink>
                    <FooterMainLink as={Link} to={'/projects'}>Projects</FooterMainLink>
                  </FooterMainLinks>
                </FooterColumn>
                <FooterColumn>
                  <FooterMainLinks>
                    <FooterMainLink as={Link} to={'/timeline'}>Timeline</FooterMainLink>
                    <FooterMainLink as={Link} to={'/blog'}>Blog</FooterMainLink>
                    <FooterMainLink as={Link} to={'/topics'}>Topics</FooterMainLink>
                  </FooterMainLinks>
                </FooterColumn>
              </FooterRow>
            </FooterColumn>
            <FooterColumn>
              <FooterRow className="col-1-2">
                <FooterColumn>
                  <FooterSubheading>
                    Works
                  </FooterSubheading>
                  <FooterLinks>
                    <FooterLink as={Link} to={'/works/website'}>Websites</FooterLink>
                    <FooterLink as={Link} to={'/works/landing-page'}>Landing Pages</FooterLink>
                    {/*<FooterLink>Single Page Applications</FooterLink>*/}
                    {/*<FooterLink>Ecommerce</FooterLink>*/}
                    <FooterLink as={Link} to={'/works/print'}>Print</FooterLink>
                    <FooterLink as={Link} to={'/works/software'}>Software</FooterLink>
                    {/*<FooterLink>Art</FooterLink>*/}
                  </FooterLinks>
                </FooterColumn>
                <FooterColumn>
                  <FooterSubheading>
                    Topics
                  </FooterSubheading>
                  <FooterRow className="col-2 min-gap">
                    <FooterColumn>
                      <FooterLinks>
                        <FooterLink as={Link} to={'/topics/web-development'}>Web Development</FooterLink>
                        <FooterLink as={Link} to={'/topics/cybersecurity'}>Cybersecurity</FooterLink>
                        {/*<FooterLink as={Link} to={'/topics/user-experience'}>User Experience</FooterLink>*/}
                        {/*<FooterLink as=Link to={'/topics/web-performance'}>Web Performance</FooterLink>*/}
                        <FooterLink as={Link} to={'/topics/data-analytics'}>Data Analytics</FooterLink>
                        <FooterLink as={Link} to={'/topics/visual-design'}>Visual Design</FooterLink>
                        <FooterLink as={Link} to={'/topics/communication'}>Communication</FooterLink>
                        {/*<FooterLink as=Link to={'/topics/web-development'}>Search Engine Optimization</FooterLink>*/}
                      </FooterLinks>
                    </FooterColumn>
                    <FooterColumn>
                      <FooterLinks>
                        <FooterLink as={Link} to={'/topics/internet-of-things'}>Internet of Things</FooterLink>
                        <FooterLink as={Link} to={'/topics/maker-culture'}>Maker Culture</FooterLink>
                        <FooterLink as={Link} to={'/topics/photography'}>Photography</FooterLink>
                        <FooterLink as={Link} to={'/topics/personal-growth'}>Personal Growth</FooterLink>
                        <FooterLink as={Link} to={'/topics/career-advice'}>Career Advice</FooterLink>
                        {/*<FooterLink>Virtual Reality</FooterLink>*/}
                        {/*<FooterLink>Augmented Reality</FooterLink>*/}
                        {/*<FooterLink>Machine Learning</FooterLink>*/}
                        {/*<FooterLink>Artificial Intelligence</FooterLink>*/}
                        {/*<FooterLink>Blockchain</FooterLink>*/}
                      </FooterLinks>
                    </FooterColumn>
                  </FooterRow>
                </FooterColumn>
              </FooterRow>
            </FooterColumn>
          </FooterRow>
          <HorizontalRule />
        </FooterTopContainer>
        <FooterBottomContainer>
          <SocialLinks links={social} />
          <FooterCopyright>
            <FooterText>
              {/*© {copyrightDate} {name}*/}
              © 2020 Gian Faye Paguirigan
            </FooterText>
          </FooterCopyright>
          <FooterSublinks>
            <FooterSublink as={Link} to={'/colophon'}>
              About this site
            </FooterSublink>
            <FooterSublink as={Link} to={'/privacy'}>
              Privacy
            </FooterSublink>
            <FooterSublink as={Link} to={'/terms'}>
              Terms of Use
            </FooterSublink>
            <FooterSublink href={'/rss.xml'} target={'_blank'}>
              RSS
            </FooterSublink>
          </FooterSublinks>
        </FooterBottomContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;


const FooterContainer = styled.footer`
  position: relative;
  display: block;
  width: 100%;
  padding: 50px 0;
  background: ${p => p.theme.colors.darkBackground};
  color: ${p => p.theme.colors.background};
  margin-top: 50px;

  ${mediaqueries.tablet`

  `}

  ${mediaqueries.phablet`
    padding: 20px 0;
  `}
`;

const FooterTopContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 4rem;

  ${mediaqueries.tablet`
    display: none;
  `}

  ${mediaqueries.phablet`

  `}
`;

const FooterRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  //grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  align-items: flex-start;
  position: relative;

  &.col-1-3{
    grid-template-columns: 2fr 3fr;
    grid-column-gap: 50px;

    ${mediaqueries.desktop`
      grid-template-columns: 1fr !important;
    `}
  }
  &.col-1-2{
    grid-template-columns: 1fr 1.5fr;
  }
  &.col-2{
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  &.min-gap{
    grid-column-gap: 10px;
  }

  ${mediaqueries.tablet`
    grid-template-columns: 1fr !important;
  `}
`;
const FooterColumn = styled.div`
  position: relative;

  ${mediaqueries.desktop`
    margin-bottom: 30px;
  `}
`;
const FooterHeading = styled.h5`
  font-size: 60px;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;
const FooterMainLinks = styled.div`
  padding-right: 30px;
  margin-top: 35px;
`;
const FooterMainLink = styled.a`
  color: ${p => p.theme.colors.background};
  margin-bottom: 10px;
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  display: block;

  &:hover{
    color: ${p => p.theme.colors.accent};
  }
`;
const FooterSubheading = styled.h6`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.sansSerif};
  margin-bottom: 15px;
`;
const FooterLinks = styled.div`

`;
const FooterLink = styled.a`
  color: ${p => p.theme.colors.background};
  margin-bottom: 10px;
  display: block;
  font-size: 20px;

  &:hover{
    color: ${p => p.theme.colors.accent};
  }
`;
const FooterSublinks = styled.div`
  position: relative;
  display: block;
  margin-top: -5px;

  ${mediaqueries.tablet`
    margin-top: 10px;
  `}
`;
const FooterSublink = styled.a`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${p => p.theme.colors.background};
  display: inline;
  font-size: 10px;
  margin-left: 15px;

  &:hover{
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.tablet`
    font-size: 8px;
    margin-left: 10px;

    &:first-of-type{
      margin-left: 0;
    }
  `}
`;
const FooterCopyright = styled.div`
  position: relative;
  display: block;
  font-size: 12px;
`;
const FooterText = styled.p`
  font-family: ${p => p.theme.fonts.sansSerif};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${p => p.theme.colors.background};
  font-size: 12px;

  ${mediaqueries.tablet`
    font-size: 12px;
  `}
`;
const FooterBottomContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 4rem;

  ${mediaqueries.tablet`
    flex-direction: column;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 0;
  `}
`;

const HorizontalRule = styled.div`
  position: relative;
  margin: 50px auto;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  opacity: 0;

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;
