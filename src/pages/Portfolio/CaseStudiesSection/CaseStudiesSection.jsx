import { useEffect, useState } from "react";
import "./CaseStudiesSection.css";
import { Col, Container, Row } from "react-bootstrap"
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

const circleGroup = `${process.env.REACT_APP_API_URL}/assests/circle-group.webp`;
const squareGroup = `${process.env.REACT_APP_API_URL}/assests/square-group.webp`;

const CaseStudiesSection = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 8;

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/portfolio.json`)
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
    }, [page]);

    const pageChangeHandle =(event) =>{
        setPage(event.selected)
        window.scrollTo({
            top: document.querySelector("#portfolio_section").offsetTop,
            behavior: "smooth",
        });
    }

    return(
        <div className="portfolio_case_studies section-padding black-background" id="portfolio_section">
            <div className="portfolio_case_studies_bg">
                <Container>
                    <img src={circleGroup} alt="Circle" className="portfolio_circle" />
                    <img src={squareGroup} alt="Square" className="portfolio_square square_top" />
                    <img src={squareGroup} alt="Square" className="portfolio_square" />
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <p className="paragraph_content">Each case study below highlights our commitment to delivering solutions that are not only visually appealing but also optimized for speed, SEO, and user engagement. These projects showcase how we turn ideas into impactful digital products.</p>
                        <h2 className="heading_main less-top-padding">Case Studies</h2>
                        <p className="paragraph_content">Explore some of our recent projects across various platforms and industries.</p>

                        <div className="portfolio_casestudies_block">
                            <div className="portfolio_casestudies_grid less-top-padding">
                                {filterData && filterData.length >= 1 && filterData.map((item, i) => (
                                    <div className="portfolio_casestudies_item" key={i}>
                                        <Link href={item.url} rel="noreferrer" target="_blank" className="portfolio_casestudies_link">
                                            <img src={item.image} alt={item.title} className="portfolio_casestudies_image" />
                                        </Link>
                                        <div className="portfolio_casestudies_content">
                                            <h3 className="portfolio_casestudies_title">{item.title}</h3>
                                            <p className="portfolio_casestudies_text">{item.description}</p>

                                            <div className="portfolio_casestudies_features">
                                                <div className="portfolio_casestudies_features_item">
                                                    <p className="portfolio_features_title">Platform:</p>
                                                    <p className="portfolio_features_content">{item.platform}</p>
                                                </div>
                                                <div className="portfolio_casestudies_features_item">
                                                    <p className="portfolio_features_title">Highlights:</p>
                                                    <p className="portfolio_features_content">{item.highlights}</p>
                                                </div>
                                            </div>

                                            <Link to="/contact-us" target="_blank" className="btn-gradient-blue">View Case study <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                            
                            <ReactPaginate
                                containerClassName={"portfolio_pagination"}
                                pageClassName={"page-item"}
                                activeClassName={"active"}
                                onPageChange={pageChangeHandle}
                                pageCount={Math.ceil(data.length / n)}
                                breakLabel="..."
                                previousLabel={
                                    <span><FontAwesomeIcon icon={faChevronLeft} /> Pre</span>
                                }
                                nextLabel={
                                    <span>Next <FontAwesomeIcon icon={faChevronRight} /></span>
                                }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CaseStudiesSection