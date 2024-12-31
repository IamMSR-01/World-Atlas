import React from 'react'
import { NavLink } from 'react-router-dom'
import homeCountirs from '../api/homeCountry.json'
function Home() {
  return (
    <div className=''>
      <div className='2xl:flex xl:flex align-middle justify-center w-[95%] mx-auto mt-10 xl:mt-20'>
        <div className='w-[100%] sm:w-[100%] lg:w-[90%] m-auto text-white mt-6 p-4 lg:mx-14 xl:mx-0 xl:w-[100%] 2xl:w-[75%] xl:p-0'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl 2xl:text-5xl sm:mx-5 md:mx-9 xl:mt-8'>Explore the World, one <br /> country at a time !</h1>
          <p className='text-medium mt-4 sm:text-lg md:text-xl sm:mx-5 md:mx-9 xl:mt-6'>Discover the history, culture, and beauty of <br />every nation. Sort, search, and filter <br />through countries to find the <br />details you need.</p>
          <NavLink to="./about"><button className='bg-green-500 p-2 rounded-lg mt-10 font-semibold text-lg gap-5 flex sm:mx-5 md:mx-9 xl:mt-12'>Start Exploring</button>
          </NavLink>
        </div>
        <div className='w-[100%] object-fill xl:pr-6'>
          <img className='w-[100%] md:w-[90%] lg:w-[80%] xl:w-[100%] m-auto h-[400px] rounded-3xl xl:mr-5' src="https://images.pexels.com/photos/4441989/pexels-photo-4441989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
      <h1 className='text-green-500 mt-7 font-bold text-2xl flex justify-center align-middle sm:text-3xl md:text-4xl md:mt-10 xl:mt-20 lg:text-5xl'>Here are the interesting facts </h1>
      <h1 className='text-green-500 mt-1 font-bold text-2xl flex justify-center align-middle sm:text-3xl md:text-4xl xl:text-5xl'>we're proud of ! </h1>
      <div className='w-[80%] md:w-[90%] m-auto flex align-middle justify-center mt-6 flex-wrap shadow-2xl'>
        {
          homeCountirs.map((country) => {
            const { id, countryName, capital, population, interestingFacts } = country
            return (
              <div className='text-white w-[290px] bg-slate-400 bg-opacity-20 p-5 m-5 border align-middle justify-center flex flex-col gap-2' key={id}>
                <h1 className=' text-gray-400 font-medium text-lg '>Country : <span className='text-white text-xl font-medium'>{country.countryName}</span></h1>
                <h3 className='text-gray-400 font-medium text-lg'>Capital : <span className='text-white text-lg font-medium'>{country.capital}</span></h3>
                <h3 className='text-gray-400 font-medium text-lg'>Population :  <span className='text-white text-lg font-medium'>{country.population}</span> </h3>
                <h3 className='text-gray-400 font-medium text-lg'>Interesting Fact : <span className='text-white text-lg font-medium'>{country.interestingFacts}</span> </h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home