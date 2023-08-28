import React, { useEffect, useState } from "react";

import Pagination from "../../common/Pagination";
import DestinationCart from "./DestinationCart";
import axiosInstance from "../../../utils/axiosInstance";

function DestionationWrapper() {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    axiosInstance('api/District')
        .then(response => {
            // console.log("call api district");
            setDistricts(response.data); 
            // console.log(response.data);
        })
        .catch(error => {
            console.log("call api district lỗi");
            console.error('Error fetching online users:', error);
        });
}, []);

  return (
    <>
      <div className="destination-wrapper pt-110">
        <div className="container">
          <div className="row g-3">
          {
            districts.map((district, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" style={{height:'288px'}}>
                <DestinationCart 
                  image={district.images[0].imageUrl} 
                  palce={district.name} 
                  palceCount={`${district.touristspots.length}`} />
              </div>
            ))
            }
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm1.png"
                }
                palce="Düsseldorf"
                palceCount="45"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm2.png"
                }
                palce="Augsburg"
                palceCount="45"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm3.png"
                }
                palce="Hamburg"
                palceCount="25"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm4.png"
                }
                palce="Wiesbaden"
                palceCount="15"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm5.png"
                }
                palce="Nuremberg"
                palceCount="20"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm6.png"
                }
                palce="Chemnitz"
                palceCount="22"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm7.png"
                }
                palce="Bielefeld"
                palceCount="22"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm8.png"
                }
                palce="Oberhausen"
                palceCount="24"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm9.png"
                }
                palce="Bielefeld"
                palceCount="27"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm5.png"
                }
                palce="Parshia la"
                palceCount="22"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm6.png"
                }
                palce="New Delhi"
                palceCount="22"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <DestinationCart
                image={
                  process.env.PUBLIC_URL + "/images/destination/des-sm9.png"
                }
                palce="Middle Chaina"
                palceCount="22"
              />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default DestionationWrapper;
