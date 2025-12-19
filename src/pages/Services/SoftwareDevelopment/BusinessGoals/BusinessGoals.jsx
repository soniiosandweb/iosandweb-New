import { Col, Container, Row } from "react-bootstrap";
import "./BusinessGoals.css";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const businessPocess = `${process.env.REACT_APP_API_URL}/assests/services/software-development/business_pocess.webp`;
const scalability = `${process.env.REACT_APP_API_URL}/assests/services/software-development/scalability.webp`;
const expenses = `${process.env.REACT_APP_API_URL}/assests/services/software-development/expenses.webp`;

const goalsLists = [
    {
        icon: businessPocess,
        title: "Business Process Automation",
        features: [
            "Streamline End-to-End Business Operations",
            "Automate Manual & Repetitive Tasks",
            "Boost Operational Efficiency",
        ]
    },
    {
        icon: scalability,
        title: "Enable Business Scalability",
        features: [
            "Scale Effortlessly to Millions of Users",
            "Add Unlimited Features and Functionality",
            "Expand Seamlessly Without Limitations",
        ]
    },
    {
        icon: expenses,
        title: "Minimize Business Expenses",
        features: [
            "Remove Ongoing Monthly Tool Expenses",
            "Optimize Technology Infrastructure Spending",
            "Streamline Operational Costs",
        ]
    }
]

const BusinessGoals = () => {
    return (
        <div className="business_goals_section section-padding no-top-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main">How Our Custom Software Solutions Support Your Business Goals</h2>
                        <div className="business_goals_grid less-top-padding">
                            {goalsLists.map((item,index) => (
                                <div className="business_goals_item" key={index}>
                                    <div className="business_goals_header">
                                        <img src={item.icon} alt={item.title} className="goals_item_icon" />
                                        <p className="goals_item_title">{item.title}</p>
                                    </div>
                                    <div className="business_goals_content">
                                        {item.features.map((list,i) => (
                                            <div className="goals_features_list" key={i}>
                                                <img src={checkIcon} alt="check" className="goals_features_icon" />
                                                <p className="goals_features_title">{list}</p>
                                            </div>
                                        ))}
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

export default BusinessGoals