import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import GuideWrap from "./GuideWrap";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function GuidePage() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Tour Guide" />
      <GuideWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default GuidePage;
