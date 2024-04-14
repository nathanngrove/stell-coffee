"use client";

import React, { useState } from "react";
import LocationSelectionCard from "./LocationSelectionCard";
import { useLocation } from "~/context/LocationContextProvider";

function SelectALocation() {
  const { selectedLocation } = useLocation();
  const [isSelecting, setIsSelecting] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsSelecting(true)}
      onMouseLeave={() => setIsSelecting(false)}
      onClick={() => setIsSelecting(true)}
    >
      <div className="relative flex items-center gap-1">
        <img src="./location.svg" alt="" />
        <div>{selectedLocation.shortName}</div>
        <img src="./arrow_down.svg" alt="" />
      </div>
      {isSelecting ? (
        <div>
          <LocationSelectionCard />
        </div>
      ) : null}
    </div>
  );
}

export default SelectALocation;
