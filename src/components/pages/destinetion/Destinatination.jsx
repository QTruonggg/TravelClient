import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import DestionationWrapper from "./DestionationWrapper";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Destinatination() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Destination" />
      <DestionationWrapper />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default Destinatination;
