import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

import { copyToClipboard } from "../../utils";

const Copy = ({ toCopy }) => {
  const copyToClipboardOnClick = () => {
    copyToClipboard(toCopy);
  };

  return (
    <CopyButton onClick={copyToClipboardOnClick}>
      Copy
    </CopyButton>
  );
};
const CodePrism = ({
                                               codeString,
                                               language,
                                               metastring,
                                               ...props
                                             }) => {
  return (
    <Highlight
      theme={themes.shadesOfPurple}
      code={codeString?.toString() ?? ''}
      language={language ?? 'js'}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container>
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
            <Copy toCopy={codeString} />
          </pre>
        </Container>
      )}
    </Highlight>
  );
};

export default CodePrism;

const CopyButton = styled.button`
  position: absolute;
  right: 22px;
  top: 24px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;

const Container = styled.div`
  position: relative;
  overflow: scroll;
  width: 100%;
  max-width: 750px;
  font-size: 13px;
  margin: 15px auto 50px;
  border-radius: 5px;
  font-family: ${p => p.theme.fonts.monospace} !important;

  textarea,
  pre {
    padding: 32px !important;
    font-family: ${p => p.theme.fonts.monospace} !important;
  }

  ${mediaqueries.desktop`
    left: -26px;
  `}

  ${mediaqueries.tablet`
    max-width: 526px;
    left: 0;

    textarea,
    pre {
      padding: 20px !important;
    }
  `}

  ${mediaqueries.phablet`
    border-radius: 0;
    margin: 0 auto 25px;
    overflow: initial;
    width: unset;
    max-width: unset;
    float: left;
    min-width: 100%;
    overflow: initial;
    position: relative;
  `}
`;
