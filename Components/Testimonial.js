
import React, { useEffect } from 'react'
import Swiper from 'swiper'
import Carousel from './Carousel';


const Testimonial = () => {


    return <>
        <div className=' mt-10 '>
            <h1 className='text-4xl leading- text-[#112A0E] font-quicksand text-center'> Testimonials </h1>
            <hr className=' bg-[#112A0e] h-1 w-[80%] md:w-[72rem] mx-auto mt-5' />

            <div className='bg-[#112A0E] w-full h-[35rem] md:h-[33rem] mt-10   '>
                <Carousel />

            </div>

        </div>


    </>

}

export default Testimonial;
