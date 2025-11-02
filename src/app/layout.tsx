import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://developer-expertise-visualizer.vercel.app'),
  title: "Developer Expertise Visualizer",
  description: "A tool for visualizing developer contributions and expertise across software projects. Interactive charts and data visualization for understanding developer impact and areas of expertise.",
  keywords: ["developer", "expertise", "visualization", "software", "contributions", "chart", "data", "analysis"],
  authors: [{ name: "Sheriffdeen Akindele" }],
  creator: "Sheriffdeen Akindele",
  openGraph: {
    title: "Developer Expertise Visualizer",
    description: "Interactive visualization tool for developer contributions and expertise analysis",
    url: "https://developer-expertise-visualizer.vercel.app",
    siteName: "Developer Expertise Visualizer",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Developer Expertise Visualizer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Expertise Visualizer",
    description: "Interactive visualization tool for developer contributions and expertise analysis",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
