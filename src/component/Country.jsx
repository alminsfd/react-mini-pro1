import React, { useState } from 'react';
import "./conStyle.css";
const Country = ({country,visitedCountriesBtn,visitedFlagbtn}) => {
    // console.log(country.area.area)
   const [visited,setVisited]= useState(false)
    const visitedBtn=()=>{
       //first system
    //    if( visited){
    //     setVisited(false)
    //    }
    //    else{
    //     setVisited(true)
    //    }
    //second system
    // visited?setVisited(false):setVisited(true)
    // third system
    setVisited(!visited)
    visitedCountriesBtn(country)

    }
    return (
        <div className={`country ${visited && "country-visited"}`} >
            <h3>country Name:  {country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p style={{
                fontWeight: 'bold'
            }}>Populations: {country.population.population}</p>
            <p className='font_bold'>Area:{country.area.area} {country.area.area>300000?"Big country":"small country"}</p>
            <button onClick={visitedBtn}>{visited? "Visited":"Not Visited"}</button>
            <button onClick={()=>{visitedFlagbtn(country.flags.flags.png)}} > visited flag </button>
        </div>
    );
};

export default Country;