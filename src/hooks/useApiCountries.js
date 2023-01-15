import { useEffect, useState } from "react";

const useApiCountries = (url, setDataApi) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataApi(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, setDataApi])

    return [loading, error];
}
export default useApiCountries;