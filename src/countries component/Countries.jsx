import React, { use } from 'react';
import Country from './countries/country.jsx'
const Countries = ({countriesPromises}) => {
    const countriesData =use (countriesPromises)
    const countries=countriesData.countries
    // console.log(countries)
    return (
        <div>
            <h1>countries list </h1>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        
        </div>
    );
};

export default Countries;