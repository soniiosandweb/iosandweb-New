import React from "react";
import Header from "./Header";
import { Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import { HelmetProvider } from "react-helmet-async";
import FooterContactSection from "../components/FooterContactSection/FooterContactSection";

function Layout(){

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");

    const NON_FIXED_ROUTES = ["contact-us"];

    const isNonContact = NON_FIXED_ROUTES.includes(locationValue[1]);

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