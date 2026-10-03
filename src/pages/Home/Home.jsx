
import SEO from "../../components/SEO";
import BlogMarquee from "../Blog/blogMarquee";
import AboutSection from "./About/About";
import AIPoweredSection from "./AIPoweredSection/AIPoweredSection";
import BuilttoDeliver from "./BuilttoDeliver/BuilttoDeliver";
import FAQ from "./FAQ";

import IndustriesSection from "./IndustriesSection/IndustriesSection";
import InnovativeSection from "./InnovativeSection/InnovativeSection";
import ImageMarquee from "./LogoSlider/LogoSlider";
import Banner from "./NewBanner/Banner";
import PoweringSection from "./PoweringSection/PoweringSection";
import Testimonials from "./Testimonials/Testimonials";


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

  const faqLists = [
  {
    title: "What AI solutions can you build for my business?",
    text: "We build custom AI solutions including AI agents, copilots, intelligent automation, recommendation systems, document intelligence, predictive analytics, and AI-powered business applications tailored to your goals.",
  },
  {
    title: "Can you integrate AI into our existing software?",
    text: "Yes. We integrate AI into existing websites, mobile apps, enterprise platforms, CRMs, and business systems using secure APIs, AI models, automation workflows, and intelligent features—without disrupting your core operations.",
  },
  {
    title: "How can AI agents automate our business processes?",
    text: "AI agents can understand tasks, make decisions, interact with systems, and execute workflows with minimal human intervention. They can automate customer support, lead qualification, data processing, reporting, outreach, and repetitive operations.",
  },
  {
    title: "Can you build a custom AI-powered application?",
    text: "Absolutely. We design and develop AI-powered applications from concept to deployment, combining intuitive UX, intelligent features, scalable architecture, APIs, automation, and secure AI integrations to create solutions built around your business needs.",
  },
  {
    title: "How do you secure AI applications and business data?",
    text: "We follow security-first development practices including secure APIs, access controls, data protection, encryption, authentication, monitoring, and privacy-focused architecture to help safeguard your applications, AI workflows, and business data.",
  },
  {
    title: "Can you modernize our existing or legacy software?",
    text: "Yes. We modernize legacy applications through technology upgrades, cloud migration, API integration, performance optimization, UI modernization, architecture improvements, and AI integration while minimizing disruption to existing operations.",
  },
  {
    title: "Do you provide cloud and DevOps solutions?",
    text: "Yes. We provide cloud-native development, infrastructure setup, CI/CD pipelines, automated deployments, containerization, monitoring, and scalable cloud environments that help businesses release faster and operate more reliably.",
  },
  {
    title: "How long does it take to build an AI MVP?",
    text: "The timeline depends on the complexity, integrations, features, and AI requirements. A focused AI MVP can typically be developed in a few weeks, followed by testing, refinement, and scaling based on real-world feedback.",
  },
  {
    title: "Which AI technologies and models can you integrate?",
    text: "We work with modern AI technologies, APIs, language models, machine learning solutions, computer vision, vector databases, and intelligent automation frameworks. We select the right technology based on your use case, performance, security, and scalability requirements.",
  },
  {
    title: "Can you scale an AI solution as our business grows?",
    text: "Yes. We architect AI and software solutions for scalability from the beginning. As your business grows, we can expand infrastructure, integrations, automation, AI capabilities, and system performance without rebuilding the entire platform.",
  },
];
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
            {/* <Banner /> */}
            <Banner />
            
            <ImageMarquee />

            <BuilttoDeliver />
            {/* About section */}
            <AboutSection />

            {/* Powering and Award section */}
            <PoweringSection />
            {/* AI Powered section */}
            <AIPoweredSection />
            {/* Innovative section */}
            <IndustriesSection />

            <BlogMarquee /> 
            <InnovativeSection />

            {/* Industries section */}

          

            {/* Services Section */}
            {/* <ServicesSection /> */}

            {/* Our Strategic Partners */}
            {/* <StrategicPartners /> */}

            {/* Elevate success */}
            {/* <ElevateSuccess /> */}

            {/* Case Studies */}
            {/* <CaseStudies /> */}

            {/* Why Choose */}
            {/* <WhyChoose /> */}

            {/* Testimonials */}
            <Testimonials />

            {/* Animated Text */}
            {/* <AnimatedText /> */}

            {/* FAQ */}
            <FAQ
                heading={"Frequently Asked Questions"}
                lists={faqLists}
                fullwidth={false}
            />
        </>
    )
}

export default Home