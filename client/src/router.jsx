import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MarketingConsultancy from "./pages/services/MarketingConsultancy";
import Ecommerce from "./pages/services/Ecommerce";
// import ManagedServiceBPO from "./pages/services/ManagedServiceBPO";
import ManagedServiceBPO from "./pages/services/MAnagedServiceBPO"
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/digital Marketing/SEO";
import SMM from "./pages/services/digital Marketing/SMM";
import LeadGeneration from "./pages/services/digital Marketing/LeadGeneration";
import ContentMarketing from "./pages/services/digital Marketing/ContentMarketing";
import Advertising from "./pages/services/digital Marketing/Advertising";
// import TermAndServices from "./pages/TermAndServices";
import TermAndServices from "./pages/termAndServices"
// import Privacy from "./pages/Privacy&Policy";
import Privacy from "./pages/privacy&policy"
// import WebDevelopment from "./pages/services/WebDevelopment";
import WebDevelopment from "./pages/services/webDevelopment"
// import AppDevelopment from "./pages/services/AppDevelopment";
import AppDevelopment from './pages/services/appDevelopment'
// import Disclaimer from "./pages/Disclaimer";
import Disclaimer from "./pages/disclaimer"
import GraphicDesigning from "./pages/services/graphicDesigning";
import SoftwareDevelopment from "./pages/services/softwareDevelopment";
import Error from "./pages/Error";
import SignUp from "./nectronixDigital/signUp";
import Login from "./nectronixDigital/login";

const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/about", element: <AboutUs /> },
  { id: 3, path: "/contact", element: <Contact /> },
  { id: 4, path: "/marketing-consultancy", element: <MarketingConsultancy /> },
  { id: 5, path: "/managed-service-BPO", element: <ManagedServiceBPO /> },
  { id: 6, path: "/ecommerce", element: <Ecommerce /> },
  { id: 7, path: "/digital-marketing", element: <DigitalMarketing /> },
  { id: 8, path: "/seo", element: <SEO /> },
  { id: 9, path: "/smm", element: <SMM /> },
  { id: 10, path: "/termAndServices", element: <TermAndServices /> },
  { id: 11, path: "/lead-generation", element: <LeadGeneration /> },
  { id: 12, path: "/content-marketing", element: <ContentMarketing /> },
  { id: 13, path: "/advertising", element: <Advertising /> },
  { id: 14, path: "/privacy&policy", element: <Privacy /> },
  { id: 15, path: "/web-development", element: <WebDevelopment /> },
  { id: 16, path: "/app-development", element: <AppDevelopment /> },
  { id: 17, path: "/software-development", element: <SoftwareDevelopment /> },
  { id: 18, path: "/disclaimer", element: <Disclaimer /> },
  { id: 19, path: "/graphic-designing", element: <GraphicDesigning /> },
  { id: 20, path: "/signup", element: <SignUp /> },
  { id: 21, path: "/login", element: <Login /> },
  { id: 22, path: "*", element: <Error /> },
  { id: 23, path: "/terms-services", element: <TermAndServices /> }
];

const Router = () => {
  return (
    <>
      <Routes>
        {routes.map(route => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
