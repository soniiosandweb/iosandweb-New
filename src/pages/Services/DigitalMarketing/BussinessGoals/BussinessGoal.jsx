import { Col, Container, Row } from "react-bootstrap";
import "./BusinessGoals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const img1 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img2.webp`;
const img3 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img3.webp`;
const img4 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img4.webp`;
const img5 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img5.webp`;
const img6 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img6.webp`;
const img7 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img7.webp`;
const img8 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img8.webp`;
const img9 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/img9.webp`;


const goalsLists = [
    {
        icon: img1,
        title: "Search Engine Optimization (SEO)",
        features: [
            "Dominate the Digital Shelf Stop being invisible. We combine technical rigor with sophisticated keyword mapping and authority-building strategies to place your brand where your customers are searching. By aligning your site’s architecture with user intent, we secure long-term, organic growth that beats the competition.",
        ]
    },
    {
        icon: img2,
        title: " Social Media Optimization (SMO)",
        features: [
            "Turn Conversations into Conversions Social media isn't just about posting; it's about presence. We build platform-specific ecosystems that foster genuine community engagement and brand affinity. From viral storytelling to precision-targeted social campaigns, we transform your profiles into high-velocity growth drivers.",
        ]
    },
    {
        icon: img3,
        title: " Online Reputation Management (ORM)",
        features: [
            "Own Your Narrative In a world of instant feedback, your reputation is your most valuable currency. We deploy proactive monitoring and strategic sentiment repair to ensure your brand's digital footprint reflects excellence. We amplify positive voices and neutralize crises before they impact your bottom line.",
        ]
    },
    {
        icon: img4,
        title: "PPC Campaign Management",
        features: [
            "Precision-Targeted Paid Acquisition Stop wasting spend on 'maybe.' Our PPC specialists engineer high-intent campaigns across Search, Social, and Remarketing networks. By optimizing for the highest possible Return on Ad Spend (ROAS), we deliver immediate traffic that converts into measurable revenue.",
        ]
    },
    {
        icon: img5,
        title: " Display Advertising Campaigns",
        features: [
            "Visual Impact at Scale Stay top-of-mind with high-impact visual storytelling. We leverage advanced behavioral targeting to place your message in front of the right eyes at the right time. Our display strategies focus on high recall and strategic retargeting to pull prospects back into your ecosystem.",
        ]
    },
    {
        icon: img6,
        title: " Content Marketing",
        features: [
            "Authority Through Insight We position your brand as the industry thought leader. Our content studio produces high-value blogs, whitepapers, and interactive media that solve user problems and nurture prospects. We create the 'educational bridge' that moves buyers from curiosity to a final sale.",
        ]
    },
    {
        icon: img7,
        title: "Lead Gen Campaign",
        features: [
            "Fuel Your Sales Engine We replace 'hope' with a predictable pipeline. Using automated funnels, gated assets, and multi-step lead scoring, we identify and capture high-intent B2B and B2C prospects. We don't just find names; we deliver sales-qualified opportunities ready for closing.",
        ]
    },    {
        icon: img8,
        title: "Link Building",
        features: [
            "Digital PR & Authority Scaling Backlinks are the 'votes of confidence' of the internet. We execute ethical, white-hat outreach to secure placements on high-authority, niche-relevant domains. This elevates your site’s trust score, improves ranking stability, and drives high-value referral traffic.",
        ]
    },    {
        icon: img9,
        title: "Conversion Rate Optimization",
        features: [
            "Maximize Every Click Don't let your traffic leak through a broken bucket. We use heatmaps, A/B testing, and psychological triggers to streamline your user experience. By removing friction from your checkout or sign-up flows, we increase your revenue without needing a single extra visitor.",
        ]
    },]

const BussinessGoal = () => {

    const goalsRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".goals_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: goalsRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, goalsRef);
    
                ScrollTrigger.refresh();
            };
    
            const timeout = setTimeout(initAnimation, 150);
    
            return () => {
                clearTimeout(timeout);
                ctx && ctx.revert();
            };
        }, []);

    return (
        <div className="business_goals_section section-padding no-top-padding body-background" ref={goalsRef}>
            <Container>
                <Row>
                    <Col className="BussincessCol">
                        <h2 className="heading_main split">Scale Faster. Convert Better. Dominate Your Market</h2>
                        <p className="fontSize18 padding lessPadding textaliginCenter">Stop settling for "visibility" and start demanding results. We engineer full-funnel digital ecosystems that don't just generate clicks—they capture market share and drive predictable revenue</p>
                        <div className="business_goals_grid less-top-padding">
                            {goalsLists.map((item,index) => (
                                <div className="business_goals_item goals_boxes" key={index}>
                                    <div className="business_goals_header">
                                        <img src={item.icon} alt={item.title} className="goals_item_icon" />
                                        <p className="goals_item_title">{item.title}</p>
                                    </div>
                                    <div className="business_goals_content">
                                        {item.features.map((list,i) => (
                                            <div className="goals_features_list" key={i}>
                                                <img src={checkIcon} alt="check" className="goals_features_icon" />
                                                <p className="goals_features_title">{list}</p>
                                            </div>
                                        ))}
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

export default BussinessGoal