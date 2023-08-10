import { SlSocialFacebook } from 'react-icons/sl'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'

import React, { useState } from 'react'





const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false)


    const toggleHandler = () => {
        setIsToggled(prevState => !prevState);
        console.log("clicked")
    };

    return <>
        <div className='flex flex-row justify-between items-center text-bold bg-lime-200 p-6   mx-0 md:mx-8'>
            <div className="  text-3xl font-semibold leading-loose">NB</div>

            <nav className={` w-[100%] md:w-auto h-[35rem] md:h-fit  absolute  md:static  transition-all duration-1500  left-0 ${isToggled ? "block" : "left-[-100%]"} top-[6.7rem] transition-all ease-in duration-500 `}>
                <ul className="flex flex-col md:flex-row items-center justify-center gap-20 text-black bg-[#e0ffc2] md:bg-transparent bg-opacity-80 h-full">
                    <li className="text-2xl font-semibold">Home</li>
                    <li className="text-2xl font-semibold">About</li>
                    <li className="text-2xl font-semibold">Services</li>
                    <li className="text-2xl font-semibold">Contact</li>
                </ul>
            </nav>

            <div className='hidden md:block'>
                <div className="  text-3xl flex gap-6 ">
                    <SlSocialFacebook />
                    <FiInstagram />
                    <FiTwitter />
                </div>
            </div>



            <div className=' text-4xl md:hidden '>
                <div onClick={toggleHandler}>
                    {isToggled ? <RxCross1 /> : <RxHamburgerMenu />}
                </div>

            </div>




        </div>


    </>
}

export default Navbar
