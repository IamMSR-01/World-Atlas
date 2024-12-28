import React from 'react'
function SearchFilter({ search, setSearch, filteredCountries,  setFilteredCountries, countries, setCountries }) {

    const handleInputChange = (event) => {
        setSearch(event.target.value)
        event.preventDefault()
    }

    const handleSelectChange = (event) => {
        setFilteredCountries(event.target.value)
        event.preventDefault()
    }

    const sortCounties = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common) 
        });
        setCountries(sortCountry)
    }

  return (
    <section className='md:flex justify-between w-[80%] m-auto mt-20'>
        <div>
            <input   
            className="w-[250px] bg-slate-800 bg-opacity-50 m-auto p-2 text-white rounded-md pl-4 border placeholder:text-white" 
            type="text" 
            placeholder="Search for a country"
            value={search} 
            onChange={handleInputChange} 
        />
        </div>

        <button onClick={()=> sortCounties("asc")} className='border p-2 px-5'>Asc</button>
        <button onClick={()=> sortCounties("dec")} className='border p-2 px-5'>Desc</button>

        <div>
            <select 
            className='w-[150px] p-2 border' 
            value={filteredCountries} 
            onChange={handleSelectChange}>
                <option className='bg-black' value="all">All</option>
                <option className='bg-black' value="Africa">Africa</option>
                <option className='bg-black' value="Asia">Asia</option>
                <option className='bg-black' value="Americas">Americas</option>
                <option className='bg-black' value="Europe">Europe</option>
                <option className='bg-black' value="Oceania">Oceania</option>
            </select>
        </div>

    </section>
  )
}

export default SearchFilter