"use client";

import React, { useState, useContext } from "react";

export type Location = {
  longName: string;
  shortName: string;
};

type LocationContextObject = {
  selectedLocation: Location;
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location>>;
  allLocations: Array<Location>;
};

const LocationContext = React.createContext<LocationContextObject>({
  selectedLocation: { longName: "", shortName: "" },
  setSelectedLocation: () => {},
  allLocations: [],
});

export function useLocation() {
  return useContext(LocationContext);
}

type LocationProviderProps = {
  children: React.ReactNode;
};

const LocationProvider = ({ children }: LocationProviderProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    longName: "No location selected",
    shortName: "Not selected",
  });

  const allLocations: Array<Location> = [
    { longName: "1580 Barton Rd. Suite A", shortName: "Barton Rd." },
    { longName: "1453 Ford St. Unit 103", shortName: "Ford St." },
  ];

  const locationObject = {
    selectedLocation,
    setSelectedLocation,
    allLocations,
  };

  return (
    <LocationContext.Provider value={locationObject}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
