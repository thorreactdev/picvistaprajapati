import React ,{useState} from 'react'
import Navbar from '../NavbarComp/Navbar'
import TypingAIContent from '../TypingAnimation/TypingAIContent'
import avatar from "../../assets/avatr-icon-removebg-preview.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import TypingAiQuery from '../TypingAnimation/TypingAiQuery';

const AIHero = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;

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
    <div>
        <div className="ai-bg-image">
        <Navbar />
        <div className="relative flex flex-col items-center justify-center mt-40 gap-5">
        {
            currentPage === "/aiimages" ? <TypingAIContent /> : <TypingAiQuery/>
        }
          
          <span className="capitalize text-white text-xl">
            Search thousands of AI-generated images that go wildly beyond the
            limits of your imagination
          </span>
        </div>

      <div>
  
    <div className="m-auto relative" style={{maxWidth : "880px"}}>
      <form className="flex items-center justify-between  form1">
        <img src={avatar} alt='' width={40} className='avatar-image'/>
        <input type="text" 
        placeholder="Show Your Creativity With Prompt.." 
        className="w-full h-full py-6 px-7 border-none outline-none placeholder:text-gray-500" 
        required
        onChange={handleInputChange}
        onKeyDown={handleKeypress}
        
        />
      
      <div className="bg-blue-700 text-white flex items-center gap-2 rounded" style={{padding : "7px 15px"}} onClick={handleAISearch}>
      <i className='bx bx-search text-xl'></i>
        <button>Search</button>
      </div>
      </form>
      {/* <Footer/> */}
    </div>
    </div>
      </div>
    </div>
  )
}

export default AIHero