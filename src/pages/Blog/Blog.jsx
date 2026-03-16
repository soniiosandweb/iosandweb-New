import React, { useRef } from "react";
import './blog.css';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from 'axios';
import SEO from "../../components/SEO";

import { useLocation } from "react-router-dom";

const blogImage = `${process.env.REACT_APP_API_URL}/assests/blog-banner.webp`;
const defaultImage = `${process.env.REACT_APP_API_URL}/assests/placeholder-image.webp`;
const Blogbg = `${process.env.REACT_APP_API_URL}/assests/blog/Blogbg.gif`;
const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;
const analysis = `${process.env.REACT_APP_API_URL}/assests/blog/analysis.webp`;
const casestudy = `${process.env.REACT_APP_API_URL}/assests/blog/case-study.webp`;
const community = `${process.env.REACT_APP_API_URL}/assests/blog/community.webp`;
const industry = `${process.env.REACT_APP_API_URL}/assests/blog/industry.webp`;
const manual = `${process.env.REACT_APP_API_URL}/assests/blog/manual.webp`;
const systemUpdate = `${process.env.REACT_APP_API_URL}/assests/blog/system-update.webp`;
const whyToFlowPic = `${process.env.REACT_APP_API_URL}/assests/blog/whyToFlowPic.webp`;
const reliability = `${process.env.REACT_APP_API_URL}/assests/blog/reliability.webp`;
const professionalSuccess = `${process.env.REACT_APP_API_URL}/assests/blog/professional-success.webp`;
const statistics = `${process.env.REACT_APP_API_URL}/assests/blog/statistics.webp`;
const target = `${process.env.REACT_APP_API_URL}/assests/blog/target.webp`;


function Blog(){

    const location = useLocation();
    const blogRef = useRef();

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [loading, setLoading] = useState(true);
    const n = 30;

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
        blogRef.current.scrollIntoView();
    }



    const listFindOnAreBlog = [
        {heding:"Industry Insights",
            para:"Stay updated with the latest trends, tools and innovations shaping the digital world.",
            icon:analysis
        },        {heding:"Expert Tips & Strategies",
            para:"Actionable advice on web development, Digital Marketing, UI/UX, SEO, And Business Growth.",
            icon:casestudy
        },        {heding:"How-to Guides  & Tutorials",
            para:"Strict Coding Standards and Multi-level testing.",
            icon:community
        },        {heding:"Case Studies",
            para:"Real- world examples showcasing how our strategies create measurable result for our clients.",
            icon:industry
        },        {heding:"Tech Updates",
            para:"Explore emerging technologies that are redefining how business operate online",
            icon:manual
        },        {heding:"Community Stories",
            para:"Voices From industry leaders and success stories from our vibrant community of creators.",
            icon:systemUpdate
        },

    ]
    useEffect(() => {

       //axios.get(`${process.env.REACT_APP_API_URL}/api/blog.php`)
         axios.get(`https://iosandweb.net/api/blog.php`)
        .then(res => {
            setData(res.data);
            setFilterData(
                res.data.filter((item, index) => {
                  return (index >= page * n) & (index < (page + 1) * n);
                })
            );
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(() => {
            setLoading(false);
        })
    }, [page]);

    return(
        <>
            <SEO
                title={"IosAndWeb Technologies Blog | Web Development, App Development & Digital Marketing Insights"}
                description={"Explore the IosAndWeb Technologies Blog for expert insights on web development, mobile app development, SEO, and digital marketing trends to grow your business online."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="portfolio_banner_section section-padding centerAlign ">
                            <img src={contactBg} alt="Contact Us" className="portfolio_banner_bg" />

                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                            <h1 style={{
                                    fontSize: "40px",
                                    background: "linear-gradient( to right ,#024BFE, #7535FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    WebkitTextStroke:"0.3px #c6c2c2"

                                }}
                                >
                                We Write So You Do Not Have to Google Everything
                                </h1> <br></br>
                                <h1 className="heading_main split">Building digital experiences that don’t just exist—they make a difference.</h1>
                                <div className="heading5">Welcome to our blog — your go-to destination for expert insights, industry trends, and practical knowledge in the world of technology, design, and digital marketing. Here, we share valuable content crafted to help businesses grow, adapt, and stay ahead in an ever-evolving digital landscape.</div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={Blogbg} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="whyTofolwBlogSection section-padding">
                               <Container>
                    <Row className="align-items-center">
                        <Col className="whyTofolwBlogSectionMain">
                <h1 className="heading_main split"> What You’ll Find on Our Blog</h1>
                <span className="subHeading">Valuable content crafted to help business grow, adapt, and stay ahead in an ever-evolving digital landscape</span>

                <div className="whyToflowBlogSectionListDiv less-top-padding" >
                    {
                listFindOnAreBlog.map((item, index) => (
                <div key={index} className="whyRoFlowBlogSectionLIstItem">
                    <img src={item.icon} alt="img"></img>
                    <h2>{item.heding}</h2>
                    <span>{item.para}</span>
                </div>
                ))}
                </div>
                    </Col>
                </Row>
        </Container>
            </div>

            {/* blog list section */}
            
            <div className="blog-page less-top-padding black" ref={blogRef}>
                <Container>
                    <Row className="blogs-list ">
                        {
                            loading ?
                            <>
                                <div className="blog_spinner text-center">
                                    <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                </div>
                            </>
                            : 
                            <>
                                {filterData && filterData.map((item, index) => 
                            
                                    <Col md={6} lg={4} className="blog-col" key={item.id}>
                                        <div className="blog-list-item">
                                            <a key={index} href={"/blog/"+item.url}>
                                                <img 
                                                    src={item.image ? `${process.env.REACT_APP_BLOG_API_URL}/wp-content/uploads/${item.image}` : defaultImage} 
                                                    className="blog-image" 
                                                    alt={item.imagealt ? item.imagealt : item.title} 
                                                />
                                            </a>
                                            <div className="blog-detail">
                                                <p><span className="blog-date">{item.date}</span></p>
                                                <a key={index} href={"/blog/"+item.url}>
                                                    <h4>{item.title}</h4>
                                                </a>
                                                <p className="paragraph">{item.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )}

                                <ReactPaginate
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    activeClassName={"active"}
                                    onPageChange={(event) => handlePageClick(event.selected)}
                                    pageCount={Math.ceil(data.length / n)}
                                    breakLabel="..."
                                    previousLabel={
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    }
                                    nextLabel={
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    }
                                />
                            </>
                        }
                        

                    </Row>
                </Container>
                            <div className=" section-padding ">

                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <h1 className="heading_main split">Why Follow Our Blog?</h1>
                                <div className="heading5">Discover expert insights, industry trends, and actionable strategies designed to help your business grow smarter.</div>
                             <div className="WhyFollwBlog less-top-padding">                                
                                <div className="WhyFollwBlogListDiv ">
                                    <span className="BlueBoxx">
                                        <img src={target} alt="" />

                                    </span>
                                    <div className="ContanetTowhyFollwPage ">
                                        <h4>Reliable Content</h4>
                                        <span>Stay informed with reliable,
                                        up-to-date content curated by editors.
                                        </span>
                                    </div>
                                </div>                                
                                <div className="WhyFollwBlogListDiv ">
                                    <span className="BlueBoxx">
                                        <img src={statistics} alt="" />

                                    </span>
                                    <div className="ContanetTowhyFollwPage">
                                        <h4>Professional Expertise</h4>
                                        <span>Learn Directly From industry Professionals with years of experience.
                                        </span>
                                    </div>
                                </div>                                
                                <div className="WhyFollwBlogListDiv padding ">
                                    <span className="BlueBoxx">
                                    <img src={professionalSuccess} alt="" />
                                    </span>
                                    <div className="ContanetTowhyFollwPage">
                                        <h4>Growth Insights</h4>
                                        <span>Gain strategic insights that help you grow your brand digitally.
                                        </span>
                                    </div>
                                </div>                                
                                <div className="WhyFollwBlogListDiv ">
                                    <span className="BlueBoxx">
                                        <img src={reliability} alt="" />

                                    </span>
                                    <div className="ContanetTowhyFollwPage">
                                        <h4>Proven Strategies</h4>
                                        <span>Discover Strategies that drive real measurable performance
                                        </span>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={5}>
                            <img src={whyToFlowPic} className="responsive-img" alt="Portfolio" />
                        </Col>
                    </Row>
                </Container>
            </div>

            </div>


        </>
    )
}
export default Blog