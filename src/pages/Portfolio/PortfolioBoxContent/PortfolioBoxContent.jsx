import React from 'react';
import "./PortfolioBoxContent.css"
import { Container } from 'react-bootstrap';

// ---- Content array: edit this to change rows/columns ----
const techRows = [
    {
        num: "01",
        title: "AI & Agentic",
        items: ["AI Agents", "Generative AI", "AI Automation", "AI Copilots"]
    },
    {
        num: "02",
        title: "Product Engineering",
        items: ["Web Apps", "Mobile Apps", "SaaS Platforms", "Custom Software"]
    },
    {
        num: "03",
        title: "Cloud & Data",
        items: ["Cloud", "DevOps", "Data Engineering", "Analytics"]
    },
    {
        num: "04",
        title: "Emerging Tech",
        items: ["Blockchain", "Web3", "Digital Assets", "Smart Contracts"]
    }
];

const PortfolioBoxContent = () => {
    return (
        <div className='ForTechnologySection section-padding no-top-padding'>
            <Container>
                <div className='technologyHeadingWrap'>
                    <h2 className='technologyMainHeading'>
                        Technology<br />
                        <span className='technologyHeadingBlue'>behind the experience.</span>
                    </h2>
                </div>

                <div className='technologyTable'>
                    {techRows.map((row, i) => (
                        <div className='technologyRow' key={i}>
                            <div className='technologyRowLeft'>
                                <span className='technologyNum'>{row.num}</span>
                                <h3 className='technologyTitle'>{row.title}</h3>
                            </div>
                            <div className='technologyRowRight'>
                                {row.items.map((item, j) => (
                                    <div className='technologyItemCol' key={j}>
                                        <span className='technologyItem'>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default PortfolioBoxContent;