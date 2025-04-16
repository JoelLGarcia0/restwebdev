import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RESTWeb Dev | Small Business Web Development",
  description: "Building fast, modern websites for small businesses.",
  icons: {
    icon: "/icons/favicon.ico",
  },
  metadataBase: new URL("https://restweb.dev"),
  keywords: [
    "small business web design",
    "web development services",
    "SEO-friendly websites",
  ],
  openGraph: {
    title: "Small Business Web Development | RESTWeb Dev",
    description:
      "Professional website design & development services for small businesses.",
    url: "https://restweb.dev/",
    siteName: "RESTWeb Tech Solutions",
    images: [
      {
        url: "https://restweb.dev/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Screenshot of a small business website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Web Development | RESTWeb Dev",
    description:
      "We build affordable, SEO-optimized websites for small businesses.",
    images: ["https://restweb.dev/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
