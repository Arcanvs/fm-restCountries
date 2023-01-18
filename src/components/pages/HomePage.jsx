import { useState, useEffect } from 'react';
import Card from '../Card';
import Filter from '../Filter';
import useApiCountries from '../../hooks/useApiCountries';
import ShowLoading from '../ShowLoading';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [dataApi, setDataApi] = useState([]);
  const [dataApiFiltered, setDataApiFiltered] = useState([]);
  const [filterInput, setFilterInput] = useState(false);
  const [filterSelect, setFilterSelect] = useState(false);
  const [filterInputData, setFilterInputData] = useState('');
  const [filterSelectData, setFilterSelectData] = useState('');
  const [loading, error] = useApiCountries('https://restcountries.com/v2/all', setDataApi);
  
  useEffect(()=>{
    setDataApi(dataApi);
    setDataApiFiltered(dataApi);
  }, [dataApi]);

  if(loading){
    return <ShowLoading message='Load Countries' />
  }

  const handleFilterInput = (newValue) => {
    if(newValue){
      setFilterInput(true);
      setFilterInputData(newValue);
      let countriesFiltered = filterSelect ? 
                              dataApiFiltered.filter(country => country.name.toLowerCase().includes(newValue.toLowerCase())) :
                              dataApi.filter(country => country.name.toLowerCase().includes(newValue.toLowerCase()));
      setDataApiFiltered([...countriesFiltered])
    }else{
      setFilterInput(false);
      setFilterInputData('');
      if(filterSelect){
        let countriesFiltered = dataApi.filter(country => country.region.toLowerCase().includes(filterSelectData.toLowerCase()));
        setDataApiFiltered([...countriesFiltered]) 
      }else{
        setDataApiFiltered(dataApi);  
      }
    }    
  }

  const handleChangeSelect = (newValue) => {
    if(newValue){
      setFilterSelect(true);
      setFilterSelectData(newValue);
      let countriesFiltered = filterInput ? 
                              dataApiFiltered.filter(country => country.region.toLowerCase().includes(newValue.toLowerCase())) :
                              dataApi.filter(country => country.region.toLowerCase().includes(newValue.toLowerCase()));
      setDataApiFiltered([...countriesFiltered])
    }else{
      setFilterSelect(false);
      setFilterSelectData('');
      if(filterInput){
        let countriesFiltered = dataApi.filter(country => country.name.toLowerCase().includes(filterInputData.toLowerCase()));
        setDataApiFiltered([...countriesFiltered])  
      }else{
        setDataApiFiltered(dataApi);
      }
    }
  }
  /*  */
  return (
    <>
        <Filter onChangeFilterInput={handleFilterInput} onChangeFilterSelect={handleChangeSelect} />
        <div className='body__card'>
          {dataApiFiltered.map((item)=>{
            return (
              <Link key={`link_${item.alpha2Code}_${item.area}`} to={`/country/${item.alpha2Code}`} >
                <Card key={`card_${item.alpha2Code}_${item.area}`} 
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