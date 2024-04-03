import React from "react";
import styled from '@emotion/styled';

import Layout from "@components/Layout";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Headings from "@components/Headings";
import mediaqueries from '@styles/media';

function TermsPage() {
  return (
    <Layout>
      <SEO />
      <Section narrow>
        <StaticContainer>
          <StaticContent>
            <Headings.h1>Terms of Use</Headings.h1>

            <Headings.h2>1. Introduction</Headings.h2>
            <StaticText>
              Welcome to the portfolio website of Gian Faye Paguirigan, GianFaye.com (the "Website"). By accessing or using the Website, you agree to be bound by these terms of use (the "Terms of Use"). If you do not agree to these Terms of Use, you may not access or use the Website.
            </StaticText>

            <Headings.h2>2. License to use the Website</Headings.h2>
            <StaticText>
              Subject to these Terms of Use, Gian Faye Paguirigan grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for your personal, non-commercial use. This license is granted on the condition that you will not (and will not allow any third party to) copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, grant a security interest in or otherwise transfer any right in the Website.
            </StaticText>

            <Headings.h2>3. Prohibited uses</Headings.h2>
            <StaticText>
              You may not use the Website for any illegal or unauthorized purpose. You must not, in the use of the Website, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </StaticText>

            <Headings.h2>4. User submissions</Headings.h2>
            <StaticText>
              Any information or content that you submit to the Website, including but not limited to comments, suggestions, ideas, and photographs, will be considered non-confidential and non-proprietary. By submitting any such information or content, you grant Gian Faye Paguirigan a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, publish, distribute, and sublicense such information or content.
            </StaticText>

            <Headings.h2>5. Disclaimer of warranties</Headings.h2>
            <StaticText>
              The Website is provided on an "as is" and "as available" basis. Gian Faye Paguirigan makes no representations or warranties of any kind, express or implied, as to the operation of the Website or the information, content, materials, or products included on the Website. To the full extent permissible by applicable law, Gian Faye Paguirigan disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. Gian Faye Paguirigan will not be liable for any damages of any kind arising from the use of the Website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
            </StaticText>

            <Headings.h2>6. Limitation of liability</Headings.h2>
            <StaticText>
              Gian Faye Paguirigan will not be liable for any indirect, incidental, special, or consequential damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, good-will, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website; (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website; or (iv) unauthorized access, use or alteration of your transmissions or content.
            </StaticText>

            <Headings.h2>7. Indemnification</Headings.h2>
            <StaticText>
              You agree to indemnify and hold Gian Faye Paguirigan and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Website, your violation of these Terms of Use, or your violation of any rights of another.
            </StaticText>

            <Headings.h2>8. Governing law</Headings.h2>
            <StaticText>
              These Terms of Use and your use of the Website will be governed by and construed in accordance with the laws of the Republic of the Philippines without giving effect to any principles of conflicts of law.
            </StaticText>

            <Headings.h2>9. Changes to the Website and these Terms of Use</Headings.h2>
            <StaticText>
              Gian Faye Paguirigan reserves the right to modify or discontinue the Website or any part thereof at any time without notice. Gian Faye Paguirigan also reserves the right to modify these Terms of Use at any time, and you agree to be bound by such modifications. It is your responsibility to check these Terms of Use periodically for changes. If you do not agree to any changes to these Terms of Use, you must stop using the Website.
            </StaticText>

            <Headings.h2>10. Termination</Headings.h2>
            <StaticText>
              Gian Faye Paguirigan may terminate or suspend your access to the Website at any time and for any reason, including if you breach these Terms of Use. Upon termination, you must cease all use of the Website.
            </StaticText>

            <Headings.h2>11. Entire agreement</Headings.h2>
            <StaticText>
              These Terms of Use constitute the entire agreement between you and Gian Faye Paguirigan and govern your use of the Website, superseding any prior agreements between you and Gian Faye Paguirigan (including, but not limited to, any prior versions of the Terms of Use).
            </StaticText>

            <Headings.h2>12. Waiver and severability</Headings.h2>
            <StaticText>
              The failure of Gian Faye Paguirigan to exercise or enforce any right or provision of these Terms of Use shall not constitute a waiver of such right or provision. If any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms of Use remain in full force and effect.
            </StaticText>

            <Headings.h2>13. Statute of limitations</Headings.h2>
            <StaticText>
              You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Website or these Terms of Use must be filed within one (1) year after such claim or cause of action arose or be forever barred.
            </StaticText>

            <Headings.h2>14. Contact information</Headings.h2>
            <StaticText>
              If you have any questions about these Terms of Use or the Website, you may contact Gian Faye Paguirigan at support@gianfaye.com.
            </StaticText>

          </StaticContent>
        </StaticContainer>
      </Section>
    </Layout>
  );
}

export default TermsPage;

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
