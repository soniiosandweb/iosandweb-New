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
import ServicesLists from "./ServicesLists/ServicesLists";
import ReadyBuildSection from "./ReadyBuildSection/ReadyBuildSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import FAQSection from "../../../components/FAQSection/FAQSection";
import HowWeHelp from "./HowWeHelp/HowWeHelp";
import ConcludingSection from "./ConcludingSection/ConcludingSection";

const featuresPoints = [
    "AI-Powered Digital Solutions for Tomorrow",
    "Blockchain-Enhanced Security & Privacy",
    "User-Centric Design Boosting Conversions & Loyalty"
]

const SoftwareDevelopment = () => {

    const location = useLocation();

    const faqLists = [
        {
            title: "What is custom software development, and why does my business need it?",
            text: "<b>Custom software development</b> involves creating software solutions tailored specifically to your business needs, unlike generic off-the-shelf products. It enhances efficiency, reduces manual work, and ensures seamless integration with your existing systems—giving your company a competitive edge.",
        },
        {
            title: "How is custom software more beneficial than ready-made solutions?",
            text: "Custom software is designed to match your exact business processes, which means better performance, higher security, and fewer compromises. Unlike pre-built tools, it adapts to your workflows, reduces human error, automates routine tasks, and lowers long-term operating costs.",
        },
        {
            title: "How long does it take to develop custom software?",
            text: "The development timeline varies depending on the complexity and scale of your project. On average, a fully functional custom software solution can take anywhere from 2 to 6 months. Our team ensures timely delivery while maintaining high-quality standards and performance.",
        },
        {
            title: "Can I be involved in the software development process?",
            text: "Absolutely! At IosAndWeb Technologies, we encourage client involvement throughout the development lifecycle. From initial planning to testing and launch, your feedback is essential in shaping a solution that truly fits your business goals.",
        },
        {
            title: "Is custom software development cost-effective in the long run?",
            text: "Yes, while the initial investment might be higher than generic tools, custom software pays off in the long run. It minimizes recurring licensing fees, reduces inefficiencies, lowers support costs, and ultimately leads to improved productivity and ROI.",
        }
    ]

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

            {/* Services Section */}
            <ServicesLists />

            {/* Ready Build Section */}
            <ReadyBuildSection />

            {/* How We Help */}
            <HowWeHelp />

            {/* Animated Text */}
            <AnimatedText />
            
            {/* Concluding section */}
            <ConcludingSection />

            {/* FAQ */}
            <FAQSection 
                subheading={"Insights"}
                heading={"Frequently Asked Questions"}
                lists={faqLists}
                fullwidth={true}
            />
        </>
    )
}

export default SoftwareDevelopment