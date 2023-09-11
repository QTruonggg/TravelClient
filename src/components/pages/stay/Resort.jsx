import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Pagination from "../../common/Pagination";
import axiosInstance from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Resort() {
    const [resort, setResort] = useState([]);

    useEffect(() => {
      axiosInstance("api/Resort")
        .then((response) => {
          console.log("call api Resort");
          setResort(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log("call api Resort lỗi");
          console.error("Error fetching data:", error);
        });
    }, []);

  const HotelDetail = () => {

  }

  return (
    <>
    <Header/>
      <Breadcrumb name="All Resort" />
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {  
             resort.map(resort => (
              <div className="col-lg-4 col-md-6">
                <div className="package-card-alpha" style={{height:'100%'}}>
                  <div className="package-thumb" style={{height:'60%'}}>
                    <Link
                      onClick={HotelDetail}
                      to={`${process.env.PUBLIC_URL}/resort-detail/${resort.name}`}
                    >
                      <img src={process.env.PUBLIC_URL + resort.images[0].imageUrl} alt="images" style={{height:'100%', objectFit:'cover'}}/>
                    </Link>
                    <p className="card-lavel">
                      <i className="bi bi-clock" /> <span>{resort.duration}</span>
                    </p>
                  </div>
                  <div className="package-card-body">
                    <h3 className="p-card-title">
                      <Link
                      onClick={HotelDetail}
                        to={`${process.env.PUBLIC_URL}/resort-detail/${resort.name}`}
                      >
                        {resort.name}
                      </Link>
                    </h3>
                    <div className="p-card-bottom">
                      <div className="book-btn">
                        <Link
                        onClick={HotelDetail}
                          to={`${process.env.PUBLIC_URL}/resort-detail/${resort.name}`}
                        >
                          View Now <i className="bx bxs-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="p-card-info">
                        <span>From</span>
                        <h6>
                          $ {resort.price} <span>Per Person</span>
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

export default Resort;