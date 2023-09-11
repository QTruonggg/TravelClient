import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import PackageStandardWrap from "./PackageStandardWrap";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function PackageStandard() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Package Standard" />
      <PackageStandardWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default PackageStandard;
