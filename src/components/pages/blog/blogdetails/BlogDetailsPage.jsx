import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import BlogDetailsWrap from "./BlogDetailsWrap";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";

function BlogDetailsPage() {
  return (
    <>
      <Header/>
        <Breadcrumb name="Blog Details" />
        <BlogDetailsWrap />
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default BlogDetailsPage;
