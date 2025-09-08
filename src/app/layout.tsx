import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/ui/Navigation";
import { globalSEO, globalViewport } from "./seo.config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...globalSEO,
  title: {
    default: "Vernity Web",
    template: "%s | Vernity Web"
  },
  description: "Vernity Web oferece soluções digitais completas: desenvolvimento web profissional, landing pages com ADA compliance automático e otimização de conversão. Transforme sua presença digital hoje.",
  applicationName: "Vernity Web",
  authors: [{ name: "Vernity Web", url: "https://**.com" }],
  creator: "Vernity Web",
  publisher: "Vernity Web",
  icons: {
    icon: '/assets/icons/favicon.ico',
    shortcut: '/assets/icons/favicon.ico',
    apple: '/assets/icons/favicon.ico',
  },
  // Performance and SEO optimizations
  other: {
    ...globalSEO.other,
  },
  // You can override specific global settings here if needed
};

export const viewport: Viewport = globalViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical images preload */}
        <link rel="preload" href="/assets/icons/vernety_logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/images/hero.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/icons/favicon.ico" as="image" />
        
        {/* Performance and Security Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#180909" />
        <meta name="msapplication-TileColor" content="#180909" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.leadconnectorhq.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://linkedin.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://instagram.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.leadconnectorhq.com" crossOrigin="anonymous" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
