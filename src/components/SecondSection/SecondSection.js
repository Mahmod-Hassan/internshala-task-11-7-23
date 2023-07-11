import React from 'react';
import { FaCheck } from "react-icons/fa6";
import secondImage from '../../assets/images/second-image.jpg';
const SecondSection = () => {
    return (
        <div className="h-screen flex gap-y-10 flex-col md:flex-row mt-10 px-10">

             <div className="md:w-1/2 order-last md:order-first space-y-6">
                 <div className='text-center'>
                    <span className='shadow-lg p-2 font-semibold text-gray-600 shadow-[#d9e2f3] rounded-full'>Customers’ Needs Above All Else</span>
                    </div>
                 <h1 className='text-[2.5rem] font-semibold'>Take Control <br /> <span className='text-red-400'>Monitor Usage & Change<br /> Filters</span><br />
                 No Technician Needed</h1>
                 <p className='text-[#6b6b6b] md:pr-10 font-medium'>We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.</p>
                 <div className='space-y-4 md:pr-10'>
                    <h3 className='text-[1.25rem] flex items-center gap-4'>
                        <FaCheck className='text-md rounded-full bg-green-500 text-white'></FaCheck>
                        Smart Water Purifier With Self Servicing Capability
                    </h3>
                    <p className='ml-10 text-[#6b6b6b] font-medium'>Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.</p>
                 </div>

                 <div className='space-y-4 md:pr-10'>
                    <h3 className='text-[1.25rem] flex items-center gap-4'>
                        <FaCheck className='text-md rounded-full bg-green-500 text-white'></FaCheck>
                        Compensation For Service Delays
                    </h3>
                    <p className='ml-10 text-[#6b6b6b] font-medium'>You are entitled to a compensation of 100 Rs/Day if service is delayed for more than 24 hours.</p>
                 </div>

                 <button className='px-12 font-semibold py-5 rounded-full text-white bg-blue-500 hover:bg-blue-600 mx-auto block'>Next: Smart Water Conservation</button>
             </div>


             <div className="md:w-1/2 order-first md:order-last">
                  <img src={secondImage} alt="" />
             </div>
        </div>
    )
}

export default SecondSection;