import React from 'react';
import "../conStyle.css";
const Country = ({country}) => {
    // console.log(country.flags.flags.png)
    return (
        <div className='country' >
            <h3>country Name:{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p style={{
                fontWeight: 'bold'
            }}>Populations: {country.population.population}</p>
        </div>
    );
};

export default Country;