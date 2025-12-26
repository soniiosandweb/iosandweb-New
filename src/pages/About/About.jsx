import { useLocation } from "react-router-dom";
import SEO from "../../components/SEO";
import AboutBanner from "./AboutBanner/AboutBanner";

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
        </>
    )
}

export default About