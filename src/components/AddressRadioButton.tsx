import React from "react";
import { Location, useLocation } from "~/context/LocationContextProvider";

type AddressRadioButtonProps = {
  listedLocation: Location;
};

function AddressRadioButton({ listedLocation }: AddressRadioButtonProps) {
  const { selectedLocation, setSelectedLocation } = useLocation();

  return (
    <>
      <label>
        <input
          type="radio"
          name="location"
          checked={selectedLocation.shortName === listedLocation.shortName}
          value={listedLocation.longName}
          onChange={() => setSelectedLocation(listedLocation)}
        />
        {listedLocation.longName}
      </label>
    </>
  );
}

export default AddressRadioButton;
