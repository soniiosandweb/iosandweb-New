import "./OurMarketingSection.css";
import { Col, Container, Row } from "react-bootstrap";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import desktop from "../newImagesServiecesPage/aboutus/destop.png"
import mobile from "../newImagesServiecesPage/aboutus/mobile.png"
import img1 from "../newImagesServiecesPage/aboutus/img1.png"
import img2 from "../newImagesServiecesPage/aboutus/img2.png"
import img3 from "../newImagesServiecesPage/aboutus/img3.png"
import img4 from "../newImagesServiecesPage/aboutus/img4.png"
gsap.registerPlugin(ScrollTrigger);



const OurMarketingSection = ({classes}) => {
let data = [
    {
    icon:img1,
    text:"100% Transparency"
},{
    icon:img2,
    text:"Get A Dedicated Manager"
},{
    icon:img3,
    text:"Campaign Optimization"
},{
    icon:img4,
    text:"Flexible Pricing"
}
]

    return(
        <div className=" ourmarketingsection" >
            <Container>
                <Row>
                    <Col>
                        <div className="subHeadingOurmakret "> We Build AI-First Solutions</div>
                        <h2 className="heading_main text-center split">From Complex Challenges to Intelligent Solutions</h2>
                       <div className="ImageSectionOurMark">
                        <div className="destopImag">
                            <img src={desktop} alt="" />
                        </div>
                        <div className="MobileImg">
                            <img src={mobile} alt="" />
                        </div>
                       </div>
                       
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurMarketingSection