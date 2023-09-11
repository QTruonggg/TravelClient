import React from "react";
import AboutWrapperArea from "./AboutWrapperArea";
import BlogArea from "./BlogArea";
import GuideArea from "../../common/GuideArea";
import TestimonialArea from "../../common/TestimonialArea";
import Breadcrumb from "../../common/Breadcrumb";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function About() {
  return (
    <>
    <Header/>
      <Breadcrumb name="About" />
      <GuideArea />
      <AboutWrapperArea />
      <TestimonialArea />
      <BlogArea />
    <Footer className="footer-area mt-110" />
    </>
  );
}

export default About;
