import React, { useEffect, useState } from "react";
import axiosInstance from '../../../utils/axiosInstance';

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";
import HomeOneDestinationCart from "./HomeOneDestinationCart";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

function DestinationArea() {
  const destinationSlider = {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".testi-next",
      prevEl: ".testi-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };

  const [touristSpot, setTouristSpot] = useState([]);

  useEffect(() => {
    axiosInstance("api/TouristSpot")
      .then((response) => {
        // console.log("call api TouristSpot");
        setTouristSpot(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("call api TouristSpot lỗi");
        console.error("Error fetching data:", error);
      });
  }, []); 


  return (
    <>
      {/* =============== destination area start =============== */}
      <div className="destination-area destination-style-one pt-110 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-head-alpha">
                <h2 style={{color:'#fff'}}>Explore Top Destination</h2>
                <p style={{color:'#fff'}}>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur..
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-arrows text-center d-lg-flex d-none justify-content-end mb-3">
                <div
                  className="testi-prev custom-swiper-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-chevron-left" />
                </div>
                <div
                  className="testi-next custom-swiper-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 overflow-hidden">
          <Swiper
            {...destinationSlider}
            className="swiper destination-slider-one"
          >
            <div className="swiper-wrapper">
                {/* {
                  touristSpot.map(touristSpot => (
                    console.log(touristSpot)
                  ))
                } */}
              
              {
                touristSpot.map((touristSpot) => (
                  <SwiperSlide key={touristSpot.id} className="swiper-slide">
                    <HomeOneDestinationCart
                      image={process.env.PUBLIC_URL + touristSpot.images[0].imageUrl}
                      title={touristSpot.name}
                      tours={touristSpot.tours.length}
                      hotel={touristSpot.hotels.length}
                    />
                  </SwiperSlide>
                ))
              }
              {/* <SwiperSlide className="swiper-slide">
                <HomeOneDestinationCart
                  image={
                    process.env.PUBLIC_URL + "/images/destination/dest-3.png"
                  }
                  title="Marakana"
                  tours="15"
                  hotel="16"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <HomeOneDestinationCart
                  image={
                    process.env.PUBLIC_URL + "/images/destination/dest-2.png"
                  }
                  title="Augsburg"
                  tours="10"
                  hotel="18"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <HomeOneDestinationCart
                  image={
                    process.env.PUBLIC_URL + "/images/destination/dest-4.png"
                  }
                  title="Dusseldorf"
                  tours="15"
                  hotel="25"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <HomeOneDestinationCart
                  image={
                    process.env.PUBLIC_URL + "/images/destination/dest-2.png"
                  }
                  title="Nuremberg"
                  tours="20"
                  hotel="28"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <HomeOneDestinationCart
                  image={
                    process.env.PUBLIC_URL + "/images/destination/dest-3.png"
                  }
                  title="Wiesbaden"
                  tours="6"
                  hotel="12"
                />
              </SwiperSlide> */}
            </div>
          </Swiper>
        </div>
      </div>
      {/* =============== destination area  end =============== */}
    </>
  );
}

export default DestinationArea;
