import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO";
import AboutBanner from "./AboutBanner/AboutBanner";
import MissionVisionSection from "./MissionVisionSection/MissionVisionSection";
import RedefiningWork from "./RedefiningWork/RedefiningWork";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import OurMarketingSection from "../Services/ServicesPage/OurMarketingSection/OurMarketingSection";
import OurCommitment from "./OurCommitment/OurCommitment";
import AboutWhyChoose from "./AboutWhyChoose/AboutWhyChoose";
import OurAchievements from "./OurAchievements/OurAchievements";

const About = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"IosAndWeb Technologies - We approach with a purpose. Visit Now"}
                description={"Team of IosAndWeb Technologies - We approach with a purpose. Effective Team Communication and collaboration. Visit Now Know About Us."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <AboutBanner />

            {/* Mission Vision */}
            <MissionVisionSection />

            {/* Redefining Work */}
            <RedefiningWork />

            {/* Our Commitment */}
            <OurCommitment />

            {/* Our Achievements */}
            <OurAchievements />

            {/* Why Choose */}
            <AboutWhyChoose />

            {/* Our Marketing */}
            <OurMarketingSection classes={"black-background section-padding no-top-padding"} />

            {/* Animated Text */}
            <AnimatedText background={"black"} />
        </>
    )
}

export default About