import React from "react";
import Student from "./Student";
import Notification from "../../Components/Notification/Notification";

const StuNotification = () => {
  return (
    <div>
      <Student>
        <div>
          <Notification />
        </div>
      </Student>
    </div>
  );
};

export default StuNotification;
