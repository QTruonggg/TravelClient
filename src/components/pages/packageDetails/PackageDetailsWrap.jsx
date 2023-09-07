import React, { useState } from "react";
import { Link } from "react-router-dom";
import WidgetForm from "./WidgetForm";
import WidgetPackageOffer from "./WidgetPackageOffer";
import WidgetPackageTag from "./WidgetPackageTag";
import PackageHeader from "./PackageHeader";
import PackageDetailsTab from "./PackageDetailsTab";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import { useTour } from "../../TourContext";

function PackageDetailsWrap() {
  const [isOpen, setOpen] = useState(false);
  const { tourDetails } = useTour();
  
console.log(tourDetails);


  return (
    <>
      <div className="package-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-package-details">
                <PackageHeader />
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
              id="pills-package2"
              data-bs-toggle="pill"
              data-bs-target="#pill-body2"
              type="button"
              role="tab"
              aria-controls="pill-body2"
              aria-selected="false"
            >
              <i className="bi bi-file-earmark-spreadsheet" />
              Travel Plan
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
              <i className="bi bi-images" /> Tour Gallary
            </button>
          </li>
          {/* <li className="nav-item" role="presentation">
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
          </li> */}
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {/* package info tab */}
          <div
            className="tab-pane fade show active package-info-tab mt-5"
            id="pill-body1"
            role="tabpanel"
            aria-labelledby="pills-package1"
          >
            <h3 className="d-subtitle">Tour Details</h3>
            <p>
              {tourDetails ? (<div dangerouslySetInnerHTML={{ __html: tourDetails.description }} />) : ("")}
            </p>
            <div className="p-info-featured-img row position-relative g-3  row-cols-1 row-cols-sm-2">
              <div className="col">
                <div className="featured-img">
                  <img
                    src={tourDetails?.images[1]?.imageUrl}
                    alt="TourIMG"
                    style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                  />
                </div>
              </div>
              <div className="col">
                <div className="featured-img">
                  <img
                    src={tourDetails?.images[2]?.imageUrl}
                    alt="TourIMG"
                    style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                  />
                </div>
              </div>
              
              {/* <div className="col">
                <div className="featured-img">
                  <img
                    src={tourDetails?.images[3]?.imageUrl}
                    alt="TourIMG"
                  />
                </div>
              </div>
              <div className="col">
                <div className="featured-img">
                  <img
                    src={tourDetails?.images[4]?.imageUrl}
                    alt="TourIMG"
                  />
                </div>
              </div> */}

            </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex odio praesentium. Doloribus provident saepe 
                officiis suscipit pariatur! Minima accusantium inventore voluptatibus 
                temporibus nam ab vitae voluptatem expedita a recusandae.
              </p>
            {/* <table className="table package-info-table mb-0">
              <tbody>
                <tr>
                  <th>Destination</th>
                  <td>New York City</td>
                </tr>
                <tr>
                  <th>Depature</th>
                  <td>Yes Required</td>
                </tr>
                <tr>
                  <th>Departure Time</th>
                  <td>01 April, 2021 10.00AM</td>
                </tr>
                <tr>
                  <th>Return Time</th>
                  <td>08 April, 2021 10.00AM</td>
                </tr>
                <tr>
                  <th>Included</th>
                  <td>
                    <ul className="included-list">
                      <li>
                        <i className="bi bi-check2" />
                        Specilaized Bilingual Guide
                      </li>
                      <li>
                        <i className="bi bi-check2" />
                        Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check2" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Excluded</th>
                  <td>
                    <ul className="excluded-list">
                      <li>
                        <i className="bi bi-x-lg" /> Additional Services
                      </li>
                      <li>
                        <i className="bi bi-x-lg" /> Insurance
                      </li>
                      <li>
                        <i className="bi bi-x-lg" /> Drink
                      </li>
                      <li>
                        <i className="bi bi-x-lg" /> Tickets
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="tour-transport-col">
                    <div className="tour-transport  d-flex align-items-center justify-content-center">
                      <img
                        src={process.env.PUBLIC_URL + "/images/icons/bus.svg"}
                        alt="TourIMG"
                      />
                      <span>Travel With Bus</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
            {/* <div className="rating-overview">
              <h3 className="d-subtitle">Overview</h3>
              <div className="rating-overview-row row g-0">
                <div className="col-lg-4 col-md-5 col-sm-5">
                  <div className="total-rating d-flex justify-content-center align-items-center flex-column h-100 ">
                    <h3>10.00</h3>
                    <h5>Excellent</h5>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-7">
                  <div className="rating-info">
                    <div className="rating-box">
                      <h6>
                        Accommodation <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Transport <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Comfort <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Hospitality <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                    <div className="rating-box">
                      <h6>
                        Food <span>5.0</span>
                      </h6>
                      <div className="rating-bar" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="comment-section">
              <ul className="comment-list">
                <li className="single-comment d-flex flex-sm-row flex-column ">
                  <div className="commmentor">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/reviewer/commertor2.png"
                      }
                      alt="TourIMG"
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
                      alt="TourIMG"
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
                      alt="TourIMG"
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
                  <input type="text" placeholder="Tour Type" id="type" />
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
          <div
            className="tab-pane fade package-plan-tab tab-body"
            id="pill-body2"
            role="tabpanel"
            aria-labelledby="pills-package2"
          >
            
            <div className="accordion plans-accordion" id="planAccordion">
              <div className="accordion-item plans-accordion-single">
                <div className="accordion-header" id="planHeadingOne">
                  <div
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#planCollapse1"
                    role="navigation"
                  >
                    <div className="paln-index-circle">
                      <h4>01</h4>
                    </div>
                    <div className="plan-title">
                      <h5>DAY 1 : Departure And Small Tour</h5>
                      <h6>10.00 AM to 10.00 PM</h6>
                    </div>
                  </div>
                </div>
                <div
                  id="planCollapse1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="planHeadingOne"
                  data-bs-parent="#planAccordion"
                >
                  <div className="accordion-body plan-info">
                    <p>
                      Pellentesque accumsan magna in augue sagittis, non
                      fringilla eros molestie. Sed feugiat mi nec ex vehicula,
                      nec vestibulum orci semper. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Donec tristique commodo fringilla.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-lg" /> Specilaized Bilingual
                        Guide
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item plans-accordion-single">
                <div className="accordion-header" id="planHeadingTwo">
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#planCollapse2"
                    role="navigation"
                  >
                    <div className="paln-index-circle">
                      <h4>02</h4>
                    </div>
                    <div className="plan-title">
                      <h5>DAY 1 : Departure And Small Tour</h5>
                      <h6>10.00 AM to 10.00 PM</h6>
                    </div>
                  </div>
                </div>
                <div
                  id="planCollapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="planHeadingTwo"
                  data-bs-parent="#planAccordion"
                >
                  <div className="accordion-body plan-info">
                    <p>
                      Pellentesque accumsan magna in augue sagittis, non
                      fringilla eros molestie. Sed feugiat mi nec ex vehicula,
                      nec vestibulum orci semper. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Donec tristique commodo fringilla.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-lg" /> Specilaized Bilingual
                        Guide
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item plans-accordion-single">
                <div className="accordion-header" id="planHeadingThree">
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#planCollapse3"
                    aria-controls="planCollapse1"
                    role="navigation"
                  >
                    <div className="paln-index-circle">
                      <h4>03</h4>
                    </div>
                    <div className="plan-title">
                      <h5>DAY 1 : Departure And Small Tour</h5>
                      <h6>10.00 AM to 10.00 PM</h6>
                    </div>
                  </div>
                </div>
                <div
                  id="planCollapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="planHeadingThree"
                  data-bs-parent="#planAccordion"
                >
                  <div className="accordion-body plan-info">
                    <p>
                      Pellentesque accumsan magna in augue sagittis, non
                      fringilla eros molestie. Sed feugiat mi nec ex vehicula,
                      nec vestibulum orci semper. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Donec tristique commodo fringilla.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-lg" /> Specilaized Bilingual
                        Guide
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item plans-accordion-single">
                <div className="accordion-header" id="planHeadingFour">
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#planCollapse4"
                    role="navigation"
                  >
                    <div className="paln-index-circle">
                      <h4>04</h4>
                    </div>
                    <div className="plan-title">
                      <h5>DAY 1 : Departure And Small Tour</h5>
                      <h6>10.00 AM to 10.00 PM</h6>
                    </div>
                  </div>
                </div>
                <div
                  id="planCollapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="planHeadingFour"
                  data-bs-parent="#planAccordion"
                >
                  <div className="accordion-body plan-info">
                    <p>
                      Pellentesque accumsan magna in augue sagittis, non
                      fringilla eros molestie. Sed feugiat mi nec ex vehicula,
                      nec vestibulum orci semper. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Donec tristique commodo fringilla.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-lg" /> Specilaized Bilingual
                        Guide
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item plans-accordion-single">
                <div className="accordion-header" id="planHeadingFive">
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#planCollapse5"
                    role="navigation"
                  >
                    <div className="paln-index-circle">
                      <h4>04</h4>
                    </div>
                    <div className="plan-title">
                      <h5>DAY 1 : Departure And Small Tour</h5>
                      <h6>10.00 AM to 10.00 PM</h6>
                    </div>
                  </div>
                </div>
                <div
                  id="planCollapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="planHeadingFive"
                  data-bs-parent="#planAccordion"
                >
                  <div className="accordion-body plan-info">
                    <p>
                      Pellentesque accumsan magna in augue sagittis, non
                      fringilla eros molestie. Sed feugiat mi nec ex vehicula,
                      nec vestibulum orci semper. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Donec tristique commodo fringilla.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-lg" /> Specilaized Bilingual
                        Guide
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Private Transport
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Entrance Fees
                      </li>
                      <li>
                        <i className="bi bi-check-lg" /> Box Lunch,Water,Dinner
                        and Snacks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
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
                        alt="TourIMG"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SRLWrapper>
          </div>
          {/* <div
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
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                />
                <Link to={"https://123movies-to.org"} />
                <br />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
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
                      alt="TourIMG"
                      className="img-fluid"
                    />
                  </Link>
                </aside>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageDetailsWrap;
