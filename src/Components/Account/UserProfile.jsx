import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const { state } = useLocation();
  const { name } = state;

  return (
    <div className="flex items-center space-x-4">
      <img src="" alt="User Avatar" className="w-12 h-12 rounded-full" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default UserProfile;
