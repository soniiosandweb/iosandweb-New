import ContactPageForm from "../../../components/ContactPageForm";
import SubHeading from "../../../components/SubHeading/SubHeading";
import "./ContactFormSection.css";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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

    const contactFormRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".contactForm_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: contactFormRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, contactFormRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);

    return(
        <div className="contactpage_form_section section-padding linear-dark-background" ref={contactFormRef}>
            <img src={contactBG} alt="IosAndWeb Technologies Serving Businesses Worldwide" className="contactpage_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="contactpage_form_flexs">
                            <div className="contactpage_form_left_col">
                                <h2 className="heading_main split">IosAndWeb Technologies Serving Businesses Worldwide</h2>
                                <h3 className="heading_main small">Global Presence, Local Expertise</h3>
                                <div className="contactpage_locations_block less-top-padding">
                                    {locations.map((item, i) => (
                                        <div className="contactpage_locations_item contactForm_boxes" key={i}>
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
                                <h3 className="heading_main small split">Reach Out & Let's Build Something Exceptional Together</h3>
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