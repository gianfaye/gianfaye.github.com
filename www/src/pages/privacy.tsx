import React from "react";
import styled from '@emotion/styled';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import mediaqueries from '@styles/media';

function PrivacyPage() {
  return (
    <Layout>
      <SEO />
      <Section narrow>
        <StaticContainer>
          <StaticContent>
            <Headings.h1>Privacy Policy</Headings.h1>
            <StaticText>
              Welcome to the portfolio website of Gian Faye Paguirigan, GianFaye.com (the "Website"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and share information about you when you visit or use the Website.
            </StaticText>
            <StaticText>
              By visiting or using the Website, you consent to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our policies and practices, do not use the Website.
            </StaticText>

            <Headings.h2>1. Information we collect</Headings.h2>
            <StaticText>
              We may collect information about you in the following ways:
            </StaticText>

              <Headings.h3>a. Information you provide to us:</Headings.h3>
              <StaticText>
                We may collect information you provide to us directly, such as when you contact us through the Website or sign up for updates or newsletters. This may include your name, email address, and any other personal information you choose to provide.
              </StaticText>

              <Headings.h3>b. Information we collect automatically:</Headings.h3>
              <StaticText>
                We may automatically collect certain information about you when you visit or use the Website, such as your IP address, device type, browser type, and information about your interaction with the Website. We may also use cookies, web beacons, and other tracking technologies to collect this information.
              </StaticText>

              <Headings.h3>c. Information from third parties:</Headings.h3>
              <StaticText>
                We may also receive information about you from third parties, such as social media platforms or other websites that integrate with the Website.
              </StaticText>

            <Headings.h2>2. How we use your information</Headings.h2>
            <StaticText>
              We may use the information we collect about you for the following purposes:
            </StaticText>

              <Headings.h3>a. To provide and improve the Website:</Headings.h3>
              <StaticText>
                We may use your information to operate and maintain the Website, and to provide and improve the features and functionality of the Website.
              </StaticText>

              <Headings.h3>b. To communicate with you:</Headings.h3>
              <StaticText>
                We may use your information to communicate with you, such as to respond to your inquiries or to send you updates or newsletters.
              </StaticText>

              <Headings.h3>c. To personalize your experience:</Headings.h3>
              <StaticText>
                We may use your information to personalize your experience on the Website, such as by showing you content that is more relevant to your interests.
              </StaticText>

              <Headings.h3>d. For research and analytics:</Headings.h3>
              <StaticText>
                We may use your information for research and analytics purposes, such as to understand how users interact with the Website and to improve the Website.
              </StaticText>

            <Headings.h2>3. How we share your information</Headings.h2>
            <StaticText>
              We may share your information in the following ways:
            </StaticText>

              <Headings.h3>a. With third party service providers:</Headings.h3>
              <StaticText>
                We may share your information with third party service providers who perform services on our behalf, such as hosting the Website or assisting with analytics.
              </StaticText>

              <Headings.h3>b. With legal or regulatory authorities:</Headings.h3>
              <StaticText>
                We may be required to disclose your information to legal or regulatory authorities in response to a request, subpoena, or other legal process.
              </StaticText>

            <Headings.h2>4. Your choices and rights</Headings.h2>
            <StaticText>
              You have certain choices and rights regarding the information we collect and how we use it. These include the following:
            </StaticText>

              <Headings.h3>a. Opting out of communications:</Headings.h3>
              <StaticText>
                You may opt out of receiving communications from us by following the unsubscribe instructions in the communications you receive from us.
              </StaticText>

              <Headings.h3>b. Accessing and correcting your information:</Headings.h3>
              <StaticText>
                You may request access to the information we have about you and request that we correct or update any inaccurate or incomplete information.
              </StaticText>

              <Headings.h3>c. Deleting your information:</Headings.h3>
              <StaticText>
                You may request that we delete the information we have about you. Please note that we may be required to retain certain information for legal or regulatory purposes.
              </StaticText>

              <Headings.h3>d. Restricting the use of your information:</Headings.h3>
              <StaticText>
                You may request that we restrict the use of your information.
              </StaticText>

              <Headings.h3>e. Objecting to the use of your information:</Headings.h3>
              <StaticText>
                You may object to the use of your information for certain purposes, such as for marketing or research and analytics.
              </StaticText>

            <StaticText>
              To exercise any of these rights, please contact us at support@gianfaye.com. Please note that we may need to verify your identity before fulfilling your request.
            </StaticText>

            <Headings.h2>5. Links to other websites</Headings.h2>
            <StaticText>
              The Website may contain links to other websites that are not operated by us. These links are provided for your convenience and are not intended as an endorsement of the content of the linked websites. We are not responsible for the content or practices of these websites, and we encourage you to review the privacy policies of any website you visit.
            </StaticText>

            <Headings.h2>6. Security</Headings.h2>
            <StaticText>
              We take reasonable steps to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee the security of your information.
            </StaticText>

            <Headings.h2>7. Changes to this Privacy Policy</Headings.h2>
            <StaticText>
              We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices.
            </StaticText>

            <Headings.h2>8. Contact us</Headings.h2>
            <StaticText>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at support@gianfaye.com.
            </StaticText>

          </StaticContent>
        </StaticContainer>
      </Section>
    </Layout>
  );
}

export default PrivacyPage;

const StaticContainer = styled.div`
  margin: 80px 0 100px 0;
  display: inline-block;
  width: 100%;

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

const StaticContent = styled.div`
  max-width: 700px;
  margin: 0 auto;

  h1 {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 1.15;
    color: ${p => p.theme.colors.primary};
  }
`;

const StaticText = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: 18px;
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
