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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    const faqLists = [
        {
            title: "What is custom software development?",
            text: "Custom software is built specifically for your business needs."
        },
        {
            title: "Do you offer support?",
            text: "Yes, we provide ongoing maintenance and support."
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