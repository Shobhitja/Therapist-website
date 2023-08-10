import React from 'react'

const Contact = () => {
    return (
        <div className=' mt-16'>

            <div className='text-4xl font-quicksand font-normal text-black text-center'>
                <h1>Contact Info </h1>
            </div>


            <div className='flex flex-col gap-5  px-12 md:px-24'>





                <div className='mt-12'>
                    <div>
                        <hr className=' bg-black h-0.5   w-full mx-auto ' />
                    </div>

                    <div className=' flex flex-col md:flex-row justify-between '>
                        <div className='flex flex-col gap-2 md:gap-6 mt-1 '>
                            <span className='text-2xl'>Phone</span>
                            <span className='text-lg'>+91 9737567778</span>
                            <hr className=' md:hidden bg-black h-0.5   w-full mx-auto ' />

                        </div>

                        <div class="w-px  bg-gray-500"></div>

                        <div className='flex flex-col gap-2 md:gap-6 mt-6 md:mt-1'>
                            <span className='text-2xl text-left'>Email</span>
                            <span className='text-lg'>Name12345@gmail.com</span>
                            <hr className=' md:hidden bg-black h-0.5   w-full mx-auto ' />

                        </div>

                        <div class="w-px bg-black"></div>



                        <div className='flex flex-col gap-2 md:gap-6 mt-6 md:mt-1 '>
                            <span className='text-2xl'>Address</span>
                            <span className='text-base md:text-lg'>Name Road, Dehradun</span>
                            <hr className=' md:hidden bg-black h-0.5   w-full mx-auto ' />

                        </div>

                        <div class="w-px bg-black"></div>

                    </div>






                </div>

            </div>




        </div>
    )
}

export default Contact
