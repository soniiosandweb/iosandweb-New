import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO";
import PortfolioBanner from "./PortfolioBanner/PortfolioBanner";
import PortfolioBoxContent from "./PortfolioBoxContent/PortfolioBoxContent";
import PortfolioSlider from "./PortfolioSlider/PortfolioSlider";
import TechnicalExpert from "./TechnicalExpert/TechnicalExpert";
import Testimonials from "../Home/Testimonials/Testimonials";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import UnlockExclusiveSection from "../Services/ServicesPage/UnlockExclusiveSection/UnlockExclusiveSection";
import CaseStudiesSection from "./CaseStudiesSection/CaseStudiesSection";

const Portfolio = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Checkout our Web Development and Digital Marketing Portfolio"}
                description={"IosAndWeb Technologies: Visit and review our work of Web Development and Digital Marketing Portfolio. We have huge case to show our work."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Portfolio Banner */}
            <PortfolioBanner />

            {/* Portfolio Slider */}
            <PortfolioSlider />

            {/* Portfolio content boxes */}
            <PortfolioBoxContent />

            {/* Case Studies */}
            <CaseStudiesSection />

            {/* Technical Expert */}
            <TechnicalExpert />

            {/* Unlock Exclusive */}
            <UnlockExclusiveSection visions={true} />

            {/* Animated Text */}
            <AnimatedText background={"black"} />
            
            {/* Testimonials */}
            <Testimonials />
        </>
    )
}

export default Portfolio