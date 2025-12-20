import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO";
import Banner from "./Banner/Banner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import SmartDigital from "./SmartDigital/SmartDigital";
import BusinessGoals from "./BusinessGoals/BusinessGoals";
import PerformanceSection from "./PerformanceSection/PerformanceSection";
import ReliableCustomSection from "./ReliableCustomSection/ReliableCustomSection";
import ReasonChooseSection from "./ReasonChooseSection/ReasonChooseSection";
import MoreThanWebSection from "./MoreThanWebSection/MoreThanWebSection";

const featuresPoints = [
    "AI-Powered Digital Solutions for Tomorrow",
    "Blockchain-Enhanced Security & Privacy",
    "User-Centric Design Boosting Conversions & Loyalty"
]

const SoftwareDevelopment = () => {

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Custom Software Development Services | IosAndWeb Technologies"}
                description={"Top Custom Software Development Company offering tailored software solutions. Expert in custom software development services for scalable business growth."}
                keywords={"Custom Software Development Company, Custom software development, Custom software development services, Top custom software developer, Software development custom services"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner */}
            <Banner />

            {/* Features Points */}
            <FeaturesPointsSection lists={featuresPoints} />

            {/* Smart Digital */}
            <SmartDigital />

            {/* Business Goals */}
            <BusinessGoals />

            {/* Performance Section */}
            <PerformanceSection />

            {/* Reliable Custom Section */}
            <ReliableCustomSection />

            {/* Reason choose section */}
            <ReasonChooseSection />

            {/* More Than Web section */}
            <MoreThanWebSection />
        </>
    )
}

export default SoftwareDevelopment