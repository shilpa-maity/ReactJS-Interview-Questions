import React from "react";
import NorthBengal from "./NorthBengal";
import Sikkim from "./Sikkim";
import Sandakfu from "./Sandakfu";

function TourPackages() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2>Tour Packages</h2>
        <NorthBengal />
        <Sikkim />
        <Sandakfu />
      </div>
    </div>
  );
}

export default TourPackages;
