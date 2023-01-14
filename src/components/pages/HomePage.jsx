import React from 'react'
import Card from '../Card'
import Filter from '../Filter'
import useApiCountries from '../../hooks/useApiCountries'
import { Link } from 'react-router-dom';

const HomePage = () => {
  const {data, error, loading } = useApiCountries('https://restcountries.com/v2/all');
  
  if(loading){
    return <div>loading data</div>
  }
  /* if(error){
    
    console.log('ERROR API ;;; ', error);
  } */
  return (
    <>
        <Filter />
        <div className='body__card'>
          {data.map((item, index)=>{
            return (
              <Link to={`/country/${item.capital}`} >
                <Card key={index} 
                  country={{
                    title: item.name,
                    flag: item.flags.png,
                    population: item.population,
                    region: item.region,
                    capital: item.capital
                  }} 
                />
              </Link>
            )
          })}
        </div>
    </>
  )
}

export default HomePage