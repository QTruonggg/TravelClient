import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import Pagination from "../../../common/Pagination";
import BlogCardWrap from "./BlogCardWrap";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";

function BlogGridPage() {
  return (
    <>
    <Header/>
      <Breadcrumb name="Blog" />
      <div className="blog-wrapper pt-110">
        <div className="container">
          <BlogCardWrap />
          <Pagination/>
        </div>
      </div>
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default BlogGridPage;
