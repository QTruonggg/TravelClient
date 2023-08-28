import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Pagination from "../../common/Pagination";
import PackageCard from "../packageGrid/PackageCard";
import axiosInstance from "../../../utils/axiosInstance";

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
  return (
    <>
      <Breadcrumb name="All Hotel" />
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {  
             hotel.map(hotel => (
              <div className="col-lg-4 col-md-6">
                <PackageCard
                  image={process.env.PUBLIC_URL + hotel.images[0].imageUrl}
                  date={hotel.duration}
                  title={hotel.name}
                  price={hotel.price}
                />
              </div>
              ))
            }
            {/* 
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                date="7 Day &amp; 6 night"
                title="Etiam placerat dictum consequat an pellentesque habitant."
                price="$88.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha2.png"}
                date="7 Day &amp; 6 night"
                title="Varius condimentum consequat frin Aenean pretium risus."
                price="$89.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                date="5 Day &amp; 6 night"
                title="Praesent sed elit mil In risus nullaam efficitur none."
                price="$99.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha4.png"}
                date="8 Day &amp; 7 night"
                title="Sed ultricies sapien arcu, sed cong feugiat sapien."
                price="$299.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha5.png"}
                date="2 Day &amp; 3 night"
                title="Pellentesque habitant morbi malesua tristique senectus."
                price="$299.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha6.png"}
                date="9 Day &amp; 5 night"
                title="San francisco golden gate bridge, cable & fog."
                price="$199.00"
              />
              
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha7.png"}
                date="9 Day &amp; 5 night"
                title="Etiam placerat dictum consequat an pellentesque habitant."
                price="$120.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha8.png"}
                date="9 Day &amp; 5 night"
                title="Varius condimentum consequat frin Aenean pretium risus."
                price="$119.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha9.png"}
                date="9 Day &amp; 5 night"
                title="Praesent sed elit mil In risus nullaam efficitur none."
                price="$159.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha10.png"}
                date="9 Day &amp; 5 night"
                title="Sed ultricies sapien arcu, sed cong feugiat sapien."
                price="$199.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha11.png"}
                date="9 Day &amp; 5 night"
                title="Pellentesque habitant morbi malesua tristique senectus."
                price="$119.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
            <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha8.png"}
                date="9 Day &amp; 5 night"
                title="San francisco golden gate bridge, cable & fog."
                price="$119.00"
              />
            </div> */}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Hotel;