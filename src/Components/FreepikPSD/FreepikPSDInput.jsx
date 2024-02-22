import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import avatar from "../../assets/avatr-icon-removebg-preview.png";


const FreepikPSDInput = () => {

    const navigate = useNavigate();

    const[query , setQuery] = useState("");

    const handleChange = (e) =>{
        const inputValue = e.target.value;
        setQuery(inputValue);
    };

    const handleSearch = () =>{
        if(query.trim() === ""){
            return toast.error("Search For Something !!");
        }
        navigate(`/freepikpsd/${query}`);
        setQuery("");
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSearch();
        }else{
            return;
        }
    };


  return (
    <div>
  
    <div className="m-auto" style={{maxWidth : "820px"}}>
      <form className="flex items-center justify-between  form1">
        <img src={avatar} alt='' width={40} className='avatar-image'/>
        <input type="text" 
        placeholder="Search For PSD Photos You Have Been Looking For.." 
        className="w-full h-full py-6 px-7 border-none outline-none placeholder:text-gray-500" 
        required
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        
        />
      
      <div className="bg-blue-700 text-white flex items-center gap-2 rounded" style={{padding : "7px 15px"}} onClick={handleSearch}>
      <i className='bx bx-search text-xl'></i>
        <button>Search</button>
      </div>
      </form>
      {/* <Footer/> */}
    </div>
    </div>
  )
}

export default FreepikPSDInput