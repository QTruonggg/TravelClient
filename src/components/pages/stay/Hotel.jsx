import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Pagination from "../../common/Pagination";
import PackageCard from "../packageGrid/PackageCard";
import axiosInstance from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Hotel() {
    const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axiosInstance("api/Hotel")
      .then((response) => {
        console.log("call api Hotel");
        setHotel(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("call api Hotel lỗi");
        console.error("Error fetching data:", error);
      });
  }, []);

  const HotelDetail = () => {

  }

  return (
    <>
    <Header/>
      <Breadcrumb name="All Hotel" />
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {  
             hotel.map(hotel => (
              <div className="col-lg-4 col-md-6">
                <div className="package-card-alpha" style={{height:'100%'}}>
                  <div className="package-thumb" style={{height:'60%'}}>
                    <Link
                      onClick={HotelDetail}
                      to={`${process.env.PUBLIC_URL}/hotel-detail/${hotel.name}`}
                    >
                      <img src={process.env.PUBLIC_URL + hotel.images[0].imageUrl} alt="images" style={{height:'100%', objectFit:'cover'}}/>
                    </Link>
                    <p className="card-lavel">
                      <i className="bi bi-clock" /> <span>{hotel.duration}</span>
                    </p>
                  </div>
                  <div className="package-card-body">
                    <h3 className="p-card-title">
                      <Link
                      onClick={HotelDetail}
                        to={`${process.env.PUBLIC_URL}/hotel-detail/${hotel.name}`}
                      >
                        {hotel.name}
                      </Link>
                    </h3>
                    <div className="p-card-bottom">
                      <div className="book-btn">
                        <Link
                        onClick={HotelDetail}
                          to={`${process.env.PUBLIC_URL}/hotel-detail/${hotel.name}`}
                        >
                          View Now <i className="bx bxs-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="p-card-info">
                        <span>From</span>
                        <h6>
                          $ {hotel.price} <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          <Pagination />
        </div>
      </div>
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default Hotel;