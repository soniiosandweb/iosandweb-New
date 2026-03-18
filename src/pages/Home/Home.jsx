import React, { lazy, Suspense } from "react";
import SEO from "../../components/SEO";

import Banner from "./Banner/Banner";
import AboutSection from "./About/About";
import PoweringSection from "./PoweringSection/PoweringSection";

const InnovativeSection = lazy(() => import("./InnovativeSection/InnovativeSection"));
const IndustriesSection = lazy(() => import("./IndustriesSection/IndustriesSection"));
const AIPoweredSection = lazy(() => import("./AIPoweredSection/AIPoweredSection"));
const ServicesSection = lazy(() => import("./ServicesSection/ServicesSection"));
const StrategicPartners = lazy(() => import("./StrategicPartners/StrategicPartners"));
const ElevateSuccess = lazy(() => import("./ElevateSuccess/ElevateSuccess"));
const CaseStudies = lazy(() => import("./CaseStudies/CaseStudies"));
const WhyChoose = lazy(() => import("./WhyChoose/WhyChoose"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const AnimatedText = lazy(() => import("../../components/AnimatedText/AnimatedText"));
const FAQSection = lazy(() => import("../../components/FAQSection/FAQSection"));

const Home = () => {

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "IOSAndWeb Technologies",
        "image": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png",
        "url": "https://iosandweb.net/",
        "telephone": "099158 41204",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "SCO No. 30, First Floor, VIP Shopping Centre",
            "addressLocality": "Zirakpur",
            "postalCode": "140603",
            "addressCountry": "IN"
        }
    };

    const organisationalSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IOSAndWeb Technologies",
        "url": "https://iosandweb.net/",
        "logo": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png"
    };
    const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IosAndWeb Technologies",
  "url": "https://iosandweb.net/",
  "logo": "https://iosandweb.net/wp-content/uploads/2023/01/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 7717689799",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "email": "info@iosandweb.net",
  "sameAs": [
    "https://www.facebook.com/iosandwebtechnologies/",
    "https://www.instagram.com/iosandwebtechnologies/",
    "https://in.linkedin.com/company/iosandweb-technologies"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT & Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Services",
          "description": "Custom website development using WordPress, Shopify, and modern frameworks tailored to business needs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Android, iOS, and cross-platform mobile app development focused on performance and user experience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Services",
          "description": "SEO, PPC, social media marketing, and content strategies to grow online visibility and leads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization (SEO)",
          "description": "Complete on-page and off-page SEO services to improve rankings and organic traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pay-Per-Click Advertising (PPC)",
          "description": "High-converting Google Ads campaigns designed to maximize ROI and generate quality leads."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Modern, user-friendly, and visually engaging UI/UX design for web and mobile platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Custom-built software solutions to streamline operations and improve business efficiency."
        }
      }
    ]
  }
};

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [    {
      "@type": "Question",
      "name": "What services does IosAndWeb Technologies offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IosAndWeb Technologies provides a wide range of IT services including web development, mobile app development, digital marketing, SEO, PPC, UI/UX design, and custom software solutions to help businesses grow online."
      }
    },
 
    {
      "@type": "Question",
      "name": "Do you provide custom website development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the company specializes in custom website development tailored to your business needs, including platforms like WordPress, Shopify, and modern frameworks."
      }
    },
 
    {
      "@type": "Question",
      "name": "Do you offer mobile app development services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, IosAndWeb Technologies develops high-quality mobile applications for Android, iOS, and cross-platform solutions."
      }
    },
 
    {
      "@type": "Question",
      "name": "Do you provide support after project completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the company offers ongoing support and maintenance services even after the project is completed to ensure smooth performance."
      }
    },
 
    {
      "@type": "Question",
      "name": "How long does it take to complete a project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines depend on the scope and complexity. Simple websites may take a few weeks, while complex apps or platforms may require more time."
      }
    }]
    };

    const faqLists = [
       {
            title: "What services does IosAndWeb Technologies offer?",
            text: "IosAndWeb Technologies provides a wide range of IT services including web development, <a href='./mobile-app-development-services'>mobile app development </a>, <a href='./digital-marketing-services'>digital marketing</a> , SEO, PPC, UI/UX design, and custom software solutions to help businesses grow online."
        }, {
            title: "Do you offer mobile app development services?",
            text: "Yes, IosAndWeb Technologies develops high-quality mobile applications for Android, iOS, and cross-platform solutions"
        },
        {
            title: "Do you provide support after project completion?",
            text: "Yes, the company offers ongoing support and maintenance services even after the project is completed to ensure smooth performance."
        },
        {
            title: "How long does it take to complete a project?",
            text: "Project timelines depend on the scope and complexity. Simple websites may take a few weeks, while complex apps or platforms may require more time."
        },
        
        {
            title: "Do you provide custom website development?",
            text: "Yes, the company specializes in custom <a href='./web-development-services'> website development </a> tailored to your business needs, including platforms like WordPress, Shopify, and modern frameworks."
        }
    ];

    return (
        <>
          <SEO
            title={"IosAndWeb Technologies | Expert App, Web Development & Marketing Services"}
            description={"Transform your business with IosAndWeb Technologies."}
            canonicalUrl={process.env.REACT_APP_API_URL}
            localSchema={localSchema}
            organisationalSchema={organisationalSchema}
            faqSchema={faqSchema}
            serviceSchema={serviceSchema}   
        />

            <Banner />
            <AboutSection />
            <PoweringSection />

            <Suspense fallback={<div style={{ height: "200px" }}>Loading...</div>}>

                <InnovativeSection />
                <IndustriesSection />
                <AIPoweredSection />
                <ServicesSection />
                <StrategicPartners />
                <ElevateSuccess />
                <CaseStudies />
                <WhyChoose />
                <Testimonials />
                <AnimatedText />

                <FAQSection
                    subheading={"Insights"}
                    heading={"Frequently Asked Questions"}
                    lists={faqLists}
                    fullwidth={false}
                />

            </Suspense>
        </>
    );
};

export default Home;