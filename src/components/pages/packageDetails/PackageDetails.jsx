import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import PackageDetailsWrap from "./PackageDetailsWrap";
import { useParams } from "react-router-dom";



function PackageDetails() {
  const { tourName } = useParams();

  return (
    <>
      <Breadcrumb name={tourName}/>
      <PackageDetailsWrap />
    </>
  )
}

export default PackageDetails
