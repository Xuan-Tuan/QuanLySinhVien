import React from "react";
import Logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import UserProfile from "../Account/UserProfile";

const role = localStorage.getItem("role");
const HeaderUser = () => {
  console.log("header", role);
  return (
    <header className="bg-uit h-[70px] text-white flex items-center justify-between p-2">
      <div className="flex items-center">
        <div className="ml-2 mr-8 w-16">
          <NavLink to={`/${role}`}>
            <img src={Logo} alt="LOGO" />
          </NavLink>
        </div>
        <div className="flex flex-col text-while text-xs lg:text-base font-bold text-center uppercase mr-2">
          <div>Hệ thống quản lý</div> <div>sinh viên</div>
        </div>
      </div>
      <div className="flex items-center ">
        <nav className="text-white flex flex-row items-center justify-between text-xs lg:text-base font-bold ">
          <div className=" mr-16">
            <NavLink
              to={`/${role}/ListSubject`}
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Trang chủ
            </NavLink>
          </div>
          <div className="mr-16">
            <NavLink
              to={`/${role}/Notification`}
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Thông báo
            </NavLink>
          </div>
          <div className="mr-6">
            {" "}
            <NavLink
              to={`/${role}/Account`}
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Tài khoản
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify between mx-6">
        <div className="">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="rounded-full pl-4 pr-8 py-1 text-black"
          />
        </div>
        <div className="ml-6 mr-12">
          <NavLink to={`/${role}/Account`} className="6">
            <UserProfile />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
