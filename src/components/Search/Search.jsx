import React from 'react'

const Search = ( {setSearchTerm} ) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  
  return (
    <form action="#" className='form flex'>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
      <input type="search" name="" id="" placeholder='Search for a country...' onChange={handleSearch} />
    </form>
  )
}

export default Search