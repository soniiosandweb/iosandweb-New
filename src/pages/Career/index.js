import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO/index.js";
import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner.jsx";
const img1 = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/howWeWorkimg1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/howWeWorkimg2.webp`;

function HowWeWork(){


    const location = useLocation();

    return (
        <>

            <SEO
                title={"How We Work - IosAndWeb Technologies"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
   
             <Banner/>


             <div className="bulid_you_coreer section-padding black no-bottom-padding">
               <Container>
                 <Row>
                    <Col>
                      <div className="build_you_carer_Section">
                         <h1 className="heading-mean textaliginCenter">Build Your Career, Your Way</h1>
                         <p className='FontSize18  textaliginCenter'>Where individual growth meets collective success</p>

                         <div className="bulid_you_coreer_Piont_div padding ">
                            <div className="Build_whats_next">
                                <h1 className="Heading">Cutting-Edge Tech Stack</h1>
                                <div className="para">Work with the tools shaping tomorrow,
                                   AI/ML, cloud-native architecture, modern frameworks. Stay ahead, stay relevant, stay excited
                                </div>
                            </div>                            
                            <div className="Build_whats_next">
                                <h1 className="Heading">Build What's Next</h1>
                                <div className="para">Technical expert? Team leader? Product
                                    innovator? We build your career path around your aspirations, not a rigid
                                    corporate ladder. We​‍​‌‍​‍‌​‍​‌‍​‍‌ build your career path around your aspirations, not a rigid corporate ​‍​‌‍​‍‌​‍​‌‍​‍‌ladder.
                                </div>
                            </div>                            
                            <div className="Build_whats_next">
                                <h1 className="Heading">Build What's Next</h1>
                                <div className="para">Create technology solutions that scale
                                    globally. Your work impacts real users, solves real problems, and shapes the
                                    future of digital experiences.
                                </div>
                            </div>
                         </div>
                      </div>

                    </Col>
                 </Row>
               </Container> 

               

             </div>  
             <div className="investInYou section-padding black less-bottom-padding">
               <Container>
                 <Row>
                    <Col>
                      <div className="build_you_carer_Section">
                         <h1 className="heading-mean textaliginCenter">Invest in Yourself, We'll Invest in You</h1>
                         <p className='FontSize18  textaliginCenter'>Comprehensive programs and resources designed to accelerate your growth and well-being at every stage of your journey.</p>

                         <div className="bulid_you_coreer_Piont_div padding ">
                            <div className="Build_whats_next">
                                <h1 className="Heading">IosAndWeb Desk</h1>
                                <div className="para">Your workspace, your way. MacBook Pro or custom PC builds, Herman Miller chairs, dual 4K monitors, and collaborative spaces designed for focus and creativity.
                                </div>
                            </div>                            
                            <div className="Build_whats_next">
                                <h1 className="Heading">IosAndWeb Academy </h1>
                                <div className="para">Annual​‍​‌‍​‍‌​‍​‌‍​‍‌ Learning budget of $5,000 per employee. Take advantage of Udemy for Business, go to industry conferences, get certifications, and join weekly tech talks and ​‍​‌‍​‍‌​‍​‌‍​‍‌lunch-and-learns
                                </div>
                            </div>                            
                            <div className="Build_whats_next">
                                <h1 className="Heading">Career Built Around You</h1>
                                <div className="para">Quarterly career development conversations, clear IC and management tracks, internal mobility opportunities, and transparent leveling criteria so you always know where you stand.
                                </div>
                            </div><div className="Build_whats_next">
                                <h1 className="Heading">IosAndWeb Advisor</h1>
                                <div className="para">-on-1 mentorship matching you with senior engineers and leaders. Monthly sessions focused on your goals, plus ad-hoc guidance whenever challenges arise.
                                </div>
                            </div><div className="Build_whats_next">
                                <h1 className="Heading">IosAndWeb Expert</h1>
                                <div className="para">On-demand access to our internal network of domain specialists. Get architectural reviews, security audits, performance optimization help, and expert guidance when you need it most
                                </div>
                            </div><div className="Build_whats_next">
                                <h1 className="Heading">IosAndWeb Wellness</h1>
                                <div className="para">Comprehensive health insurance, mental health days, gym memberships, meditation app subscriptions, flexible hours, and wellness stipends to support your whole self.
                                </div>
                            </div>
                         </div>
                      </div>

                    </Col>
                 </Row>
               </Container> 

             </div>

            <div className="MoreThenWorkSpace section-padding  less-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                           <div className="MorethenWorkDiv">
                         <h1 className="heading-mean textaliginCenter">More​‍​‌‍​‍‌​‍​‌‍​‍‌ Than a Workplace</h1>
                         <p className='FontSize18  textaliginCenter'>A community where you belong</p>
                            
                            <div>
                                <div className="collabertionSection padding">
                                  <img className="ImgSection" src={img1} alt="" />
                                  <div className="ContentSection">
                                    <h1 className="Heading">Collaborative & Open</h1>
                                    <div className="para">No one is locked out. No one is left behind. Our working environment encourages both planned and on-the-spot collaboration as well as deep work. You get the best of both worlds - bright, trendy office space or home - as you decide and our promise is flexibility, well-stocked offices, and communication tools for everyone
                                    </div>
                                  </div>
                                </div>
                                <div className="collabertionSection unoFlex padding">
                                  <img className="ImgSection" src={img2} alt="" />
                                  <div className="ContentSection">
                                    <h1 className="Heading">Collaborative & Open</h1>
                                    <div className="para">No one is locked out. No one is left behind. Our working environment encourages both planned and on-the-spot collaboration as well as deep work. You get the best of both worlds - bright, trendy office space or home - as you decide and our promise is flexibility, well-stocked offices, and communication tools for everyone
                                    </div>
                                  </div>
                                </div>
                            </div>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </div>
             <div className="CareerSection section-padding ">
            <Container>
                <Row>
                <Col>
                    <div className="CareerMainDiv">

                    <h1 className="heading-mean textaliginCenter">
                        Your Next Career Move Starts Here
                    </h1>

                    <p className="FontSize18 textaliginCenter career-subtext">
                        Explore open positions across development, design, business, and more.
                        Find the role that fits your expertise and ambitions
                    </p>

                    {/** ===== JOB ARRAY ===== */}
                    {(() => {
                        const jobs = [
                        { title: "PHP Developer (WordPress)", exp: "2-4 Years Exp." },
                        { title: "Quality Analyst", exp: "3+ Year Exp." },
                        { title: "UI/UX Designer", exp: "3+ Year Exp." },
                        { title: "Magento Developer", exp: "2-5 Years Exp." },
                        { title: "Business Analyst", exp: "3-6 Years Exp." },
                        { title: "Business Dev. Manager (BDM)", exp: "5+ Years Exp." },
                        { title: "Frontend Developer", exp: "2-4 Years Exp." },
                        ];

                        return (
                        <div className="JobListSection">
                            {jobs.map((job, index) => (
                            <div className="JobCard" key={index}>
                                <div className="JobTitle">{job.title}</div>
                                <div className="JobExp">{job.exp}</div>
                                <div className="ApplyBtn">Apply</div>
                            </div>
                            ))}
                        </div>
                        );
                    })()}

                    </div>
                </Col>
                </Row>
            </Container>
            </div>

            
        </>
    )
}

export default HowWeWork;