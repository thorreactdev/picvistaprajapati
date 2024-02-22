import React,{useState} from "react";
import logo from "../../assets/BSC_IT__2_-removebg-preview.png";
import { Link } from "react-router-dom";
import { AuthValue } from "../../store/auth";
import avatar from "../../assets/avatr-icon-removebg-preview.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AiNavbar = () => {
    const navigate = useNavigate();
    const { user, isLoggedin } = AuthValue();
    const[query , setQuery] = useState("");
    const handleInputChange = (e) =>{
        const inputValue = e.target.value;
        setQuery(inputValue);
    };

    const handleAISearch = () =>{
        if(query.trim() === ""){
            return toast.error("Please Describe Your Thought");
        }
        navigate(`/aiimages/${query}`);
        setQuery("");
    };

    const handleKeypress = (event) =>{
        if(event.key === "Enter"){
            handleAISearch();
        }else{
            return;
        }
    };



  return (
    <div className="">
      <div
        className="bg-white flex items-center px-8 gap-12 shadow-lg"
        style={{ height: "90px" }}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="" width="200px" />
          </Link>
        </div>

        <div className="relative" style={{ width: "800px" }}>
          <form className="form2 border">
            <input
              type="text"
              required
              className="w-full h-full  outline-none  px-7 placeholder:text-gray-500 "
              placeholder="Search For AI Photos You Have Been Looking For.."
              onChange={handleInputChange}
              onKeyDown={handleKeypress}
            />
            <div
              className="bg-blue-700 text-white flex items-center gap-2 rounded"
              style={{ padding: "9px 15px" }}
              onClick={handleAISearch}
              
            >
              <i className="bx bx-search text-xl"></i>
              <button>Search</button>
            </div>
          </form>
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

export default AiNavbar;
