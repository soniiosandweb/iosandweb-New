import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact/Contact';
import NoPage from './pages/NoPage';
import BlogDetails from './pages/BlogDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import HowWeWork from './pages/HowWeWork';
import Team from './pages/Team';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment/SoftwareDevelopment';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileAppDevelopment from './pages/Services/MobileAppDevelopment';
import WebDesigning from './pages/Services/WebDesigning';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import PayPerClick from './pages/Services/PayPerClick';
import MagentoDevelopment from './pages/Services/MagentoDevelopment';
import ShopifyDevelopment from './pages/Services/ShopifyDevelopment';
import CRMDevelopmentHealthCare from './pages/Services/CRMDevelopmentHealthCare';
import GraphicDesign from './pages/Services/GraphicDesign';
import PdfToHtml from './pages/Services/PdfToHtml';
import SEOService from './pages/Services/SEOService';
import SocialMediaMarketing from './pages/Services/SocialMediaMarketing';
import SEOPageSpeedOptimization from './pages/Services/SEOPageSpeedOptimization';
import EnglishCopywritingProofreading from './pages/Services/EnglishCopywritingProofreading';
import B2BLeadGenerationCampaign from './pages/Services/B2BLeadGenerationCampaign';
import Career from './pages/Career';

import Ecommerce from './pages/Industries/eCommerce';
import RealEstate from './pages/Industries/RealEstate';
import GenerativeAI from './pages/Industries/GenerativeAI';
import Healthcare from './pages/Industries/Healthcare';
import SEOServiceSheffield from './pages/Services/SEOService/SEOServiceSheffield';
import SEOServiceBirmingham from './pages/Services/SEOService/SEOServiceBirmingham';
import SEOServicePeterborough from './pages/Services/SEOService/SEOServicePeterborough';
import DigitalMarketingBristol from './pages/Services/DigitalMarketing/DigitalMarketingBristol';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/ServicesPage/ServicesPage';

const useRedirect = (targetUrl) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(targetUrl);  // Perform the redirect
  }, [navigate, targetUrl]);
};

// SEO Service redirect
const RedirectToSEOService = () => {
  useRedirect('/seo-services'); 
  return null;
};

// Web development redirect
const RedirectToWebDevelopment = () => {
  useRedirect('/web-development-services'); 
  return null;
};

// Social media marketing redirect
const RedirectToSocialMedia = () => {
  useRedirect('/social-media-marketing-services'); 
  return null;
};

// Digital marketing redirect
const RedirectToDigitalMarketing = () => {
  useRedirect('/digital-marketing-services'); 
  return null;
};

// Mobile App Development redirect
const RedirectToMobileApp = () => {
  useRedirect('/mobile-app-development-services'); 
  return null;
};

// PPC service redirect
const RedirectToPPCService = () => {
  useRedirect('/ppc-services'); 
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:url" element={<BlogDetails />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsConditions />} />
          <Route path='/cancellation-policy' element={< CancellationPolicy />} />
          <Route path='/how-we-work' element={<HowWeWork />} />
          <Route path='/iaw-team' element={<Team />} />
          <Route path='/careers' element={<Career />} />
          <Route path='*' element={<NoPage />} />

          {/* Services */}
          <Route path='/custom-software-development-company' element={<SoftwareDevelopment />} />
          <Route path='/web-development-services' element={<WebDevelopment />} />
          <Route path='/mobile-app-development-services' element={<MobileAppDevelopment />} />
          <Route path='/web-designing-services' element={<WebDesigning />} />
          <Route path='/digital-marketing-services' element={<DigitalMarketing />} />
          <Route path='/digital-marketing-services-in-bristol' element={<DigitalMarketingBristol />} />
          <Route path='/ppc-services' element={<PayPerClick />} />
          <Route path='/magento-development-services' element={<MagentoDevelopment />} />
          <Route path='/shopify-development-services' element={<ShopifyDevelopment />} />
          <Route path='/crm-development-for-healthcare-industry' element={<CRMDevelopmentHealthCare />} />
          <Route path='/graphic-designing-services' element={<GraphicDesign />} />
          <Route path='/pdf-to-html-designing-services' element={<PdfToHtml />} />
          <Route path='/seo-services' element={<SEOService />} />
          <Route path='/social-media-marketing-services' element={<SocialMediaMarketing />} />
          <Route path='/seo-page-speed-optimization-services' element={<SEOPageSpeedOptimization />} />
          <Route path='/english-copywriting-and-proofreading-services' element={<EnglishCopywritingProofreading />} />
          <Route path='/b2b-lead-generation-campaign-services' element={<B2BLeadGenerationCampaign />} />
          <Route path='/seo-services-in-sheffield' element={<SEOServiceSheffield />} />
          <Route path='/seo-services-in-birmingham' element={<SEOServiceBirmingham />} />
          <Route path='/seo-services-in-peterborough' element={<SEOServicePeterborough />} />

          {/* Industries */}
          <Route path='/ecommerce-app-development' element={<Ecommerce />} />
          <Route path='/real-estate-app-development' element={<RealEstate />} />
          <Route path='/generative-ai-development' element={<GenerativeAI />} />
          <Route path='/healthcare-software-development' element={<Healthcare />} />

          {/* Redirect location pages */}
          <Route path="/seo-services-in-edinburgh" element={<RedirectToSEOService />} />
          <Route path="/seo-services-in-london" element={<RedirectToSEOService />} />
          <Route path="/seo-services-in-bristol" element={<RedirectToSEOService />} />
          <Route path="/seo-services-in-manchester" element={<RedirectToSEOService />} />
          <Route path="/seo-services-in-briston" element={<RedirectToSEOService />} />
          <Route path="/seo-services-in-scotland" element={<RedirectToSEOService />} />
          
          <Route path="/social-media-marketing-services-in-birmingham" element={<RedirectToSocialMedia />} />
          <Route path="/social-media-marketing-company-in-london" element={<RedirectToSocialMedia />} />
          <Route path="/social-media-marketing-services-in-sheffield" element={<RedirectToSocialMedia />} />
          <Route path="/social-media-marketing-services-in-peterborough" element={<RedirectToSocialMedia />} />
          <Route path="/social-media-marketing-services-in-manchester" element={<RedirectToSocialMedia />} />
          <Route path="/social-media-marketing-services-in-briston" element={<RedirectToSocialMedia />} />

          <Route path="/web-development-company-in-sheffield" element={<RedirectToWebDevelopment />} />
          <Route path="/web-development-company-in-london" element={<RedirectToWebDevelopment />} />
          <Route path="/web-development-company-in-edinburgh" element={<RedirectToWebDevelopment />} />
          <Route path="/web-development-company-in-birmingham" element={<RedirectToWebDevelopment />} />

          <Route path="/digital-marketing-agency-in-birmingham" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-hammersmith" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-sheffield" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-london" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-scotland" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-edinburgh" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-agency-in-peterborough" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-manchester" element={<RedirectToDigitalMarketing />} />
          <Route path="/digital-marketing-services-in-briston" element={<RedirectToDigitalMarketing />} />

          <Route path="/mobile-app-developer-in-london" element={<RedirectToMobileApp />} />

          <Route path="/ppc-agency-in-birmingham" element={<RedirectToPPCService />} />
          <Route path="/ppc-agency-in-london" element={<RedirectToPPCService />} />
          <Route path="/ppc-services-in-sheffield" element={<RedirectToPPCService />} />
          <Route path="/ppc-services-in-edinburgh" element={<RedirectToPPCService />} />
          <Route path="/ppc-services-in-peterborough" element={<RedirectToPPCService />} />
          <Route path="/ppc-services-in-bristol" element={<RedirectToPPCService />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
