import { Link } from "react-router-dom";
import "./ServicesGridSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const ServicesGridSection = ({lists}) => {

    const servicesRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".services_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power3.out",
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: servicesRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, servicesRef);
    
                ScrollTrigger.refresh();
            };
    
            const timeout = setTimeout(initAnimation, 150);
    
            return () => {
                clearTimeout(timeout);
                ctx && ctx.revert();
            };
        }, []);

    return(
        lists && lists.length >= 1 && 
        <div className="services_grid_block" ref={servicesRef}>
            {lists.map((item,index) => (
                <div className="services_grid_item" key={index}>
                    <Link target="_blank" to={item.link} className="services_boxes">
                        <img src={item.icon} alt={item.title} className="services_lists_icon" />
                        <p className="services_lists_title">{item.title}</p>
                    </Link>
                    <ul className="services_features_lists services_boxes">
                        {item.feature.map((list,i) => (
                            <li className="services_features_item" key={i}>
                                <FontAwesomeIcon icon={faCheck} />
                                <span>{list}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        
    )
}

export default ServicesGridSection