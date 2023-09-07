import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import DestinationDetailsWrapper from "./DestinationDetailsWrapper";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

function DestinationDetails() {
  const { name } = useParams();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [districtData, setDistrictData] = useState(null);


  useEffect(() => {
    axiosInstance(`/api/District/SearchByName/${name}`)
      .then((response) => {
        setDistrictData(response.data);
        // console.log("detail: "+districtData);
      })
      .catch((error) => {
        console.error("Error fetching district data:", error);
      });
    }, [name]);
    
    // console.log(districtData[0]);
  return (
    <>
    <Breadcrumb name={name} />
    {/* <DestinationDetailsWrapper /> */}
    <>
      <div className="destination-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="destination-details">
                <div className="dd-thumb">
                  <img
                    src={districtData ? districtData[0].images[0].imageUrl : ""}
                    alt="BlogDetailsIMG"
                  />
                </div>
                <div className="dd-body">
                  <h3 className="dd-subtitle" style={{color:'#ff4838'}}>{districtData ? districtData[0].name : ""}</h3>  

                  <p>{districtData ? (<div dangerouslySetInnerHTML={{ __html: districtData[0].description }} />) : ("")}</p>
                  
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
                          src={districtData ? districtData[0]?.images[1]?.imageUrl : ""}
                          alt="imgDetail"
                          style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="dd-inner-group">
                        <img
                          src={districtData ? districtData[0]?.images[2]?.imageUrl : ""}
                          alt="imgDetail"
                          style={{width:'100%', height:'280px', objectFit:'cover', borderRadius:'8px'}}
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt blandit
                    interdum. Sed pellentesque at nunc eget consente Duis rutrum
                    nisl urna. Maecenas vel libero faucibus nisiteden venenatis
                    hendrerit a id lectus. Suspendissendt blandit interdum. Sed
                    pellentesque at nunc eget consente andit consectetur.Duis
                    rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Maecenas Suspendissendt
                    blandit interdum.
                  </p>
                  <p>
                    libero faucibus nisi venenatis hendrerit a id lectus.
                    Suspendissendt blandit interdum. Sed pellentesque at nunc
                    consectetur.Duis rutrum nisl urna. Maecenas vel libero
                    faucibus nisi venenatis hendrerit a id lectus.
                  </p>
                  {/* <div className="destination-overview-table">
                    <h3 className="dd-subtitle">Overview</h3>
                    <table className="table overview-table">
                      <tbody>
                        <tr>
                          <th>Destination</th>
                          <td>New York City</td>
                        </tr>
                        <tr>
                          <th>Departure</th>
                          <td>Yes Required</td>
                        </tr>
                        <tr>
                          <th>Departure Time</th>
                          <td>
                            01 April, 2021 <span>10.00AM</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Return Time</th>
                          <td>
                            08 April, 2021 <span>10.00AM</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
                  <div className="destination-map">
                    <h3 className="dd-subtitle">Map</h3>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          title="gmap"
                          id="gmap_canvas"
                          src={districtData ? districtData[0].location : ""}
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
                    <h4>List Place</h4>
                  </div>

                  {/* map ở đây */}
                  {/* <div style={{textAlign:'center'}}>
                    <a href={process.env.PUBLIC_URL +"/images/gallary/WidgetfullIMG1.png"}>
                        <img
                          src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-1.png"} alt="img place" 
                          style={{width:'95%', height:'220px', objectFit:'cover'}}
                        />
                      </a>
                      <p>name Place</p>
                  </div> */}
                  {districtData &&
                      districtData[0].touristspots.map((spot, index) => (
                        <div key={index} style={{ textAlign: "center", paddingBottom:'20px' }}>
                          <Link
                            to={`${process.env.PUBLIC_URL}/tourspot-details/${spot.name}`}
                            onClick={scrollTop}
                          >
                            <img
                              src={spot.images[0].imageUrl}
                              alt={spot.name}
                              style={{
                                width: "95%",
                                height: "220px",
                                objectFit: "cover",
                                borderRadius: "12px"
                              }}
                            />
                            <p style={{color:'#ff4838', fontSize:'20px', fontWeight:'600'}}>{spot.name}</p>
                          </Link>
                        </div>
                      ))}



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

export default DestinationDetails