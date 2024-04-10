import React from "react";
import { useLocation } from "~/context/LocationContextProvider";

function LocationSelectionCard() {
  const { location, setLocation } = useLocation();

  return (
    <>
      <div className="absolute right-60 w-60 rounded-md bg-white p-4 drop-shadow-md">
        <div className="flex items-center gap-1">
          <img src="./location.svg" alt="" className="w-8" />
          <div>{location}</div>
        </div>
        <div className="flex flex-col">
          <div>Other locations</div>
          <form className="flex flex-col">
            <label>
              <input
                type="radio"
                name="location"
                checked={location === "First location"}
                value="First location"
                onChange={(e) => setLocation(e.target.value)}
              />
              First location
            </label>
            <label>
              <input
                type="radio"
                name="location"
                checked={location === "Second location"}
                value="Second location"
                onChange={(e) => setLocation(e.target.value)}
              />
              Second location
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default LocationSelectionCard;
