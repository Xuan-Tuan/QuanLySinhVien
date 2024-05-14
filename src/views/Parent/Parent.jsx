import React from "react";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

const Parent = ({ children }) => {
  return (
    <>
      <div className="flex flex-col m-0">
        <HeaderUser />

        <div>{children}</div>

        <Footer />
      </div>
    </>
  );
};

export default Parent;
