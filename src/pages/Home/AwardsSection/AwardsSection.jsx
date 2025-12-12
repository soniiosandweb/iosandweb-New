import SubHeading from "../../../components/SubHeading/SubHeading";
import "./AwardsSection.css";
import OwlCarousel from "react-owl-carousel";
import Partners from "../../../components/Partners"

const goodFirmLogo = `${process.env.REACT_APP_API_URL}/assests/images/awards/good-firms-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/images/awards/appfutura.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/images/awards/itfirm.webp`;
const topDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/awards/top-development.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/images/awards/upwork.webp`;

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
    }
];

const AwardsSection = () => {
    return(
        <div className="awards_section">
            <SubHeading text={"Awards"} />
            <h2 className="heading_main">Every Award Marks a Milestone in Our Journey of Excellence</h2>

            <OwlCarousel 
                className="owl-theme awards-section-carousel" 
                loop 
                autoplay={true} 
                autoplayTimeout={3000} 
                autoplayHoverPause={true} 
                nav={false} 
                dots={false} 
                items={5}
                responsive={
                    {
                        '0': {
                            items: 3,
                        },
                        '768': {
                            items: 3,
                        },
                        '992': {
                            items: 4,
                        },
                        '1200': {
                            items: 5,
                        }
                    }
                }
            >
                {awardsLists.map((item,i) => (
                    <div className="item" key={i}>
                        <div className="award_list_item">
                            <img src={item.img} alt={item.title} className="award_image" />
                        </div>
                    </div>
                ))}
            </OwlCarousel>

            <div className="brands_block less-bottom-padding">
                <h2 className="heading_main less-top-padding less-bottom-padding">Our Work Has Transformed Experiences for Leading Brands Worldwide</h2>
                <Partners />
            </div>
        </div>
    )
}

export default AwardsSection