import React from "react";
import Parent from "./Parent";
import DetailSubject from "../../Components/Subject/DetailSubject";
const ParDetailSubject = () => {
  return (
    <div>
      <Parent>
        <DetailSubject/>
      </Parent>
    </div>
  );
};

export default ParDetailSubject;
