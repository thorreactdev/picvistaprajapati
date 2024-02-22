import React from 'react'

const Visuals = () => {
  return (
    <div className='mb-20'>
        <div className='text-center pt-14 flex items-center justify-center flex-col gap-3'>
            <h1  className='text-2xl font-semibold capitalize'>Jaw-dropping free AI-generated visuals</h1>
            <span className='text-gray-700 font-medium'>Spark your inspiration and unleash your creative force</span>
        </div>
        <div className='flex items-center justify-center px-12 gap-5 pt-7 pb-7'>
            <div className='visual flex flex-col gap-4 shadow-lg border border-gray rounded px-7 py-12 text-center' style={{width : '34%'}}>
                <span className="search-icon">
                <i class='bx bx-search-alt-2'></i>
                </span>
                <h2  className='capitalize font-medium text-lg'>Browse the gallery</h2>
                <span className=''>What does your image have that makes it stand out? Use the filters on the results page to make your search worthy.</span>
            </div>
            <div className='visual flex flex-col gap-4 shadow-lg border border-gray rounded px-7 py-12 text-center' style={{width : '34%'}}>
            <span className="search-icon">
            <i class='bx bx-chat' ></i>
                </span>
                <h2 className='capitalize font-medium text-lg'>View the prompt</h2>
                <span>A good prompt is what makes a good visual, that’s why crafting them is a form of art, and Freepik’s designers are mastering it.</span>
            </div>
            <div className='visual flex flex-col gap-4 shadow-lg border border-gray rounded px-7 py-12 text-center' style={{width : '34%'}}>
            <span className="search-icon">
            <i class='bx bxs-bulb' ></i>
                </span>
                <h2 className='capitalize font-medium text-lg'>Use them as a starting point</h2>
                <span className=''>AI-generated images can serve as a central element in your creative projects. Get inspired and add a unique twist to your creations.</span>
            </div>

        </div>
    </div>
  )
}

export default Visuals