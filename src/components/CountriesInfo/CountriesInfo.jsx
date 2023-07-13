import React from 'react'
import data from '../../data/data.json'
import { Link, useParams } from 'react-router-dom'

const CountriesInfo = () => {
    const { index } = useParams();
    // const country = data[index];
    const country = data.map((count, index) => ({...count, index: count.name}));
    const cout = country.find(country => country.index === index);

    if (!country) {
        return (
        <div>
            <p>Country not found</p>
            <Link to="/">Go back to All Countries</Link>
        </div>
        );
    }

    const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = cout;
    return (
        <div className="country-info">
            <div className="more-info flex" key={name}>
                <Link to='/' className='back-link'>
                    <div className="back flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l4 4"></path>
                            <path d="M5 12l4 -4"></path>
                        </svg>
                        <p>Back</p>
                    </div>
                </Link>
                <div className="country-details flex">
                    <div className="flag-image">
                        <img src={flags.png} alt="" />
                    </div>
                    <div className="info flex">
                        <h2>{name}</h2>
                        <div className="more flex">
                            <div className="info-texts">
                                <h4>Native Name: <p>{nativeName}</p></h4>
                                <h4>Population: <p>{new Intl.NumberFormat().format(population)}</p></h4>
                                <h4>Region: <p>{region}</p></h4>
                                <h4>Sub Region: <p>{subregion}</p></h4>
                                <h4>Capital:
                                    {capital && capital !== null ? (
                                        <p>{capital}</p>
                                    ) : (
                                        <p>No capital available</p>
                                    )
                                    } 
                                </h4>
                            </div>
                            <div className="info-texts">
                                <h4>Top Level Domain: <p>{topLevelDomain}</p></h4>
                                <h4>Currencies: {currencies && currencies.length > 0 ? (
                                    currencies.map((currency, index) => (
                                        <p key={index}>{currency.name}</p>
                                    ))
                                    ) : (
                                    <p>No currencies available</p>
                                    )}
                                </h4>
                                <h4>Languages: 
                                    {languages.map((language, index) => {
                                        return (
                                            <div className='cfx flex'>
                                                
                                                <p>{index > 0 && ","}{language.name}</p>
                                            </div>
                                        )
                                    })}
                                </h4>
                            </div>
                        </div>
                        <div className="border flex">
                            <h4>Border Countries: {borders && borders.length > 0 ? (
                                borders.map((border, index) => (
                                    <p key={index}>{border}</p>
                                ))
                                ) : (
                                <p>No borders available</p>
                                )}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesInfo
