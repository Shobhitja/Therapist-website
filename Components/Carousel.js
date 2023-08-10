import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'




const MyCarousel = () => {
    return (
        <Carousel
            stopOnHover={true}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            emulateTouch={true}
        >


            <div className="  text-white justify-center items-center  w-[90%] md:w-[80%] h-[28rem]  md:h-72 mx-auto mt-14 md:mt-24 ">

                <div className='flex flex-col gap-4 md:gap-5 h-full p-4 md:p-6 bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-1'>


                        <div className='text-xl text-left text-black font-quicksand'>
                            <h1>Sample name </h1>
                        </div>

                        <div className='stars  flex flex-row'>
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />


                        </div>


                    </div>



                    <div className='text-[#112A0E] font-quicksand  text-lg md:text-2xl  leading-8 h-full '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim, velit ut tempor euismod, massa turpis vehicula ipsum, vitae placerat dolor neque vel risus. Fusce tincidunt sit amet nisi nec ultricies. In at posuere est. Proin libero mauris, hendrerit eleifend congue
                    </div>

                </div>
            </div>


            <div className="  text-white justify-center items-center  w-[90%] md:w-[80%] h-[28rem]  md:h-72 mx-auto mt-14 md:mt-24 ">

                <div className=' flex flex-col gap-4 md:gap-5 h-full p-4 md:p-6 bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-1'>


                        <div className='text-xl text-left text-black font-quicksand'>
                            <h1>Sample name </h1>
                        </div>

                        <div className='stars  flex flex-row'>
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />


                        </div>


                    </div>



                    <div className=' text-[#112A0E] font-quicksand  text-lg md:text-2xl  leading-8 h-full '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim, velit ut tempor euismod, massa turpis vehicula ipsum, vitae placerat dolor neque vel risus. Fusce tincidunt sit amet nisi nec ultricies. In at posuere est. Proin libero mauris, hendrerit eleifend congue
                    </div>

                </div>
            </div>


            <div className="  text-white justify-center items-center  w-[90%] md:w-[80%] h-[28rem]  md:h-72 mx-auto mt-14 md:mt-24 ">

                <div className=' flex flex-col gap-4 md:gap-5 h-full p-4 md:p-6 bg-[#F6F6F6]'>
                    <div className='flex flex-col gap-1'>


                        <div className='text-xl text-left text-black font-quicksand'>
                            <h1>Sample name </h1>
                        </div>

                        <div className='stars  flex flex-row'>
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />
                            <AiFillStar className='text-lg md:text-2xl text-[#DEC22C]' />


                        </div>


                    </div>



                    <div className=' text-[#112A0E] font-quicksand  text-lg md:text-2xl  leading-8 h-full '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim, velit ut tempor euismod, massa turpis vehicula ipsum, vitae placerat dolor neque vel risus. Fusce tincidunt sit amet nisi nec ultricies. In at posuere est. Proin libero mauris, hendrerit eleifend congue
                    </div>

                </div>
            </div>





        </Carousel>
    );
};

export default MyCarousel;
