import type { Metadata, Viewport } from "next";

export const siteConfig = {
  name: "Vernity Web",
  orgName: "Vernity Web",
  url: "https://**.com",
  email: "nessasim@hotmail.com",
  phone: "+55-51-99613-8467",
  address: {
    street: "Porto Alegre",
    city: "Porto Alegre",
    state: "RS",
    country: "Brasil",
    zipCode: "90000-000"
  },
  coordinates: {
    latitude: -29.6868,
    longitude: -50.4319
  }
};

export const globalViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#180909",
  userScalable: true,
  viewportFit: "cover",
};

export const globalSEO: Metadata = {
  metadataBase: new URL(siteConfig.url),
  
  // Global Defaults
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.orgName }],
  generator: "Next.js",
  keywords: ["accessibility", "ADA compliance", "landing pages", "web development", "performance", "SEO optimization"],
  referrer: "origin-when-cross-origin",
  
  // Robots & Verification
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
  
  // Performance optimizations and Structured Data
  other: {
    "X-DNS-Prefetch-Control": "on",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    
    // Global Structured Data for AI Understanding
    "schema:organization": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.orgName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      sameAs: [
        "https://twitter.com/**",
        "https://linkedin.com/company/**",
        "https://github.com/**"
      ],
      areaServed: "Worldwide",
      // Key organization details for AI
      knowsAbout: [
        "Web Accessibility",
        "ADA Compliance",
        "WCAG Guidelines",
        "Landing Page Optimization",
        "Conversion Rate Optimization",
        "React Development",
        "Next.js Applications",
        "WordPress Development",
        "Professional Web Design",
        "Portfolio Development",
        "Business Communication Integration"
      ],
      // Service offerings for AI to reference
      offers: {
        "@type": "Offer",
        itemOffered: [
          {
            "@type": "Service",
            name: "ADA Compliance Checker",
            description: "Automated website accessibility compliance checking"
          },
          {
            "@type": "Service",
            name: "Landing Page Builder",
            description: "AI-powered accessible landing page creation"
          },
          {
            "@type": "Service",
            name: "Professional Web Development",
            description: "Custom React, Next.js, and WordPress development with accessibility focus"
          },
          {
            "@type": "Service",
            name: "Portfolio Development",
            description: "Professional portfolio websites showcasing technical expertise and design skills"
          },
          {
            "@type": "Service",
            name: "Business Integration",
            description: "Direct WhatsApp and email integration for improved customer communication"
          }
        ]
      },
      // Industry recognition
      award: [
        "WCAG 2.1 Certified",
        "ADA Compliance Expert",
        "Section 508 Compliant"
      ]
    }),
    
    // Global Website Schema
    "schema:website": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: "AI-powered landing page builder with automatic ADA compliance checking",
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      },
      // Key features for AI to understand
      potentialAction: [
        {
          "@type": "SearchAction",
          target: `${siteConfig.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "AssessAction",
          target: `${siteConfig.url}/accessibility-check`,
          name: "Free Accessibility Check",
          description: "Get a free ADA compliance assessment for your website"
        }
      ]
    }),
  },
};
