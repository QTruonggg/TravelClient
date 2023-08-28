import React from "react";
import { Link } from "react-router-dom";

function PackageCard(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <div className="package-card-alpha" style={{height:'100%'}}>
        <div className="package-thumb" style={{height:'60%'}}>
          <Link
            onClick={scrollTop}
            to={`${process.env.PUBLIC_URL}/package-details`}
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
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/package-details`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package-details`}
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
