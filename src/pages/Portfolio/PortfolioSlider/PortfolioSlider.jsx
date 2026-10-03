import React from 'react';
import "./PortfolioSlider.css"
import { Container } from 'react-bootstrap';
import img from "./img.png"
const PortfolioSlider = () => {
    return (
        <div className='ForComplexWorkFlow section-padding no-top-padding'>
            <Container>
                <div className='fullwidthSection'>
                    <div className="leftSide">
                  <h2 className='MainHeading '>From complex workflows 
to intelligent experiences.
</h2> 
         <div className='forcomplexSectionGrid'>
<div className='containerForCOmplexGrid'>
    <h3 className='forcomplexGridHeading'>+42%</h3>
    <span className='forcomlexGridPara'>Workflow efficiency</span>
</div>
<div className='containerForCOmplexGrid mainBorder'>
    <h3 className='forcomplexGridHeading'>3×</h3>
    <span className='forcomlexGridPara'>Faster processing</span>
</div>
<div className='containerForCOmplexGrid'>
    <h3 className='forcomplexGridHeading'>24/7</h3>
    <span className='forcomlexGridPara'>Intelligent assistance</span>
</div>
         </div></div>

         <div className='rigthside'>
 <img src={img} alt="" srcset="" />
         </div>
                </div>
            </Container>
        </div>
    );
}

export default PortfolioSlider;
