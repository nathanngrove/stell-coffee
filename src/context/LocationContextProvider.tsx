"use client";

import React, { useState, useContext } from "react";

type LocationContextObject = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const LocationContext = React.createContext<LocationContextObject>({
  location: "",
  setLocation: () => {},
});

export function useLocation() {
  return useContext(LocationContext);
}

type LocationProviderProps = {
  children: React.ReactNode;
};

const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState<string>("No location selected");

  const locationObject = {
    location,
    setLocation,
  };

  return (
    <LocationContext.Provider value={locationObject}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
