import React from 'react'

const Countries = ( {country, index} ) => {
    const { flags, name, population, region, capital } = country;
    return (
        <div className='country flex'>
            <div className="flag">
                <img src={flags.svg} alt="" />
            </div>
            <div className="country-text flex">
                <div className="country-name">
                    <h3>{name}</h3>
                </div>
                <div className="country-subtext flex">
                    <h4>Population: <p>{new Intl.NumberFormat().format(population)}</p></h4>
                    <h4>Region: <p>{region}</p></h4>
                    <h4>Capital:
                        {capital && capital !== null ? (
                            <p>{capital}</p>
                        ) : (
                            <p>No capital available</p>
                        )
                        } 
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Countries