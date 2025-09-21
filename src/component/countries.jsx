import React, { use, useState } from 'react';
import './Countries.css'
import Country from "./Country.jsx"
const Countries = ({ countriesPromises }) => {
    const countriesData = use(countriesPromises)
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    const visitedCountriesBtn = (country) => {
        // console.log("btn was clicked",country)
        setVisitedCountries([...visitedCountries, country])
        //    console.log(visitedCountries)
    }
    // console.log(countries)
    // console.log(countries)
    const visitedFlagbtn = (flag) => {
        setVisitedFlag([...visitedFlag, flag])

    }
    return (
        <div>
            <h1 style={{
                textAlign: 'center'
            }} >countries list of {countries.length}</h1>
            <h3>Total country visited:{visitedCountries.length}</h3>
            <h4>Total flag visited {visitedFlag.length}</h4>
            <div>
                {visitedFlag.map((flag,idx) =>
                    <img  className='flag-style' src={flag} key={idx}/>

                )}
            </div>
            <ol>
                {
                    visitedCountries.map(visitedcountry => <li key={visitedcountry.cca3.cca3} >{
                        visitedcountry.name.common}  </li>)
                }
            </ol>
            <div className='countries' >
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3} visitedCountriesBtn={visitedCountriesBtn} visitedFlagbtn={visitedFlagbtn}  ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;