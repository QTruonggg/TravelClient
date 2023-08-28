import React from "react";
import { Link } from "react-router-dom";

function DestinationCart(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <Link
      onClick={scrollTop}
      to={`${process.env.PUBLIC_URL}/destination-details`}
    >
      <div className="destination-card-style-two mb-0" style={{height:'100%'}}>
        <div className="d-card-thumb" style={{height:'100%'}}>
          <img src={props.image} alt="CartIMG" style={{height:'100%', objectFit:'cover'}}/>
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            {" "}
            
              {props.palce}
            
          </h4>
          <div className="place-count">
            <span>{props.palceCount}</span> Place
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default DestinationCart;
