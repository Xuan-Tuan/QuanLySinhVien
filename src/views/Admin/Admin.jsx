import React from "react";
import HeaderAdmin from "../../Components/Header/HeaderAdmin";
import Footer from "../../Components/Footer/Footer";

const Admin = ({ children }) => {
  return (
    <>
      <HeaderAdmin />
      <div className="mt-[60px] mb-[50px]">{children}</div>
      <Footer />
    </>
  );
};

export default Admin;
