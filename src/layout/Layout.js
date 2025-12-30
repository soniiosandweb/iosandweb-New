import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";
import FooterContactSection from "../components/FooterContactSection/FooterContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Layout(){

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");

    const NON_FIXED_ROUTES = ["contact-us", "about-us"];

    const isNonContact = NON_FIXED_ROUTES.includes(locationValue[1]);


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".split").forEach((heading) => {
                const split = new SplitText(heading, {
                    type: "words",
                    wordsClass: "split-word",
                });
        
                gsap.fromTo(
                    split.words,
                    {
                        scaleX: 0,
                        transformOrigin: "left center",
                    },
                    {
                        scaleX: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: heading,
                            start: "top 85%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            });
        });
    
        return () => ctx.revert();
    }, []);

    return (
        <>
            <HelmetProvider>
                <Header/>
                <Outlet />
                {!isNonContact && 
                    <FooterContactSection />
                }
                <Footer />
            </HelmetProvider>
        </>
    )
}

export default Layout;