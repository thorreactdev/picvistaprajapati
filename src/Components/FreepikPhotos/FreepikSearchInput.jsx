import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./FreeInputSearch.css";
import Footer from "../Footer/Footer";

const FreepikSearchInput = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleVectorChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleSearch = (e) => {
    // e.preventDefault();
    if (query.trim() === "") {
      return toast.error("Please Search Something");
    }
    navigate(`/freepikvector/${query}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else {
      return;
    }
  };

  return (
    <div className="relative m-auto" style={{maxWidth : "820px"}}>
      <form className="flex items-center justify-between  form1">
        <input type="text" 
        placeholder="Search For Vector Photos You Have Been Looking For.." 
        className="w-full h-full px-7 border-none outline-none placeholder:text-gray-500" 
        required
        onChange={handleVectorChange}
        onKeyDown={handleKeyPress}
        
        />
      
      <div className="bg-blue-700 text-white flex items-center gap-2 rounded" style={{padding : "9px 15px"}} onClick={handleSearch}>
      <i className='bx bx-search text-xl'></i>
        <button>Search</button>
      </div>
      </form>
      {/* <Footer/> */}
    </div>
    
  );
};

export default FreepikSearchInput;




