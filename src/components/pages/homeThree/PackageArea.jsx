import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { useTour } from "../../TourContext";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function PackageArea() {

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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomTours = shuffleArray(tours).slice(0, 6);

  return (
    <>
      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8 col-sm-10">
              <div className="section-head-alpha">
                <h2>Best Tours</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              <div className="package-btn text-lg-end">
                <a
                  href="package"
                  className="button-fill-primary all-package-btn"
                >
                  View All Tour
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
                {/* {
                  tours.map(tour => (
                    console.log(tour)
                  ))
                } */}
            {  
             randomTours.map(tour => (
              <div className="col-lg-4 col-md-6 col-sm-10  fadeffect">
                <PackageCardBeta
                  image={process.env.PUBLIC_URL + tour.images[0].imageUrl}
                  time={tour.duration}
                  title={tour.name}
                  price={tour.price}
                  tourId={tour.id}
                />
              </div>
              ))
            }
            
            {/* <div className="col-lg-4 col-md-6 col-sm-10  fadeffect">
              <PackageCardBeta
                image="/images/package/best-s2.png"
                time="5 Day &amp; 4 night"
                title="varius condimentum consequat frin Aenean pretium risus eu."
                price="$120.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s5.png"
                time="2 Day &amp; 3 night"
                title="Praesent sed elit mi. In risus nullaam efficitur non elementum eget."
                price="$99.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s5.png"
                time="5 Day &amp; 6 night"
                title="Sed ultricies sapien arcu, sed cong
                      feugiat sapien dignissim id."
                price="$87.00"
              />
            </div> */}
            
            
          </div>
          <div className="package-page-btn text-center mt-60">
            <a href="package" className="button-fill-round">
              View All
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function PackageCardBeta(props) {
  const { setTourDetails } = useTour();

  const handleTourClick = () => {
    axiosInstance(`api/Tour/${props.tourId}`)
      .then((response) => {
        console.log("Tour details:", response.data);
        localStorage.setItem('tourDetails', JSON.stringify(response.data));
        setTourDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tour details:", error);
      });
  }
  return (
    <>
      <div className="package-card-beta" style={{height:'100%'}}>
        <div className="package-thumb" style={{height:'60%'}}>
        <Link
            onClick={handleTourClick}
            to={`${process.env.PUBLIC_URL}/package-details/${props.title}`}
          >
            <img
              src={`${process.env.PUBLIC_URL} ${props.image}`}
              alt="package-details img"
              style={{height:'100%', objectFit:'cover'}}
            />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.time}</span>
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
                ${props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageArea;
