import React from "react";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

const Student = ({ children }) => {
  return (
    <>
      <div className="flex flex-col m-0">
        <div className="">
          <HeaderUser />
        </div>
        <div className="">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Student;
