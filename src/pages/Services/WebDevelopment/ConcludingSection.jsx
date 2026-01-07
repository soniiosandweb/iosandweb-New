import { Col, Container, Row } from "react-bootstrap";
import ConcludingServicesLists from "../../../components/ConcludingServicesLists/ConcludingServicesLists";

const appDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/app-development.webp`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/crm-development.webp`;
const magento = `${process.env.REACT_APP_API_URL}/assests/services/magento.webp`;
const shopify = `${process.env.REACT_APP_API_URL}/assests/services/shopify.webp`;

const servicesLists = [
    {
        icon: appDevelopment,
        title: "Software Development Services",
        link: "/web-development-services",
    },
    {
        icon: crmDevelopment,
        title: "CRM Development For Healthcare Industry",
        link: "/crm-development-for-healthcare-industry",
    },
    {
        icon: magento,
        title: "Magento Development Services",
        link: "/magento-development-services",
    },
    {
        icon: shopify,
        title: "Shopify Development",
        link: "/shopify-development-services",
    }
]

const ConcludingSection = () => {
    return(
        <div className="concluding_section section-padding  no-bottom-padding body-background">
            <Container>
                <Row>
                    <Col>
                    <div className="concluding_sectionCssDiv">
                        <h2 className="heading_main split">Your Digital Success Starts Here</h2>
                        <h2 className="FontSize25 bold">IosAndWeb Technologies doesn't just build websites—we engineer digital experiences that transform businesses.</h2>
                        
                        <h2 className="FontSize18">Here's what sets us apart: we're obsessed with results. Innovation isn't a buzzword for us—it's how we approach every project. Usability isn't optional—it's fundamental. Performance isn't negotiable—it's guaranteed.</h2>

                        <h2 className="FontSize18">Our web development services combine strategic thinking with technical mastery. We craft solutions that don't just look impressive—they work flawlessly, engage deeply, and deliver measurable business outcome</h2>

                        <h2 className="FontSize25 bold">From concept to launch and beyond, we're your partner in digital excellence.</h2>

                        <h2 className="FontSize18 ">Whether you need a sleek corporate website, a robust web application, a high-converting e-commerce platform, or a complete digital transformation—we deliver solutions that exceed expectations and drive real growth.</h2>

                        <h2 className="FontSize25 bold">Ready to explore what's possible?</h2>
 </div>

                        <ConcludingServicesLists lists={servicesLists} classname={"less-top-padding"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConcludingSection