import React from 'react';
import bannerImage from '../../assets/images/banner-image.png';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row place-items-center pb-5 md:pb-20 bg-[#1c1c3a] rounded-b-3xl'>

            {/* banner image left part */}
              <div className='md:w-1/2'>
                  <img className='w-4/5 mx-auto' src={bannerImage} alt="banner-image" />
              </div>

              {/* right side of banner section */}
              <div className='md:w-1/2 text-center lg:-ml-20'>
                <h1 className="text-white text-[4vw] mt-16 font-semibold leading-tight md:mb-5 p-5 md:p-0">Gauge Water Purifier <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d73365] to-[#fea063]">Puts An End</span> To Ro Services Pain</h1>
                <div className='space-y-5 md:space-y-10'>
                <p className='font-light text-[#6b6b6b] px-5'>Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience</p>
                <button className='px-5 md:px-12 font-semibold py-2 md:py-5 rounded-full text-white bg-blue-500 hover:bg-blue-600'>Take a Product Tour</button>
                <p className='text-[#b5b5b5] font-medium'>Experience Convenience Like Never Before With Our Smart Water Purifier</p>
                </div>
              </div>
        </div>
    )
}

export default Banner;