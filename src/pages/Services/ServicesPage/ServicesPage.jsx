import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO"
import SolutionsSection from "./SolutionsSection/SolutionsSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";
import WeDesignSection from "./WeDesignSection/WeDesignSection";
import OurMarketingSection from "./OurMarketingSection/OurMarketingSection";
import WhyChoose from "../../Home/WhyChoose/WhyChoose";
import IndustriesWeTransform from "../../../components/IndustriesWeTransform/IndustriesWeTransform";
import UnlockExclusiveSection from "./UnlockExclusiveSection/UnlockExclusiveSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

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

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Web development services- IAW Technologies"}
                description={"Looking for high-quality web development services for your business? Look no further than IAW Technologies. Contact us Today."}
                name={"IosAndWeb Technologies"}
                serviceSchema={serviceSchema}   
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <ServiceBanner />

            {/* Solutions Section */}
            <SolutionsSection />

            {/* Expertise section */}
            <ExpertiseSection />

            {/* We Design Section */}
            <WeDesignSection />

            {/* Our Marketing */}
            <OurMarketingSection />

            {/* Industries we transform */}
            <IndustriesWeTransform />

            {/* Unlock Exclusive */}
            <UnlockExclusiveSection />

            {/* Why Choose */}
            <WhyChoose />

            {/* Animated Text */}
            <AnimatedText />
        </>
    )
}

export default ServicesPage