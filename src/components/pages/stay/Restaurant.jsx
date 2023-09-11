import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Pagination from "../../common/Pagination";
import PackageCard from "../packageGrid/PackageCard";
import axiosInstance from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Restaurant() {
    const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axiosInstance("api/Restaurant")
      .then((response) => {
        console.log("call api Restaurant");
        setRestaurant(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("call api Restaurant lỗi");
        console.error("Error fetching data:", error);
      });
  }, []);

  const RestaurantDetail = () => {

  }

  return (
    <>
    <Header/>
      <Breadcrumb name="All Restaurant" />
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {  
             restaurant.map(restaurant => (
              <div className="col-lg-4 col-md-6">
                <div className="package-card-alpha" style={{height:'100%'}}>
                  <div className="package-thumb" style={{height:'60%'}}>
                    <Link
                      onClick={RestaurantDetail}
                      to={`${process.env.PUBLIC_URL}/restaurant-detail/${restaurant.name}`}
                    >
                      <img src={process.env.PUBLIC_URL + restaurant?.images[0]?.imageUrl} alt="images" style={{height:'100%', objectFit:'cover'}}/>
                    </Link>
                    <p className="card-lavel">
                      <i className="bi bi-clock" /> <span>{restaurant.duration}</span>
                    </p>
                  </div>
                  <div className="package-card-body">
                    <h3 className="p-card-title">
                      <Link
                      onClick={RestaurantDetail}
                        to={`${process.env.PUBLIC_URL}/restaurant-detail/${restaurant.name}`}
                      >
                        {restaurant.name}
                      </Link>
                    </h3>
                    <div className="p-card-bottom">
                      <div className="book-btn">
                        <Link
                        onClick={RestaurantDetail}
                          to={`${process.env.PUBLIC_URL}/restaurant-detail/${restaurant.name}`}
                        >
                          View Now <i className="bx bxs-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="p-card-info">
                        <span>From</span>
                        <h6>
                          $ {restaurant.price} <span>Per Person</span>
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

export default Restaurant;