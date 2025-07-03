import { Analytics } from '@vercel/analytics/next';
import SyncUser from "../Components/Home/SyncUser";
import { ClerkProvider } from '@clerk/nextjs';
import { IBM_Plex_Sans } from 'next/font/google';
import DetectDevToolsRedirect from '@/Components/Home/DetectDevToolsRedirect';
import { ProductProvider } from '@/Store/Store';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Skoegle',
  description: 'Skoegle offers smart GPS and IoT tracking solutions for pets, vehicles, people, and valuable assets.',
  keywords: [
    'Skoegle',
    'skoegle.com',
    'skoegle.in',
    'Skoegle GPS',
    'Skoegle Trackers',
    'Skoegle IoT',
    'Skoegle India',
    'Skoegle Bangalore',
    'Skoegle tracking company',
    'Skoegle devices',
    'bangalore tracking company',
    'tracking company in Bangalore',
    'India GPS tracker company',
    'IoT devices India',
    'pet GPS tracker',
    'pet monitoring tracker',
    'dog GPS tracker',
    'cat tracker',
    'bag tracker',
    'ID card tracker',
    'smart bangle tracker',
    'vehicle tracker',
    'bike GPS tracker',
    'car GPS device',
    'school ID GPS',
    'child tracking device',
    'child safety tracker',
    'school bus GPS',
    'shoe tracker',
    'Bluetooth GPS tracker',
    'live GPS tracking',
    'real-time tracking',
    'IoT GPS solutions',
    'track your pet',
    'track your bag',
    'track your child',
    'track your vehicle',
    'track assets',
    'smart wearable GPS',
    'portable tracking device',
    'cloud-based tracking',
    'geo-fencing',
    'anti-theft tracker',
    'fleet management tracker',
    'asset monitoring',
    'GPS watch for kids',
    'smart ID card',
    'remote GPS monitoring',
    'lightweight tracker',
    'long battery GPS',
    'India-made GPS device',
    'reliable tracker',
    'custom tracking solutions',
    'best GPS tracker in India',
    'eco-friendly tracker',
    'multi-device tracker',
    'track everything',
    'personal tracking solution',
    'mobile GPS integration',
    'Skoegle support',
    'Skoegle services',
    'Skoegle careers',
    'track pets in India',
    'track people securely',
    'IoT startup India',
    'real-time location tracker',
    'wearable IoT',
    'low-cost GPS device',
    'GPS for elderly care',
    'GPS SOS alert',
    'India’s best GPS',
    'track school kids',
    'location tracking app',
    'GPS app integration',
    'Next.js tracker',
    'React GPS app',
    'full-stack GPS platform',
    'Clerk GPS login',
    'secure tracking system',
    'tracking dashboard',
    'live map GPS',
    'IoT location tracker',
    'Bluetooth proximity tag',
    'personal security tracker',
    'IoT-based tracker',
    'real-time alerts GPS',
    'GPS tracker company India',
    'smart bangle GPS',
    'Skoegle pet solution',
    'track luggage',
    'track school staff',
    'tracking SDK',
    'GPS platform Bangalore',
    'IoT for education',
    'IoT for safety',
    'secure GPS access',
    'tracking web portal',
    'India GPS solution',
    'track using QR code',
    'next-gen tracking',
    'smart GPS cloud',
    'track anytime anywhere'
  ],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: "light" }}>
      <html lang="en">
        <body className={ibmPlexSans.className} style={{ margin: 0, padding: 0 }}>
          <main>
            <ProductProvider>{children}</ProductProvider>
          </main>
          <Analytics />
          <SyncUser />
          <DetectDevToolsRedirect />
        </body>
      </html>
    </ClerkProvider>
  );
}
