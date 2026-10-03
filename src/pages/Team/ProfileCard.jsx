import React from "react";
import "./ProfileCard.css";
import uk from "./pic/uk.png"
import lik from "./pic/ukli.png"
import ukbu from "./pic/ukbu.png"
import email from "./pic/ukem.png"
// <!-- /**
//  * ProfileCard
//  * Usage:
//  *   <ProfileCard
//  *     photo="/path/to/utkarsh.jpg"
//  *     name="Utkarsh Khare"
//  *     title="Founder & CEO"
//  *     bio={[
//  *       <>Utkarsh Khare is the <strong>Founder & CEO of IosAndWeb Technologies</strong>, driving the company's vision to build AI-first, scalable, and future-ready digital solutions. With a strong focus on technology, innovation, and business growth, he leads teams in transforming ambitious ideas into impactful digital products.</>,
//  *       <>Beyond IosAndWeb, Utkarsh Khare brings leadership experience across emerging technology ventures, serving as <strong>CTO at Buying.com and ODDS Drive</strong>, and as the <strong>Founder of Blockchain77.com</strong>. His work spans AI, software development, blockchain, Web3, and digital transformation—connecting technology with real-world business opportunities.</>
//  *     ]}
//  *     socials={{ email: "mailto:you@example.com", website: "https://...", linkedin: "https://linkedin.com/in/..." }}
//  *   />
//  */ -->
 
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
 
const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
  </svg>
);
 
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);
 
 
export default function ProfileCard({
  photo = uk,
  name = "Utkarsh Khare",
  title = "Founder & CEO",
  bio = [
   " Utkarsh Khare is the Founder & CEO of IosAndWeb Technologies, driving the company’s vision to build AI-first, scalable, and future-ready digital solutions. With a strong focus on technology, innovation, and business growth, he leads teams in transforming ambitious ideas into impactful digital products. Beyond IosAndWeb, Utkarsh Khare brings leadership experience across emerging technology ventures, serving as CTO at Buying.com and ODDS Drive, and as the Founder of Blockchain77.com. His work spans AI, software development, blockchain, Web3, and digital transformation—connecting technology with real-world business opportunities.",
  ],
  socials = { email: "mailto:", website: "#", linkedin: "#" },
}) {
  return (
    <div className="profile-card">
      <img src={photo} alt={name} className="profile-card__photo" />
 
      <div className="profile-card__content">
        <h1 className="profile-card__name">{name}</h1>
        <p className="profile-card__title">{title}</p>
 
        <div className="profile-card__bio">
          <span>
            Utkarsh Khare is the  <span style={{fontWeight:"bold"}}> Founder & CEO of IosAndWeb Technologies, </span> driving the company’s vision to build AI-first, scalable, and future-ready digital solutions. With a strong focus on technology, innovation, and business growth, he leads teams in transforming ambitious ideas into impactful digital products. Beyond  <span style={{fontWeight:"bold"}}>
               IosAndWeb, Utkarsh Khare  </span> brings leadership experience across emerging
               technology ventures, serving as  <span style={{fontWeight:"bold"}}> CTO at Buying.com and ODDS Drive, </span> and as the <span style={{fontWeight:"bold"}}> Founder of Blockchain77.com </span> His work spans AI, software development, blockchain, Web3, and digital transformation—connecting technology with real-world business opportunities
          </span>
        </div>
 
        <div className="profile-card__contact">
          <span className="profile-card__contact-label">Contact at</span>
  <a
    href="mailto:utkarsh2601@gmail.com"
    aria-label="Email"
  >
    <img
      src={email}
      alt="Email"
      style={{
        width: "28px",
        height: "28px",
        backgroundColor: "white",
        padding: "6px",
        borderRadius: "50%",
        objectFit: "contain",
      }}
    />
  </a>

  <a
    href="https://in.linkedin.com/in/utkarshkhare"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img
      src={lik}
      alt="LinkedIn"
      style={{
        width: "28px",
        height: "28px",
        backgroundColor: "white",
        padding: "6px",
        margin:"0px 10px",
        borderRadius: "50%",
        objectFit: "contain",
      }}
    />
  </a>

  <a
    href="https://teams.microsoft.com/l/chat/0/0?users=utkarshkhare2601@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Microsoft Teams"
  >
    <img
      src={ukbu}
      alt="Microsoft Teams"
      style={{
        width: "28px",
        height: "28px",
        backgroundColor: "white",
        padding: "6px",
        borderRadius: "50%",
        objectFit: "contain",
      }}
    />
  </a>
        </div>
      </div>
    </div>
  );
}
 