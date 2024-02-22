import React from 'react'
import FreepikPSDInput from './FreepikPSDInput';
import '../../CSS/FreepikPSD.css';
import Navbar from "../NavbarComp/Navbar"

const FreepikPSDmain = () => {
  return (
    <div>
      <div className='bg-psd-image'>
        <Navbar/>
        <div className='relative flex items-center justify-center flex-col gap-12 mt-52'>
          <h1 className='uppercase text-white font-bold text-6xl'>Welcome to Search For <span className=''>psd photos</span></h1>
          <span className='capitalize w-1/2 text-white text-center text-lg'>PSD stands for "Photoshop Document". PSD files are raster image files that can store a large amount of image data, including multiple layers of images or graphical elements.</span>
        </div>
        <div className='relative'>
          <FreepikPSDInput/>
        </div>
      </div>
        
        {/* <FreepikPSDInput/> */}
    </div>
  )
}

export default FreepikPSDmain