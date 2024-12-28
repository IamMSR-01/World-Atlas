import React from 'react'
import { NavLink } from 'react-router-dom'
import homeCountirs from '../api/homeCountry.json'
function Home() {
  return (
    <div className=''>
      <div className='2xl:flex xl:flex lg:flex md:flex align-middle justify-center w-[75%] mx-auto mt-10'>
        <div className='w-[50%] lg:w-[50%] sm:w-[100%] text-white mt-10 p-10'>
          <h1 className='font-bold text-4xl'>Explore the World, one <br /> country at a time !</h1>
          <p className='text-xl mt-8'>Discover the history, culture, and beauty of <br />every nation. Sort, search, and filter <br />through countries to find the <br />details you need.</p>
          <NavLink to="./about"><button className='bg-green-500 p-2 rounded-lg mt-10 font-semibold text-lg gap-5 flex'>Start Exploring</button>
          </NavLink>
        </div>
        <div className='w-[600px] h-[500px] object-fill p-10'>
          <img className='w-[100%] h-[100%] rounded-3xl' src="https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
      <h1 className='text-green-500 mt-9 font-bold text-5xl flex justify-center align-middle'>Here are the interesting facts </h1>
      <h1 className='text-green-500 mt-3 font-bold text-5xl flex justify-center align-middle'>we're proud of ! </h1>
      <div className='w-[80%] m-auto flex align-middle justify-center mt-16 flex-wrap shadow-2xl'>
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