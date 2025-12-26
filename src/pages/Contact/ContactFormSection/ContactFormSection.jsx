import ContactPageForm from "../../../components/ContactPageForm";
import SubHeading from "../../../components/SubHeading/SubHeading";
import "./ContactFormSection.css";
import { Col, Container, Row } from "react-bootstrap";

const indiaIcon = `${process.env.REACT_APP_API_URL}/assests/contact/cont-loc-india.webp`;
const ukIcon = `${process.env.REACT_APP_API_URL}/assests/contact/cont-loc-uk.webp`;
const usaIcon = `${process.env.REACT_APP_API_URL}/assests/contact/cont-loc-usa.webp`;

const indiaFlag = `${process.env.REACT_APP_API_URL}/assests/india-flag.svg`;
const USFlag = `${process.env.REACT_APP_API_URL}/assests/US-flag.svg`;
const UKFlag = `${process.env.REACT_APP_API_URL}/assests/UK-flag.svg`;

const contactBG = `${process.env.REACT_APP_API_URL}/assests/contact/contact_bg.webp`;

const presenceLists = [
    {
        image: indiaFlag,
        text: "India",
    },
    {
        image: USFlag,
        text: "United States",
    },
    {
        image: UKFlag,
        text: "United Kingdom",
    }
]

const locations = [
    {
        icon: indiaIcon,
        title: "India (HQ)",
        address: "SCO 30, First Floor, <br/>Near Devaji Plaza, VIP Road, <br/>Zirakpur, PB (India)"
    },
    {
        icon: ukIcon,
        title: "United Kingdom",
        address: "Sheffield City Centre, <br/>Sheffield, S1 1AA, <br/>United Kingdom"
    },
    {
        icon: usaIcon,
        title: "United States",
        address: "Suite #304, 11200 <br/>Manchaca, <br/>Austin, Texas, <br/>United States, 78748"
    }
]

const ContactFormSection = () => {
    return(
        <div className="contactpage_form_section section-padding linear-dark-background">
            <img src={contactBG} alt="IosAndWeb Technologies Serving Businesses Worldwide" className="contactpage_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="contactpage_form_flexs">
                            <div className="contactpage_form_left_col">
                                <h2 className="heading_main">IosAndWeb Technologies Serving Businesses Worldwide</h2>
                                <h3 className="heading_main small">Global Presence, Local Expertise</h3>
                                <div className="contactpage_locations_block less-top-padding">
                                    {locations.map((item, i) => (
                                        <div className="contactpage_locations_item" key={i}>
                                            <img src={item.icon} alt={item.title} className="contact_location_img" />
                                            <div className="contactpage_location_text">
                                                <p className="paragraph_content location_title">{item.title}</p>
                                                <p className="paragraph_content" dangerouslySetInnerHTML={{ __html: item.address }}></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="contactpage_form_right_col">
                                <h3 className="heading_main small">Reach Out & Let's Build Something Exceptional Together</h3>
                                <div className="contactpage_form_block">
                                    <div className="contactpage_form_block_content">
                                        <h4 className="contactpage_form_heading">Share Details & Begin</h4>
                                        <SubHeading text={"Our Presence"} />
                                        <ul className="presence_lists">
                                            {presenceLists.map((item,i) => (
                                                <li className="presence_lists_item" key={i}>
                                                    <img src={item.image} alt={item.text} className="presence_image" />
                                                </li>
                                            ))}
                                        </ul>
                                        <ContactPageForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactFormSection