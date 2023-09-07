import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { useTour } from "../../TourContext";

function PackageCard(props) {
  const { setTourDetails } = useTour();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTourClick = () => {
    axiosInstance(`api/Tour/${props.tourId}`)
      .then((response) => {
        console.log("Tour details:", response.data);
        localStorage.setItem('tourDetails', JSON.stringify(response.data));
        setTourDetails(response.data); // Thiết lập thông tin tour
      })
      .catch((error) => {
        console.error("Error fetching tour details:", error);
      });
  }
  
  return (
    <>
      <div className="package-card-alpha" style={{height:'100%'}}>
        <div className="package-thumb" style={{height:'60%'}}>
          <Link
            onClick={handleTourClick}
            to={`${process.env.PUBLIC_URL}/package-details/${props.title}`}
          >
            <img src={props.image} alt="images" style={{height:'100%', objectFit:'cover'}}/>
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link
             onClick={handleTourClick}
               to={`${process.env.PUBLIC_URL}/package-details/${props.title}`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link
               onClick={handleTourClick}
                 to={`${process.env.PUBLIC_URL}/package-details/${props.title}`}
              >
                View Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                $ {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
