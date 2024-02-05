import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
// import AutoComplete from '../AutoCompleteComp/AutoComplete'

const InputSearch = () => {
  const navigate = useNavigate();
  const[query , setQuery] = useState("");
  const[searchType , setSearchType] = useState("photos");
  
  // const [suggestions, setSuggestions] = useState([]);
  console.log("query" , query);

  const handleQuery = (e) =>{
    const inputValue = e.target.value;
    setQuery(inputValue);
    
  }
  
  const handleSearch = () => {
    if(query === ""){
      return toast.error("please Search Something!!");
    }
    navigate(`/SearchResult/${searchType}/${query}`);
  };

  const handleEnter = (e) =>{
    if(e.key==="Enter"){
      handleSearch();
    }else{
      return;
    }
  }

  // const handleSuggestionClick = (suggestion) => {
  //   setQuery(suggestion);
  //   navigate(`/search-result/${suggestion}`);
  //   setSuggestions([]);
  // };
  return (
    <>

        <div className='select-type'>
          <select value={searchType} onChange={(e)=> setSearchType(e.target.value)}>
            <option value="photos">Photos</option>
            <option value="videos">Videos</option>
          </select>
          <div className='line'></div>
        </div>
        <div className='relative flex items-center justify-center mt-7'>
            <input type="search"
            placeholder='Search For Photos You Have Been Looking For 😊'
            className='w-7/12 h-12 border-none outline-none pl-32 py-8 rounded'
            value={query}
            onChange={handleQuery}
            onKeyPress={handleEnter}
            required
            />
            <div className='input-field1 flex items-center bg-blue-700 gap-1 hover:bg-blue-800 transition ease-in-out delay-50' onClick={handleSearch}>
                <i className='bx bx-search text-xl' ></i>
                <button>Search</button>
            </div>
            
        </div>
        {/* {suggestions.length > 0 && (
        <AutoComplete suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
      )} */}
    
    </>
  )
}

export default InputSearch