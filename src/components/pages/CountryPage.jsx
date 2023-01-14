import { useParams } from 'react-router-dom';

const CountryPage = () => {
    // Capturar parametro URL
    const { capital } = useParams();
  
    return (
        <>
            <div className='body__country'>
                <div className='country__button'>
                    <button>
                        <ion-icon name="arrow-back-outline"></ion-icon>    
                        Back
                    </button>
                </div>
                <div className='country__detail'>
                    <div className='detail__flag'>
                        flag
                    </div>
                    <div className='datail__info'>
                        <div className='info__title'>
                            <h2>Belgium</h2>
                        </div>
                        <div className='info__list'>
                            <ul>
                                <li>
                                    <span>Native Name:</span>
                                    <span>Belgie</span>
                                </li>
                                <li>
                                    <span>Population:</span>
                                    <span>11,319,511</span>
                                </li>
                                <li>
                                    <span>Region:</span>
                                    <span>Europe</span>
                                </li>
                                <li>
                                    <span>Sub Region:</span>
                                    <span>Western Europe</span>
                                </li>
                                <li>
                                    <span>Capital:</span>
                                    <span>Brussels</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Top Level Domain:</span>
                                    <span>be</span>
                                </li>
                                <li>
                                    <span>Currencies:</span>
                                    <span>Euro</span>
                                </li>
                                <li>
                                    <span>Languages:</span>
                                    <span>Dutch, French, German</span>
                                </li>
                            </ul>
                        </div>
                        <div className='info__border'>
                            <span>Border Countries:</span>
                            <ul>
                                <li>France</li>
                                <li>Germany</li>
                                <li>Netherlands</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryPage