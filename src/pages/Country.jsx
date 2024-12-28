import React, { startTransition, useEffect, useState, useTransition } from 'react'
import { getCountry } from '../api/axios';
import CountryCard from '../components/UI/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

function Country() {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filteredCountries, setFilteredCountries] = useState("all");

  useEffect(()=> {
    startTransition(async()=>{
    const response = await getCountry()
    setCountries(response)

    })
  },[]);

  if (isPending) return <span class="loader"></span>

  const searchCountry = (country) => {

    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }

  const filterCountriesRegion = (country) => {
    if(filteredCountries === "all") return true;
    return country.region === filteredCountries;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterCountriesRegion(country));

  return (
    <section>
      <div>
        <SearchFilter
        search={search}
        setSearch={setSearch}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
        countries={countries}
        setCountries={setCountries}
        />
      </div>
     <ul className='w-[80%] grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-auto mt-20 align-middle justify-center'>
        {
          filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default Country