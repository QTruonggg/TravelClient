import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import GallaryWrapper from "./GallaryWrapper";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function GallaryPage() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Gallery" />
        <GallaryWrapper />
        <Footer className="footer-area mt-110" />
    </>
  )
}

export default GallaryPage