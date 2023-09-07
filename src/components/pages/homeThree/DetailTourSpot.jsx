import React, { useEffect, useState } from "react";


import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Breadcrumb from "../../common/Breadcrumb";
import { useTour } from "../../TourContext";

function DetailTourSpot() {
  const { name } = useParams();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [tourspot, setTourspot] = useState(null);
//   const [tourID, setTourID] = useState("");


  useEffect(() => {
    axiosInstance(`/api/TouristSpot/SearchByName/${name}`)
      .then((response) => {
        setTourspot(response.data);
        console.log(tourspot[0]);
        // console.log("detail: "+tourspot);
      })
      .catch((error) => {
        console.error("Error fetching district data:", error);
      });
  }, [name]);

  const { setTourDetails } = useTour();

  const handleTourClick = (id) => {
    console.log("id: "+id);
    axiosInstance(`api/Tour/${id}`)
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
    <Breadcrumb name={name} />
    
    {/* <div className="breadcrumb breadcrumb-style-one">
    <div className="container">
        <div className="col-lg-12 text-center">
        <h2 className="breadcrumb-title">{name}</h2>
        <ul className="d-flex justify-content-center breadcrumb-items">
            <li className="breadcrumb-item">
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </li>
            <li className="breadcrumb-item">
            <Link to={`${process.env.PUBLIC_URL}/`}>Ha Noi</Link>
            </li>
            <li className="breadcrumb-item active">{name}</li>
        </ul>
        </div>
    </div>
    </div> */}
   
    {/* <DestinationDetailsWrapper /> */}
    <>
      <div className="destination-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="destination-details">
                <div className="dd-body">
                    <h3 className="dd-subtitle" style={{color:'#ff4838'}}>{tourspot ? tourspot[0].name : ""}</h3>  
                    
                    <div className="dd-thumb mt-30">
                    <img
                        src={tourspot ? tourspot[0].images[0].imageUrl : ""}
                        alt="BlogDetailsIMG"
                    />
                    </div>

                  <p>{tourspot ? (<div dangerouslySetInnerHTML={{ __html: tourspot[0].description }} />) : ("")}</p>
                  
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt blandit
                    interdum. Sed pellentesque at nunc eget consente Duis rutrum
                    nisl urna. Maecenas vel libero faucibus nisiteden venenatis
                    hendrerit a id lectus. Suspendissendt blandit interdum. Sed
                    pellentesque at nunc eget consente andit consectetur.Duis
                    rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Maecenas Suspendissendt
                    blandit interdum. libero faucibus nisi venenatis hendrerit a
                    id lectus. Suspendissendt blandit interdum.
                  </p>
                  <p>
                    {" "}
                    Sed pellentesque at nunc consectetur.Duis rutrum nisl urna.
                    Maecenas vel libero faucibus nisi venenatis hendrerit a id
                    lectus. Suspendissendt blandit interdum. Sed pellentesque at
                    nunc consectetur.Duis rutrum nisl urna. Maecenas vel libero
                    faucibus nisi venenatis hendrerit a id lectus.
                    Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna.
                  </p>
                  <div className="row g-3 dd-img-group">
                    <div className="col-sm-6">
                      <div className="dd-inner-group">
                        <img
                            src={tourspot ? tourspot[0].images[1].imageUrl : ""}
                            alt="imgDetail"
                            style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="dd-inner-group">
                      <img
                            src={tourspot ? tourspot[0].images[2].imageUrl : ""}
                            alt="imgDetail"
                            style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam dolore similique eligendi vel repellat odit doloremque qui 
                    accusamus delectus eos provident vero amet iusto, error quia 
                    consequatur eveniet corporis fugiat!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minus molestiae eius, voluptatem, omnis animi aliquam quia optio tempora tenetur 
                    labore ex porro error numquam adipisci soluta facilis rerum, similique recusandae.
                  </p>

                  <div className="destination-map">
                    <h3 className="dd-subtitle">Map</h3>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          title="gmap"
                          id="gmap_canvas"
                          src={tourspot ? tourspot[0].location : ""}
                        />
                        <Link to={"https://123movies-to.org"} />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="package-sidebar">

                <aside className="package-widget widget-gallary ">
                    <div className="widget-title">
                    <h4>List Tours</h4>
                    </div>
                    {tourspot &&
                        tourspot[0].tours.map((tour, index) => (
                            <div key={index} style={{ textAlign: "center", paddingBottom:'20px' }}>
                                <Link
                                    onClick={() => handleTourClick(tour.id)}
                                    to={`${process.env.PUBLIC_URL}/package-details/${tour.name}`}
                                >
                                    <img
                                    src={tour.images[0]?.imageUrl || ""}
                                    alt={tour.name}
                                    style={{
                                        width: "95%",
                                        height: "220px",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                    />
                                    <p style={{color:'#ff4838', fontSize:'20px', fontWeight:'600'}}>{tour.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </aside>
                <aside className="package-widget widget-gallary ">
                    <div className="widget-title">
                    <h4>List Hotels</h4>
                    </div>
                    {tourspot &&
                        tourspot[0].hotels.map((hotel, index) => (
                            <div key={index} style={{ textAlign: "center", paddingBottom:'20px' }}>
                                <Link
                                    onClick={() => handleTourClick(hotel.id)}
                                    to={`${process.env.PUBLIC_URL}/package-details/${hotel.name}`}
                                >
                                    <img
                                    src={hotel.images[0]?.imageUrl || ""}
                                    alt={hotel.name}
                                    style={{
                                        width: "95%",
                                        height: "220px",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                    />
                                    <p style={{color:'#ff4838', fontSize:'20px', fontWeight:'600'}}>{hotel.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </aside>
                <aside className="package-widget widget-gallary ">
                    <div className="widget-title">
                    <h4>List Resorts</h4>
                    </div>
                    {tourspot &&
                        tourspot[0].resorts.map((resort, index) => (
                            <div key={index} style={{ textAlign: "center", paddingBottom:'20px' }}>
                                <Link
                                    onClick={() => handleTourClick(resort.id)}
                                    to={`${process.env.PUBLIC_URL}/package-details/${resort.name}`}
                                >
                                    <img
                                    src={resort.images[0]?.imageUrl || ""}
                                    alt={resort.name}
                                    style={{
                                        width: "95%",
                                        height: "220px",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                    />
                                    <p style={{color:'#ff4838', fontSize:'20px', fontWeight:'600'}}>{resort.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </aside>
                <aside className="package-widget widget-gallary ">
                    <div className="widget-title">
                    <h4>List Restaurants</h4>
                    </div>
                    {tourspot &&
                        tourspot[0].restaurants.map((restaurant, index) => (
                            <div key={index} style={{ textAlign: "center", paddingBottom:'20px' }}>
                                <Link
                                    onClick={() => handleTourClick(restaurant.id)}
                                    to={`${process.env.PUBLIC_URL}/package-details/${restaurant.name}`}
                                >
                                    <img
                                    src={restaurant.images[0]?.imageUrl || ""}
                                    alt={restaurant.name}
                                    style={{
                                        width: "95%",
                                        height: "220px",
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                    />
                                    <p style={{color:'#ff4838', fontSize:'20px', fontWeight:'600'}}>{restaurant.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </aside>
                <aside className="widget-banner mt-30">
                  <Link
                    onClick={scrollTop}
                    // to={`${process.env.PUBLIC_URL}/package-details`}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/banner/sidebar-banner.png"
                      }
                      alt="BlogDetailsIMG"
                      className="img-fluid"
                    />
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  </>
  )
}

export default DetailTourSpot