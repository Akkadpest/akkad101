import React from "react";
import AntsTreatements from "./TreatementsItems/AntsTreatemets";
import CockroachesTreatment from "./TreatementsItems/CockroachesTreatment";
import BedBudsTreatemets from './TreatementsItems/BedBudsTreatemets'
const Treatments = () => {
  return (
    <div className="row m-0 d-flex ">
    <ul>
    <AntsTreatements/>
    <CockroachesTreatment/>
    <BedBudsTreatemets/>
    </ul>
    </div>
  );
};

export default Treatments;
