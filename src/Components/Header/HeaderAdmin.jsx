import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import { RiAccountCircleFill } from "react-icons/ri";
const HeaderAdmin = () => {
  return (
    <header className="bg-uit text-white flex items-center justify-between p-2 fixed top-0 left-0 right-0 h-[60px]">
      <div className="flex items-center">
        <div className="ml-2 mr-8 w-16">
          <img src={Logo} alt="LOGO" />
        </div>
        <div className="flex flex-col text-while text-xs lg:text-base font-bold text-center uppercase mr-2">
          <div>Hệ thống quản lý</div> <div>sinh viên</div>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <nav className="text-white flex flex-row items-center justify-between text-xs lg:text-base font-bold ">
          <div className="mr-12">
            <NavLink
              to="/Admin/ManageLectures"
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Giáo viên
            </NavLink>
          </div>
          <div className="mr-12">
            <NavLink
              to="/Admin/ManageStudent"
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Sinh viên
            </NavLink>
          </div>
          <div className="mr-12">
            <NavLink
              to="/Admin/ManageParent"
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Phụ huynh
            </NavLink>
          </div>
          <div className="mr-12">
            <NavLink
              to="/Admin/ManageSubjects"
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Môn học
            </NavLink>
          </div>
          <div className="mr-12">
            <NavLink
              to="/Admin/Notification"
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
              })}
            >
              Thông báo
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="ml-6 mr-12">
        <NavLink to={`/Admin/Account`}>
          <RiAccountCircleFill size={56} />
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderAdmin;
