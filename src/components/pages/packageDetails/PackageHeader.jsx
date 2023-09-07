import React from "react";
import { useTour } from "../../TourContext";


function PackageHeader() {
  const { tourDetails } = useTour();
  console.log("img: "+ tourDetails);

  // const url = tourDetails ? tourDetails.images[0].imageUrl : "";

  return (
    <>
      <div className="pd-header">
        <div className=" pd-top row row-cols-lg-4 row-cols-md-2 row-cols-2 gy-4">
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={process.env.PUBLIC_URL + "/images/icons/pd1.svg"} alt="imgDetail" />
              </div>
              <div className="info">
                <h6>Duration</h6>
                <span>{tourDetails?.duration}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={process.env.PUBLIC_URL + "/images/icons/pd2.svg"} alt="imgDetail" />
              </div>
              <div className="info">
                <h6>Tour Type</h6>
                <span>{tourDetails?.travelType}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={process.env.PUBLIC_URL + "/images/icons/pd3.svg"} alt="imgDetail" />
              </div>
              <div className="info">
                <h6>Group Size</h6>
                <span>30 People</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pd-single-info">
              <div className="info-icon">
                <img src={process.env.PUBLIC_URL + "/images/icons/pd4.svg"} alt="imgDetail" />
              </div>
              <div className="info">
                <h6>Tour Guide</h6>
                <span>04 People</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-thumb">
          <img src={tourDetails?.images[0]?.imageUrl} alt="imgDetail" />
        </div>
        <div className="header-bottom">
          <div className="pd-lavel d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h3 className="location" style={{ fontWeight:'600'}}>
              Price: <p style={{fontSize:'32px',fontWeight:'bold'}}>${tourDetails?.price}</p> Per Person
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
          <h2 className="pd-title"> {tourDetails ? tourDetails.name : ""}</h2>
        </div>
      </div>
    </>
  );
}

export default PackageHeader;
