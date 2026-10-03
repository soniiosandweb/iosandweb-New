import React, { useEffect, useRef, useState } from "react";
import './style.css';
import {Container, Offcanvas} from 'react-bootstrap';
import {  useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import newlogo from "./newLogo.png"
import Dropdown from 'react-bootstrap/Dropdown';
import ai from "./ai.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCaretDown, faPhone, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";

const logo = `${process.env.REACT_APP_API_URL}/assests/IAW-logo-white.png`;
const menuIcon = `${process.env.REACT_APP_API_URL}/assests/menu_icon.png`;

// service menu
const mobileApp = `${process.env.REACT_APP_API_URL}/assests/menu/Mobile-app.svg`;
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/menu/Software-Development.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/menu/Digital-Transformation.svg`;
const dataScience = `${process.env.REACT_APP_API_URL}/assests/menu/Data-Science-Analytics.svg`;
const blockChain = `${process.env.REACT_APP_API_URL}/assests/menu/Blockchain-Services.svg`;
const ideationDesign = `${process.env.REACT_APP_API_URL}/assests/menu/ideation-design.svg`;

// industries menu
const eCommerceIcon = `${process.env.REACT_APP_API_URL}/assests/menu/eCommerce.png`;
const realEstateIcon = `${process.env.REACT_APP_API_URL}/assests/menu/real-estate.png`;
const generativeAI = `${process.env.REACT_APP_API_URL}/assests/menu/artificial-intelligence.png`;
const healthcareIcon = `${process.env.REACT_APP_API_URL}/assests/menu/health-care.png`;

// about menu
const aboutIcon = `${process.env.REACT_APP_API_URL}/assests/menu/about-us.png`;
const teamIcon = `${process.env.REACT_APP_API_URL}/assests/menu/our-team-icon.png`;
const careerIcon = `${process.env.REACT_APP_API_URL}/assests/menu/career-icon.png`;
const howWorkIcon = `${process.env.REACT_APP_API_URL}/assests/menu/how-we-work.png`;

// Award images
const goodFirmLogo = `${process.env.REACT_APP_API_URL}/assests/awards/good-firms-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/awards/appfutura.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/awards/itfirm.webp`;
const topDevelopment = `${process.env.REACT_APP_API_URL}/assests/awards/top-development.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/awards/upwork.webp`;

// Portfolio images
const maprouteIcon = `${process.env.REACT_APP_API_URL}/assests/menu/map-route.png`;
const aiIcon = `${process.env.REACT_APP_API_URL}/assests/menu/chat-bot.png`;
const xrpIcon = `${process.env.REACT_APP_API_URL}/assests/menu/xrp.png`;
const stakeIcon = `${process.env.REACT_APP_API_URL}/assests/menu/staking.png`;
const chatbotIcon = `${process.env.REACT_APP_API_URL}/assests/menu/chatbot.png`;
const shoesIcon = `${process.env.REACT_APP_API_URL}/assests/menu/shoes.png`;
const spaIcon = `${process.env.REACT_APP_API_URL}/assests/menu/spa.png`;
const leafIcon = `${process.env.REACT_APP_API_URL}/assests/menu/leaf.png`;
const careplanIcon = `${process.env.REACT_APP_API_URL}/assests/menu/careplan.png`;
const arabicIcon = `${process.env.REACT_APP_API_URL}/assests/menu/arabic.png`;
const onmenIcon = `${process.env.REACT_APP_API_URL}/assests/menu/onmen.png`;
const tiaraIcon = `${process.env.REACT_APP_API_URL}/assests/menu/lotus.png`;
const signIcon = `${process.env.REACT_APP_API_URL}/assests/menu/sign-contract.png`;
const carIcon = `${process.env.REACT_APP_API_URL}/assests/menu/car-repair.png`;
const buildingsIcon = `${process.env.REACT_APP_API_URL}/assests/menu/buildings.png`;
const procedureIcon = `${process.env.REACT_APP_API_URL}/assests/menu/procedure.png`;
const healthIcon = `${process.env.REACT_APP_API_URL}/assests/menu/heartbeat.png`;
const groceryIcon = `${process.env.REACT_APP_API_URL}/assests/menu/grocery.png`;
const hairIcon = `${process.env.REACT_APP_API_URL}/assests/menu/hair.png`;
const beautyIcon = `${process.env.REACT_APP_API_URL}/assests/menu/beauty.png`;
const massageIcon = `${process.env.REACT_APP_API_URL}/assests/menu/massage.png`;

// Services Menu
const servicesMenu = [
  {
    title: "Software Development",
    url: "/iosandwebnew/custom-software-development-company",
    image: softwareDevelopment,
    class: "bg-red"
  },
  {
    title: "Web Development",
    url: "/iosandwebnew/web-development-services",
    image: digitalTransformation,
    class: "bg-purple"
  },
  {
    title: "Mobile App Development",
    url: "/iosandwebnew/mobile-app-development-services",
    image: mobileApp,
    class: "bg-orange"
  },
  {
    title: "Blockchain Development",
    url: "https://www.blockchain77.com/services/",
    image: blockChain,
    blank: true,
    class: "bg-blue"
  },
  {
    title: "Web / Graphic Design",
    url: "/iosandwebnew/web-designing-services",
    image: ideationDesign,
    class: "bg-green"
  },
  {
    title: "Digital Marketing",
    url: "/iosandwebnew/digital-marketing-services",
    image: dataScience,
    class: "bg-pink"
  }
]

// Industries Menu
const industriesMenu = [
  {
    title: "eCommerce",
    url: "/iosandwebnew/ecommerce-app-development",
    image: eCommerceIcon,
    class: "bg-pink"
  },
  {
    title: "Real Estate",
    url: "/iosandwebnew/real-estate-app-development",
    image: realEstateIcon,
    class: "bg-green"
  },
  {
    title: "Generative AI",
    url: "/iosandwebnew/generative-ai-development",
    image: generativeAI,
    class: "bg-orange"
  },
  {
    title: "Healthcare",
    url: "/iosandwebnew/healthcare-software-development",
    image: healthcareIcon,
    class: "bg-blue"
  }
]

// Company Menu
const companyMenu = [
  {
    title: "About Us",
    url: "/iosandwebnew/about-us",
    image: aboutIcon,
    class: "bg-pink"
  },
  {
    title: "IAW Team",
    url: "/iosandwebnew/iaw-team",
    image: teamIcon,
    class: "bg-green"
  },
  // {
  //   title: "Career",
  //   url: "/iosandwebnew/careers",
  //   image: careerIcon,
  //   class: "bg-orange"
  // },
  // {
  //   title: "How We Work",
  //   url: "/iosandwebnew/how-we-work",
  //   image: howWorkIcon,
  //   class: "bg-blue"
  // }
]

// Portfolio Live Menu
const portfolioMenu = [
  {
    title: "Obgyn",
    url: "https://obgyn.com/",
    image: healthIcon,
    class: "bg-pink",
    tech: "wordpress",
  },
  {
    title: "Hair Restoration",
    url: "https://www.hairrestoration.com/",
    image: hairIcon,
    class: "bg-red",
    tech: "wordpress",
  },
  {
    title: "Blepharoplasty",
    url: "https://blepharoplasty.com/",
    image: beautyIcon,
    class: "bg-green",
    tech: "wordpress",
  },
  {
    title: "Body Massage",
    url: "https://bodymassage.com/",
    image: massageIcon,
    class: "bg-orange",
    tech: "wordpress",
  },
  {
    title: "Whopping Seo",
    url: "https://whoppingseo.com/",
    image: signIcon,
    class: "bg-blue",
    tech: "wordpress",
  },
  {
    title: "Block Chain",
    url: "https://blockchain77.com/",
    image: stakeIcon,
    class: "bg-purple",
    tech: "wordpress",
  },
  {
    title: "Silver Street London",
    url: "http://104.156.231.22/silverstreetlondon",
    image: shoesIcon,
    class: "bg-purple",
    tech: "magento",
  },
  {
    title: "Fresh Organic Grocery",
    url: "http://freshorganicgrocery.com/",
    image: groceryIcon,
    class: "bg-purple",
    tech: "React JS & Node JS",
  },
  {
    title: "Ship From Germany",
    url: "https://shipfromgermany.com/",
    image: procedureIcon,
    class: "bg-pink",
    tech: "wordpress",
  },
  {
    title: "SEO Rockers",
    url: "https://seorockers.com/",
    image: signIcon,
    class: "bg-red",
    tech: "PHP",
  },
  {
    title: "Ananta Aspire zirakpur",
    url: "https://anantaaspirezirakpur.co/",
    image: buildingsIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "Vamana Residences",
    url: "https://vamanaresidences.com/",
    image: buildingsIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Ananta Aspire",
    url: "https://anantaaspire.co/",
    image: buildingsIcon,
    class: "bg-blue",
    tech: "React JS",
  },
  {
    title: "Appreciant Realty",
    url: "https://appreciantrealty.com/",
    image: buildingsIcon,
    class: "bg-purple",
    tech: "React JS",
  },
  {
    title: "Printer Not Working",
    url: "https://printernotworking.com/",
    image: signIcon,
    class: "bg-pink",
    tech: "Wordpress",
  }

]

// Portfolio Staging Menu
const portfolioStagingMenu = [
  {
    title: "Map Route",
    url: "https://iosandweb.net/maproute/",
    image: maprouteIcon,
    class: "bg-pink",
    tech: "React JS",
  },
  {
    title: "Chatbot",
    url: "https://iosandweb.net/chatbot/",
    image: chatbotIcon,
    class: "bg-red",
    tech: "Node JS",
  },
  {
    title: "AI Translator",
    url: "https://iosandweb.net/ai/",
    image: aiIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "XRP Trade",
    url: "https://iosandweb.com/markets/",
    image: xrpIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Staking",
    url: "https://iosandweb.net/staking/",
    image: stakeIcon,
    class: "bg-blue",
    tech: "React JS",
  },
  {
    title: "Physicians",
    url: "https://physicians.iosandweb.net/",
    image: healthcareIcon,
    class: "bg-purple",
    tech: "Wordpress",
  },
  {
    title: "The Ten World",
    url: "https://thetenworld.iosandweb.net/",
    image: spaIcon,
    class: "bg-pink",
    tech: "Wordpress",
  },
  {
    title: "The Sprout",
    url: "http://sprout.iosandweb.net/",
    image: leafIcon,
    class: "bg-red",
    tech: "Wordpress",
  },
  {
    title: "Careplans",
    url: "#",
    image: careplanIcon,
    class: "bg-green",
    tech: "Wordpress",
  },
  {
    title: "Imfreenow",
    url: "https://imfreenow.iosandweb.net/",
    image: arabicIcon,
    class: "bg-orange",
    tech: "Wordpress",
  },
  {
    title: "Onmen",
    url: "https://onmen.iosandweb.net/",
    image: onmenIcon,
    class: "bg-blue",
    tech: "Wordpress",
  },
  {
    title: "Tiara Real Estate",
    url: "https://tiara.iosandweb.com/",
    image: tiaraIcon,
    class: "bg-purple",
    tech: "React JS",
  },
  {
    title: "RDY Signs",
    url: "#",
    image: signIcon,
    class: "bg-pink",
    tech: "Wordpress",
  },
  {
    title: "Windbooster",
    url: "#",
    image: carIcon,
    class: "bg-red",
    tech: "Wordpress",
  },
  {
    title: "Danube Properties",
    url: "https://iosandweb.net/danubeproperties/",
    image: buildingsIcon,
    class: "bg-green",
    tech: "React JS",
  },
  {
    title: "Simulacrum",
    url: "https://iosandweb.net/simulacrum/",
    image: procedureIcon,
    class: "bg-orange",
    tech: "React JS",
  },
  {
    title: "Surgi Health",
    url: "https://surgi.iosandweb.com/",
    image: healthIcon,
    class: "bg-blue",
    tech: "Perch Runway",
  },
  {
    title: "Buy Token LLC",
    url: "http://buytokenllc.iosandweb.net/",
    image: stakeIcon,
    class: "bg-purple",
    tech: "Wordpress",
  },
  {
    title: "SRGN",
    url: "https://srgn-clinic.webflow.io/",
    image: careplanIcon,
    class: "bg-red",
    tech: "Webflow",
  },
  {
    title: "myGermany",
    url: "http://104.238.180.124/mygermany/",
    image: procedureIcon,
    class: "bg-green",
    tech: "Wordpress",
  },
]

function Header() {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  const [image, setImage] = useState(logo);
  const [fixed, setFixed] = useState("sticky-top");
  const [headerbg, setHeaderbg] = useState("white text-white");

  // Offcanvas / hamburger menu open state — now controlled so we can
  // programmatically close it from any nav link click.
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const portfolioRef = useRef(null);
  const productsRef = useRef(null);
  const industryRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const dropdownTimerRef = useRef(null);
  const isMobile = window.innerWidth < 992;

  const NON_FIXED_ROUTES = ["blog", "privacy", "terms-and-conditions", "cancellation-policy"];

  const isNonFixedRoute = NON_FIXED_ROUTES.includes(locationValue[1]);

  // Closes the mobile offcanvas menu. Pass this to onClick on every
  // real navigation link (Nav.Link / Dropdown.Item that goes somewhere),
  // but NOT on the little caret spans that only toggle a submenu open.
  const closeMenu = () => setExpanded(false);
const openDropdown = (menu) => {
  if (dropdownTimerRef.current) {
    clearTimeout(dropdownTimerRef.current);
  }

  if (menu !== "services") setShow(false);
  if (menu !== "portfolio") setShowPortfolio(false);
  if (menu !== "products") setShowProducts(false);
  if (menu !== "company") setShowAbout(false);

  if (menu === "services") setShow(true);
  if (menu === "portfolio") setShowPortfolio(true);
  if (menu === "products") setShowProducts(true);
  if (menu === "company") setShowAbout(true);
};

const closeDropdown = (setter) => {
  if (dropdownTimerRef.current) {
    clearTimeout(dropdownTimerRef.current);
  }

  dropdownTimerRef.current = setTimeout(() => {
    setter(false);
  }, 200);
};
  const updateHeader = React.useCallback(() => {
    if (isNonFixedRoute) {
      setFixed("sticky-top text-white");
      setHeaderbg("white text-white borderbottom");
      setImage(logo);
      return;
    }

    setFixed("fixed-top text-white");

    if (window.scrollY > 50) {
      setHeaderbg("white text-white borderbottom");
    } else {
      setHeaderbg("transparent text-white");
    }

    setImage(logo);
  }, [isNonFixedRoute]);


  const listenScrollEvent = React.useCallback(() => {
    if (!isNonFixedRoute) {
      updateHeader();
    }
  }, [isNonFixedRoute, updateHeader]);

  const handleResize = React.useCallback(() => {
    if (!isNonFixedRoute) {
      updateHeader();
    }
  }, [isNonFixedRoute, updateHeader]);

  useEffect(() => {
    updateHeader();
  }, [updateHeader]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, [listenScrollEvent, handleResize]);

  // Close the offcanvas menu automatically whenever the route changes
  // (covers same-page routes navigated via Nav.Link / Link as={Link}).
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (portfolioRef.current && !portfolioRef.current.contains(e.target)) {
        setShowPortfolio(false);
      }

      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setShowProducts(false);
      }

      if (industryRef.current && !industryRef.current.contains(e.target)) {
        setShowIndustry(false);
      }

      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setShowAbout(false);
      }

      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header ${fixed} ${headerbg}`}
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
    >
      <Container className="header-container">
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <img src={newlogo} alt="IosAndWeb logo" className="responsive logo" />
        </Navbar.Brand>

           <Nav.Link as={Link} to="/contact-us" className={locationValue[1] === "contact" ? "btn mobile active" : "mobile btn"}>
         Contact Us  <FontAwesomeIcon icon={faAnglesRight} />
        </Nav.Link>
 

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <img src={menuIcon} alt="Menu" className="bars-icon" />
        </Navbar.Toggle>

        <Navbar.Offcanvas id="responsive-navbar-nav" className="justify-content-end mobile_menu_offcanvas" placement="end">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="container">
<Nav.Link
  as={Link}
    target="_blank"

  to="https://backupbuying.com/aiplayground/"
  className={"alwasACtive "}
  style={{color:"#ffffff",fontWeight:"700" , fontSize:"18px"}}
  onClick={closeMenu}
>
  Agentic AI{" "}
  <img
    src={ai}
    alt="AI"
    style={{marginLeft:"4px", width: "17px", height: "17px" }}
  />
</Nav.Link>
              {/* Products */}
          <Nav.Item 
  ref={servicesRef} 
  className="nav-item-dropdown" 
onMouseEnter={!isMobile ? () => openDropdown("services") : undefined}
  onMouseLeave={!isMobile ? () => closeDropdown(setShow) : undefined} 
>

                <div className="nav-link-wrapper">
                  <Nav.Link as={Link}
                    to="/services"
                    onClick={closeMenu}
                  >
                    Services
                  </Nav.Link>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                       setShow((prev) => !prev);
                    }}
                    className="down_arrow"
                  >
                    {/* <FontAwesomeIcon icon={faCaretDown} /> */}
                  </span>
                </div>

                {/* {show && (
                  <div className="dropdown-menu-custom">
                    <div className="header-submenu-wrap">
                      <div className="header-submenu-left">
                        <ul className="header-submenu-items">
                          {servicesMenu.map((link, i) => (
                            <li className="submenu-item" key={i}>
                              <Dropdown.Item href={link.url} target={link.blank ? "_blank" : "_self"} rel="noreferrer">
                                <div className={`${link.class} submenu-img`}>
                                  <img src={link.image} className="service-img" alt={link.title} /> 
                                </div>
                                {link.title}
                                <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                              </Dropdown.Item>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="header-submenu-right">
                        <OwlCarousel className="owl-theme header-awards-carousel" loop autoplay={true} autoplayTimeout={1500} nav={false} dots={true} items={1} center={true} >
                          <div className="item">
                            <div className="award-item-block">
                              <div className="award-item-logo">
                                <img src={goodFirmLogo} alt="App development" />
                              </div>
                              <div className="award-item-text">
                                <span>App development company of the year</span>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="award-item-block">
                                <div className="award-item-logo">
                                  <img src={appFutura} alt="App solution" />
                                </div>
                                <div className="award-item-text">
                                  <span>Most promising mobile app solution provider</span>
                                </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="award-item-block">
                              <div className="award-item-logo">
                                <img src={itFirms} alt="India's Growth Champions" />
                              </div>
                              <div className="award-item-text">
                                <span>India's Growth Champions in IT</span>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="award-item-block">
                              <div className="award-item-logo">
                                <img src={upWork} alt="India's Growth Champions" />
                              </div>
                              <div className="award-item-text">
                                <span>Software development company of the year</span>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="award-item-block">
                              <div className="award-item-logo">
                                <img src={topDevelopment} alt="Tech Company Of The Year" />
                              </div>
                              <div className="award-item-text">
                                <span>Tech Company Of The Year</span>
                              </div>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                )} */}
              </Nav.Item>

              {/* Portfolio Menu */}
<Nav.Item
  ref={portfolioRef}
  className="nav-item-dropdown"
  onMouseEnter={!isMobile ? () => openDropdown("portfolio") : undefined}
  onMouseLeave={!isMobile ? () => closeDropdown(setShowPortfolio) : undefined}
>
                <div className="nav-link-wrapper">
                  <Nav.Link
                  as={Link}
                    to="/portfolio"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Nav.Link>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowPortfolio((prev) => !prev);
                    }}
                    className="down_arrow"
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </div>

                {showPortfolio && (
                  <div className="dropdown-menu-custom portfolio-dropdown">
                    <div className="header-submenu-wrap">
                      <div className="header-submenu-left">
                        <ul className="header-submenu-items">

                          {portfolioMenu.map((link, i) => (
                            <li className="submenu-item" key={i}>
                              <Dropdown.Item
                                href={link.url}
                                target={"_blank"}
                                rel="noreferrer"
                                onClick={() => {
                                  setShowPortfolio(false);
                                  closeMenu();
                                }}
                              >
                                <div className={`${link.class} submenu-img`}>
                                  <img src={link.image} className="service-img" alt={link.title} /> 
                                </div>
                                <p>{link.title} <span>({link.tech})</span></p>
                                <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                              </Dropdown.Item>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Nav.Item>

              {/* Products */}
<Nav.Item
  ref={productsRef}
  className="nav-item-dropdown"
  onMouseEnter={!isMobile ? () => openDropdown("products") : undefined}
  onMouseLeave={!isMobile ? () => closeDropdown(setShowProducts) : undefined}
> 
                <div className="nav-link-wrapper">
                  <Nav.Link
  onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowProducts((prev) => !prev);
                    }}
                    href=""
                  >
                    Products
                  </Nav.Link>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowProducts((prev) => !prev);
                    }}
                    className="down_arrow"
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </div>

                {showProducts && (
                  <div className="dropdown-menu-custom portfolio-dropdown">
                    <div className="header-submenu-wrap">
                      <div className="header-submenu-left">
                        <ul className="header-submenu-items">

                          {portfolioStagingMenu.map((link, i) => (
                            <li className="submenu-item" key={i}>
                              <Dropdown.Item
                                href={link.url}
                                target={"_blank"}
                                rel="noreferrer"
                                onClick={() => {
                                  setShowProducts(false);
                                  closeMenu();
                                }}
                              >
                                <div className={`${link.class} submenu-img`}>
                                  <img src={link.image} className="service-img" alt={link.title} /> 
                                </div>
                                <p>{link.title} <span>({link.tech})</span></p>
                                <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                              </Dropdown.Item>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Nav.Item>

              {/* Industries */}
              {/* <Nav.Item
                ref={industryRef}
                className="nav-item-dropdown less-dropdown"
                onMouseEnter={!isMobile ? () => setShowIndustry(true) : undefined}
                onMouseLeave={!isMobile ? () => setShowIndustry(false) : undefined}
              >
                <div className="nav-link-wrapper">
                  <Nav.Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowIndustry((prev) => !prev);
                    }}
                  >
                    Industries
                  </Nav.Link>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowIndustry((prev) => !prev);
                    }}
                    className="down_arrow"
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </div>

                {showIndustry && (
                  <div className="dropdown-menu-custom portfolio-dropdown">
                    <ul className="header-submenu-items">
                      {industriesMenu.map((link, i) => (
                        <li className="submenu-item" key={i}>
                          <Dropdown.Item href={link.url}>
                            <div className={`${link.class} submenu-img`}>
                              <img src={link.image} className="service-img" alt={link.title} /> 
                            </div>
                            {link.title}
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                          </Dropdown.Item>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Nav.Item> */}

              {/* About */}
<Nav.Item
  ref={aboutRef}
  className="nav-item-dropdown less-dropdown"
  onMouseEnter={!isMobile ? () => openDropdown("company") : undefined}
  onMouseLeave={!isMobile ? () => closeDropdown(setShowAbout) : undefined}
>
                <div className="nav-link-wrapper">
                  <Nav.Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowAbout((prev) => !prev);
                    }}
                  >
                    Company
                  </Nav.Link>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowAbout((prev) => !prev);
                    }}
                    className="down_arrow"
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </div>

                {showAbout && (
                  <div className="dropdown-menu-custom portfolio-dropdown" style={{backgroundColor:"white",color:"black"}}>
                    <ul className="header-submenu-items">
                      {companyMenu.map((link, i) => (
                        <li className="submenu-item" key={i}>
                          <Dropdown.Item
                            href={link.url}
                            onClick={() => {
                              setShowAbout(false);
                              closeMenu();
                            }}
                          >
                            <div className={`${link.class} submenu-img`}>
                              <img src={link.image} className="service-img" alt={link.title} /> 
                            </div>
                            {link.title}
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                          </Dropdown.Item>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Nav.Item>

              {/* <Nav.Link as={Link} to="/blog" className={locationValue[1] === "blog" ? "active" : ""}>Blog</Nav.Link> */}
              <Nav.Link
                as={Link}
                to="/contact-us"
                className={locationValue[1] === "contact" ? "btn active" : "btn"}
                onClick={closeMenu}
              >
                              <FontAwesomeIcon icon={faPhone} style={{ color: "white", fontSize: "17px",paddingRight:"5px" }} />

                Get In Touch


              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default Header;