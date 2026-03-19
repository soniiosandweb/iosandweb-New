import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";
import GetStarted from "../../components/GetStarted";
import JoinOurTeam from "../../components/JoinOurTeam";
import { useLocation } from "react-router-dom";

const teamImg = `${process.env.REACT_APP_API_URL}/assests/images/IAW-Team.webp`;
const userMan = `${process.env.REACT_APP_API_URL}/assests/images/user-man.png`;
const userWoman = `${process.env.REACT_APP_API_URL}/assests/images/user-woman.png`;
const ourTeam = `${process.env.REACT_APP_API_URL}/assests/images/our-team.webp`;
const bhupinder = `${process.env.REACT_APP_API_URL}/assests/images/team/bhupinder.png`;
const soni = `${process.env.REACT_APP_API_URL}/assests/images/team/soni.png`;
const dilip = `${process.env.REACT_APP_API_URL}/assests/images/team/dilip.jpg`;

function Team(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"IAW Team - Grow With Us - IosAndWeb Technologies"}
                description={"Meet IAW Team - The vision of our Team defines the core spirit of IosAndWeb Technologies. It tells what our company is all about."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="our-team-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="heading-wrapper">
                                <h1>Our Core Team <span className="text-highlight">Leaders</span></h1>
                                <div className="heading5">Meet an exceptional team of technology advisors, growth facilitators, and subject matter experts with proven experience</div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={ourTeam} className="responsive-img" alt="How We Work" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Our Team */}
            <div className="our-team-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Meet Our Team</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">The vision of our Team defines the core spirit of IosAndWeb Technologies. It tells what our company is all about. Our vision motivates us to always be on a path that will make us achieve our goals.</div>
                            <div className="team-grid-row">
                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={teamImg} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Utkarsh Khare</h3>
                                        <p className="paragraph">Founder & CEO</p>
                                        <div className="social-icons">
                                            <a href="skype:live:utkarshkhare2601"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:utkarsh@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={bhupinder} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Bhupinder Singh</h3>
                                        <p className="paragraph">Software Development Lead</p>
                                        <div className="social-icons">
                                            <a href="skype:live:dev_5571"><FontAwesomeIcon icon={faSkype} /></a>
                                            <a href="mailto:dev@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Muskan Gupta</h3>
                                        <p className="paragraph">HR Manager</p>
                                        <div className="social-icons">
                                            <a href="mailto:career@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={soni} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Soni Saini</h3>
                                        <p className="paragraph">Senior Software Developer</p>
                                        <div className="social-icons">
                                            <a href="mailto:soni@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={dilip} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Dilip Kumar</h3>
                                        <p className="paragraph">Mern Stack Developer</p>
                                        <div className="social-icons">
                                            <a href="mailto:dilip@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Ashwinder Singh</h3>
                                        <p className="paragraph">Senior SEO Executive & Team Lead</p>
                                        <div className="social-icons">
                                            <a href="mailto:ashwinder@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Parveen Rani</h3>
                                        <p className="paragraph">SEO Intern</p>
                                        <div className="social-icons">
                                            <a href="mailto:parveen@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userWoman} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Varsha</h3>
                                        <p className="paragraph">Graphic Designer</p>
                                        <div className="social-icons">
                                            <a href="mailto:varsha@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div className="team-profile-image">
                                        <img src={userMan} alt="Profile" className="img-fluid" />
                                    </div>
                                    <div className="profile-content">
                                        <h3 className="team-title">Hardeep Singh</h3>
                                        <p className="paragraph">Junior Software Developer</p>
                                        <div className="social-icons">
                                            <a href="mailto:hardeep@iosandweb.net"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* Join Our Team */}
            {/* <div className="black section-padding">
                <Container> <Row><Col>
                <JoinOurTeam />          
                </Col></Row></Container>
            </div> */}

        </>
    )
}

export default Team;