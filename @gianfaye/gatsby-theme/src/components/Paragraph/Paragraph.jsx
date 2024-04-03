import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -.5px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto 35px auto;
  width: 100%;
  max-width: 700px;

  b {
    font-weight: 800;
  }

  code{
    font-size: 18px;
    padding: 2px 4px;
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.inputBackground};
    border: 1px solid ${p => p.theme.colors.lightGrey};
    border-radius: 3px;
    white-space: nowrap;
    line-height: 1;
    margin: 0 5px;
  }

  iframe{
    width: 100%;
  }

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px auto;

    iframe{
      max-height: 600px;
    }
  `};

  ${mediaqueries.phablet`
    padding: 0 20px auto;

    iframe{
      max-height: 500px;
    }
  `};
`;

export default Paragraph;
