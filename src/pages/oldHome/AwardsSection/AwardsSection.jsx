import SubHeading from "../../../components/SubHeading/SubHeading";
import "./AwardsSection.css";
import Partners from "../../../components/Partners"

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

    return(
        <div className="awards_section">
            <SubHeading text={"Awards"} />
            <h2 className="heading_main split">Every Award Marks a Milestone in Our Journey of Excellence</h2>

            <div className="marquee-container left-right">
                <div className="marquee">
                    {[0, 1].map((_, i) => (
                        <div className="marquee-track" key={i}>
                            {awardsLists.map((item,i) => (
                                <div className="award_list_item" key={i}>
                                    <img src={item.img} alt={item.title} className="award_image" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="brands_block less-bottom-padding">
                <h2 className="heading_main less-top-padding less-bottom-padding">Our Work Has Transformed Experiences for Leading Brands Worldwide</h2>
                <Partners />
            </div>
        </div>
    )
}

export default AwardsSection