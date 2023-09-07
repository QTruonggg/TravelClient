import React, { createContext, useContext, useState } from "react";

const TourContext = createContext();

export function useTour() {
  return useContext(TourContext);
}

export function TourProvider({ children }) {
  const [tourDetails, setTourDetails] = useState(() => {
    // Kiểm tra xem có dữ liệu trong localStorage không
    const storedTourDetails = localStorage.getItem('tourDetails');
    return storedTourDetails ? JSON.parse(storedTourDetails) : null;
  });

  console.log("tour: ",tourDetails);
  return (
    <TourContext.Provider value={{ tourDetails, setTourDetails }}>
      {children}
    </TourContext.Provider>
  );
}