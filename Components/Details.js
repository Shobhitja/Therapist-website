import React from 'react'
import Image from 'next/image'

const Details = () => {
    return <>



        <div className=' w-full bg-[#E9F5DA] h-full md:h-[50rem]  flex justify-center items-center mt-20'>

            <div className='h-full  md:h-[70%]  mx-3 md:mx-28   bg-[#112A0E] rounded-xl flex flex-col md:flex-row box-border shadow-lg shadow-slate-600'>


                <div className=' mx-auto p-2 md:p-6 h-full flex-[50%]'>
                    <Image src="/Rectangle 3.png" width={486} height={473} />
                </div>

                <div className=' text-white flex flex-col p-6 md:p-16  gap-10 md:gap-16 h-full flex-[50%]'>
                    <h1 className='text-4xl md:text-5xl text-center pl-0 md:pl-4 font-medium font-quicksand'>Meet Noopur</h1>
                    <p className='text-xl md:text-xl font-medium font-sans text-center'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>

                </div>
            </div>

        </div>





        <div className='  mt-20 '>
            <p className='text-2xl md:text-4xl text-[#112A0E] text-center underline-offset-4 font-quicksand '>I GIVE PEOPLE THE TOOLS THEY NEED TO</p>
            <hr className=' bg-[#112A0e] h-1   w-[90%] md:w-[70%] mx-auto mt-4' />

        </div>




        <div style={{ backgroundImage: `url("bg2.jpg")` }} className=' mt-6 w-full  h-[40rem] md:h-[34rem] bg-cover bg-center flex flex-col items-center justify-center  gap-8 md:gap-8 '>


            <div className='hidden md:block  w-[90%] text-white'>
                <div className='grid grid-cols-4 text-4xl p-5 items-center justify-center text-center'>
                    <p > <span style={{ background: `linear-gradient(180deg, rgba(17, 47, 14, 0.50) 0%, rgba(21, 21, 21, 0.50) 100%)` }} className='rounded-full p-1.5   '>01</span> </p>
                    <p > <span style={{ background: `linear-gradient(180deg, rgba(17, 47, 14, 0.50) 0%, rgba(21, 21, 21, 0.50) 100%)` }} className='rounded-full p-1.5   '>02</span> </p>
                    <p > <span style={{ background: `linear-gradient(180deg, rgba(17, 47, 14, 0.50) 0%, rgba(21, 21, 21, 0.50) 100%)` }} className='rounded-full p-1.5   '>03</span> </p>
                    <p > <span style={{ background: `linear-gradient(180deg, rgba(17, 47, 14, 0.50) 0%, rgba(21, 21, 21, 0.50) 100%)` }} className='rounded-full p-1.5   '>04</span> </p>
                </div>
            </div>



            <div className=' my-4 md:my-0 h-full md:h-[40%]  w-[80%] md:w-[90%] grid grid-rows-4 md:grid-cols-4
            text-center text-2xl md:text-4xl text-[#FFF] justify-center ' style={{ background: 'linear-gradient(180deg, rgba(17, 42, 14, 0.50) 0%, rgba(21, 21, 21, 0.50) 100%)' }}>

                <p>Get unstuck  <br /> and find <br /> purpose in <br />their life</p>
                <p>Increase their <br /> self-efficacy & <br /> self-esteem</p>
                <p>Sustain their <br /> mental health <br /> and well-being</p>
                <p>Cultivate <br /> healthy <br /> relationships</p>
            </div>










        </div>



    </>
}



export default Details
