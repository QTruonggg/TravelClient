import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

function ContactWrapperArea() {
  const [feedback,setFeedback] = useState({name:"",email:"",content:""});

  const handleInput = (event)=>{
    feedback[event.target.name] = event.target.value;
    setFeedback(feedback);
}
const feedbackSubmit = async (e)=>{
  e.preventDefault();
  try{
    const feedbackData = new FormData();
    feedbackData.append('name', feedback.name);
    feedbackData.append('email', feedback.email);
    feedbackData.append('content', feedback.content);
    await axiosInstance('api/Feedback', 'POST', feedbackData);

    console.log("gui thanh cong",feedbackData);
    setFeedback({ name: "", email: "", content: "" });


  }catch(error){
    console.error(error);

  }
}
  return (
    <>
      <div className="contact-wrapper pt-110">
        <div className="container">
          <div className="row align-items-center justify-content-lg-center gy-5">
            <div className="col-lg-6">
              <div className="contatc-intro-figure">
                <img
                  src={process.env.PUBLIC_URL + "/images/banner/contact-bg.png"}
                  alt="ContactBannerIMG"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info">
                <h3>Contact Info.</h3>
                <ul>
                  <li>
                    <h6>Let’s Talk</h6>
                    <a href="mailto:KarnelTravel@example.com">KarnelTravel@example.com</a>
                    <a href="mailto:KarnelTravel@example.com">KarnelTravel@support.com</a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="tel:093 999 9999"
                    >
                      093 999 9999
                    </a>
                  </li>
                  <li>
                    <h6>Location.</h6>
                    <a href="#">
                        No. 8A Ton That Thuyet - Nam Tu Liem - HaNoi
                    </a>
                  </li>
                  <li>
                    <h6>Visit Us.</h6>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com"
                    >
                      Facebook: https://www.facebook.com/
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com"
                    >
                      Twitter: https://www.twitter.com/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="contact-map mt-120">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="map"
                  id="gmap_canvas"
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.447704332301!2d105.782238225932!3d21.02871796142811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab86cece9ac1%3A0xa9bc04e04602dd85!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIFRo4buRbmcgxJDDoG8gVOG6oW8gTOG6rXAgVHLDrG5oIFZpw6puIFF14buRYyBU4bq_IChTaW5jZSAxOTk5KQ!5e0!3m2!1svi!2s!4v1693238740071!5m2!1svi!2s"
                  }
                />
                <Link to={"https://123movies-to.org"} />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-110">
          <form onSubmit={feedbackSubmit} id="contact_form" method="post">
            <div className="contact-form-wrap">
              <h4>Get a free key stroke quote now</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="name">Name</label>
                    <input
                     onChange={handleInput}
                     name="name"
                      required
                      type="text"
                      placeholder="Your name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="email">Email</label>
                    <input
                    onChange={handleInput}
                    name="email"
                      required
                      type="email"
                      placeholder="Your Email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="custom-input-group">
                <textarea
                 onChange={handleInput}
                 name="content"
                  cols={20}
                  rows={7}
                  required
                  placeholder="Your message"
                  defaultValue={""}
                />
              </div>
              <div className="custom-input-group">
                <div className="submite-btn">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default ContactWrapperArea;
