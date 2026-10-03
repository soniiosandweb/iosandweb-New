import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBuildingCircleArrowRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import './samllbanner.css'

function SmallBanner() {
  return (
    <div className="services_banner_bgSamml section-padding " >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="services_banner_contents">
              <h1 className="heading_main split">From AI Assistants 
To AI Agents</h1>
              <p className="paragraph_content smallPara">
               AI is moving beyond answering questions. Agents can reason, use tools, access information, execute workflows, and work across systems.
              </p><p className="paragraph_content smallPara">
               We build AI agents that turn intelligence into action.</p>
              <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Build
 Your Agent <FontAwesomeIcon icon={faCircleArrowRight} /></Link>
            </div>
            {/* <div className="services_banner_right"> */}
            {/* <img src={bg} alt="Your Growth Partner, Not Just Another Agency." className="sservices_banner_layer" /> */}

            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SmallBanner