'use client';

import Layout from '../../Layout/Layout';
import { Box, Typography, Link } from '@mui/material';

export default function TermsPage() {
  return (
    <Layout>
      <Box sx={{ padding: 4, maxWidth: '900px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          SKOEGLE IOT INNOVATIONS PRIVATE LIMITED – PRIVACY POLICY
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          <b>Effective Date:</b> 1st April, 2025
        </Typography>

        <Typography gutterBottom>
          <b>Company Name:</b> Skoegle IOT Innovations Private Limited
        </Typography>

        <Typography gutterBottom>
          <b>Registered Office:</b> 52/2 2nd Main Road, Vyalikaval, Bangalore, Karnataka, India, 560003
        </Typography>

        <Typography gutterBottom>
          <b>Contact Email:</b>{' '}
          <Link href="mailto:info@skoegle.in" underline="hover">
            info@skoegle.in
          </Link>
        </Typography>

        <Typography gutterBottom>
          <b>Website:</b>{' '}
          <Link href="https://www.skoegle.com" target="_blank" rel="noopener noreferrer" underline="hover">
            www.skoegle.com
          </Link>
        </Typography>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>1. Introduction</Typography>
          <Typography paragraph>
            Skoegle IOT Innovations Private Limited is committed to protecting the privacy of its customers.
            This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you
            purchase our IoT products, including via online platforms such as Flipkart.
          </Typography>

          <Typography variant="h6" gutterBottom>2. Applicability</Typography>
          <Typography paragraph>
            This policy applies to all users who purchase, use, or access our IoT products and associated services.
            By using our website or services, you agree to this Privacy Policy.
          </Typography>

          <Typography variant="h6" gutterBottom>3. Information We Collect</Typography>
          <Typography component="ul">
            <li><b>Personal Information:</b> Name, contact details, delivery address, Flipkart order details, etc.</li>
            <li><b>Device Data:</b> MAC address, device identifiers, firmware versions.</li>
            <li><b>Usage Data:</b> Device usage statistics, user settings, error reports.</li>
            <li><b>Location Data:</b> If applicable and consented, approximate or precise location.</li>
            <li><b>Payment Data:</b> We do not collect or store payment data. Payments via Flipkart are handled by their gateway.</li>
          </Typography>

          <Typography variant="h6" gutterBottom>4. How We Collect Information</Typography>
          <Typography component="ul">
            <li>Through product registration or app usage.</li>
            <li>From Flipkart for order fulfillment.</li>
            <li>From usage of our connected devices and mobile applications.</li>
          </Typography>

          <Typography variant="h6" gutterBottom>5. Use of Information</Typography>
          <Typography component="ul">
            <li>To fulfill your order and provide customer support.</li>
            <li>To improve our products and services.</li>
            <li>To send firmware updates and safety alerts.</li>
            <li>To analyze device performance and usage patterns.</li>
            <li>To comply with legal obligations.</li>
          </Typography>

          <Typography variant="h6" gutterBottom>6. Sharing of Information</Typography>
          <Typography component="ul">
            <li>With service providers for shipping and after-sales support.</li>
            <li>With Flipkart for order verification and returns.</li>
            <li>With legal/regulatory bodies, if required by law.</li>
            <li>We do <b>not</b> sell or rent your data to third parties.</li>
          </Typography>

          <Typography variant="h6" gutterBottom>7. Data Security</Typography>
          <Typography paragraph>
            We implement technical and organizational measures including encryption, secure servers, and security audits to protect your data.
          </Typography>

          <Typography variant="h6" gutterBottom>8. Retention of Data</Typography>
          <Typography paragraph>
            We retain personal information only as long as necessary for the purposes outlined or as required by law.
          </Typography>

          <Typography variant="h6" gutterBottom>9. Your Rights</Typography>
          <Typography component="ul">
            <li>Access or update your information.</li>
            <li>Withdraw consent where applicable.</li>
            <li>Request deletion of personal data.</li>
            <li>Contact: <Link href="mailto:info@skoegle.in">info@skoegle.in</Link></li>
          </Typography>

          <Typography variant="h6" gutterBottom>10. Third-Party Links</Typography>
          <Typography paragraph>
            Our services may contain links to third-party platforms like Flipkart. We are not responsible for their privacy practices.
          </Typography>

          <Typography variant="h6" gutterBottom>11. Children’s Privacy</Typography>
          <Typography paragraph>
            Our products are not intended for children under 18. We do not knowingly collect data from minors.
          </Typography>

          <Typography variant="h6" gutterBottom>12. Changes to This Policy</Typography>
          <Typography paragraph>
            We may update this policy occasionally. Significant changes will be notified via our website or app.
          </Typography>

          <Typography variant="h6" gutterBottom>13. Grievance Officer</Typography>
          <Typography paragraph>
            <b>Name:</b> Gayathri K<br />
            <b>Email:</b> <Link href="mailto:gayathri@sales.skoegle.com">gayathri@sales.skoegle.com</Link><br />
            <b>Phone:</b> +91 9591505241<br />
            <b>Address:</b> 52/2 2nd Main Road, Vyalikaval, Bangalore, Karnataka, 560003
          </Typography>

          <Typography variant="h6" gutterBottom>14. Jurisdiction</Typography>
          <Typography paragraph>
            Your use of the website and any privacy-related disputes are subject to this policy and governed by Indian law.
          </Typography>

          <Typography variant="h6" gutterBottom>15. Contact Us</Typography>
          <Typography paragraph>
            <b>Email:</b> <Link href="mailto:info@skoegle.in">info@skoegle.in</Link><br />
            <b>Phone:</b> +91 9591505241
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}


