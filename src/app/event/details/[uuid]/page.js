import ImageGallery from '@/components/ImageHomeGallary/ImageHomeGallary'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>

            <div className='w-11/12 mx-auto h-96 flex-col flex justify-center items-center rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('/MessageSvg.svg')" }}>

                <h1 class="text-5xl text-[#43b4ed] font-extrabold dark:text-white text-center p-5">Event<small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">School</small></h1>

                <h1>Home/Event</h1>
                {/* <div className='w-11/12 flex   '>
                    <div className='w-1/2'>

                        <span className='w-10 h-10' style={{ backgroundImage: "url('/locationsvg.svg')" }}></span>Bhaurasa
                    </div>

                    <span className='w-9 h-9' style={{ backgroundImage: "url('/clock.svg')" }}></span>8:30
                </div> */}
                <div className='flex lg:gap-10 md:gap-10 sm:gap-10 flex-col lg:flex-row md:flex-row sm:flex-row text-gray-500'>
                        <h2>
                            <Image
                                className='inline '
                                src="/location.svg"
                                alt="Hero Image"
                                width={18}
                                height={18}
                            />
                            <span className='md:text-sm lg:text-sm text-xs sm:text-sm pl-2 group-hover:text-white'>Bhaurasa</span>
                        </h2>
                    
                    </div>
            </div>

            <h2 className='md:text-5xl lg:text-5xl sm:text-5xl text-center   font-black flex justify-center p-15 pb-2
          mt-6 '>Event details</h2>
            <main className=" w-11/12 mx-auto  h-96 flex flex-col justify-center  p-5  bg-cover bg-center" style={{ backgroundImage: "url('https://eduor.vercel.app/images/event_img_1.png')" }}></main>


            <section className="flex items-center justify-center">
                <div className="w-11/12 bg-white p-8 rounded-lg shadow-lg" style={{ backgroundImage: "url('/MessageSvg.svg')" }}>
                    <h2 className="text-3xl text-center font-semibold mb-4">Event images</h2>
                    <p className="text-lg text-center leading-relaxed">

                        Event name/ event description
                    </p>
                </div>
            </section>
            <div className='w-11/12 mx-auto'>
                <ImageGallery />

            </div>

            <section class="flex items-center justify-center">
                <div class="w-11/12 bg-white p-8 rounded-lg shadow-lg" style={{ backgroundImage: "url('/MessageSvg.svg')" }}>
                    <h2 class="text-3xl text-center font-semibold mb-4">Event images</h2>
                    <p class="text-lg text-center leading-relaxed">

                        Event name / event description
                    </p>
                </div>
            </section>

        </>
    )
}

export default page