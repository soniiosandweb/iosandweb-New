import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const img1 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/technology (4) 1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/consumer-research 1.webp`;
const img3 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/brand 1.webp`;
const img4 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/social-media (6) 1.webp`;
const img5 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/digital-ad 1.webp`;
const img6 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/global 1.webp`;

const SliderContent = () => {
  const settings = {
    dots: false,
        autoplay: true,arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const services = [
    {
      id: 1,
      title: "Advanced & Emerging Solutions",
      img:img1,
      items: [
        "Influencer Marketing",
        "Marketing Automation",
        "AI-Driven Marketing Solutions",
        "Online Reputation Management (ORM)",
        "Growth Marketing & Performance Strategy",
      ],
    },
    {
      id: 2,
      title: "eCommerce Focused Services",
      img:img2,
      items: [
        "eCommerce Marketing",
        "Product Listing & Marketplace Optimization",
        "Shopping Ads Management",
        "eCommerce CRO & Sales Funnels",
      ],
    },
    {
      id: 3,
      title: "Branding & Creative Services",
      img:img3,
      items: [
        "Brand Strategy Development",
        "Graphic Design & Creative Production",
        "UI/UX Design & Optimization",
        "Landing Page Design & Development",
      ],
    }, {
      id: 4,
      title: "Social Media Sub Services",
      img:img4,
      items: [
        "Facebook Ads Management",
        "Instagram Growth Marketing",
        "LinkedIn B2B Lead Generation",
        "YouTube Video Campaigns",
        "Twitter/X Promotion Services"
      ],
    }, {
      id: 5,
      title: "Paid Advertising & Lead Generation",
      img:img5,
      items: [
        "Lead Generation Campaigns",
        "Display Advertising",
        "UI/UX Design & Optimization",
        "Retargeting & Remarketing Campaigns",
      ],
    }, {
      id: 6,
      title: "Local & Global Marketing",
      img:img6,
      items: [
        "Local SEO Services",
        "Multi-Location SEO",
        "International SEO",
      ],
    },
  ];

  return (
    <div className="slider-section">
      <div className="slider-container">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="card-wrapper">
              <div className="service-card">
                <span className="contnet">
                <div className="serviesCardHeading">
                    <img src={service.img} alt=""></img>
                <h3 className="service-title">{service.title}</h3>
                </div>
                <ul className="service-list">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                </span>

                <button className="consult-btn">
                  Book Free Consultation Now  <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderContent;