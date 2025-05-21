import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';
import SocialButtons from '@/components/ui/SocialButtons';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mirai Ongaku | Music Distribution Platform',
  description: 'Your music everywhere. Professional digital music distribution service for independent artists and labels',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <NavBar />
          <main className="pt-20">{children}</main>
          <Footer />
          <SocialButtons />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
} 