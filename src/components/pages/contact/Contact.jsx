import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ContactWrapperArea from "./ContactWrapperArea";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Contact() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Contact" />
      <ContactWrapperArea />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default Contact;
