import React, { use } from 'react';
import './Countries.css'
import Country from './countries/country.jsx'
const Countries = ({ countriesPromises }) => {
    const countriesData = use(countriesPromises)
    const countries = countriesData.countries
    // console.log(countries)
    // console.log(countries)
    return (
        <div>
            <h1 style={{
                textAlign : 'center'
            }} >countries list </h1>
            <div className='countries' >
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3} ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;