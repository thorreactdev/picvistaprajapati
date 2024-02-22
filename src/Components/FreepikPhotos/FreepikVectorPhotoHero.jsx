import React from 'react'
import vector from "../../aiiamgesfold/vector-bg.png"
import vector2 from "../../assets/vector2.png";
import vector3 from "../../assets/vector3.png";

const FreepikVectorPhotoHero = () => {
  return (
    <div>
        <div className='px-32'>
            <div className='flex gap-16 items-center mt-14 mb-14'>
                <div className='flex flex-col w-1/2 gap-4'>
                    <h1 className='text-3xl font-semibold'>Use vectors to create wonderful branding and product design</h1>
                    <span className='text-lg text-gray-500'>Thanks to the enormous versatility and multi-purpose nature of vector graphics, practically any project related to branding or product design can benefit from using such graphical assets. You can use them to adapt their elements to the company or client's needs, conveying exactly the image they want to project about themselves.</span>
                </div>
                <div className='vector-image'>
                    <img src={vector} alt="" width="600px" className='shadow-lg border rounded'/>
                    <div className='overlay7'></div>
                </div>
            </div>

            <div className='flex gap-16 items-center mt-32 mb-14 flex-row-reverse '>
                <div className='flex flex-col w-1/2 gap-4'>
                    <h1 className='text-3xl font-semibold'>Shake up your content on social media and make it more visual</h1>
                    <span className='text-lg text-gray-500'>Last but not least, adjusting vectors to all kinds of artboards and designs is within your grasp due to vectors' scalable and modifiable properties. That includes creating awesome images for posters, ads, and other kinds of media for promotional purposes. Illustrate your ideas and engage the target audience.</span>
                </div>
                <div className='vector-image'>
                    <img src={vector2} alt="" width="600px" className='shadow-lg border rounded'/>
                    <div className='overlay7'></div>
                </div>
            </div>

            <div className='flex gap-16 items-center mt-32 mb-14  '>
                <div className='flex flex-col w-1/2 gap-4'>
                    <h1 className='text-3xl font-semibold'>Make the most of the versatility of vectors to create posters and ads</h1>
                    <span className='text-lg text-gray-500'>Last but not least, adjusting vectors to all kinds of artboards and designs is within your grasp due to vectors' scalable and modifiable properties. That includes creating awesome images for posters, ads, and other kinds of media for promotional purposes. Illustrate your ideas and engage the target audience.</span>
                </div>
                <div className='vector-image'>
                    <img src={vector3} alt="" width="600px" className='shadow-lg border rounded'/>
                    <div className='overlay7'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FreepikVectorPhotoHero