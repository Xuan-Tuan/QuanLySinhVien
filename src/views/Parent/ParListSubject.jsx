import React from "react";
import Parent from "./Parent";
import ListSubject from "../../Components/Subject/ListSubject";
const ParListSubject = () => {
  return (
    <div>
      <Parent>
        <ListSubject />
      </Parent>
    </div>
  );
};

export default ParListSubject;
