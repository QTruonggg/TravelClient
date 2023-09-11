import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import PackageDetailsWrap from "./PackageDetailsWrap";
import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";



function PackageDetails() {
  const { tourName } = useParams();

  return (
    <>
    <Header/>
      <Breadcrumb name={tourName}/>
      <PackageDetailsWrap />
      <Footer className="footer-area mt-110" />
    </>
  )
}

export default PackageDetails
