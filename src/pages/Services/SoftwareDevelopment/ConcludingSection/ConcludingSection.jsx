import { Col, Container, Row } from "react-bootstrap";
import ConcludingServicesLists from "../../../../components/ConcludingServicesLists/ConcludingServicesLists";

const appDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/app-development.webp`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/crm-development.webp`;
const magento = `${process.env.REACT_APP_API_URL}/assests/services/magento.webp`;
const shopify = `${process.env.REACT_APP_API_URL}/assests/services/shopify.webp`;

const servicesLists = [
    {
        icon: appDevelopment,
        title: "Web Development Services",
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
        <div className="concluding_section section-padding no-bottom-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main">Concluding Insights</h2>
                        <p className="paragraph_content">There are certain technical abilities you must possess to become a successful programmer, regardless of whether you are studying computer science or taking a course to become a software engineer or developer with <a href="/crm-development-for-healthcare-industry">CRM software development</a>. Technology is enormous, and there are a huge number of new tools, systems, and languages being released every day. Regardless of your level of expertise, as a contemporary developer you should know how to incorporate cutting-edge technologies as well as other technical aspects into your work to produce high-quality hardware or software. Our reliance on software will only increase as we gradually move towards a new era of <a href="/mobile-app-development-services">smartphone apps</a>, automation, and post-pandemic living. This is not always a bad thing because applications have the ability to significantly improve our lives.</p>

                        <ConcludingServicesLists lists={servicesLists} classname={"less-top-padding"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConcludingSection