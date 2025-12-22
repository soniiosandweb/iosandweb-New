import SubHeading from "../../../components/SubHeading/SubHeading";
import "./AwardsSection.css";
import Partners from "../../../components/Partners"
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const goodFirmLogo = `${process.env.REACT_APP_API_URL}/assests/awards/good-firms-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/awards/appfutura.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/awards/itfirm.webp`;
const topDevelopment = `${process.env.REACT_APP_API_URL}/assests/awards/top-development.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/awards/upwork.webp`;
const trustpilot = `${process.env.REACT_APP_API_URL}/assests/awards/trustpilot.webp`;

const awardsLists = [
    { 
        img: upWork,
        title: "Software development company of the year"
    },
    { 
        img: topDevelopment,
        title: "Tech Company Of The Year"
    },
    { 
        img: goodFirmLogo,
        title: "App development company of the year"
    },
    { 
        img: itFirms,
        title: "India's Growth Champions in IT"
    },
    { 
        img: appFutura,
        title: "Most promising mobile app solution provider"
    },
    { 
        img: trustpilot,
        title: "Web development company of the year"
    }
];

const AwardsSection = () => {

    const awardRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isSmall = windowWidth < 380;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1200;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const awardsSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: isSmall ? 2 : isMobile ? 3 : isTablet ? 4 : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return(
        <div className="awards_section">
            <SubHeading text={"Awards"} />
            <h2 className="heading_main">Every Award Marks a Milestone in Our Journey of Excellence</h2>

            <Slider 
                className="awards-section-carousel" 
                {...awardsSettings}
                ref={awardRef}
            >
                {awardsLists.map((item,i) => (
                    <div className="item" key={i}>
                        <div className="award_list_item">
                            <img src={item.img} alt={item.title} className="award_image" />
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="brands_block less-bottom-padding">
                <h2 className="heading_main less-top-padding less-bottom-padding">Our Work Has Transformed Experiences for Leading Brands Worldwide</h2>
                <Partners />
            </div>
        </div>
    )
}

export default AwardsSection