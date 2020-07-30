import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};
  font-style: italic;
  width: 100%;
  max-width: 700px;

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.serif};
    max-width: 700px !important;
    padding-right: 100px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    font-size: 36px;
    line-height: 1.32;
    font-weight: 400;
    padding: 0 0 0 60px;
    margin: 0 0 0 auto;
    border-left: 5px solid;

    ${mediaqueries.tablet`
      font-size: 26px;
      padding: 0 180px;
    `};

    ${mediaqueries.phablet`
      font-size: 36px;
      padding: 0 20px 0 40px;
    `};

    &:before {
      font-size: 33px;
      line-height: 42px;
      letter-spacing: -1.2px;
      text-transform: none;
      font-style: italic;
      content: "\\201C";
      position: absolute;
       margin-left: -30px;
    }
  }

  & > ul {
    max-width: 700px !important;
    width: 100%;
    padding: 15px 0 0 60px;
    border-left: 5px solid;

    ${mediaqueries.phablet`
      padding: 15px 0 0 40px;
    `};
  }

  & > ul > li {
    font-family: ${p => p.theme.fonts.sansSerif};
    color: ${p => p.theme.colors.grey};
    font-size: 14px;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0;
    letter-spacing: 2px;

    span.author{
      color: ${p => p.theme.colors.primary};
    }
    span.source{
      color: ${p => p.theme.colors.lightGrey};
    }

    &:before{
      display: none;
    }
  }
`;

export default Blockquote;
