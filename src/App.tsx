// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Collections from "./pages/collections";
import Faq from "./pages/faq";
import Journal from "./pages/journal";

import SizeGuide from "./pages/guide/sizeguide";
import CareGuide from "./pages/guide/careguide";

import ShippingAndReturns from "./pages/policy/shippingandreturns";
import Privacy from "./pages/policy/privacypolicy";
import TermsAndConditions from "./pages/policy/termsconditions";
import Cookies from "./pages/policy/cookies";

import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/collections"
          element={
            <Layout>
              <Collections />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/journal"
          element={
            <Layout>
              <Journal />
            </Layout>
          }
        />
        <Route
          path="/size-guide"
          element={
            <Layout>
              <SizeGuide />
            </Layout>
          }
        />
        <Route
          path="/care-guide"
          element={
            <Layout>
              <CareGuide />
            </Layout>
          }
        />
        <Route
          path="/shipping-returns"
          element={
            <Layout>
              <ShippingAndReturns />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
        <Route
          path="/cookies"
          element={
            <Layout>
              <Cookies />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
