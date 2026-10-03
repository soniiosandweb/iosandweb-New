import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO"
import SolutionsSection from "./SolutionsSection/SolutionsSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";
import WeDesignSection from "./WeDesignSection/WeDesignSection";
import OurMarketingSection from "./OurMarketingSection/OurMarketingSection";
import WhyChoose from "./whytochoose/Whychoose";
import IndustriesWeTransform from "../../../components/IndustriesWeTransform/IndustriesWeTransform";
import UnlockExclusiveSection from "./UnlockExclusiveSection/UnlockExclusiveSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import ServicesBuiltToDeliver from "./ServicesBuiltToDeliver";
import AdaptiveSoftware from "./AdaptiveSoftware";
import NextGenerationEngineering from "./NextGenerationEngineering";
import SmallBanner from "./SmallBanner";
import AgentsShowcase from "./AgentsShowcase";
import TechnologyEcosystem from "./TechnologyEcosystem";
import DiscoveryCTA from "./DiscoveryCTA";
import BusinessAgents from "./BusinessAgents";
import Capabilities from "./Capabilities";
import FAQSection from "../../../components/FAQSection/FAQSection";
import FAQ from "../../Home/FAQ";

const ServicesPage = () => {
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
 
 const BreadcrumbSchema = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "software development company",
    "item": "https://iosandweb.net/custom-software-development-company"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "mobile app development services",
    "item": "https://iosandweb.net/mobile-app-development-services"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "web designing services",
    "item": "https://iosandweb.net/web-designing-services"  
  },{
    "@type": "ListItem", 
    "position": 4, 
    "name": "Web Development services",
    "item": "https://iosandweb.net/web-development-services"  
  },{
    "@type": "ListItem", 
    "position": 5, 
    "name": "digital marketing services",
    "item": "https://iosandweb.net/digital-marketing-services"  
  }]
}
const faqLists = [
    {
        title: "What services does IosAndWeb offer?",
        text: "We offer Agentic AI, AI-Powered Software, Web & App Development, Cloud & DevOps, Cybersecurity, Blockchain & Web3, Data & Analytics, and Digital Transformation services — all tailored to your business needs."
    },
    {
        title: "What is Agentic AI and how can it help my business?",
        text: "Agentic AI refers to AI systems that can act autonomously to complete tasks and make decisions. We build agentic solutions that automate complex workflows and reduce manual effort in your operations."
    },
    {
        title: "Can you integrate AI into my existing software?",
        text: "Yes, our AI-Powered Software services include upgrading existing systems with automation, predictive analytics, and smart features without needing a full rebuild."
    },
    {
        title: "Do you build both web and mobile apps?",
        text: "Yes, our Web & App Development team builds custom websites, web platforms, and mobile apps (including iOS) designed around your business goals."
    },
    {
        title: "What Cloud & DevOps services do you provide?",
        text: "We handle cloud infrastructure setup, deployment automation, and DevOps practices to ensure your software runs efficiently, scales smoothly, and stays reliable."
    },
    {
        title: "How do you ensure Cybersecurity for my business?",
        text: "We implement security best practices including data encryption, secure authentication, and regular vulnerability testing to protect your systems and data."
    },
    {
        title: "Do you offer Blockchain & Web3 development?",
        text: "Yes, we build blockchain-based solutions and Web3 applications, including smart contracts and decentralized platforms, based on your project requirements."
    },
    {
        title: "How can Data & Analytics services benefit my business?",
        text: "We help you collect, organize, and analyze business data to uncover insights, improve decision-making, and identify growth opportunities."
    },
    {
        title: "What does Digital Transformation include?",
        text: "We help businesses modernize outdated processes and systems by integrating the right technology — from AI and cloud to automation — to improve efficiency and stay competitive."
    }
];
    const location = useLocation();

    return(
        <>
            <SEO
                title={"Web development services- IAW Technologies"}
                description={"Looking for high-quality web development services for your business? Look no further than IAW Technologies. Contact us Today."}
                name={"IosAndWeb Technologies"}
                serviceSchema={serviceSchema}   
                BreadcrumbSchema={BreadcrumbSchema}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            
            <ServiceBanner />

<ServicesBuiltToDeliver />

            {/* Solutions Section */}
            <SolutionsSection />
                        <ExpertiseSection />

<AdaptiveSoftware />
<Capabilities />
<NextGenerationEngineering />
<SmallBanner />

<AgentsShowcase />

<DiscoveryCTA />
<TechnologyEcosystem />



            {/* Expertise section */}

            {/* We Design Section */}
            {/* <WeDesignSection /> */}

            {/* Our Marketing */}
            <OurMarketingSection />

            {/* Industries we transform */}
            <IndustriesWeTransform /> 

            {/* Unlock Exclusive */}
            {/* <UnlockExclusiveSection /> */}

            {/* Why Choose */}
            {/* <WhyChoose /> */}
<BusinessAgents />
            {/* Animated Text */}
            {/* <AnimatedText /> */}



             <FAQ
                    subheading={"Insights"}
                    heading={"Frequently Asked Questions"}
                    lists={faqLists}
                    fullwidth={false}
                />
        </>
    )
}

export default ServicesPage