import React from "react";
import Parent from "./Parent";
import Notification from "../../Components/Notification/Notification";
const ParNotification = () => {
  return (
    <div>
      <Parent>
        <Notification />
      </Parent>
    </div>
  );
};

export default ParNotification;
