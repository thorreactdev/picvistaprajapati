import React from 'react';
import "./FreepikInputBar.css";
import Navbar from '../NavbarComp/Navbar'
import FreepikSearchInput from './FreepikSearchInput';
import FreepikVectorPhotoHero from './FreepikVectorPhotoHero';
import Footer from '../Footer/Footer';


const FreepikInputSearchBar = () => {
  return (
    <div>
        <div className='vector-bg'>
            <Navbar/>
            <div className='relative flex flex-col items-center justify-center mt-20 gap-5'>
                <h1 className='text-3xl uppercase font-bold text-white'>Enjoy the versatility of vector graphics</h1>
                <span className='w-2/3 text-white font-medium capitalize text-center text-lg'>Have you ever tried to resize an image, and it got distorted or lost a bit of quality? Vector graphics are the answer, as they are composed of lines and shapes based on mathematical formulas.</span>
            </div>
            <div>
                <FreepikSearchInput/>
            </div>

        </div>
        <div>
           <FreepikVectorPhotoHero/>
        </div>
        <Footer/>
    </div>
  )
}

export default FreepikInputSearchBar