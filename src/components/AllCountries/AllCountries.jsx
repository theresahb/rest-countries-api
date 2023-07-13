import React, { useState } from 'react';
import data from '../../data/data.json';
import Countries from '../Countries/Countries';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

const AllCountries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectRegion, setSelectRegion] = useState('');

  const filteredCountries = data
    .map((country, index) => ({ ...country, index: country.name }))
    .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(country => selectRegion ? country.region === selectRegion : true)
    // && selectRegion ? country.region === selectRegion : true 
  ;


  return (
    <div className="main flex">
      <div className="search-filter flex">
        <Search setSearchTerm={setSearchTerm} />
        <Filter selectRegion={selectRegion} setSelectRegion={setSelectRegion} />
      </div>
      <main className="all-countries">
        {filteredCountries.map((country, index) => (
          <Link to={`/${country.index}`} className="country-link" key={index}>
            <Countries country={country} index={country.index} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default AllCountries;
