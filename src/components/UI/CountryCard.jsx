import React from 'react'
import { NavLink } from 'react-router-dom';

function Country({ country }) {
  const { name, flags, region, population, capital } = country;
  return (
    <li className='text-white w-[290px] bg-slate-400 bg-opacity-20 p-5 border flex flex-col gap-2 align-middle justify-center m-auto'>
      <div className='gap-4'>
        <div className='h-[120px] w-[200px] m-auto align-middle justify-center flex '>
          <img className='w-full mt-2 ' src={flags.svg} alt={country.name} />
        </div>
        <div className='p-4 mt-2'>
          <h2 className='text-xl font-bold'>{name.common.length > 20 ? country.name.common.slice(0, 10)+'...' : country.name.common}</h2>
          <p className='text-gray-400'>Population : <span className='text-white'>{population.toLocaleString()}</span></p>
          <p className='text-gray-400'>Region : <span className='text-white'>{country.region}</span></p>
          <p className='text-gray-400'>Capital : <span className='text-white'>{country.capital}</span></p>
        </div>
        <NavLink to={`/country/${name.common}`}><button className='bg-green-500 text-white p-2 text-center rounded-tr-xl rounded-bl-xl w-[152px] ml-4 mb-2'>View Details</button></NavLink>
      </div>
    </li>
  )
}

export default Country