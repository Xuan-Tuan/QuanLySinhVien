import React from "react";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

const Lecturer = ({ children }) => {
  return (
    <>
      <div class="flex flex-col  m-0">
        <div class="">
          <HeaderUser role="Lecturer" />
        </div>
        <div class="">{children}</div>
        <div class="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Lecturer;
