import React from 'react';
import "./CaseStudiesSection.css"
import { Container } from 'react-bootstrap';

// ---- Content array: edit this to change the cards ----
const aiCards = [
    { num: "01", title: "AI Agents", desc: "Autonomous workflows" },
    { num: "02", title: "AI Copilots", desc: "Human + AI collaboration" },
    { num: "03", title: "AI Automation", desc: "Less repetitive work" },
    { num: "04", title: "AI-Powered Products", desc: "Smarter digital experiences" }
];

const CaseStudiesSection = () => {
    return (
        <div className='ForAIEraSection section-padding no-top-padding'>
            <Container>
                <div className='aiEraFullwidthSection'>
                    <div className='aiEraLeft'>
                        <span className='aiEraEyebrow'>BUILT FOR THE AI ERA</span>
                        <h2 className='aiEraHeading'>
                            We don't just add AI.<br />
                            We design around it.
                        </h2>
                        <p className='aiEraPara'>
                            From autonomous agents and intelligent workflows to
                            AI-powered products, we integrate intelligence where
                            it creates measurable business value
                        </p>
                    </div>

                    <div className='aiEraRight'>
                        {aiCards.map((card, i) => (
                            <div className='aiEraCard' key={i}>
                                <span className='aiEraCardNum'>{card.num}</span>
                                <h3 className='aiEraCardTitle'>{card.title}</h3>
                                <p className='aiEraCardDesc'>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CaseStudiesSection;