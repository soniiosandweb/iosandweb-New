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
        content1: "React Native is a publicly available framework, created by Facebook, enabling the construction of fluid, native-feeling iOS and Android applications from one JavaScript foundation. It assists in providing quick, snappy mobile performance while cutting down on development duration and expense.",
       
    },      {
        icon: citizenship,
        title: "Flutter",
        content1: "Flutter is Google's robust UI set of tools enabling us to craft attractive, fast-performing applications for mobile, web, and desktop from just one source code . It provides fluid, uniform user interactions relied upon by major worldwide companies across various sectors.",
    },    {
        icon: ionic,
        title: "Ionic",
        content1: "Ionic is a robust, open-source toolkit enabling the creation of cross-platform mobile applications with HTML, CSS, and JavaScript. Featuring pre-built UI elements and fluid transitions, it results in visually appealing apps that function consistently across all devices.",
    },    {
        icon: cordova,
        title: "Cordova",
        content1: "Apache Cordova (formerly PhoneGap) lets us turn your web app into a native mobile app using a single codebase. It gives access to device features while making it easy to launch on multiple platforms quickly.",
    } , {
        icon: unity,
        content:"Unity is a powerful platform for creating high-quality 2D and 3D games, animations, and interactive experiences. Beyond gaming, it’s widely used for architectural visuals, film previews, and advanced simulations.",
        title: "Unity",
    }, {
        icon: xamarin,
        content:"Xamarin, owned by Microsoft, helps us build iOS, Android, and Windows apps with a native-like experience using a single codebase. It saves time and cost while giving full access to native APIs for strong, scalable enterprise solutions",
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