import "./StrategicPartners.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const awsPartners = `${process.env.REACT_APP_API_URL}/assests/images/home-new/partners/aws-partner.svg`;
const cloudinaryPartner = `${process.env.REACT_APP_API_URL}/assests/images/home-new/partners/cloudinary-partner.svg`;
const googleCloud = `${process.env.REACT_APP_API_URL}/assests/images/home-new/partners/google-cloud-partner.svg`;
const mongodbPartner = `${process.env.REACT_APP_API_URL}/assests/images/home-new/partners/mongodb-partner.svg`;

const partnersLists = [
    {
        image: awsPartners,
        alt: "AWS"
    },
    {
        image: mongodbPartner,
        alt: "Mongo DB"
    },
    {
        image: googleCloud,
        alt: "Google Cloud"
    },
    {
        image: cloudinaryPartner,
        alt: "Cloudinary"
    }
]

const StrategicPartners = () => {
    return(
        <div className="strategic_partners section-padding body-background no-bottom-padding">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main">Our Strategic Partners Include</h2>
                        <div className="partners_flex_block">
                            <Link to="/contact-us" className="btn-gradient-blue">Get Expert Help <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            <div className="partners_grid_block">
                                {partnersLists.map((item,i) => (
                                    <div className="partners_grid_item" key={i}>
                                        <img src={item.image} alt={item.alt} className="partners_item_image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StrategicPartners