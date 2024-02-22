import React from "react";
import logo from "../../assets/BSC_IT__2_-removebg-preview.png";
import { Link } from "react-router-dom";
import FreepikPSDInput from "./FreepikPSDInput";
import { AuthValue } from "../../store/auth";
import avatar from "../../assets/avatr-icon-removebg-preview.png";

const FreepiksPSDNavbar = () => {
    const {isLoggedin , user} = AuthValue();
  return (
    <div>
      <div
        style={{ height: "90px" }}
        className="bg-white flex items-center px-8 gap-20 shadow-lg"
      >
       <div className="">
          <Link to="/">
            <img src={logo} alt="" width="200px" />
          </Link>
        </div>
        <div className="w-1/2 -mt-9 p-0" >
            <FreepikPSDInput/>
        </div>
        <div className="ml-2">
          {isLoggedin ? (
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                alt=""
                width="50px"
                className="border border-white"
                style={{ borderRadius: "50%", backgroundColor: "#e7e7e7" }}
              />
              <span className="text-lg text-black font-medium">
                {user[0]?.firstname}
              </span>
            </div>
          ) : (
            <p>null</p>
          )}
        </div>
        <div className="text-black border-2 rounded px-5 py-3 ml-4 hover:border-gray-400 transition ease-in-out delay-50">
          <span>My Collection</span>
        </div>
      </div>
    </div>
  );
};

export default FreepiksPSDNavbar;
