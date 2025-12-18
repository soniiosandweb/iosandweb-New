import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";
import SubHeading from "../../../components/SubHeading/SubHeading";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const testimonialBG = `${process.env.REACT_APP_API_URL}/assests/images/home/testimonials/testimonials_bg.webp`;
const video1 = `${process.env.REACT_APP_API_URL}/assests/images/home/testimonials/Video_Generation_From_User_Feedback.mp4`;
const video2 = `${process.env.REACT_APP_API_URL}/assests/images/home/testimonials/Positive_SEO_Service_Review_and_Video.mp4`;
const testimonial1 = `${process.env.REACT_APP_API_URL}/assests/images/home/testimonials/testimonial1.webp`;
const testimonial2 = `${process.env.REACT_APP_API_URL}/assests/images/home/testimonials/testimonial2.webp`;

const testimonials = [
    {
        name: "Geema",
        content: "“Thanks to IosAndWeb team for Swiss Swaps. You guys managed a lot of functions that I thought weren't quite possible. The best thing I liked is that you guys never stopped until I was satisfied with the product.”",
        video: video1,
        image: testimonial1,
    },
    {
        name: "Marty James",
        content: "“Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the Iosandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend Iosandweb team.”",
        video: video2,
        image: testimonial2,
    },
    {
        name: "Lorem Ipsum",
        content: "“Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the Iosandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend Iosandweb team.”",
        video: video1,
        image: testimonial1,
    }
]

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

const Testimonials = () => {

    const testimonialRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const videoRefs = useRef([]);
    
    const isMobile = windowWidth < 992;
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const handleSlideChange = () => {
        const slides = document.querySelectorAll(
            ".testimonials_slider_carousel .slick-slide"
        );

        slides.forEach((slide) => {
            const video = slide.querySelector("video");
            const thumb = slide.querySelector(".video-thumbnail");

            if (!video) return;

            if (slide.classList.contains("slick-current")) {
                video.classList.add("show");
                video.muted = true;
                video.currentTime = 0;
                thumb && (thumb.style.display = "none");

                setTimeout(() => {
                    video.play().catch(() => {});
                }, 150);
                
            } else {
                video.pause();
                video.currentTime = 0;
                thumb && (thumb.style.display = "block");
                video.classList.remove("show");
            }
        });
    };

    const testimonialSetting = {
        dots: false,
        arrows: isMobile ? false : true,
        infinite: true,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        afterChange: handleSlideChange,
    };

    useEffect(() => {
        handleSlideChange();
    }, []);

    const handlePlayClick = (index, event) => {
        const clickedSlide = event.currentTarget.closest(".item");
        if (!clickedSlide) return;

        const allSlides = document.querySelectorAll(".testimonials_slider_carousel .item");

        allSlides.forEach((slide) => {
            const video = slide.querySelector("video");
            const thumb = slide.querySelector(".video-thumbnail");
            if (!video) return;

            if (slide === clickedSlide) {
                if (thumb) thumb.style.display = "none";

                video.classList.add("show");
                // Reset and play
                video.pause();
                video.currentTime = 0;

                // Muted first to allow autoplay
                video.muted = true;
                video.play()
                .then(() => {
                    video.muted = false; // unmute after click
                })
                .catch(() => {
                    video.muted = true;
                });

            } else {
                // Stop other videos
                video.pause();
                video.currentTime = 0;
                if (thumb) thumb.style.display = "block";
                video.classList.remove("show");
            }
        });
    };

    return(
        <div className="testimonials_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonials_section_block">
                            <img src={testimonialBG} alt="Testimonials" className="testimonials_bg" />
                            <div className="testimonials_contents">
                                <div className="testimonials_headings">
                                    <SubHeading text={"Testimonials"} />
                                    <h2 className="heading_main">Don't Just Take Our Word for It—See What Our Clients Say</h2>
                                </div>
                            </div>
                            <Slider 
                                className="testimonials_slider_carousel" 
                                {...testimonialSetting}
                                ref={testimonialRef}
                            >
                                {testimonials.map((item,i) => (
                                    <div className="item" key={i}>
                                        <div className="testimonials_flex">
                                            <div className="testimonials_video">
                                                <div className="video-thumbnail">
                                                    <img src={item.image} alt={item.name} className="testimonials_image" />
                                                    <span
                                                        className="play-btn"
                                                        onClick={(e) => handlePlayClick(i, e)}
                                                    >
                                                        <FontAwesomeIcon icon={faCirclePlay} />
                                                    </span>
                                                </div>

                                                <video
                                                    className="testimonial_video_block"
                                                    loop
                                                    playsInline
                                                    preload="auto"
                                                    muted
                                                    ref={(el) => (videoRefs.current[i] = el)}
                                                >
                                                    <source src={item.video} type="video/mp4" />
                                                </video>

                                                <div className="testimonials_name_div">
                                                    <FontAwesomeIcon icon={faCirclePlay} />
                                                    <span className="testimonials_name">{item.name}</span>
                                                </div>
                                            </div>
                                            <div className="testimonials_content">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials