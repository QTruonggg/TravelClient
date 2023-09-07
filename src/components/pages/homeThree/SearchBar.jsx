import React, { useEffect, useState } from "react";
import Select from "react-select";
// import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
function SearchBar() {
    const [selectedOption, setSelectedOption] = useState(null);
    // const [startDate, setStartDate] = useState(new Date());

    const [districts, setDistricts] = useState([]);
    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
      // Gọi API để lấy danh sách các điểm du lịch
      axiosInstance('api/TouristSpot')
        .then(response => {
          const touristSpotData = response.data;
  
          // Lưu dữ liệu từ API vào state
          setTouristSpots(touristSpotData);
        })
        .catch(error => {
          console.error('Error fetching tourist spots:', error);
        });
    }, []);

    useEffect(() => {
      axiosInstance('api/District')
          .then(response => {
              console.log("call api district");
              setDistricts(response.data); 
            })
            .catch(error => {
              console.log("call api district lỗi");
              console.error('Error fetching online users:', error);
            });
          }, []);
          

    const optionsForDestination = districts.map(district => ({
      value: district.id.toString(),
      label: district.name, 
    }));

    touristSpots.forEach(touristSpot => {
      optionsForDestination.push({
        value: touristSpot.id.toString(),
        label: touristSpot.name,
      });
    });


    const findNow = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log(selectedOption.label);
    }

  return (
    <>
      <div className="searchbar-section">
        <div className="container">
        <div className="multi-main-searchber">
            <div className="row g-4">
              <div className="col-lg-10">
                <div className="row gx-0 gy-4">
                  <div className="col-lg-12 col-md-12">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Destination</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForDestination}
                          placeholder="Where are you going?"
                          className="selectbox"
                        ></Select>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-text-paragraph" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Travel Type</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          placeholder="All activities"
                          onChange={setSelectedOption}
                          options={optionsForTravel}

                        ></Select>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-person-plus" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Person</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForPerson}
                          placeholder="Select"
                        ></Select>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-capslock" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Journey Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="main-form-submit">
                <Link
                  onClick={findNow}
                  to={`${process.env.PUBLIC_URL}/search/${selectedOption?.label}`}
                >
                    <button type="submit">Find Now</button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
