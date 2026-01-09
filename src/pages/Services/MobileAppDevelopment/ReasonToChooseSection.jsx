import "./ReasonToChooseSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const basePath = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment`;
const atom = `${basePath}/atom.webp`;
const citizenship = `${basePath}/citizenship.webp`;
const cordova = `${basePath}/cordova.webp`;
const ionic = `${basePath}/ionic.webp`;
const unity = `${basePath}/unity.webp`;
const xamarin = `${basePath}/xamarin.webp`;


const reasonsLists = [
    {
        icon: atom,
        title: "React Native",
        content1: "The Gold Standard for Modern UI Google’s premier UI toolkit enables us to craft beautiful, natively compiled applications for mobile, web, and desktop from one codebase. Trusted by global giants like eBay and Alibaba, Flutter provides consistent, high-performance experiences across every industry—from eCommerce to complex enterprise solutions.",
       
    },      {
        icon: citizenship,
        title: "Flutter",
        content1: "The Gold Standard for Modern UI Google’s premier UI toolkit enables us to craft beautiful, natively compiled applications for mobile, web, and desktop from one codebase. Trusted by global giants like eBay and Alibaba, Flutter provides consistent, high-performance experiences across every industry—from eCommerce to complex enterprise solutions.",
    },    {
        icon: ionic,
        title: "Ionic",
        content1: "Web-Powered Mobile Excellence Ionic is a powerful open-source SDK that empowers our team to build high-quality cross-platform apps using familiar web technologies like HTML, CSS, and JavaScript. Featuring a library of mobile-optimized UI components and smooth animations, Ionic delivers visually engaging apps that feel right at home on any device",
    },    {
        icon: cordova,
        title: "Cordova",
        content1: "Hybrid Versatility & Rapid Deployment Formerly known as PhoneGap, Cordova allows us to wrap your web application in a native container. This provides direct access to native device features while maintaining a single codebase, making it an efficient choice for publishing across multiple platforms simultaneously.",
    } , {
        icon: unity,
        content:"Beyond Gaming: Immersive 3D Experiences Unity is the world's most powerful tool for building high-fidelity 2D and 3D animations, visualizations, and cross-platform games. Beyond entertainment, we use Unity’s intuitive interface and rapid coding environment for architectural visualizations, movie previsualizations, and complex simulations. ",
        title: "Unity",
    }, {
        icon: xamarin,
        content:"Enterprise-Grade Native Solutions Owned by Microsoft, Xamarin allows us to build apps for iOS, Android, and Windows with a consistent, native-like user interface. Its write once, 'run anywhere' philosophy saves significant time and cost while providing full access to native APIs for robust and highly scalable enterprise applications.",
        title: "Xamarin"
    }, 
]

const ReasonChooseSection = () => {

    const reasonsRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".reasons_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: reasonsRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, reasonsRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);
    
    return(
        <div className="reason_choose_section section-padding body-background no-top-padding">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">6 Industry-Leading Frameworks for High-Performance Cross-Platform Apps</h2>
                        <p className="paragraph_content text-center">To build robust, scalable applications that work seamlessly across all devices, we utilize the world's most trusted development frameworks. Our approach leverages global usage trends to ensure your app is built on a future-proof foundation.</p> 
                        <div className="reasons_lists_grid less-top-padding" ref={reasonsRef}>
                            {reasonsLists.map((item,i) => (
                                <div className="reasons_lists_item reasons_boxes" key={i}>
                                    <div className="reasons_item_top">
                                        <img src={item.icon} alt={item.title} className="reasons_item_icon" />
                                        <h3 className="reasons_title_text">{item.title}</h3>
                                    </div>
                                    <div className="reasons_item_bottom">
                                            <span className="reasons_item_text">{item.content1}</span>
                                        <p className="reasons_item_text">{item.content}</p>
                                        <img src={item.icon} alt={item.title} className="reasons_icon" />
                                        <span className="reasons_arrow_icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReasonChooseSection