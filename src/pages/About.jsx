import React from 'react'
import countries from '../api/country.json'

function About() {
  return (
    <div>
       <div>
        <div className='flex align-middle justify-center mt-10'>
          <h1 className='text-green-500 font-bold text-4xl'>Here are the Interesting Facts </h1>
        </div>
        <h1 className='text-green-500 flex align-middle justify-center font-bold text-4xl'>we are proud of !</h1>
      </div>
      <div className='w-[80%] m-auto flex align-middle justify-center mt-10 flex-wrap shadow-2xl'>
        {
          countries.map((country)=>{
            const {id, countryName, capital, population, interestingFact} = country
            return(
              <div className='text-white w-[290px] bg-slate-400 bg-opacity-20 p-5 m-5 border flex flex-col gap-2' key={id}>
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

