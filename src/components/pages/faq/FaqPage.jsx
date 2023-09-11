import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import FaqWrapper from "./FaqWrapper";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function FaqPage() {
  return (
    <>
    <Header/>
      <Breadcrumb name="FAQ" />
      <FaqWrapper />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default FaqPage;
