//Import Icons 
import 'bootstrap-icons/font/bootstrap-icons.css';

//Import Bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

// Import glightbox
import 'glightbox/dist/css/glightbox.css';

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Importing custimed component
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "New Taste Of India",
  description: "New taste of India restaurant, Indian, Indo chinese, Nepali cuisine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <TopBar />
        <Header />
        {children}
        </body>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh950GNyZPhc TNXj1NW7RuBCsyN/00jlpcV8Qyq46cDfL"
        crossOrigin="anonymous">
      </script> */}
    </html>
  );
}
