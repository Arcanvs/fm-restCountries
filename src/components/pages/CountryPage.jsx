import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useApiCountries from '../../hooks/useApiCountries';
import ShowLoading from '../ShowLoading';

const CountryPage = () => {
    // Capturar parametro URL
    const { capital } = useParams();
    const [dataApi, setDataApi] = useState([]);
    const [loading, error] = useApiCountries(`https://restcountries.com/v2/capital/${capital}`, setDataApi);
    
    useEffect(()=>{
        setDataApi(dataApi);
      }, [dataApi]);
    
      if(loading){
        return <ShowLoading message='Load Country' />
      }


    return (
        <>
            <div className='body__country'>
                <div className='country__button'>
                    <button>
                        <Link to="/" >
                            <ion-icon name="arrow-back-outline"></ion-icon>    
                            Back
                        </Link>
                    </button>
                </div>
                <div className='country__detail'>
                    <div className='detail__flag'>
                        <div>
                            <img src={dataApi[0].flags.svg} />
                        </div>
                    </div>
                    <div className='datail__info'>
                        <div className='info__title'>
                            <h2>{dataApi[0].name}</h2>
                        </div>
                        <div className='info__list'>
                            <ul>
                                <li>
                                    <span>Native Name:</span>
                                    <span>{dataApi[0].nativeName}</span>
                                </li>
                                <li>
                                    <span>Population:</span>
                                    <span>{dataApi[0].population.toLocaleString()}</span>
                                </li>
                                <li>
                                    <span>Region:</span>
                                    <span>{dataApi[0].region}</span>
                                </li>
                                <li>
                                    <span>Sub Region:</span>
                                    <span>{dataApi[0].subregion}</span>
                                </li>
                                <li>
                                    <span>Capital:</span>
                                    <span>{dataApi[0].capital}</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Top Level Domain:</span>
                                    <span>{dataApi[0].topLevelDomain[0]}</span>
                                    <span>
                                        {dataApi[0].topLevelDomain.map((domain, index) => {
                                            return index === 0 ? `${domain}` : `, ${domain}`
                                        })}
                                    </span>
                                </li>
                                <li>
                                    <span>Currencies:</span>
                                    <span>
                                        {dataApi[0].currencies.map((currency, index) => {
                                            return index === 0 ? `${currency.code}` : `, ${currency.code}`
                                        })}
                                    </span>
                                </li>
                                <li>
                                    <span>Languages:</span>
                                    <span>
                                        {dataApi[0].languages.map((language, index) => {
                                            return index === 0 ? `${language.name}` : `, ${language.name}`
                                        })}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='info__border'>
                            <span>Border Countries:</span>
                            <ul>
                                {dataApi[0].borders.map((border) => {
                                    return <li>{border}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryPage