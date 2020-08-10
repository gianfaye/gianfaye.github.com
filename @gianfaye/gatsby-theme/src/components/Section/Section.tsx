import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Section = styled.section<{ narrow?: boolean }>`
  width: 100%;
  max-width: ${p => (p.narrow ? '1220px' : 'unset')};
  margin: 0 auto;
  padding: 0 4rem;

  ${mediaqueries.desktop`
    max-width: 850px;
  `};

  ${p =>
    p.narrow
      ? mediaqueries.tablet`
          padding: 0 30px;
          max-width: 527px;
        `
      : mediaqueries.tablet`
          padding: 0 4rem;
          max-width: 567px;
        `}

  ${mediaqueries.phablet`
    max-width: 100%;
  `};
`;

export default Section;
