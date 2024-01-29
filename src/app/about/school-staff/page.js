import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';
import AboutFacultyCard from '@/components/AboutFacultyCard/AboutFacultyCard';

export default function page() {

    return (
        <>
            <main className="w-full min-h-full flex flex-col p-5  justify-center items-center dark:bg-dblue bg-[url('/MessageSvg.svg')]">
                <div className="w-full flex flex-col justify-center items-center mt-9">
                    <h1 className='text-3xl p-3 text-center  font-bold'>FACULTY AT THE SCHOOL</h1>
                    <h2 className=' text-center text-4xl mt-5 font-extrabold text-tblue'>Pratibha Global School, Bhaurasa</h2>
                    <h3 className=' text-center text-2xl mt-2 font-semibold text-tblue'>SESSION 2024-25</h3>
                    <div className='w-11/12 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 lg:gap-5 md:gap-4  lg:p-5 mt-2'>
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />
                        <AboutFacultyCard img="/MessageImg.png" name="Faculty name " post="Faculty post, post" />


                    </div>

                </div>
            </main>
        </>
    )
}