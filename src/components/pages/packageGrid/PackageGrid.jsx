import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import PackageGridWrapper from "./PackageGridWrapper";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function PackageGrid() {
  return (
    <>
    <Header/>
      <Breadcrumb name="All Tour" />
      <PackageGridWrapper />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default PackageGrid;
