import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Introducing About our team</h2>
                <p className='text-3xl py-6 text-gray-500'>Track Front End </p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-gray-400 mt-2'>Farrel Elghifari Putratama</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-gray-400 mt-2'>Muhammad Ega Abdan S</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-gray-400 mt-2'>Ridwan Septiawan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About