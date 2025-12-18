import { Link } from "react-router-dom";
import "./InnovativeSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const innovativeImg = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/imnnovative-img.webp`;
const innovativeBg = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/innovative-bg.webp`;
const softwareIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/software.webp`;
const designIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/ui-design.webp`;
const codingIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/coding.webp`;
const pocIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/poc.webp`;
const digitalIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/digital.webp`;
const payIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/pay.webp`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/blockchain.webp`;
const targetIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/innovative/target.webp`;

const innovativeLists = [
    {
        text: "Software Development",
        icon: softwareIcon,
        link: "/custom-software-development-company",
        blank: false,
    },
    {
        text: "Mobile App Development",
        icon: designIcon,
        link: "/mobile-app-development-services",
        blank: false,
    },
    {
        text: "Web Development",
        icon: codingIcon,
        link: "/web-development-services",
        blank: false,
    },
    {
        text: "Development of POC & ICO",
        icon: pocIcon,
        link: "https://www.blockchain77.com/services/",
        blank: true,
    },
    {
        text: "Digital Transformation",
        icon: digitalIcon,
        link: "/digital-marketing-services",
        blank: false,
    },
    {
        text: "Pay Per Click Service",
        icon: payIcon,
        link: "/ppc-services",
        blank: false,
    },
    {
        text: "Blockchain Service",
        icon: blockchainIcon,
        link: "https://www.blockchain77.com/services/",
        blank: true,
    },
    {
        text: "Ideation & Design Strategy",
        icon: targetIcon,
        link: "/web-designing-services",
        blank: false,
    }
]

const innovativeItems = [
    {
        title: "Reliability",
        text: "reliability"
    },
    {
        title: "Innovation",
        text: "innovation"
    },
    {
        title: "Growth",
        text: "growth"
    },
    {
        title: "Scalability",
        text: "scalability"
    },
    {
        title: "Security",
        text: "security"
    }
];

const InnovativeSection = () => {
    return(
        <div className="innovative_section section-padding bg-black text-white">
            <img src={innovativeBg} alt="Innovative IosAndWeb Technology" className="innovativeBG" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main">Innovative IosAndWeb Technology Solutions</h2>
                        <p className="paragraph_content">In the dynamically changing digital landscape of today, creating robust, scalable, and user-centric technology solutions is crucial to meaningful business growth. Bird is an award-winning global tech development agency that uses cutting-edge frameworks, modern architectures, and engineering excellence to elevate your digital presence across all platforms.</p>

                        <p className="paragraph_content">At Blink, our forward-thinking iOS and web technology experts are skilled in native iOS development, cross-platform solutions, and advanced web engineering. This team develops seamless user experiences, improves performance, and delivers measurable results. By crafting intelligent apps, optimizing digital workflows, and deploying high-impact web solutions, we're helping your brand rise above in an extremely competitive technological landscape.</p>

                        <p className="paragraph_content">With a focus on innovation, reliability, and future-ready development, Bird empowers businesses to create powerful digital products that connect, engage, and scale effortlessly.</p>

                        <div className="innovative_section_flex less-top-padding">
                            <div className="innovative_left_col">
                                <div className="innovative_blocks_image">
                                    <img src={innovativeImg} alt="Innovative IosAndWeb" className="innovative_img" />
                                    {innovativeItems.map((item, i) => (
                                        <span className={`innovative_items_span ${item.text}`} key={i}>{item.title}</span>
                                    ))}
                                </div>

                                <Link reloadDocument to="/contact-us" className="btn-gradient-blue">Get Expert Help <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="innovative_right_col">
                                <div className="innovative_lists_grid">
                                    {innovativeLists.map((item, i) => (
                                        <Link to={item.link} target={item.blank ? "_blank" : "_self"} className="innovative_lists_item" key={i}>
                                            <img src={item.icon} alt={item.text} className="innovative_lists_icon" />
                                            <p className="innovative_lists_heading">{item.text}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InnovativeSection