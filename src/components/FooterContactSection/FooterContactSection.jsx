import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import SubHeading from "../SubHeading/SubHeading";
import "./FooterContactSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const indiaFlag = `${process.env.REACT_APP_API_URL}/assests/india-flag.svg`;
const USFlag = `${process.env.REACT_APP_API_URL}/assests/US-flag.svg`;
const UKFlag = `${process.env.REACT_APP_API_URL}/assests/UK-flag.svg`;

const presenceLists = [
    {
        image: indiaFlag,
        text: "India",
        para:"SCO 30, First Floor, Near Devaji Plaza, VIP Road,Zirakpur, PB (India)"
    },
    {
        image: USFlag,
        text: "United States",
        para:"Suite #304, 11200 Manchaca, Austin, Texas,United States, 78748"

    },
    {
        image: UKFlag,
        text: "United Kingdom",
        para:"Sheffield City Centre, Sheffield, S1 1AA, United Kingdom"

    }
]

const contactLists = [
    {
        icon: faEnvelope,
        text: "info@iosandweb.net",
        link: "mailto:info@iosandweb.net",
    },
    {
        icon: faPhoneVolume,
        text: "+91 9915841204",
        link: "tel:+919915841204",
    }
]

const FooterContactSection = () => {
    return(
        <div className="footer_contact_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="footer_contact_flex">
                            <div className="footer_contact_cols footer_left_col">
                                <div className="footer_left_contents">
                                    <SubHeading text={"Contact Us"} />
                                    <h2 className="heading_main split center">Ready To Fuel Your Vision With AI-Powered Innovation?</h2>
                                </div>

                                <div className="footer_left_contents">
                                    <SubHeading text={"Our Presence"} />
                                    <ul className="presence_lists">
                                        {presenceLists.map((item,i) => (
                                            <li className="presence_lists_item" key={i}>
                                                <img src={item.image} alt={item.text} className="presence_image" />
                                                <p className="presence_lists_text split">{item.para}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="footer_left_contents desktop_block">
                                    <p className="paragraph_content">Ready to start? Send us a message and we'll get back to you shortly.</p>
                                    <div className="footer_contact_lists">
                                        {contactLists.map((item,i) => (
                                            <Link to={item.link} className="footer_contact_item" key={i}>
                                                <FontAwesomeIcon icon={item.icon} />
                                                <p className="footer_contact_text ">{item.text}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="footer_contact_cols">
                                <ContactForm title={"Partner With Experts Who Leverage AI & Tech To Transform Ideas Into Market-Leading Solutions."} />

                                <div className="footer_left_contents mobile_block">
                                    <p className="paragraph_content">Ready to start? Send us a message and we'll get back to you shortly.</p>
                                    <div className="footer_contact_lists">
                                        {contactLists.map((item,i) => (
                                            <Link to={item.link} className="footer_contact_item" key={i}>
                                                <FontAwesomeIcon icon={item.icon} />
                                                <p className="footer_contact_text">{item.text}</p>
                                            </Link>
                                        ))}
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

export default FooterContactSection