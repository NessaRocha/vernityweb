'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const A11yAltTemplate = () => {
  useEffect(() => {
    // Import and initialize calculator when component mounts
    if (typeof window !== 'undefined') {
      import('./external-script').then(module => {
        // Inicializando calculadora
        module.initializeCalculator();
      });
    }
  }, []);

  return (
    <div className="template-wrapper">
      <section className="min-h-screen bg-[#2D1B69] bg-gradient-to-b from-[#2D1B69] to-[#1B0D40] py-16" style={{ backgroundImage: 'url(/assets/images/hero-background.webp)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Image Alt Text at Scale:
                <br />
                AI-Powered Inclusive Content
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                At **, we provide advanced alt text solutions that make vast image catalogs accessible and inclusive.
                Our AI-driven capabilities deliver accurate, context-rich text alternatives, scaling effortlessly from
                hundreds to tens of thousands of images.
              </p>

              <p className="text-lg md:text-xl text-gray-200">
                With **, companies of all sizes can confidently deliver content that meets accessibility standards
                while enhancing user engagement and compliance across massive image inventories.
              </p>
              <div className="pt-8" />
              <a href="#calculator-section" className="inline-block px-6 py-3 bg-white text-[#2D1B69] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/images/hero-z-bot_winking.webp"
                alt="** mascot - A friendly robot with a winking expression"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/images/rounded-z-bot_sad.webp"
                alt="** mascot looking concerned about accessibility barriers"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#53389E]">The Problem</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Alt Text is Overlooked Creating Access Barriers
                </h2>
              </div>

              <p className="text-lg text-gray-600">
                Many websites overlook the importance of alt text, leading to significant accessibility barriers for
                visually impaired users. This neglect not only affects user experience but also violates WCAG
                accessibility requirements.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-red-600" />
                  <span className="text-gray-700">Inadequate alt text limits access to vital information.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-orange-500" />
                  <span className="text-gray-700">Poorly written alt text can confuse or mislead users.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-red-700" />
                  <span className="text-gray-700">Missing alt text results in a poor screen reader user experience.</span>
                </li>
              </ul>

              <div className="pt-4">
                <a
                  href="#get-started"
                  className="inline-block px-6 py-3 bg-[#53389E] text-white rounded-lg font-semibold hover:bg-[#442D85] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#53389E]">The Solution</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Addressing Alternative Text Gaps in Large-Scale Catalogs
                </h2>
              </div>

              <p className="text-lg text-gray-600">
                Our solution is tailored for companies facing the often-overlooked challenge of managing
                alternative text (alt text) for vast product catalogs. While alt text is essential for accessibility and
                SEO, current tools fall short when handling the demands of large-scale projects, particularly
                those with 24,000+ images. For companies needing alt text for multiple images per product—
                each capturing different angles, colors, and unique details—the process can quickly become
                overwhelming.
              </p>

              <div className="pt-4">
                <a
                  href="#get-started"
                  className="inline-block px-6 py-3 bg-[#53389E] text-white rounded-lg font-semibold hover:bg-[#442D85] transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/assets/images/rounded-z-bot_happy.webp"
                alt="** mascot cheerfully presenting the solution"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1B2B4D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left side - Heading */}
            <div>
              <p className="text-sm font-medium text-gray-300 mb-2">The Statistics</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How Alt Text May be Affecting Your Users
              </h2>
            </div>

            {/* Right side - Description */}
            <div>
              <p className="text-lg text-gray-200">
                Effective alt text is crucial for enhancing web accessibility. Research shows that nearly up to
                30% of users abandon product pages due to missing or inadequate alt text. By optimizing your
                images with descriptive alt text, you can significantly improve user experience and increase
                conversion rates. Images with great alt text are also most likely to be found with Google
                searches.
              </p>
              <div className="mt-8">
                <a
                  href="#get-started"
                  className="inline-block px-6 py-3 bg-white text-[#1B2B4D] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-12">
            {/* Stat 1 */}
            <div className="text-center md:text-left">
              <p className="text-5xl font-bold mb-4">33%</p>
              <p className="text-gray-300 mb-2">
                Images on popular homepages have missing or inadequate alt text.
              </p>
              <a href="https://webaim.org" className="text-sm text-gray-400 hover:text-white transition-colors">
                WebAIM Million
              </a>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:text-left">
              <p className="text-5xl font-bold mb-4">47%</p>
              <p className="text-gray-300 mb-2">
                Improvement in image search rankings comes from optimized alt text.
              </p>
              <a href="https://jemsu.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                Jemsu - SEO
              </a>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:text-left">
              <p className="text-5xl font-bold mb-4">30%</p>
              <p className="text-gray-300 mb-2">
                Increase in conversion rates on product pages with high-quality images and descriptive alt text.
              </p>
              <a href="https://jemsu.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                Jemsu - SEO
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#53389E] mb-2">Why Alt Text Quality Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Understanding Alt Text
            </h2>
            <p className="text-gray-600">Explore the Good, the Bad and the Ugly</p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Good - Left Column */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-500">The Good</p>
                <h3 className="text-2xl font-bold text-gray-900">The Best Alt Text</h3>
                <p className="text-gray-600 mt-2">
                  Crafting descriptive alt text not only ensures WCAG conformance but also optimizes your
                  content for SEO. By clearly articulating what is depicted in the image, you create a more
                  inclusive experience that encourages engagement and drives purchases.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/green-store-z-bot_proud.png"
                  alt="** bot next to a mobile phone showing an online store with proper accessibility features"
                  width={500}
                  height={500}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Compelling Product Images Drive Sales</h4>
                  <p className="text-gray-600 text-sm">
                    Often overlooked, effective product photography can significantly enhance the user experience by capturing
                    attention and fostering engagement. High-quality, visually appealing images allow customers to envision themselves
                    using the product, increasing their likelihood of making a purchase. Descriptive alt text can equally influence
                    potential buyers.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Descriptive Alt Text Enhances SEO</h4>
                  <p className="text-gray-600 text-sm">
                    Clear and accurate descriptions serve multiple purposes; they not only assist users in comprehending the content
                    presented to them, but they also play a crucial role in enhancing search engine optimization (SEO). By improving search
                    engine indexing these detailed descriptions contribute significantly to attracting a larger audience.
                  </p>
                </div>
              </div>
            </div>

            {/* The Bad & Ugly - Right Column */}
            <div className="space-y-8">
              {/* The Bad */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 bg-[#FFC107] p-6">
                    <Image
                      src="/assets/images/yellow-bg-z-bot_sad.webp"
                      alt="** bot looking concerned at a poorly accessible online store"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <p className="text-sm font-medium text-gray-500">The Bad</p>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Poor Undescriptive Alt Text Affects</h4>
                    <p className="text-gray-600 text-sm">
                      Recognize how inadequate and vague alt text can significantly influence outcomes in various contexts,
                      impacting accessibility and user experience for individuals who rely on screen readers and other assistive
                      technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Ugly */}
              <div className="bg-[#2563EB] text-white rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-200">The Ugly</p>
                    <h4 className="text-xl font-bold mb-3">Missing Alt Text Horrors</h4>
                    <p className="text-gray-200 text-sm">
                      Missing alt text not only alienates those who rely on screen readers but also diminishes the overall user experience.
                      When images lack descriptive alt text, visually impaired individuals are left without context, and even worse are presented with
                      incoherent file name announcements leading to confusion and frustration. This oversight contributes to a barrier that can make
                      your site feel unwelcoming and exclusionary. By prioritizing alt text, you not only promote accessibility but also foster
                      a more enriching and informative experience for every visitor.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="\assets\images\blue-bg-z-bot_angry.webp"
                      alt="** bot looking distressed at a website with missing alt text"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EEECF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Supported Platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Shopify */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
              <Image
                src="\assets\images\shopify_logo_black.png"
                alt="Shopify"
                width={50}
                height={50}
              />
            </div>

            {/* BigCommerce */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
              <Image
                src="\assets\images\BigCommerce-Logo.png"
                alt="BigCommerce"
                width={50}
                height={50}
              />
            </div>

            {/* WordPress */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
              <Image
                src="\assets\images\wordpress_logo.avif"
                alt="WordPress"
                width={50}
                height={50}
              />
            </div>

            {/* Magento */}
            <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
              <Image
                src="\assets\images\magento_logo.avif"
                alt="Magento"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#53389E] text-white rounded-lg font-semibold hover:bg-[#442D85] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>





      <section id="calculator-section" className="znt-section py-16" style={{ maxWidth: '1370px', margin: 'auto' }}>
        <div className="znt-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#53389E] mb-2">
              Find the Right Fit for Your Site
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Pricing Plans
            </h2>
            <p className="text-gray-600">
              Choose the right plan for your accessibility needs.
            </p>
          </div>
          <div className="znt-tiers-top-section">

            <ul id="znt-best-sellers-section" className="best-sellers" role="list">
              <li className="znt-tier-card  " role="listitem">
                <Image src="https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg" alt="" className="znt-tier-card_image" />
                <p className="znt-tier-card_top-amount"><span className="znt-tier-card_top-amount_2">2,500</span> <span className="znt-tier-card_top-amount_3">images</span></p>
                <h4 className="znt-tier-card_top-text">Starter Pack</h4>
                <p className="znt-tier-card_heading"><span>$</span> 625 <span>/Pack</span></p>
                <h5 className="znt-tier-card_list-heading">Includes:</h5>
                <ul className="znt-tier-card_list">
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>50%</strong> OFF!</span></li>
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Up to <strong>2,500</strong> alt texts</span></li>
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>$ 0.25</strong> Per Alt Text</span></li>
                </ul>

                <button className="znt-get-started-button">Get Started</button>

              </li>

              <li className="znt-tier-card  most-popular" role="listitem">
                <h4 className="znt-tier-card_flag">Most Popular</h4>

                <Image src="https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg" alt="" className="znt-tier-card_image" />
                <p className="znt-tier-card_top-amount"><span className="znt-tier-card_top-amount_2">10,000</span> <span className="znt-tier-card_top-amount_3">images</span></p>
                <h4 className="znt-tier-card_top-text">Standard Pack</h4>
                <p className="znt-tier-card_heading"><span>$</span> 2,200 <span>/Pack</span></p>
                <h5 className="znt-tier-card_list-heading">Includes:</h5>
                <ul className="znt-tier-card_list">
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>56%</strong> OFF!</span></li>
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Up to <strong>10,000</strong> alt texts</span></li>

                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>$ 0.22</strong> Per Alt Text</span></li>
                </ul>
                <button className="znt-get-started-button">Get Started</button>
              </li>

              <li className="znt-tier-card  " role="listitem">

                <Image src="https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg" alt="" className="znt-tier-card_image" />
                <p className="znt-tier-card_top-amount"><span className="znt-tier-card_top-amount_2">50,000</span> <span className="znt-tier-card_top-amount_3">images</span></p>
                <h4 className="znt-tier-card_top-text">Premium Pack</h4>
                <p className="znt-tier-card_heading"><span>$</span> 5,000 <span>/Pack</span></p>

                <h5 className="znt-tier-card_list-heading">Includes:</h5>
                <ul className="znt-tier-card_list">

                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <span><strong>80%</strong> OFF!</span></li>
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Up to <strong>50,000</strong> alt texts</span></li>
                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>$ 0.10</strong> Per Alt Text</span></li>
                </ul>
                <button className="znt-get-started-button">Get Started</button>
              </li>
            </ul>

            <p className="znt-floating-text">
              OR:
            </p>

            <ul id="znt-pack-pack" className="credit-packs" role="list">
              <li className="znt-tier-card  pay-as-you-go" role="listitem">
                <h4 className="znt-tier-card_flag">Pay as you go</h4>

                <Image src="https://cdn.prod.website-files.com/66ec68844b61424937a047b1/66ec68844b61424937a04865_icon.svg" alt="" className="znt-tier-card_image" />
                <p className="znt-tier-card_top-amount"><span className="znt-tier-card_top-amount_2">250</span> <span className="znt-tier-card_top-amount_3">images</span></p>
                <h4 className="znt-tier-card_top-text">Credit Packs</h4>
                <p className="znt-tier-card_heading">$125 <span>/Pack</span></p>
                <h5 className="znt-tier-card_list-heading">Includes:</h5>

                <ul className="znt-tier-card_list">

                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span>Up to <strong>250</strong> alt texts</span></li>

                  <li className="znt-tier-card_list_item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="5" y="5" width="56" height="56" rx="28" fill="#D1FADF"></rect>
                      <rect x="5" y="5" width="56" height="56" rx="28" stroke="#ECFDF3" stroke-width="10"></rect>
                      <path d="M44.6666 31.9267V33C44.6652 35.5158 43.8505 37.9638 42.3441 39.9788C40.8378 41.9938 38.7204 43.4679 36.3078 44.1812C33.8953 44.8945 31.3167 44.8089 28.9568 43.937C26.5969 43.0652 24.582 41.4538 23.2127 39.3432C21.8434 37.2327 21.193 34.7361 21.3585 32.2257C21.5241 29.7153 22.4967 27.3257 24.1312 25.4133C25.7658 23.5008 27.9748 22.168 30.4288 21.6135C32.8828 21.0591 35.4502 21.3127 37.7483 22.3367M44.6666 23.6667L32.9999 35.345L29.4999 31.845" stroke="#039855" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span><strong>$ 0.50</strong> Per Alt Text</span></li>
                </ul>

                <a href="https://a11y-alt-text.myshopify.com/products/50-images-pack" className="znt-checkout-dialog_button">Build Your Bundle</a>
              </li>
            </ul>
          </div>
        </div>
      </section>







      <section id="calc-section" className="znt-section znt-section--featured" style={{ maxWidth: '1370px', margin: 'auto' }}>


        <h3 id="calc-section_heading" className="znt-calculator_form_heading znt-c-white">
          Choose a tier that fits your needs
        </h3>

        <form id="znt-image-calculator" className="znt-calculator_form">
          <div className="znt-calculator_form_control">
            <label htmlFor="imageCount" className="znt-calculator_form_label znt-c-white">
              Number of Images (Required)
            </label>
            <input type="number" id="imageCount" min="1" aria-describedby="empty-form-info" required
              className="znt-calculator_form_input" />
          </div>

          <button id="calculator-trigger" type="button" className="znt-button znt-button--white" disabled aria-disabled="true">
            Find Tier
          </button>
        </form>






        <div id="calc-live-region" role="alert" className="visually-hidden"></div>



        <div className="znt-vertical-space--lg"></div>



        <ul id="znt-tier-calc-section" className="section-calc-tiers" role="list">

          <li role="listitem" id="empty-form-info">

            Add the number of Images and we will find the best plan for you

          </li>

        </ul>



      </section>



















      <hr />

















    </div>





  );
};

export default A11yAltTemplate;
