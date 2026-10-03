import { Link } from "react-router-dom";
import "./InnovativeSection.css";
import { Col, Container, Row } from "react-bootstrap";

import destopRobo from "../newHomeImage/roboSection/destopRObo.png"
import io1 from "../newHomeImage/roboSection/io1.png"
import io4 from "../newHomeImage/roboSection/io4.png"
import io3 from "../newHomeImage/roboSection/io2.png"
import io2 from "../newHomeImage/roboSection/io2.png"
import mobileBg from "../newHomeImage/roboSection/mobileBg.png"




const InnovativeSection = () => {

  const solutions = [
  {
    title: "Solutions Built Around Your Vision",
    para: "We don’t just build software — we transform your ideas into powerful digital solutions designed to solve real business challenges and drive growth.",
    icon: io1,
  },
  {
    title: "Technology That Keeps You Ahead",
    para: "Using modern technologies and innovative strategies, we create fast, secure, and scalable solutions that help your business stay competitive.",
    icon: io2,
  },
  {
    title: " Your Growth Is Our Mission",
    para: "From the first idea to final delivery and beyond, we work as your technology partner to create seamless experiences and long-term success.",
    icon: io3,
  }, {
    title: "Long-Term Support",
    para: "We stay on after launch — updates, fixes, and scaling as your product grows",
    icon: io4,
  },
];
    
    return(
        <div className="innovative_section ">
            {/* <img src={innovativeBg} alt="Innovative IosAndWeb Technology" className="innovativeBG" /> */}
            <Container className="no-top-padding">
                <Row>
                    <Col>
                        <h2 className="heading_main ">Why Forward-Thinking Businesses Choose IosAndWeb</h2>
                      
                      <div className="mainDivForRoboSection">
                           {solutions.map((item, index) => (
  <div className="solutionItem" key={index}>
    <div className="roboIcon">
      <img src={item.icon} alt={item.title} />
    </div>

    <div className="robotext">
      <h2 className="roboTitle">{item.title}</h2>

      <p className="roboParA">
        {item.para}
      </p>
    </div>
  </div>
))}</div>
                       </Col>
                </Row>
            </Container> 
                         <div className="destopRoboSection">
                            <img className="destoprobosection" src={destopRobo} alt="robo"></img>
                         </div>



                        {/* */}
                    
        </div>
    )
}

export default InnovativeSection