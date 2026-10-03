import React, { lazy, Suspense, useEffect, useState } from "react";
import SEO from "../../components/SEO";

import Banner from "./Banner/Banner";
import AboutSection from "./About/About";
import PoweringSection from "./PoweringSection/PoweringSection";

const InnovativeSection = lazy(() => import("./InnovativeSection/InnovativeSection"));
const IndustriesSection = lazy(() => import("./IndustriesSection/IndustriesSection"));
const AIPoweredSection = lazy(() => import("./AIPoweredSection/AIPoweredSection"));
const StrategicPartners = lazy(() => import("./StrategicPartners/StrategicPartners"));
const ElevateSuccess = lazy(() => import("./ElevateSuccess/ElevateSuccess"));
const CaseStudies = lazy(() => import("./CaseStudies/CaseStudies"));
const WhyChoose = lazy(() => import("./WhyChoose/WhyChoose"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const AnimatedText = lazy(() => import("../../components/AnimatedText/AnimatedText"));
const FAQSection = lazy(() => import("../../components/FAQSection/FAQSection"));

const Home = () => {
 const [IsMobile , setIsMobile] = useState(window.innerWidth <=768)
    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
 
 const localSchema = {

  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": "https://iosandweb.net/#business",

  "name": "IosAndWeb",

  "alternateName": "IosAndWeb Technologies",

  "description": "iOS and Web app development company based in Zirakpur, near Chandigarh, offering mobile app, web app, and software development services.",

  "image": "https://iosandweb.net/assests/IAW-logo-white.png",

  "logo": "https://iosandweb.net/assests/IAW-logo-white.png",

  "url": "https://iosandweb.net/",

  "telephone": "+91-7717689799",

  "priceRange": "$$",

  "address": {

    "@type": "PostalAddress",

    "streetAddress": "VIP Shopping Complex, VIP Road",

    "addressLocality": "Zirakpur",

    "addressRegion": "Punjab",

    "postalCode": "140603",

    "addressCountry": "IN"

  },

  "geo": {

    "@type": "GeoCoordinates",

    "latitude": "30.6425",

    "longitude": "76.8173"

  },

  "openingHoursSpecification": [

    {

      "@type": "OpeningHoursSpecification",

      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

      "opens": "09:30",

      "closes": "18:30"

    }

  ],

  "sameAs": [

    "https://www.facebook.com/iosandwebtechnologies/",

    "https://www.instagram.com/iosandwebtechnologies/",

    "https://in.linkedin.com/company/iosandweb-technologies"

  ]

};
 


   const organisationalSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://iosandweb.net/#organization",
  "name": "IosAndWeb",
  "alternateName": "IosAndWeb Technologies",
  "url": "https://iosandweb.net/",
  "logo": "https://iosandweb.net/assests/IAW-logo-white.png",
  "image": "https://iosandweb.net/assests/IAW-logo-white.png",
  "description": "iOS and Web app development company offering mobile app, web app, and software development services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "VIP Shopping Complex, VIP Road",
    "addressLocality": "Zirakpur",
    "addressRegion": "Punjab",
    "postalCode": "140603",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7717689799",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/iosandwebtechnologies/",
    "https://www.instagram.com/iosandwebtechnologies/",
    "https://in.linkedin.com/company/iosandweb-technologies"
  ]
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
            description={"Build powerful apps and websites with IosAndWeb Technologies. Expert development, design, and digital marketing solutions to grow your business online."}
            canonicalUrl={process.env.REACT_APP_API_URL}
            localSchema={localSchema}
            organisationalSchema={organisationalSchema}
            faqSchema={faqSchema}
        />

            <Banner />
            <AboutSection />
           {       !IsMobile &&  <PoweringSection />}

            <Suspense fallback={<div style={{ height: "200px" }}>Loading...</div>}>

                <InnovativeSection />
                <IndustriesSection />
                {!IsMobile &&
                <AIPoweredSection />    }
                {!IsMobile &&
               <StrategicPartners /> }
                               {!IsMobile &&
                <ElevateSuccess />}
                <CaseStudies />
                <WhyChoose />
              {       !IsMobile &&
                <Testimonials />}
               {       !IsMobile &&<AnimatedText />}

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