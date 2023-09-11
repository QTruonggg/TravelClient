import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import BlogStandardWrap from "./BlogStandardWrap";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";

function BlogStandard() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Blog Standard" />
      <BlogStandardWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default BlogStandard;
