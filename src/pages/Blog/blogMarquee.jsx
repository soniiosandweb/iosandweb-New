import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "./blogMarquee.css";
import { Col, Container, Row } from "react-bootstrap";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import topangle from "./top-right.png"
const defaultImage = `${process.env.REACT_APP_API_URL}/assests/placeholder-image.webp`;
 
function BlogMarquee() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        axios
            .get(`https://iosandweb.net/api/blog.php`)
            .then((res) => {
                setBlogs(res.data.slice(0, 5));
            })
            .catch(() => {
                console.log("Error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
 
    if (loading || blogs.length === 0) return null;
 
    // Duplicate blogs to create seamless marquee
    const marqueeBlogs = [...blogs, ...blogs];
 
    return (
        <div className="blog-marquee-section section-padding no-top-padding"> 
            <Container>
                <Row>
                    <Col>
                        <div className="spanInCenter">
                            <h2 className="heading_main split">
                               Explore What’s Next in Technology
                            </h2>
                        </div>
                    </Col>
                </Row>
                  <div className="blog-marquee-wrapper">
                <div className="blog-marquee-track">
                    {marqueeBlogs.map((item, index) => (
                        <div
                            className="blog-col"
                            key={`${item.id}-${index}`}
                        >
                            <div className="blog-list-item">
                                <a href={"/blog/" + item.url}>
                                    <img
                                        src={
                                            item.image
                                                ? `${process.env.REACT_APP_BLOG_API_URL}/wp-content/uploads/${item.image}`
                                                : defaultImage
                                        }
                                        className="blog-image"
                                        alt={
                                            item.imagealt
                                                ? item.imagealt
                                                : item.title
                                        }
                                    />
                                </a>
 
                                <div className="blog-detail">
                                    <p>
                                        <span className="blog-date">
                                            {item.date}
                                        </span>
                                    </p>
 
                                    <a href={"/blog/" + item.url}>
                                        <h4>{item.title}</h4>
                                    </a>
 
                                    <p className="paragraph">
                                        {item.description}
                                    </p>

                                    <a href={"/blog/" + item.url} className="read-more">
                                    Read More
                                   <img src={topangle} alt="readmore" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Container>
 
         
        </div>
    );
}
 
export default BlogMarquee;