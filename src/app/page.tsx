import type { Metadata } from "next";
import Banner from "@/sections/Banner";
import Profile from "@/sections/Profile";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Connect from "@/sections/Connect";
import Footer from "@/components/ui/Footer";
import { homepageData } from "@/views/homepage/data";
import { homepageSEO } from "@/views/homepage/seo";
import Script from "next/script";

export const metadata: Metadata = {
  title: homepageSEO.title,
  description: homepageSEO.description,
  keywords: homepageSEO.keywords,
  openGraph: homepageSEO.openGraph,
  twitter: homepageSEO.twitter,
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <Banner />
      </section>
      
      <section id="about">
        <Profile
          title={homepageData.about.title}
          description={homepageData.about.description}
          skillsTitle={homepageData.about.skillsTitle}
          skills={homepageData.about.skills}
        />
      </section>
      
      <section id="services">
        <Services 
          heading={homepageData.services.heading}
          description={homepageData.services.description}
          services={homepageData.services.services}
        />
      </section>

      <section id="portfolio">
        <Projects />
      </section>
      
      <section id="contact">
        <Connect />
      </section>

      <Footer />
      
      {/* Structured Data JSON-LD for SEO - Otimizado para TBT */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSEO.jsonLd),
        }}
      />
    </main>
  );
}
