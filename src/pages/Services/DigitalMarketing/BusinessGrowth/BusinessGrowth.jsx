import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./BusinessGrowth.css"




const BusinessGrowth = () => {
    return (
        <div className="BusinessGrowthSection padding black" >
            <Container>
                <Row>
                    <Col>
                       <div className='BussinessGrwothDiv'>
                        <div className='HeadingDev'>
                            <h1 className='FontSize25'>Focused on Your Business & Your Audience</h1>
                            <p className='FontSize18'>Driving Results by Understanding Your Business and Its Audience</p>
                        </div>
                        <div className='PinotDiv'>
                            <div className='topPotint1'>
                                <span className='NoOFDiv'>1</span>
                                <span className='textOfDiv'>Market Research</span>
                            </div>
                            <div className='middlePotint2'>
                                <span className='NoOFDiv'>2</span>
                                <span className='textOfDiv'>Out of the Box Strategy</span></div>
                            <div className='endPiont3'>
                                <span className='NoOFDiv'>3</span>
                                <span className='textOfDiv'>Fast Execution</span></div>
                            <div className='Toppiont4'>
                                <span className='NoOFDiv'>4</span>
                                <span className='textOfDiv'>Analysis & Data-Driven insights</span></div>
                            <div className='MiddlePiont5'>
                                <span className='NoOFDiv'>5</span>
                                <span className='textOfDiv'>Optimize & improve Result</span></div>

                            <div className='imgDivScetion'>
                                <div className='Section10X'>
                                    <h1 className="ImageText10">10X</h1>
                                </div>
                                <div className='revenuSection'>
                                    <h1 className="ImageText10">Revenue</h1>
                                </div>
                            </div>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default BusinessGrowth;
