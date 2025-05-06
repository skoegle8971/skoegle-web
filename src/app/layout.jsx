import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs';
import { IBM_Plex_Sans } from 'next/font/google';

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
    <ClerkProvider>
      <html lang="en">
        <body className={ibmPlexSans.className} style={{ margin: 0, padding: 0 }}>
          {/* Header with UserButton shown only when signed in */}
          <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
            <h1 className="text-xl font-semibold text-blue-700">Skoegle</h1>
            {/* <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn> */}
          </header>

          {/* Main content */}
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
