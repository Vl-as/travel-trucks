import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import QueryProvider from '@/components/QueryProvider/QueryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';

const inter = Inter({
  variable: '--font-family',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks | Premium Camper Rental Platform',
  description:
    'TravelTrucks is a modern camper rental platform where you can browse, filter, and book comfortable motorhomes for unforgettable road trips. Find the perfect camper with detailed specifications, photos, and convenient search options to plan your next adventure.',

  openGraph: {
    title: 'TravelTrucks | Premium Camper Rental Platform',
    description:
      'Browse, filter, and book comfortable motorhomes for unforgettable road trips. Find the perfect camper with detailed specifications and photos.',
    url: 'https://travel-trucks-pink-psi.vercel.app/',
    siteName: 'TravelTrucks',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-main.webp',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks Camper Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelTrucks | Premium Camper Rental Platform',
    description:
      'Browse, filter, and book comfortable motorhomes for unforgettable road trips.',
    images: ['/og-main.webp'],
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ToastContainer
          position="top-center"
          hideProgressBar
          closeButton={false}
          closeOnClick
          autoClose={4000}
          toastStyle={{
            padding: 0,
            background: 'transparent',
            boxShadow: 'none',
            width: 'auto',
          }}
        />
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
