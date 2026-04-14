import React, { useState } from "react";
import "./TabSection.css"
import { Container, Row, Col } from "react-bootstrap";
const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const ANDROID = `${basePath}/TabSection/ANDROID.webp`;
const ANDROID_NDK = `${basePath}/TabSection/ANDROID_NDK.webp`;
const ANDROID_STUDIO = `${basePath}/TabSection/ANDROID_STUDIO.webp`;
const ELASTICSEARCH = `${basePath}/TabSection/ELASTICSEARCH.webp`;
const IOS_SDK = `${basePath}/TabSection/IOS_SDK.webp`;
const MENGODB = `${basePath}/TabSection/MENGODB.webp`;
const nodejs = `${basePath}/TabSection/nodejs.webp`;
const java = `${basePath}/TabSection/java.webp`;
const objC = `${basePath}/TabSection/objC.webp`;
const REALM = `${basePath}/TabSection/REALM.webp`;
const SQLITE = `${basePath}/TabSection/SQLITE.webp`;
const SWIFT = `${basePath}/TabSection/SWIFT.webp`;
const XCODE = `${basePath}/TabSection/XCODE.webp`;
const xml = `${basePath}/TabSection/xml.webp`;



const TabSection = () => {
    const [activeTab, setActiveTab] = useState("Languages");



   const tabSectionData = {
  Languages: [
    { title: "Java", icon: java },
    { title: "JavaScript", icon: nodejs },
    { title: "XML", icon: xml },
    { title: "Objective C", icon: objC },
    { title: "Swift", icon: SWIFT }
  ],
  Database: [
    { title: "SQLite", icon: SQLITE },
    { title: "Realm", icon: REALM },
    { title: "MongoDB", icon: MENGODB },
    { title: "ElasticSearch", icon: ELASTICSEARCH }
  ],
  Tools: [
    { title: "Android", icon: ANDROID },
    { title: "Android NDK", icon: ANDROID_NDK },
    { title: "iOS SDK", icon: IOS_SDK }
  ],
  IDE: [
    { title: "Android Studio", icon: ANDROID_STUDIO },
    { title: "Xcode", icon: XCODE }
  ]
};

    return (
        <div className='TabSectionSection black  no-bottom-padding'>
         <Container>
            <Row>
                <Col>
                <div className='TabSection textaliginCenter '>
                    <h1 className='heading_main split'>Developing High-Performance Web Applications with Advanced Technologies</h1>
                    <p className='FontSize18'>Our custom web application development leverages state-of-the-art technologies to deliver solutions that address today's requirements and scale for the future.</p>

                    <div className="tab-header less-top-padding">
                    {Object.keys(tabSectionData).map((tab) => (
                        <span
                        key={tab}
                        className={`tab-item ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                        >
                        {tab}
                        </span>
                    ))}
                    </div>
                   <div className="mt-4 less-top-padding">
                    {tabSectionData[activeTab].map((item, index) => (
                        <div key={index} className="tab-card">
                        <img src={item.icon} alt={item.title} />
                        <p>{item.title}</p>
                        </div>
                    ))}
                    </div>

                </div>
                </Col>
            </Row>
         </Container>
        </div>
    );
}

export default TabSection;
