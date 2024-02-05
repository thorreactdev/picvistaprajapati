import React from 'react';
import "../Footer/Footer.css"
import twitter from "../../assets/twitter-removebg-preview.png";
import instagram from "../../assets/instagram-removebg-preview.png";
import logo from "../../assets/BSC_IT-removebg-preview.png";

const Footer = () => {
  return (
       <div>
        <div className='bg-black text-white px-16 py-14 flex gap-52 main-footer'>
            <div className='footer-content flex flex-col gap-2'>
                <h1 className='font-semibold'>Content</h1>
                <span>Calendar of festivities</span>
                <span>New assets</span>
                <span>The most popular content</span>
                <span>Search trends</span>
                <span>Blog</span>
            </div>
            <div className='footer-content flex flex-col gap-2'>
                <h1 className='font-semibold'>INFORMATION</h1>
                <span>Pricing</span>
                <span>About us</span>
                <span>Press room</span>
                <span>API</span>
                <span>Jobs</span>
                <span>Sell content</span>
                <span>Freepik brand guidelines</span>
            </div>
            <div className='footer-content flex flex-col gap-2'>
                <h1 className='font-semibold'>LEGAL</h1>
                <span>Terms of Use</span>
                <span>Licesence Agreement</span>
                <span>Privacy Policy</span>
                <span>Copyright</span>
                <span>Cookies Policy</span>
                <span>Cookies Setting</span>
                <div className='footer-content flex flex-col gap-2 mt-4'>
                    <h1 className='font-semibold'>Support</h1>
                    <span>FAQ</span>
                    <span>Contact</span>
                </div>
            </div>
            <div className='footer-content flex flex-col gap-2'>
                <h1 className='font-semibold'>Social Media</h1>
                <div className='flex gap-3 items-center'>
                <span className='twit-logo border-transparent rounded p-1 bg-sky-600' style={{backgroundColor : ""}}>
                <i className='bx bxl-twitter'></i>
                </span>
                <span className='insta-logo border-transparent rounded p-1'>
                <i className='bx bxl-instagram'></i>
                {/* <img src={instagram} alt="twitter_logo" width="40px"/> */}
                </span>
                <span className='linkedin-logo border-transparent rounded p-1'>
                    <i className='bx bxl-linkedin' ></i>
                </span>
                <span className='youtube-logo border-transparent rounded p-1'>
                    <i className='bx bxl-youtube'></i>
                </span>
                {/* <img src={twitter} alt="twitter_logo" width="40px"/> */}
                {/* <img src={twitter} alt="twitter_logo" width="40px"/> */}

                </div>
                
            </div>
            
        </div>
        <hr className='-mt-24'/>
        <div className='flex items-center mt-7 px-14 cursor-pointer'>
            <img src={logo} alt="" width="160px"/>
            <sup className='text-blue-500 text-sm'>Copyright © 2010-2024 Freepik Company S.L. All rights reserved.</sup>
        </div>
        </div>
    
  )
}

export default Footer