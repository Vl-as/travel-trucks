import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import QueryProvider from '@/components/QueryProvider/QueryProvider';
import { ToastContainer } from 'react-toastify';

const inter = Inter({
  variable: '--font-family',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--second-family',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description:
    'TravelTrucks is a modern camper rental platform where you can browse, filter, and book comfortable motorhomes for unforgettable road trips. Find the perfect camper with detailed specifications, photos, and convenient search options to plan your next adventure.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <ToastContainer position="top-center" hideProgressBar={true} />
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
