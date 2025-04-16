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
  title: "RESTweb Dev",
  description: "Building fast, modern websites for small businesses.",
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
