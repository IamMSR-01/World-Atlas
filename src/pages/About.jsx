import React from 'react'
import countries from '../api/country.json'

function About() {
  return (
    <div>
       <div>
        <div className='flex align-middle justify-center mt-10'>
          <h1 className='text-green-500 font-semibold text-2xl sm:font-bold sm:text-4xl xl:text-5xl'>Here are the Interesting Facts </h1>
        </div>
        <h1 className='text-green-500 font-semibold text-2xl flex align-middle justify-center sm:font-bold sm:text-4xl xl:text-5xl'>we are proud of !</h1>
      </div>
      <div className='w-[85%] grid grid-cols-1 gap-2 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-auto mt-10 md:mt-20 align-middle justify-center'>
        {
          countries.map((country)=>{
            const {id, countryName, capital, population, interestingFact} = country
            return(
              <div className='text-white w-[290px] bg-slate-400 bg-opacity-20 p-5 m-5 mx-auto border flex flex-col gap-2' key={id}>
              <h1 className='font-semibold text-xl '>Country : {country.countryName}</h1>
              <h3 className='text-gray-400 font-medium text-lg'>Capital : <span className='text-white text-lg font-medium'>{country.capital}</span></h3>
              <h3 className='text-gray-400 font-medium text-lg'>Population :  <span className='text-white text-lg font-medium'>{country.population}</span> </h3>
              <h3 className='text-gray-400 font-medium text-lg'>Interesting Fact : <span className='text-white text-lg font-medium'>{country.interestingFact}</span> </h3>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About

