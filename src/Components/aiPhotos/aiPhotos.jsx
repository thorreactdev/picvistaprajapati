import React from 'react';
import aiPhotoData from '../../store/aiPhotoData';
import "./aiPhotos.css";

const AiPhotos = () => {
    const len = aiPhotoData.length;
    console.log(len);
  return (
    <div className='' style={{backgroundColor : '#fff'}}>
        <div className='text-center pt-14 flex items-center justify-center flex-col gap-3'>
            <h1 className='text-2xl font-semibold capitalize'>An ever-growing gallery of free AI-generated visuals</h1>
            <span className='w-3/6 text-gray-700 font-medium'>Creativity comes in many forms: 3D, textures, futuristic landscapes, photorealism, impossible cartoons, Midjourney or Stable Diffusion</span>
        </div>
        <div className='flex items-center justify-center gap-5 flex-wrap mt-12'>

       
            {
                aiPhotoData.map((aiphoto)=>(
                    <div className='relative aimap-div'>
                    <div key={aiphoto.id} className='ai-images-div'>
                        <img src={aiphoto.image} alt="" className='image-tag rounded'/>
                    </div>
                    <div className='overlay4'></div>

                    </div>

                ))
            }

</div>
    </div>
  )
}

export default AiPhotos