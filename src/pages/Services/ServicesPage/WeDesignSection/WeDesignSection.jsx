import { Col, Container, Row } from "react-bootstrap";
import "./WeDesignSection.css";
import { Link } from "react-router-dom";

const innovativeBg = `${process.env.REACT_APP_API_URL}/assests/home/innovative/innovative-bg.webp`;
const htmlIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/html.webp`;
const cssIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/css.webp`;
const xdIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/xd.webp`;
const aeIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/after-effects.webp`;
const phpIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/php.webp`;
const uxIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/ux.webp`;

const designLists = [
    {
        text: "Web Designing",
        link: "/web-designing-services",
    },
    {
        text: "Graphic Designing",
        link: "/graphic-designing-services",
    },
    {
        text: "PDF to HTML",
        link: "/pdf-to-html-designing-services",
    }
]

const designIcons = [
    {
        icon: htmlIcon,
        title: "HTML",
    },
    {
        icon: cssIcon,
        title: "CSS",
    },
    {
        icon: xdIcon,
        title: "XD",
    },
    {
        icon: aeIcon,
        title: "AE",
    },
    {
        icon: phpIcon,
        title: "PHP",
    },
    {
        icon: uxIcon,
        title: "UX",
    }
]

const WeDesignSection = () => {
    return(
        <div className="services_we_design_section section-padding body-background">
            <img src={innovativeBg} alt="We Design. We Build. We Deliver." className="we_design_bgimg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">We Design. We Build. We Deliver.</h2>
                        <p className="paragraph_content text-center">Digital Experiences That Convert Visitors Into Customers</p>
                        <div className="about_section_div">

                        <div className="we_design_deliver_block">
                            <div className="we_design_contents">
                                <div className="we_design_lists_content">
                                    {designLists.map((item,i) => (
                                        <Link reloadDocument to={item.link} className="we_design_lists_item" key={i}>
                                            {item.text}
                                        </Link>
                                    ))}
                                </div>
                                <div className="we_design_icons_block">
                                    {designIcons.map((item,i) => (
                                        <img src={item.icon} alt={item.title} className="we_design_icon_img" key={i} />
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

export default WeDesignSection