import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import PackageSidebarWrap from "./PackageSidebarWrap";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function PackageSIdebar() {
  
  return (
    <>
    <Header/>
      <Breadcrumb name="Package Sidebar" />
      <PackageSidebarWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default PackageSIdebar;
