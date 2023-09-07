import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import { Link } from 'react-router-dom';

function TopDestination() {
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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
     <div className="destination-area destination-style-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-10 ">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Top Destination</h2>
                <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum.</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">

            {/* {
            // districts.map(district => (
            //    console.log(district)
            // ))
            districts.slice(0, 1).map((district, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-10 fadeffect">
                <DestinationItem image={district.images[0].imageUrl} title={district.name} place={`${district.touristspots.length} Place`} />
              </div>
            ))
            } */}


            {
            districts.slice(0, 1).map((district, index) => (
              <div key={index} className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/destination-details/${district.name}`}
                >
                  <DestinationItem image={district.images[0].imageUrl} title={district.name} place={`${district.touristspots.length} Place`} />
                </Link>
              </div>
            ))
            }
            {
            districts.slice(1, 5).map((district, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-10 fadeffect">
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/destination-details/${district.name}`}
                >
                  <DestinationItem image={district.images[0].imageUrl} title={district.name} place={`${district.touristspots.length} Place`} />
                </Link>
              </div>
            ))
            }
            {
            districts.slice(5, 6).map((district, index) => (
              <div key={index} className="col-lg-6 col-md-12 col-sm-10 fadeffect">
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/destination-details/${district.name}`}
                >
                  <DestinationItem image={district.images[0].imageUrl} title={district.name} place={`${district.touristspots.length} Place`} />
                </Link>
              </div>
            ))
            }

            {/* <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds1.png" title="Grand Switzerland" place="45 Place" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds2.png" title="Paris" place="35 Place" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds3.png" title="Augsburg" place="15 Place" />              
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds4.png" title="dubai" place="25 Place" />            
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds5.png" title="Wiesbaden" place="10 Place" />            
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 fadeffect">
              <DestinationItem image="/images/destination/top-ds6.png" title="UK" place="65 Place" />
            </div> */}


          </div>
        </div>
      </div>   
    </>
  )
}
 function DestinationItem(props){
  return(
    <>
    <div className="destination-item" style={{height:'100%'}}>
        <div className="destination-img" style={{height:'100%'}}>
          <img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="designation img" style={{height:'100%', objectFit:'cover'}}/>
        </div>
        <div className="destination-overlay">
          <div className="content">
            <h5 style={{fontSize:'36px'}}>{props.title}</h5>
            <h6>{props.place}</h6>
          </div>
        </div>
      </div>
    </>
  )
 }
export default TopDestination