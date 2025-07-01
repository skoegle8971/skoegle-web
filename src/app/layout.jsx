import { Analytics } from '@vercel/analytics/next';
import SyncUser from "../Components/Home/SyncUser";
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs';
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
  description: 'Welcome to Skoegle – powered by Clerk & Next.js',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: "light" }}>
      <html lang="en">
        <body className={ibmPlexSans.className} style={{ margin: 0, padding: 0 }}>
          <main><ProductProvider>{children}</ProductProvider></main>
            <Analytics />
            <SyncUser />
            <DetectDevToolsRedirect/>
        </body>
      </html>
    </ClerkProvider>
  );
}
