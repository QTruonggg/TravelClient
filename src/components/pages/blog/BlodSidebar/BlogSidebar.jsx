import React from "react";
import Breadcrumb from "../../../common//Breadcrumb";
import BlogSiebarWrap from "./BlogSiebarWrap";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";

function BlogSidebar() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Blog Sidebar" />
      <BlogSiebarWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default BlogSidebar;
