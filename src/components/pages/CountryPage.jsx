import { useParams } from 'react-router-dom';

const CountryPage = () => {
    // Capturar parametro URL
    const { capital } = useParams();
  
    return (
    <div>CountryPage</div>
  )
}

export default CountryPage