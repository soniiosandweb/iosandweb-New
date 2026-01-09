import { Col, Container, Row } from "react-bootstrap";
import ConcludingServicesLists from "../../../../components/ConcludingServicesLists/ConcludingServicesLists";

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
                        <h2 className="heading_main split">Strategic Conclusion: Why Your Choice Matters</h2>
                        <h2 className="FontSize25 bold">IosAndWeb Technologies doesn't just build websites—we engineer digital experiences that transform businesses.</h2>
                        
                        <h2 className="FontSize18">Choosing the right development and marketing partner is the difference between launching an app and launching a market leader. Here are the final insights to consider when finalizing your digital strategy:</h2>

                        <h2 className="FontSize25">The Power of Unified Digital Ecosystems :</h2>

                        <h2 className="FontSize18 ">Modern businesses succeed when their marketing and technology are in total alignment. By integrating high-performance digital marketing with custom mobile engineering, you create a seamless loop where your app doesn't just exist—it is actively discovered and optimized for conversions.</h2>
                     </div>

                        <ConcludingServicesLists lists={servicesLists} classname={"less-top-padding"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConcludingSection