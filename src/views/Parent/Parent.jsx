import React from "react";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

const Parent = ({ children }) => {
  return (
    <>
      <div className="flex flex-col m-0">
        <div>
          <HeaderUser role="Parent" />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Parent;
