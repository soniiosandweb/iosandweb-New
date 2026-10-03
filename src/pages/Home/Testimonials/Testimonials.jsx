import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import overview1 from "../newHomeImage/testimonials/overview1.png";
import overview12 from "../newHomeImage/testimonials/overview1_2.png";
import overview2 from "../newHomeImage/testimonials/overview2.png";
// import overview4 from "../newHomeImage/testimonials/overview2_2.png";
import overview3 from "../newHomeImage/testimonials/overview3.png";
import overview4 from "../newHomeImage/testimonials/overview4.png";
import overview5 from "../newHomeImage/testimonials/overview5.png";
import overview6 from "../newHomeImage/testimonials/overview6.png";
import clinetlogo from "../newHomeImage/testimonials/logo1.png";
import client from "../newHomeImage/testimonials/client1.png";
import clinetlogo2 from "../newHomeImage/testimonials/logo2.png";
import client2 from "../newHomeImage/testimonials/client2.png";
import client4 from "../newHomeImage/testimonials/client4.png";
import client5 from "../newHomeImage/testimonials/client2.png";
import client6 from "../newHomeImage/testimonials/client6.png";
import clinetlogo3 from "../newHomeImage/testimonials/logo3.png";
import clinetlogo4 from "../newHomeImage/testimonials/logo4.png";
import clinetlogo5 from "../newHomeImage/testimonials/logo5.png";
import clinetlogo6 from "../newHomeImage/testimonials/logo6.png";
import client3 from "../newHomeImage/testimonials/client3.png";
import step from "../newHomeImage/testimonials/step.png";
import arrow from "../newHomeImage/testimonials/arrow.png";
import overview22 from "../newHomeImage/testimonials/overview2_2.png";
import overview32 from "../newHomeImage/testimonials/overview3_2.png";
import overview42 from "../newHomeImage/testimonials/overview4_2.png";
import overview52 from "../newHomeImage/testimonials/overview5_2.png";
import overview62 from "../newHomeImage/testimonials/overview6_2.png";



const testimonialData = [
  {
    id: "my-germany",
    name: "Mattias Schmelzer",
    company: "CEO",
    rating: "5/5",

    review: `We had a great experience working with IosAndWeb. The team understood our requirements, communicated clearly throughout the project, and was always open to our feedback. They delivered a professional website and were supportive whenever we needed help. Overall, we’re happy with the work and would recommend IosAndWeb.`,

    companyLogo: clinetlogo,
    clientImage: client,

    projectOverview: {
      title: "Project Overview",
      projectName: "My Germany",
      description: `MyGermany is an international package forwarding and logistics service that helps customers outside Germany purchase products from German and European online stores and have them delivered internationally.`,
    },

    overviewImages: [
      overview1,
      overview12,
    ],

    stepImage: step,
  },

  
  {
    id: "armra",
    name: "Sarah Rahal",
    company: "CEO",
    rating: "5/5",

    review: `IosAndWeb was great to work with. The team was professional, responsive, and understood our requirements well. We appreciated their support and communication throughout the project and are happy with the overall experience.`,

    companyLogo: clinetlogo4,
    clientImage: client4,

    projectOverview: {
      title: "Project Overview",
      projectName: "ARMRA",
      description: `ARMRA is a health and wellness e-commerce brand specializing in bovine colostrum supplements that support gut health, immunity, skin, energy, and overall wellness.`,
    },

    overviewImages: [
      overview4,
      overview42,
    ],

    stepImage: step,
  }, {
    id: "greenleaf",
    name: "Amyn Murji",
    company: "CEO, GreenLeaf Solutions",
    rating: "5/5",

    review: `Working with IosAndWeb has been a great experience. The team understood our requirements, communicated clearly, and was always responsive whenever we needed support. They were easy to work with and handled our feedback professionally. We’re very happy with the overall experience and would definitely recommend IOSAndWeb.`,

    companyLogo: clinetlogo2,
    clientImage: client2,

    projectOverview: {
      title: "Project Overview",
      projectName: "Tenant Pay",
      description: `TenantPay is a Canadian rent-payment and rewards platform that helps tenants pay rent online, earn rewards, and build credit, while simplifying rent collection for landlords and property managers.`,
    },

    overviewImages: [
      overview5,
      overview52,
    ],

    stepImage: step,
  },

  {
    id: "kiddospace",
    name: "Einzelhandel",
    company: "CEO",
    rating: "5/5",

    review: `Really happy with our experience with IosAndWeb. The team was friendly, professional, and easy to work with. They listened to our requirements and were helpful whenever we needed support. Would definitely recommend them.`,

    companyLogo: clinetlogo3,
    clientImage: client3,

    projectOverview: {
      title: "Project Overview",
      projectName: "The KiddoSpace",
      description: `The KiddoSpace is an online store offering a range of products designed for children, with a focus on learning, creativity, and everyday needs.`,
    },

    overviewImages: [
      overview3,
      overview32,
    ],

    stepImage: step,
  },

  {
     id: "picard",
    name: "Martin Picard",
    company: "CEO",
    rating: "5/5",

    review: `We had a great experience working with IosAndWeb on our PICARD Fashion website. The team was professional, responsive, and understood our requirements well. They delivered a clean, modern, and user-friendly e-commerce website that represents our brand beautifully.`,

    companyLogo: clinetlogo6,
    clientImage: client6,

    projectOverview: {
      title: "Project Overview",
      projectName: "Picard",
      description: `PICARD Fashion is a German brand offering premium handbags, leather bags, backpacks, wallets, and accessories, combining quality craftsmanship with modern design.`,
    },

    overviewImages: [
      overview6,
      overview62,
    ],

    stepImage: step,
  }
];


const Testimonials = () => {
  const testimonialRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  
  //const [currentSlide, setCurrentSlide] = useState(0);
const [expanded, setExpanded] = useState(false);

  const isMobile = windowWidth < 992;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const testimonialSetting = {
  dots: false,
  arrows: false,

  // IMPORTANT
  infinite: !isMobile,

  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: !isMobile,
  centerPadding: isMobile ? "0px" : "209px",
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  speed: 600,
};

  const nextSlide = () => {
    testimonialRef.current?.slickNext();
  };

  const previousSlide = () => {
    testimonialRef.current?.slickPrev();
  };

  return (
    <div className="testimonials_section section-padding  no-top-padding">

      <Container>
        <Row>
          <Col>
            <div className="testimonials_section_block">

              <div className="testimonials_contents">
                <div className="about_section_cols">

                  <div className="sectionHeading">
                    TESTIMONIALS
                  </div>

                  <h2 className="heading_main">
                    Trusted by Visionaries. Built for What’s Next.
                  </h2>
                               <p className="paramainHeading">From AI automation to scalable digital platforms, 
businesses trust us to turn complex technology into measurable outcomes.</p>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>


 
      <div className="testimonials_slider_wrapper">
        <Container  className="custom-container">

        

        <Slider
          className="testimonials_slider_carousel"
          {...testimonialSetting}
          ref={testimonialRef}
        >

          {testimonialData.map((testimonial) => (

            <div
              className="testimonial_slide_wrapper"
              key={testimonial.id}
            >

              <div className="testmonialsSlide">

                {/* TOP SECTION */}
                <div className="uppersectionTestimonials">

                  <div className="photoSection">

                    <span className="clientImage">
                      <img
                        src={testimonial.clientImage}
                        alt={testimonial.name}
                      />
                    </span>


                    <span className="shortIntroSection">

                      <span className="nameAndCompany">

                        <h3 className="clientName">
                          {testimonial.name}
                        </h3>

                        <h4 className="CompanyName">
                          {testimonial.company}
                        </h4>

                      </span>


                      <span className="CompanyLogo">
                        <img
                          src={testimonial.companyLogo}
                          alt={testimonial.company}
                        />
                      </span>


                      <span className="ratingStar">

                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            icon={faStar}
                          />
                        ))}

                        <span className="ratingText">
                          {testimonial.rating}
                        </span>

                      </span>

                    </span>

                  </div>


                  <div className="introSectionCLient">
                    {testimonial.review}
                  </div>

                </div>


                {/* BOTTOM SECTION */}
                {/* {(expandedIndex === index || !isMobile) && ( */}
                {(expanded || !isMobile) && (
  <div className="blewtestomparlSection">
               

                  <div className="rightImageSection">

                  <div className="OverImageSection">


  <div className="overviewImageOne">
    <img
      src={testimonial.overviewImages[0]}
      alt="Project overview1"
    />
  </div>

  <div className="overviewImageTwo">
    <img
      src={testimonial.overviewImages[1]}
      alt="Project overview2"
    />
  </div>

</div>

                    {/* <div className="stepimage">

                      <img
                        src={testimonial.stepImage}
                        alt="Project steps"
                      />

                    </div> */}

                  </div>


                  <div className="projectoverviewText">

                    <h3 className="overwieHeading">
                      {testimonial.projectOverview.title}
                    </h3>

                    <p className="subheadingovervi">
                      {testimonial.projectOverview.projectName}
                    </p>

                    <p className="dataoverview">
                      {testimonial.projectOverview.description}
                    </p>

                  </div>

                </div>)}
{isMobile && (
  <button
    className="testimonial_read_more"
    onClick={() => setExpanded((prev) => !prev)}
  >
    {expanded ? "View Less" : "View More"}
  </button>
)}
              </div>

            </div>

          ))}

        </Slider>

</Container>

        {/* ARROWS BELOW CARD */}
        <div className="testimonial_slider_arrows slider_prev_next">
           <button className="button"            onClick={previousSlide}
>
                                               <FontAwesomeIcon icon={faChevronLeft} />
                                           </button>
                                           <button className="button"             onClick={nextSlide}
>
                                               <FontAwesomeIcon icon={faChevronRight} />
                                           </button>
       

        </div>

      </div>

    </div>
  );
};


export default Testimonials;
