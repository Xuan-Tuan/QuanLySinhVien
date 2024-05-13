import React from "react";
import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const name = localStorage.getItem("info");
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="flex items-center space-x-4 relative">
      <p className="text-lg font-semibold">{name}</p>
      {/* <img src="" alt="User Avatar" className="w-12 h-12 rounded-full" /> */}
      <div className="h-[70px] relative flex items-center justify-between space-x-4">
        <RiAccountCircleFill size={56} />
        <FaAngleDown
          size={24}
          className=" text-gray-500 cursor-pointer"
          onClick={() => setIsLogoutVisible(!isLogoutVisible)}
        />
        {isLogoutVisible && (
          <div className="absolute right-0 top-[65px] bg-white shadow-md rounded-lg p-2 min-h-10 min-w-[150px]">
            <Link to="/LogIn" onClick={handleLogout}>
              <button className=" text-center py-2 px-2 text-uit hover:text-red-600 hover:font-medium transition duration-200">
                Đăng xuất
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
