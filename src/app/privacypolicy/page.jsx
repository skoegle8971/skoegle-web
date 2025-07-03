'use client';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../../Components/Layout/Layout';
const PrivacyPolicy = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
            <br />
          Privacy Policy
        </Typography>

        <Typography paragraph>
          SKOEGLE IOT INNOVATIONS PVT LTD recognizes the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This policy describes how we treat user information we collect on https://skoegle.com/. This Privacy Policy applies to current and former visitors to our websites.
        </Typography>

        <Typography paragraph>
          By visiting or using our website, you agree to this Privacy Policy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Collection of Personally Identifiable Information
        </Typography>

        <Typography paragraph>
          The Website is not designed to collect or receive any personally identifiable information by itself. SKOEGLE IOT INNOVATIONS PVT LTD is not able to identify you personally unless you access the Website and/or provide any personally identifiable information.
        </Typography>

        <Typography paragraph>
          The personal information you enter is used only by us to respond to your inquiry, process an order, or allow you to access specific information, for statistical/analytical research purposes or to comply with regulatory or legal requirements.
        </Typography>

        <Typography paragraph>
          SKOEGLE IOT INNOVATIONS PVT LTD does not support "spamming". Spamming is defined as sending unsolicited emails, often of a commercial nature, sent indiscriminately to multiple mailing lists, individuals, newsgroups, or junk email. With whom the sender has no previous contact or who has declined to receive such communications.
        </Typography>

        <Typography paragraph>
          SKOEGLE IOT INNOVATIONS PVT LTD does not sell or rent your personal information to anyone else.
        </Typography>

        <Typography paragraph>
          We will always use your personal information in a way that is fair and worthy of trust. We will take all reasonable steps to protect your information from misuse and keep it secure.
        </Typography>

        <Typography paragraph>
          If you click on one of the links to third-party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. We are not responsible for these third-party sites.
        </Typography>

        <Typography paragraph>
          SKOEGLE IOT INNOVATIONS PVT LTD reserves the right to amend this Privacy Policy without prior notice to reflect technological advancements, legal and regulatory changes, and good business practices. If SKOEGLE IOT INNOVATIONS PVT LTD changes its privacy practices, a new Privacy Policy will reflect those changes.
        </Typography>

        <Typography paragraph>
          This Privacy Policy was last updated on 25th April 2023 and is effective as of that date.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Grievance Officer:
        </Typography>

        <Typography paragraph>
          In accordance with the Information Technology Act, 2000 and the rules made under, the name and contact details of the Grievance officer are provided below:
        </Typography>

        <Box sx={{ pl: 2 }}>
          <Typography>Mr. Swarup Nag</Typography>
          <Typography>No. 52/2, 2nd Main Road,</Typography>
          <Typography>Vyalikaval Bangalore, KA 560003</Typography>
          <Typography>Email: swarup@skoegle.in</Typography>
        </Box>

        <Typography paragraph sx={{ mt: 2 }}>
          If you have any questions about this Policy or other privacy concerns, you can email us at swarup@skoegle.in. We will do our best to respond to all reasonable requests in a timely manner.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Disclaimer:
        </Typography>

        <Typography paragraph>
          This site has been maintained only for personal information, education, and communication. This disclaimer sets out the Terms and Conditions for the use or access of this Site (“Terms and Conditions”). SKOEGLE IOT INNOVATIONS PVT LTD may modify these Terms and Conditions or discontinue the Site at any time without any prior written notice.
        </Typography>

        <Typography paragraph>
          Any reference to the Terms and Conditions will mean a reference to the Terms and Conditions as amended or modified. Although accessible in other parts of the world, the Site and its contents are intended and designed to comply with the laws and regulations of India.
        </Typography>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicy;
