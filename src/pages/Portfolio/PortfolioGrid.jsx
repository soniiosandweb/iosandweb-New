import React from "react";
import "./PortfolioGrid.css";
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"
import img7 from "./img7.png"
import img8 from "./img8.png"
import img9 from "./img9.png"
import { Container } from "react-bootstrap";

const cards = [
  {
    type: "full",
    color: "#E0E8FE",
    image: img1,
     title: "Buy Token AI",
    desc: "A modern WordPress-based technology website for an AI and token ecosystem, showcasing autonomous AI agents, $BUY token utility, staking plans, business models and a multi-phase product roadmap through an interactive and responsive interface.",
    platform: "Blockchain | Elementor | PHP | MySQL | Cloudflare | UIkit | JavaScript | Anime.js | Particles.js | LiveChat",
    features: "AI Workforce Platform • $BUY Token Ecosystem • AI Agent Showcase • Staking Plans • Token Utility • Business Model • Interactive Roadmap • Web3/Blockchain Content • Animated UI • Live Chat • Performance Optimization"
  },
  {
    type: "half",
    color: "#EADFFF",
    image: img2,
    title: "Buying AI Agent",
    desc: "A modern AI workforce platform built with React and Next.js, showcasing autonomous AI agents for sales, support, sourcing, marketing, procurement and analytics, with human approval workflows, authentication and a scalable SaaS-oriented architecture.",
    platform: "Agentic | React | Next.js | JavaScript | Tailwind CSS | Nginx | Ubuntu | Google Sign-In",
    features: "AI Agent Platform • Multi-Agent Architecture • SaaS Pricing • Human-in-the-Loop Workflow • Google Authentication • Responsive UI • Performance Optimization • Product Roadmap"
  },
  {
    type: "half",
    color: "#FAF6DA",
    image: img3,
    title: "MystiqueAI",
    desc: "A professional B2B technology website developed for MYSTiQUE AI, showcasing its Agentic AI solutions across Insurance, Legal, and Logistics with a scalable content structure, responsive experience, SEO optimization, and lead-generation focused pages.",
    platform: "AI Gen | WordPress | Elementor | PHP | MySQL | Yoast SEO | Cloudflare",
    features: "Corporate B2B website • Industry-focused solution pages • Responsive design • SEO optimization • Lead generation • Resource/knowledge base • Performance & CDN optimization"
  },
  {
    type: "full",
    color: "#E0E8FE",
    image: img4,
    
    title: "ODDS Logistic",
    desc: "A conversion-focused WordPress website for an on-demand delivery solution, showcasing driver management, POS integrations, real-time tracking and 24/7 delivery services through a responsive and performance-optimized interface.",
    platform: "React | Elementor | PHP | MySQL | Apache | UIkit | jQuery | Swiper | LiveChat  | Google API",
    features: "On-Demand Delivery Platform • POS Integrations • Driver Management • Real-Time Tracking • 24/7 Delivery Support • Lead Generation • Live Chat • Responsive UI • Performance Optimization"
    
   },
  {
    type: "half",
    color: "#EADFFF",
    image: img5,
    title: "Hair Restoration",
    desc: "A WordPress-based hair restoration directory platform designed to help users discover and connect with hair restoration specialists, featuring advanced search, featured practitioner listings, detailed profiles, Google Maps integration, direct contact options, practice management, ecommerce listings, and hair restoration news and resources.",
    platform: "CMS| Elementor | PHP | MySQL | Bootstrap | Google Maps | Stripe | LiveChat | jQuery | Select2 | Swiper | PhotoSwipe | Cloudflare",
    features: "Hair Restoration Specialist Directory • Advanced Specialist Search • Featured Specialist Listings • Detailed Practitioner Profiles • Google Maps Integration • Location-Based Discovery • Email & Phone Contact • Practitioner Registration & Login • Practice Management • Ecommerce Listings • Hair Restoration Products • Hair Loss News & Resources • Image Galleries • Live Chat • Responsive UI • Performance Optimization"
  },
  {
    type: "half",
    color: "#E0E8FE",
    image: img6,
    title: "Ship From Germany",
    desc: "A WordPress-based massage therapist directory platform designed to connect users with massage professionals through advanced search, therapist profiles, location-based discovery, featured listings and direct contact functionality.",
    platform: "CMS | Elementor | PHP | MySQL | Apache | Google Maps | Stripe | JavaScript | jQuery | Swiper",
    features: "Therapist Directory • Advanced Search • Therapist Profiles • Google Maps Integration • Featured Listings • Direct Contact • Stripe Payment Integration • Interactive UI • Responsive Design"
  },
  {
    type: "full",
    color: "#E0E8FE",
    image: img7,
    title: "Obgyn",
    desc: "A WordPress-based medical directory platform designed to help users discover and connect with OB/GYN professionals, featuring doctor listings, detailed profiles, location-based search, Google Maps integration, contact functionality, healthcare content and a responsive user experience.",
    platform: "WordPress | Elementor | PHP | MySQL | Bootstrap | Google Maps | Stripe | jQuery | PhotoSwipe | Masonry | Cloudflare",
    features: "Medical Professional Directory • OB/GYN Doctor Listings • Doctor Search & Discovery • Detailed Doctor Profiles • Location-Based Search • Google Maps Integration • Doctor Contact & Inquiry • Featured Listings • Healthcare Content & Blogs • Image Galleries • Online Payment Integration • Responsive UI • Performance Optimization"
  },
  {
    type: "half",
    color: "#EADFFF",
    image: img8,
    title: "Physicians",
    desc: "A WordPress-based healthcare platform combining physician-focused content, e-commerce functionality, lead-generation forms, live chat and integrated analytics and advertising tools within a flexible and performance-optimized digital experience.",
    platform: "WordPress | WooCommerce | Elementor | WPBakery | PHP | MySQL | Cloudflare | Google Analytics | Google Ads",
    features: "Healthcare Content Platform • E-commerce • Physician Resources • Lead Generation • Multiple Form Systems • Live Chat • Analytics & Conversion Tracking • Google Ads Integration • Responsive UI • CDN & Performance Optimization"
  },
  {
    type: "half",
    color: "#FAF6DA",
    image: img9,
    title: "Mygermany",
    desc: "A feature-rich international shipping and package forwarding platform that enables customers worldwide to shop from German and European stores, manage incoming packages, consolidate shipments and arrange secure global delivery.",
    platform: "CMS | Elementor | PHP | MySQL | Vue.js | AWS | CloudFront | Rank Math | Google Analytics",
    features: "TInternational Package Forwarding • German Delivery Address • Package Consolidation • Freight Forwarding • Concierge Shopping • Shipping Calculator • Shipment Tracking • Customer Accounts • Membership Plans • Customs Support • Multilingual Support"
  },
];

function Card({ item }) {
  const isHalf = item.type === "half";
  const colClass = isHalf ? "col-12 col-lg-6" : "col-12";

  return (
    <div className={colClass}>
      <div className={`card-item${isHalf ? " is-half" : ""}`} style={{ background: item.color }}>
        <div className="card-thumb"><img src={item.image} alt="imgss" />  </div>
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
          <span className="portfolioDivForFlex">
          <p className="card-label">Technology:</p>
          <p className="card-platform-text">{item.platform}</p>
          </span>
          <span className="portfolioDivForFlex secound">
          <p className="card-label features-label">Key Features:</p>
          <p className="card-features-text">{item.features}</p></span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid({ items = cards }) {
  return (
    <div className="portfoliGrid section-padding">
    <Container className=" grid-wrap">
       <div className="agentsShowcase__header">
          <h2 className="agentsShowcase__heading">
            Products with purpose.
            <br />
            <span>Built to perform.</span>
          </h2>

          <p className="agentsShowcase__description">
           A selection of products, platforms and digital experiences we've designed and built for ambitious teams.
          </p>
        </div>
      <div className="row grid-row">
        {items.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </Container></div>
  );
}