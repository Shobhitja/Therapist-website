import React from 'react'
import { SlSocialFacebook } from 'react-icons/sl'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'


const Footer = () => {
    return (
        <div className='bg-[#E9F5DA]   w-full h-80 mt-24 flex justify-center items-center p-16'>

            <div className='  flex flex-col gap-10 p-16 '>
                <span className='text-5xl md:text-7xl font-quicksand font-thin text-center text-[#112A0E]'>NB</span>
                <div className="  text-2xl md:text-3xl flex gap-6">
                    <SlSocialFacebook />
                    <FiInstagram />
                    <FiTwitter />
                </div>





            </div>



        </div>
    )
}

export default Footer
