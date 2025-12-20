import "./ReasonChooseSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const designIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/design-development.webp`;
const moreSecureIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/more-secure.webp`;
const participateIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/participate.webp`;
const lowerCostsIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/lower-costs.webp`;
const stepaboveIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/step-above.webp`;
const routinetasksIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/routine-tasks.webp`;
const integrationIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/integration.webp`;
const instantsupportIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/instant-support.webp`;
const humanerrorIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/human-error.webp`;

const reasonsLists = [
    {
        icon: designIcon,
        title: "Accurate Design and Development to Meet Your Unique Business Needs",
        content: "Custom software gives your business the exact features it needs—no compromises. Unlike generic solutions, it's built specifically for your organization, making it easier to use, scale, and implement across your entire company. It offers greater flexibility, better performance, and supports long-term growth.",
    },
    {
        icon: moreSecureIcon,
        title: "Custom software that is Clearly More Secure",
        content: "Custom software offers unmatched security because it's built exclusively for your business—not shared with other companies. It reduces risks of hacking, protects sensitive data, and allows you to add extra security layers based on your needs. No commercial, off-the-shelf application can match the level of protection a tailored software solution provides.",
    },
    {
        icon: participateIcon,
        title: "You Can Participate In The Development Process Yourself",
        content: "Since you undoubtedly possess the most in-depth knowledge of your field, the majority of software development companies value your suggestions, ideas, and feedback for crucial features as well as your involvement in the software development process.",
    },
    {
        icon: lowerCostsIcon,
        title: "Lower Operating Costs",
        content: "Off-the-shelf software often requires extra hardware, increasing costs and reducing ROI. Custom software eliminates these expenses, streamlines workflows, and delivers a stronger return on investment through better efficiency and performance.",
    },
    {
        icon: stepaboveIcon,
        title: "A step above the opposition",
        content: "Off-the-shelf software offers basic productivity but gives you the same tools as your competitors, limiting differentiation. Custom software streamlines your processes, improves service quality, and helps your business stand out with a stronger competitive edge.",
    },
    {
        icon: routinetasksIcon,
        title: "Computerization of Routine Tasks",
        content: "Every organization has repetitive tasks that drain time and energy. Custom software automates these processes, freeing your team to focus on growth—whether it's generating leads, training employees, or expanding services. With the right solution, your everyday operations become faster, easier, and far more efficient.",
    },
    {
        icon: humanerrorIcon,
        title: "Lower rates of human error",
        content: "The chance of making a human error increases significantly when running a business manually. A specialised software solution can considerably reduce these fluctuations, protecting your business from negative repercussions with Custom software development services.",
    },
    {
        icon: integrationIcon,
        title: "Integration With Third-Party Software Instant Technical Support",
        content: "Pre-made software doesn't always work smoothly with your existing tools. Custom software, however, is built to integrate perfectly with your current systems, hardware, and third-party services—eliminating compatibility issues and ensuring a seamless workflow.",
    },
    {
        icon: instantsupportIcon,
        title: "Instant Technical Support",
        content: "Instant access to the technical support department of your provider or software development firm is a crucial benefit of using a bespoke solution for your company. You may easily correct all of your flaws as a result of this.",
    }
]

const ReasonChooseSection = () => {
    return(
        <div className="reason_choose_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center">Reasons to Choose Top Custom Software Developer</h2>
                        <p className="paragraph_content text-center">Custom software development aims to produce software solutions that are customized to a company's particular business needs. Many organisations often reject the idea of developing, implementing, and maintaining a custom software solution for themselves due to the expenses involved with software developer.</p> 
                        <p className="paragraph_content text-center">Rest assured, though, that these are merely initial investments that can be swiftly recovered by addressing certain problems that the market's typical, off-the-shelf solutions are unable to solve. Because there are so many commercially accessible software solutions, many organisations may not require a software solution that is specifically tailored for them with software development services. But it has been shown that when a piece of software is made especially to meet a particular set of business demands, performance and efficiency rise, providing the business a competitive edge in the market.The top ten reasons for developing a unique software solution are listed below.</p>

                        <div className="reasons_lists_grid less-top-padding">
                            {reasonsLists.map((item,i) => (
                                <div className="reasons_lists_item" key={i}>
                                    <div className="reasons_item_top">
                                        <img src={item.icon} alt={item.title} className="reasons_item_icon" />
                                        <h3 className="reasons_title_text">{item.title}</h3>
                                    </div>
                                    <div className="reasons_item_bottom">
                                        <p className="reasons_item_text">{item.content}</p>
                                        <img src={item.icon} alt={item.title} className="reasons_icon" />
                                        <span className="reasons_arrow_icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReasonChooseSection