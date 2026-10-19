// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Layout from "./Layout";
import AccountLayout from "./AccountLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Collections from "./pages/collections";
import Faq from "./pages/faq";
import Journal from "./pages/journal";
import ProductPage from "./pages/products/page";
import IndividualCollection from "./pages/individualcollection";
import SingleBlog from "./pages/Journal/page";

import SizeGuide from "./pages/guide/sizeguide";
import CareGuide from "./pages/guide/careguide";

import ShippingAndReturns from "./pages/policy/shippingandreturns";
import Privacy from "./pages/policy/privacypolicy";
import TermsAndConditions from "./pages/policy/termsconditions";
import Cookies from "./pages/policy/cookies";

import AccountPage from "./pages/account/account";
import RegisterPage from "./pages/account/register";
import ForgotPassword from "./pages/account/forgetpassword";

import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          path="/collections/:slug"
          element={
            <Layout>
              <IndividualCollection />
            </Layout>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <Layout>
              <ProductPage />
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
          path="/journal/:slug"
          element={
            <Layout>
              <SingleBlog />
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

        <Route
          path="/account"
          element={
            <AccountLayout>
              <AccountPage />
            </AccountLayout>
          }
        />
        <Route
          path="/account/register"
          element={
            <AccountLayout>
              <RegisterPage />
            </AccountLayout>
          }
        />
        <Route
          path="/account/forgot-password"
          element={
            <AccountLayout>
              <ForgotPassword />
            </AccountLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
