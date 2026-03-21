import "./ConcludingServicesLists.css"
import { Link } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const ConcludingServicesLists = ({lists, classname}) => {

    const consludingRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".consluding_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: consludingRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, consludingRef);
    
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
        <div className={`concluding_services_grid ${classname && classname}`} ref={consludingRef}>
            {lists.map((item, i) => (
                <Link  to={item.link} className="concluding_services_item consluding_boxes" key={i}>
                    <img src={item.icon} alt={item.title} className="concluding_services_img" />
                    <p className="concluding_services_title">{item.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default ConcludingServicesLists