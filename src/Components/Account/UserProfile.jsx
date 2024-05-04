import React from "react";

const UserProfile = () => {
  const name = localStorage.getItem("info");
  return (
    <div className="flex items-center space-x-4">
      <img src="" alt="User Avatar" className="w-12 h-12 rounded-full" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default UserProfile;
