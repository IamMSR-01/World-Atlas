import { useEffect, useState, useTransition } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { getIndCountry } from '../api/axios';
import Country from './Country';

function CountryDetails() {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountry(params.id)
      setCountry(res)

    })
  }, []);

  if (isPending) return <span class="loader"></span>;

  return (
    <div>
      {
        country.map((item, index) => {
          return (
            <div className='text-white md:flex flex-col items-center mt-10 w-[80%] gap-2 2xl:gap-5 m-auto 2xl:p-8 border shadow-2xl'>
              <div key={index} className='lg:flex items-center 2xl:mt-10 w-[80%] gap-10 2xl:gap-20 m-auto lg:p-8'>
                <div className='xl:w-[50%] flex items-center justify-center mt-6'>
                  <img src={item.flags.svg} alt={item.name} />
                </div>
                <div className='flex flex-col gap-3 mt-4 xl:w-[50%]'>
                  <h1 className='text-gray-400 font-normal sm:font-semibold sm:text-2xl text-xl '>Country : <span className=' sm:text-2xl text-white font-semibold '>{item.name.official}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Capital : <span className=' sm:text-2xl text-white font-semibold '>{item.capital}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Population : <span className=' sm:text-2xl text-white font-semibold '>{item.population}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Currency : <span className=' sm:text-2xl text-white font-semibold '>{Object.values(item.currencies)[0].name}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Currency Symbol : <span className=' sm:text-2xl text-white font-semibold'>{Object.values(item.currencies)[0].symbol}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Language : <span className=' sm:text-2xl text-white font-semibold '>{Object.values(item.languages)[0]}</span> </h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Region : <span className=' sm:text-2xl text-white font-semibold '>{item.region}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Subregion : <span className=' sm:text-2xl text-white font-semibold '>{item.subregion}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Borders : <span className='text-lg sm:text-2xl text-white font-medium '>{item.borders + " "}</span></h1>
                  <h1 className='text-gray-400 sm:font-semibold sm:text-2xl font-sm text-xl'>Top Level Domain : <span className=' sm:text-2xl text-white font-semibold '>{item.tld}</span></h1>
                </div>

              </div>
              <NavLink to={`/Country/`}><button className='bg-green-500 text-white p-2 mt-6 text-center rounded-tr-xl text-xl font-semibold rounded-bl-xl w-[152px] ml-8 mb-6'>Back</button></NavLink>
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryDetails