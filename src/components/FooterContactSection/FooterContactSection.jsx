import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import SubHeading from "../SubHeading/SubHeading";
import "./FooterContactSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import twiiterw from "./twitterwhite.png"
import twiiterb from "./twitterblue.png"
import PinterestW from "./pinterestwhite.png"
import Pinterestb from "./pinterestblue.png"
import ContactForm from "./ContactForm";
import JoinOurTeam from "../JoinOurTeam/index";

const indiaFlag = `${process.env.REACT_APP_API_URL}/assests/india-flag.svg`;
const USFlag = `${process.env.REACT_APP_API_URL}/assests/US-flag.svg`;
const UKFlag = `${process.env.REACT_APP_API_URL}/assests/UK-flag.svg`;
const facebook = `${process.env.REACT_APP_API_URL}/assests/facebook.png`;
const twitter = `${process.env.REACT_APP_API_URL}/assests/xwhite.png`;
const instagram = `${process.env.REACT_APP_API_URL}/assests/instagram.png`;
const linkedin = `${process.env.REACT_APP_API_URL}/assests/linkedin.png`;
const whatsapp = `${process.env.REACT_APP_API_URL}/assests/whatsapp.png`;
const facebookWhite = `${process.env.REACT_APP_API_URL}/assests/facebook-white.png`;
const twitterWhite = `${process.env.REACT_APP_API_URL}/assests/x.webp`;
const instagramWhite = `${process.env.REACT_APP_API_URL}/assests/instagram-white.png`;
const linkedinWhite = `${process.env.REACT_APP_API_URL}/assests/linkedin-white.png`;
const whatsappWhite = `${process.env.REACT_APP_API_URL}/assests/whatsapp-white.png`;
const presenceLists = [
    {
        image: indiaFlag,
        text: "India",
        para:"SCO 30, VIP Shopping Complex, VIP Road, Zirakpur, Punjab."
    },
    {
        image: USFlag,
        text: "United States",
        para:"237 Warrick Road, Putnam Station, NY 12861 USA"
    },
    {
        image: UKFlag,
        text: "United Kingdom",
        para:"Sheffield City Centre, Sheffield, S1 1AA, United Kingdom"
    }
];

const contactLists = [
    {
        icon: faEnvelope,
        text: "info@iosandweb.com",
        link: "mailto:info@iosandweb.net",
    },
{
    icon: faPhoneVolume,
    text: "+1 (518)-744-8131",
    link: "tel:+15187448131",
}
];
const socialLinks = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/iosandwebtechnologies/",
        icon: facebook,
        white: facebookWhite,
    },
    {
        title: "Twitter",
        link: "https://x.com/IosAndWeb_Tech",
        icon: twiiterb,
        white: twiiterw,
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/iosandwebtechnologies/",
        icon: instagram,
        white: instagramWhite,
    },
    {
        title: "Linkedin",
        link: "https://in.linkedin.com/company/iosandweb-technologies",
        icon: linkedin,
        white: linkedinWhite,
    },{
        title: "Pinterest",
        link: "https://www.pinterest.com/IosAndWeb_Tech/",
        icon: Pinterestb,
        white: PinterestW,
    },
]
const FooterContactSection = () => {

    const location = useLocation();

    // 🔥 Important: Your route is "/careers"
    const isCareerPage = location.pathname.startsWith("/careers");

    return(
        <div className="footer_contact_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="footer_contact_flex">

                            {/* LEFT SIDE */}
                            <div className="footer_contact_cols footer_left_col">

                                <div className="footer_left_contents">
                                    <SubHeading text={"GET IN TOUCH"} />
                                    <h2 className="heading_main split">
                                        Stop Following Technology. Start Building What's Next.
                                    </h2>
                                  <p className="parasubheading">Have an idea, challenge, or process that could be smarter? Let's turn it into an AI-powered digital solution.</p>
                                </div>

                                {/* <div className="footer_left_contents center">
                                    <SubHeading text={"Our Presence"} />
                                    <ul className="presence_lists">
                                        {presenceLists.map((item,i) => (
                                            <li className="presence_lists_item" key={i}>
                                                <img 
                                                    src={item.image} 
                                                    alt={item.text} 
                                                    className="presence_image" 
                                                />
                                                <p className="presence_lists_text split">
                                                    {item.para}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}

                                <div className="footer_left_contents desktop_block">
                                    
                                    <div className="footer_contact_lists">
                                        {contactLists.map((item,i) => (
                                            <Link 
                                                to={item.link} 
                                                className="footer_contact_item" 
                                                key={i}
                                            >
                                                <FontAwesomeIcon icon={item.icon} />
                                                <p className="footer_contact_text">
                                                    {item.text}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="social_icons_div">
                                        <ul className="social_icons_lists">
                                            {socialLinks.map((item,i) => (
                                                <li className="social_icons_item" key={i}>
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <img src={item.icon} alt={item.title} className="social_hover" />
                                                        <img src={item.white} alt={item.title} className="social_white" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* RIGHT SIDE (ONLY FORM CHANGES) */}
                            <div className="footer_contact_cols">

                                {isCareerPage ? (
                                    <JoinOurTeam />
                                ) : (
                                    <ContactForm 
                                        title={"Tell us about your project and we'll get back to you within 24 hours."} 
                                    />
                                )}

                                <div className="footer_left_contents mobile_block">
                                   
                                    {/* <div className="footer_contact_lists">
                                        {contactLists.map((item,i) => (
                                            <Link 
                                                to={item.link} 
                                                className="footer_contact_item" 
                                                key={i}
                                            >
                                                <FontAwesomeIcon icon={item.icon} />
                                                <p className="footer_contact_text">
                                                    {item.text}
                                                </p>
                                            </Link>
                                        ))}
                                    </div> */}
                                    {/* <div className="social_icons_div">
                                        <h5 className="footer-col-head">Social Links</h5>
                                        <ul className="social_icons_lists">
                                            {socialLinks.map((item,i) => (
                                                <li className="social_icons_item" key={i}>
                                                    <a href={item.link} target="_blank" rel="noreferrer">
                                                        <img src={item.icon} alt={item.title} className="social_hover" />
                                                        <img src={item.white} alt={item.title} className="social_white" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterContactSection;