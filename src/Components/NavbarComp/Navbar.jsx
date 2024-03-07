// import freepik_logo from "../../assets/white-freepik-logo.svg";
import "./Navbar.css";
import logo from "../../assets/BSC_IT-removebg-preview.png";
import { AuthValue } from "../../store/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmLogout from "../Popups/ConfirmLogout";
import avatar from "../../assets/avatr-icon-removebg-preview.png";

function Navbar() {
  const { isLoggedin, LogoutUser, user } = AuthValue();
  const [showLogoutForm, setShowLogoutForm] = useState(false);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutForm(true);
  };

  const closeLogoutForm = () => {
    setShowLogoutForm(!setShowLogoutForm);
  };

  const logoutUser = () => {
    LogoutUser();
    setShowLogoutForm(!setShowLogoutForm);
    navigate("/Logout");
  };
  return (
    <>
      <div className="flex justify-between items-center px-7 py-3 relative cursor-pointer">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img src={logo} alt="" width="210px" />
          </Link>
          {/* <h1 className="text-white font-extrabold text-3xl">PICV!STA</h1> */}
          <div className="flex gap-8 text-white font-medium text-medium hover:text-black-100">
            <Link to="/freepikvector">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">
                Vector
              </span>
            </Link>
            <Link to="/">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">
                Photos
              </span>
            </Link>
            <Link to="/">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">
                Videos
              </span>
            </Link>
            <Link to="/freepikpsd">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">
                PSD
              </span>
            </Link>

            <Link to="/aiimages">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">
                AI Images
              </span>
            </Link>
            {/* <span className="hover:text-gray-300 transition ease-in-out delay-100"></span> */}
            {/* <span className="hover:text-gray-300 transition ease-in-out delay-100"></span> */}
            {/* <Link to="/imagetopdf">
              <span className="hover:text-gray-300 transition ease-in-out delay-100">

              </span>
            </Link> */}
          </div>
        </div>
        <div className="flex gap-8 items-center text-white font-medium text-medium">
          <Link to="/">
            <div className="hover:text-gray-300 transition ease-in-out delay-100">
              Home
            </div>
          </Link>
          {/* <div className="hover:text-gray-300 transition ease-in-out delay-100">
            
          </div> */}

          {isLoggedin ? (
            <div className="flex gap-8 items-center">
              <div
                className="border-2 border-black-800 rounded px-2 py-1 hover:border-gray-400 transition ease-in-out delay-100"
                onClick={handleLogoutClick}
              >
                Logout
              </div>
              <div className="flex gap-3 items-center">
                <img src={avatar} alt="" width={40} className="avatar-circle" />
                <span>{user[0]?.firstname}</span>
              </div>
            </div>
          ) : (
            <>
              <div className="hover:text-gray-300 transition ease-in-out delay-100">
                <a href="/Login">Login</a>
              </div>
              <Link to="/Register">
                <div className="border-2 border-black-800 rounded px-2 py-1 hover:border-gray-400 transition ease-in-out delay-100">
                  <span className="">Sign up</span>
                </div>
              </Link>
            </>
          )}
        </div>
        {showLogoutForm && (
          <ConfirmLogout onConfirm={logoutUser} onCancel={closeLogoutForm} />
        )}
        {showLogoutForm && (
          <div className="blur-overlay" onClick={closeLogoutForm}></div>
        )}
      </div>
    </>
  );
}

export default Navbar;
