import React, { useState } from "react";
import logo from "../../assets/BSC_IT__2_-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import avatar from "../../assets/avatr-icon-removebg-preview.png";
import { AuthValue } from "../../store/auth";
import "../NewNavbar/NewNavbar.css";
// import InputSearch from '../HeroComp/InputSearch';

const NewNavbar = () => {
  //navigate to other page
  const navigate = useNavigate();

  //state variable
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState('photos');

  console.log(searchType);

  //authData
  const { user, isLoggedin } = AuthValue();

  //functionality
  const handleQueryChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleSearch = () => {
    if (query.trim() === "") {
      return toast.error("Please Search Something");
    }
    navigate(`/SearchResult/${searchType}/${query}`);
    setQuery("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else {
      return;
    }
  };

  return (
    <div>
      <div
        className="flex gap-12 items-center text-white px-8 py-4 text-sm font-medium cursor-pointer"
        style={{ backgroundColor: "#121212", color: "#ccc" }}
      >
        <span>Tools</span>
        <span>Photos</span>
        <span>Video</span>
        <span>AI Images</span>
        <span>Vectors</span>
      </div>

      <div
        style={{ height: "90px" }}
        className="bg-white flex items-center px-8 gap-12 shadow-lg"
      >
        <div className="">
          <Link to="/">
            <img src={logo} alt="" width="200px" />
          </Link>
        </div>
        <div className="w-7/12 flex items-center">
          <div className="options-div flex items-center">
            {/* Search Type */}
            <div className="custom-select">
              <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="photos">Photos</option>
                <option value="videos">Videos</option>
              </select>
            </div>
            <div className="line"></div>
          </div>

          <input
            type="text"
            placeholder="Search For Photos You Have Been Looking For 😊"
            className="border outline-none py-5 rounded w-full pl-32 placeholder:text-black block text-black shadow "
            style={{ backgroundColor: "white" }}
            value={query}
            onChange={handleQueryChange}
            onKeyPress={handleEnter}
            required
          />

          <div
            className="field2 flex items-center text-white bg-blue-600 gap-1 hover:bg-blue-800 transition ease-in-out delay-50 mr-20 px-7 py-2 cursor-pointer"
            onClick={handleSearch}
          >
            <i className="bx bx-search text-xl"></i>
            <button>Search</button>
          </div>
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

export default NewNavbar;
