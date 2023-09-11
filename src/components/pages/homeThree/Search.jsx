import React, { useEffect, useState } from "react";
import DestinationCart from "../destinetion/DestinationCart";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Search() {
    const [dataSearch, setDataSearch] = useState();
    const { name } = useParams();
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        axiosInstance(`/api/District/Search/${name}`)
          .then((response) => {
            setDataSearch(response.data);
        })
        .catch((error) => {
            console.error("Error fetching district data:", error);
        });
    }, [name]);
    
    console.log("Data: ", dataSearch);

  return (
    <>
    <Header/>
      <div className="breadcrumb breadcrumb-style-one">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="breadcrumb-title">Search - {name}</h2>
            <ul className="d-flex justify-content-center breadcrumb-items">
              <li className="breadcrumb-item">
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li className="breadcrumb-item active">Search - {name}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="destination-wrapper pt-110">
        <div className="container">
          <div className="row g-3">
            
          { dataSearch ? 
            (dataSearch.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" style={{height:'288px'}} key={index}>

                {item.touristspots ? 
                (<Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/destination-details/${item.name}`}
                >
                    <div className="destination-card-style-two mb-0" style={{height:'100%'}}>
                        <div className="d-card-thumb" style={{height:'100%'}}>
                        <img src={item?.images[0]?.imageUrl} alt="Img District" style={{height:'100%', objectFit:'cover'}}/>
                        </div>
                        <div className="d-card-content">
                        <h4 className="destination-title">
                            {" "}
                            
                            {item.name}
                            
                        </h4>

                        </div>
                    </div>
                </Link>) 
                : 
                (<Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/tourspot-details/${item.name}`}
                >
                    <div className="destination-card-style-two mb-0" style={{height:'100%'}}>
                        <div className="d-card-thumb" style={{height:'100%'}}>
                        <img src={item?.images[0]?.imageUrl} alt="Img District" style={{height:'100%', objectFit:'cover'}}/>
                        </div>
                        <div className="d-card-content">
                        <h4 className="destination-title">
                            {" "}
                            
                            {item.name}
                            
                        </h4>

                        </div>
                    </div>
                </Link>)}
                

              </div>
            )))
            :""
            }


            
          </div>
        </div>
      </div>
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default Search;
