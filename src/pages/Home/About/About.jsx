import { Link } from "react-router-dom";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import destopImage from "../newHomeImage/about/destop.png"
import mobileImage from "../newHomeImage/about/mobile.png"
import bg from "../newHomeImage/about/bg.png"
const AboutSection = () => {
    const milestones = [
    { year: "2018 Company Founded", label: "Beginning our journey to transform ideas into digital solutions." },
    { year: "2019 Growth Milestone", label: "Expanding our solutions, partnerships, and global reach." },
    { year: "2021 Global Team Expansion", label: "Growing our global capabilities and technology expertise" },
    { year: "2023: AI Innovation Era", label: "Building intelligent solutions for the AI-driven future." },
    { year: "2026 Future Tech Hub", label: "Building Tomorrow Through Intelligent Technology" },
];
    return(
        <div className="about_section section-padding">
            <img src={bg} alt=""  className="imageBgAboutus" />
            <Container>
                <Row>
                    <Col>
                        <div className="about_section_flex">
                            <div className="about_section_cols">
                                <div className="sectionHeading"> ABOUT US</div>
                                <h2 className="heading_main ">AI-Native Technology
                                    Built for What’s Next
                                    </h2>
                                <p className="paragraph_content">At IosAndWeb, We combine AI, automation, cloud, and modern software engineering to create digital solutions that reduce complexity, accelerate operations, and unlock measurable business growth.</p>
                              

                               
                            </div>
                            
                            <div className="ratingSection">
                                <div className="ratingdiv first">
                                    <h3 className="ratingHeading">AI- Powered</h3>
                                    <div className="ratingPara">Intelligent workflows & decision-making</div>
                                </div>
                                 <div className="ratingdiv secound">
                                    <h3 className="ratingHeading">Automated</h3>
                                    <div className="ratingPara">Repetitive work handled by AI</div>
                                </div> 
                                <div className="ratingdiv third">
                                    <h3 className="ratingHeading">Scalable</h3>
                                    <div className="ratingPara">Cloud-ready digital infrastructure</div>
                                </div> 
                                <div className="ratingdiv forth">
                                    <h3 className="ratingHeading">Secure</h3>
                                    <div className="ratingPara">Security-first architecture & data protection</div>
                                </div>
                            </div>
                           
                        </div>
 <div className="timelineHighlight_box">
        <div className="timelineHighlight_imageWrap">
            <img src={mobileImage} alt="Growth timeline chart" className="timelineHighlight_image" />
        </div>
 
        <div className="timelineHighlight_list">
            {milestones.map((item, idx) => (
                <div className="timelineHighlight_item" key={idx}>
                    <span className="timelineHighlight_year">{item.year}:</span>
                    <span className="timelineHighlight_label">{item.label}</span>
                </div>
            ))}
        </div>
    </div>

                                     <div className="destopRoboSectionaboutUs">
                                        <img className="destoprobosectionAboutus" src={destopImage} alt="robo"></img>
                                     </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutSection