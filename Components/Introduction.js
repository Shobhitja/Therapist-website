import React from 'react'

const Introduction = () => {
    return (
        <div>


            <div className=' w-full  bg-cover bg-center h-screen flex items-center justify-center ' style={{ backgroundImage: `url("bg.png")` }}>


                <div className='bg-[#112A0E]  text-white h-[35rem] flex flex-col items-center justify-between  w-[90%] md:w-[70%] py-10 md:py-16   '>
                    <div className=' flex flex-col gap-4 items-center '>
                        <h1 className='text-[2.75rem] md:text-5xl font-semibold font-[Quicksand]'>Noopur Badola</h1>
                        <span className='text-xl font-normal'>Licensed Psychotherapist</span>
                    </div>



                    <div className='  flex flex-col text-center items-center  gap-2 text-2xl md:text-[2.75rem] leading-snug font-semibold'>
                        <p className=''>&quot;Bulid your Confidence</p>
                        <p>and become more self aware&quot;</p>
                    </div>


                    <button className='bg-white text-[#112A0E] p-4 md:p-8 text-lg font-quicksand font-semibold rounded-[50px] shadow-2xl shadow-[rgba(0, 0, 0, 0.25)] hover:bg-lime-200  ease-in duration-300 animate-[dissolve] '>Book your appointment</button>
                </div>



            </div>



            <div className='hidden md:block  mt-16 '>
                <div className=' flex justify-between items-center text-4xl  font-quicksand text-[#112A0E]     max-w-7xl mx-auto'>
                    <span>Emotions</span>
                    <span>/</span>
                    <span>Thoughts</span>
                    <span>/</span>
                    <span>Behaviour</span>
                </div>
            </div>

        </div>
    )
}

export default Introduction


