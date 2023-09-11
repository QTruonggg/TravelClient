import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import axiosInstance from "../../../utils/axiosInstance";
import Breadcrumb from "../../common/Breadcrumb";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function DetailHotel() {
    const { name } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        axiosInstance(`/api/Hotel/GetByName/${name}`)
          .then((response) => {
            setHotel(response.data);
            console.log(hotel);
            // console.log("detail: "+tourspot);
          })
          .catch((error) => {
            console.error("Error fetching district data:", error);
          });
      }, [name]);

  return (
    <>
    <Header/>
          <Breadcrumb name={name}/>
      <div className="package-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-package-details">
              <div className="pd-header">
              <h2 className="pd-title" style={{fontWeight:'bold', fontSize:'40px'}}> {hotel ? hotel.name : ""}</h2>
        <div className="pd-thumb">
          <img src={hotel?.images[0]?.imageUrl} alt="imgDetail" />
        </div>
        <div className="header-bottom">
          <div className="pd-lavel d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h3 className="location" style={{ fontWeight:'600'}}>
              Price: <p style={{fontSize:'32px',fontWeight:'bold'}}>${hotel?.price}</p> Per Person / Day
            </h3>
            <ul className="d-flex align-items-center rating">
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
              <li>
                <i className="bi bi-star-fill" />
              </li>
            </ul>
          </div>
          
        </div>
      </div>
                {/* <PackageDetailsTab /> */}
                <>
      <div className="package-details-tabs">
        <ul
          className="nav nav-pills tab-switchers gap-xxl-4 gap-3"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-package1"
              data-bs-toggle="pill"
              data-bs-target="#pill-body1"
              type="button"
              role="tab"
              aria-controls="pill-body1"
              aria-selected="true"
            >
              <i className="bi bi-info-lg" /> Information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-package3"
              data-bs-toggle="pill"
              data-bs-target="#pill-body3"
              type="button"
              role="tab"
              aria-controls="pill-body3"
              aria-selected="false"
            >
              <i className="bi bi-images" /> Hotel Gallary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-package4"
              data-bs-toggle="pill"
              data-bs-target="#pill-body4"
              type="button"
              role="tab"
              aria-controls="pill-body4"
              aria-selected="false"
            >
              <i className="bi bi-geo-alt" /> Location
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {/* package info tab */}
          <div
            className="tab-pane fade show active package-info-tab mt-5"
            id="pill-body1"
            role="tabpanel"
            aria-labelledby="pills-package1"
          >
            <h3 className="d-subtitle">Hotel Details</h3>
            <p>
              {hotel ? (<div dangerouslySetInnerHTML={{ __html: hotel.description }} />) : ("")}
            </p>
            <div className="p-info-featured-img row position-relative g-3  row-cols-1 row-cols-sm-2">
              <div className="col">
                <div className="featured-img">
                  <img
                    src={hotel?.images[1]?.imageUrl}
                    alt="HotelIMG"
                    style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                  />
                </div>
              </div>
              <div className="col">
                <div className="featured-img">
                  <img
                    src={hotel?.images[2]?.imageUrl}
                    alt="HotelIMG"
                    style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                  />
                </div>
              </div>

            </div>
            <p className="d-subtitle">Hotline: {hotel?.contactNumber}</p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex odio praesentium. Doloribus provident saepe 
                officiis suscipit pariatur! Minima accusantium inventore voluptatibus 
                temporibus nam ab vitae voluptatem expedita a recusandae.
              </p>
            <div className="comment-section">
              <ul className="comment-list">
                <li className="single-comment d-flex flex-sm-row flex-column ">
                  <div className="commmentor">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/reviewer/commertor2.png"
                      }
                      alt="HotelIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Silvia Perry</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="single-comment d-flex flex-sm-row flex-column">
                  <div className="commmentor">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/reviewer/commertor3.png"
                      }
                      alt="HotelIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Lilyan Antu</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="single-comment d-flex flex-sm-row flex-column">
                  <div className="commmentor">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/reviewer/commertor1.png"
                      }
                      alt="HotelIMG"
                    />
                  </div>
                  <div className="comment mt-4 mt-sm-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="info">
                        <h6>Adama Grof</h6>
                        <span>2 April, 2021 10.00PM</span>
                      </div>
                      <ul className="rating d-flex ">
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                      </ul>
                    </div>
                    <p>
                      Morbi dictum pulvinar velit, id mollis lorem faucibus acUt
                      sed lacinia ipsum. cibuses acUt sed lacinia ipsum.
                      Suspendisse
                    </p>
                    <div className="reply-btn">
                      <Link to={"#"}>
                        <i className="bi bi-reply-all-fill" /> Reply
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="comment-btn text-center">
                <Link to={"#"}>View All Comment</Link>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              id="comment_form"
              method="post"
            >
              <div className="comment-form">
                <h4>Leave Your Comment</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="custom-input-group">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        id="name1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="custom-input-group">
                      <input type="text" placeholder="Your Email" id="email1" />
                    </div>
                  </div>
                </div>
                <div className="custom-input-group">
                  <input type="text" placeholder="Hotel Type" id="type" />
                </div>
                <div className="custom-input-group">
                  <textarea
                    cols={20}
                    rows={7}
                    placeholder="Write Message"
                    defaultValue={""}
                  />
                </div>
                <ul className="form-rating d-flex">
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                  <li>
                    <i className="bi bi-star" />
                  </li>
                </ul>
                <div className="custom-input-group">
                  <div className="submite-btn">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
         
          {/* package gallary tab */}
          <div
            className="tab-pane fade package-gallary-tab"
            id="pill-body3"
            role="tabpanel"
            aria-labelledby="pills-package3"
          >
            <SRLWrapper>
              <div className="row g-4">
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg1.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-1.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg2.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-2.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg3.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgx-1.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg4.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-3.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg5.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-4.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg6.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgx-2.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg7.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-5.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg8.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgl-6.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="package-gallary-item">
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/packageGallaryFullImg9.png"
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Here"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/pgx-3.png"
                        }
                        alt="HotelIMG"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SRLWrapper>
          </div>
          <div
            className="tab-pane fade package-location-tab"
            id="pill-body4"
            role="tabpanel"
            aria-labelledby="pills-package4"
          >
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="fs"
                  id="gmap_canvas"
                  src={hotel?.location}
                />
                <Link to={"https://123movies-to.org"} />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="package-sidebar">
                <WidgetForm />
                <WidgetPackageOffer />
                <WidgetPackageTag />
                <aside className="widget-banner mt-30">
                  <Link to={"#"}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/banner/sidebar-banner.png"}
                      alt="HotelIMG"
                      className="img-fluid"
                    />
                  </Link>
                </aside>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default DetailHotel;
