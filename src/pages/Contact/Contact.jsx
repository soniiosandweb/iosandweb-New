import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO";
import BannerSection from "./BannerSection/BannerSection";
import FeaturesPointsSection from "../../components/FeaturesPointsSection/FeaturesPointsSection";
import TalkGrowth from "./TalkGrowth/TalkGrowth";
import SeeBusinessSection from "./SeeBusinessSection/SeeBusinessSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";

const featuresPoints = [
    {
        title: "Deep-Dive Discovery Call <br/>(Within 24 Hours)",
        text: "We schedule a comprehensive consultation to understand your business, goals, challenges, and vision.",
    },
    {
        title: "Custom Strategy & Roadmap <br/>(Within 3-5 Days)",
        text: "Our team analyzes your requirements and creates a detailed proposal with clear deliverables and realistic timelines.",
    },
    {
        title: "Seamless Project Kickoff <br/>(When You're Ready)",
        text: "Once approved, we assign a dedicated team, set up communication channels, and begin execution immediately.",
    }
]

const Contact = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Consult now: Get IosAndWeb Technologies Contact Number details"}
                description={"Our management is always ready to help to boost our customer business. Call us or Consult our IosAndWeb Technologies contact number."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <BannerSection />

            {/* Features Points */}
            <FeaturesPointsSection lists={featuresPoints} />

            {/* Contact Form Section */}
            <ContactFormSection />

            {/* Talk Growth */}
            <TalkGrowth />

            {/* See Business */}
            <SeeBusinessSection />
        </>
    )
}

export default Contact