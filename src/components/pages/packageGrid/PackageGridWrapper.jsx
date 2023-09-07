import React, { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import PackageCard from "./PackageCard";
import axiosInstance from "../../../utils/axiosInstance";

function PackageGridWrapper() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axiosInstance("api/Tour")
      .then((response) => {
        console.log("call api Tour");
        setTours(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("call api Tour lỗi");
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {  
             tours.map(tour => (
              <div className="col-lg-4 col-md-6" key={tour.id}>
                <PackageCard
                  image={process.env.PUBLIC_URL + tour.images[0].imageUrl}
                  date={tour.duration}
                  title={tour.name}
                  price={tour.price}
                  tourId={tour.id}
                />
              </div>
              ))
            }

          </div>
          <Pagination />
        </div>
      </div>
      {/* ===============  Package gird area end =============== */}
    </>
  );
}

export default PackageGridWrapper;
