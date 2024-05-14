import React from "react";
import HeaderUser from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

const Lecturer = ({ children }) => {
  return (
    <>
      <div class="flex flex-col  m-0">
        <div>
          <HeaderUser />
        </div>
        <div className="mt-[70px] mb-[50px]">{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Lecturer;
