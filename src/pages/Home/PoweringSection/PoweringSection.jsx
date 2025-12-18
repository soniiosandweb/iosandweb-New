import { Link } from "react-router-dom";
import "./PoweringSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useCountUp } from "react-countup";
import AwardsSection from "../AwardsSection/AwardsSection";

const bgOverlay = `${process.env.REACT_APP_API_URL}/assests/images/home/powering/bg_overlay.webp`;
const briefcase = `${process.env.REACT_APP_API_URL}/assests/images/home/powering/briefcase.webp`;
const protection = `${process.env.REACT_APP_API_URL}/assests/images/home/powering/protection.webp`;
const diamond = `${process.env.REACT_APP_API_URL}/assests/images/home/powering/diamond.webp`;
const artificial = `${process.env.REACT_APP_API_URL}/assests/images/home/powering/artificial-intelligence.webp`;

const poweringLists = [
    {
        icon: briefcase,
        text: "Mission-Critical Government Initiatives",
        id: "briefcase"
    },
    {
        icon: protection,
        text: "Years of Digital Engineering Excellence",
        id: "protection"
    },
    {
        icon: diamond,
        text: "Fortune 100 Technology Partnerships",
        id: "diamond"
    },
    {
        icon: artificial,
        text: "Enterprise AI Solutions Engineered",
        id: "artificial"
    }
]

const PoweringSection = () => {

    useCountUp({
        ref: 'briefcase',
        start: 0,
        end: 8,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'protection',
        start: 0,
        end: 11,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'diamond',
        start: 0,
        end: 50,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });

    useCountUp({
        ref: 'artificial',
        start: 0,
        end: 25,
        separator: '',
        suffix: '+',
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        scrollSpyOnce: true
    });
        
    return(
        <div className="powering_section section-padding">
            <img src={bgOverlay} alt="Powering Your Growth with Smart Tech" className="powering_overlay" />
            <Container>
                <Row>
                    <Col>
                        {/* Awards */}
                        <AwardsSection />

                        <div className="powering_content_block section-padding no-bottom-padding text-center">
                            <h2 className="heading_main">Powering Your Growth with Smart Tech</h2>
                            <p className="paragraph_content">We specialize in crafting software solutions tailored to your unique business needs. With our expertise, innovation and commitment to excellence, we empower businesses to thrive in today's competitive digital landscape.</p>
                            <div className="powering_grid less-top-padding less-bottom-padding">
                                {poweringLists.map((item,i) => (
                                    <div className="powering_grid_item" key={i}>
                                        <span id={item.id} />
                                        <div className="content_powering">
                                            <div className="powering_icon">
                                                <img src={item.icon} alt={item.id} />
                                            </div>
                                            <p className="paragraph_content">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link reloadDocument to="/services" className="btn-gradient-blue">See What We Do Best <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PoweringSection