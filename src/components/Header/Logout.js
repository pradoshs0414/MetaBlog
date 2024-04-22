import React from "react";
import authService from "../../appwrite/auth";
import { UseDispatch, useDispatch } from "react-redux";
import { logout } from "../../Redux/authSlice";
const Logout = ({
    className = ""
}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
      <button
        className={`group w-full h-full relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring rounded-lg ${className}`}
        onClick={handleLogout}
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>
        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Logout
        </span>
      </button>
    
  );
};

export default Logout;
