import React from "react";
import { useLocation } from "~/context/LocationContextProvider";
import AddressRadioButton from "./AddressRadioButton";

function LocationSelectionCard() {
  const { selectedLocation, allLocations } = useLocation();

  return (
    <>
      <div className="absolute right-60 w-60 rounded-md bg-white p-4 drop-shadow-md">
        <div className="flex items-center gap-1">
          <img src="./location.svg" alt="" className="w-8" />
          <div>{selectedLocation.shortName}</div>
        </div>
        <div className="flex flex-col">
          <div>Other locations</div>
          <form className="flex flex-col">
            {allLocations.map((location, i) => (
              <AddressRadioButton key={i} listedLocation={location} />
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default LocationSelectionCard;
