import React from 'react'
import Card from '../Card'
import Filter from '../Filter'
import useApiCountries from '../../hooks/useApiCountries'

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
              <Card key={index} 
                country={{
                  title: item.name,
                  flag: item.flags.png,
                  population: item.population,
                  region: item.region,
                  capital: item.capital
                }} 
              />
            )
          })}
        </div>
    </>
  )
}

export default HomePage