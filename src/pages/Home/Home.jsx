import AnimatedText from "../../components/AnimatedText/AnimatedText";
import SEO from "../../components/SEO";
import AboutSection from "./About/About";
import AIPoweredSection from "./AIPoweredSection/AIPoweredSection";
import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import ElevateSuccess from "./ElevateSuccess/ElevateSuccess";
import IndustriesSection from "./IndustriesSection/IndustriesSection";
import InnovativeSection from "./InnovativeSection/InnovativeSection";
import PoweringSection from "./PoweringSection/PoweringSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import StrategicPartners from "./StrategicPartners/StrategicPartners";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "IOSAndWeb Technologies",
        "image": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png",
        "@id": "",
        "url": "https://iosandweb.net/",
        "telephone": "099158 41204",
        "priceRange": "$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "SCO No. 30, First Floor, VIP Shopping Centre",
            "addressLocality": "Zirakpur",
            "postalCode": "140603",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.638054,
            "longitude": 76.8156075
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
        }
    };

    const organisationalSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IOSAndWeb Technologies",
        "url": "https://iosandweb.net/",
        "logo": "https://iosandweb.net/static/media/IAW-black-logo.c17961e0b493c00d409f.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/iosandwebtechnologies/",
            "https://www.instagram.com/iosandwebtechnologies/",
            "https://twitter.com/Iosandwebtech",
            "https://www.linkedin.com/company/iosandweb-technologies"
        ]
    }


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does IOSAndWeb provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IOSAndWeb offers digital marketing, web development, mobile app development, SEO, and PPC services."
                }
            },
            {
                "@type": "Question",
                "name": "Where is IOSAndWeb located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "IOSAndWeb is located in Zirakpur, Punjab, India."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact IOSAndWeb?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact them via their website, email, or phone at +91-9054305995."
                }
            }
        ]
    }

    return(
        <>
            <SEO
                title={"IosAndWeb Technologies | Expert App, Web Development & Marketing Services"}
                description={"Transform your business with IosAndWeb Technologies— experts in mobile apps, web solutions, and digital marketing tailored to your needs. Get started today!"}
                name={"IosAndWeb Technologies"}
                keywords={"software development, mobile app development, web development, blockchain services, custom software solutions, digital transformation, POC & ICO development, PPC services, generative AI, business innovation, tech solutions, app design, cloud services, eCommerce development, real estate software, healthcare apps, fintech solutions, mobile app design, software integration, IT services, digital marketing, mobile app solutions"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
                organisationalSchema={organisationalSchema}
                faqSchema={faqSchema}
            />

            {/* Banner */}
            <Banner />

            {/* About section */}
            <AboutSection />

            {/* Powering and Award section */}
            <PoweringSection />

            {/* Innovative section */}
            <InnovativeSection />

            {/* Industries section */}
            <IndustriesSection />

            {/* AI Powered section */}
            <AIPoweredSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Our Strategic Partners */}
            <StrategicPartners />

            {/* Elevate success */}
            <ElevateSuccess />

            {/* Case Studies */}
            <CaseStudies />

            {/* Why Choose */}
            <WhyChoose />

            {/* Animated Text */}
            <AnimatedText />
        </>
    )
}

export default Home