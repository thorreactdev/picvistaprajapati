import React from 'react';
import "./Hero.css";
import Navbar from '../NavbarComp/Navbar';
import InputSearch from './InputSearch';
import TypingHeroAnimation from "../TypingAnimation/TypingHeroAnimation";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
     <div className='bg-image'>
         <Navbar/>
         <div className='relative flex flex-col gap-2 items-center mt-12'>
         <TypingHeroAnimation/>
            {/* <h1 className='uppercase text-4xl text-center text-white font-semibold'>Free photos to tell any story</h1> */}
            <span className='capitalize relative text-white font-medimn text-xl'>Find millions of top-quality photos that will leave your audience speechless</span>
         </div>
         <div>
           <InputSearch/>
         </div>
         <div className='flex items-center justify-center gap-3 text-white relative mt-7'>
            <span className='text-lg'>Popular Searches</span>
            <div className='flex items-center gap-4 cursor-pointer '>
            <Link to="/PhotoCategory/nature">
              <span className='flex items-center gap-1 border rounded px-2 py-0.5 hover:bg-black hover:bg-opacity-15 transition ease-in-out delay-1'>
                <i className='bx bx-search'></i>
                <span className='text-extrabold'>Nature</span>
              </span>
            </Link>


            <Link to="/PhotoCategory/background">
              <span className='flex items-center gap-1 border rounded px-2 py-0.5 hover:bg-black hover:bg-opacity-15'>
                <i className='bx bx-search'></i>
                <span>Background</span>
              </span>
            </Link>
              <Link to="/PhotoCategory/technology">
              <span className='flex items-center gap-1 border rounded px-2 py-0.5 hover:bg-black hover:bg-opacity-15'>
                <i className='bx bx-search'></i>
                <span>Technology</span>
              </span>
              </Link>
              <Link to="/PhotoCategory/artificial intelligence">
              <span className='flex items-center gap-1 border rounded px-2 py-0.5 hover:bg-black hover:bg-opacity-15'>
                <i className='bx bx-search'></i>
                <span>AI</span>
              </span>
              </Link>
              <Link to="/PhotoCategory/family">
              <span className='flex items-center gap-1 border rounded px-2 py-0.5 hover:bg-black hover:bg-opacity-15'>
                <i className='bx bx-search'></i>
                <span>Family</span>
              </span>
              </Link>
            </div>
         </div>
     </div>
    
    
    </>
  )
}

export default Hero