import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ErrorWrapper from "./ErrorWrapper";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Error() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Error" />
      <ErrorWrapper />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default Error;
