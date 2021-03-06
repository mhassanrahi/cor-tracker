import React, {useState, useEffect} from 'react';
import { fetchCountries } from '../../api/api';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setCountries]) 
    return (
        <div>
            <select className="form-control" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map((country, i) => (
                        <option key={i} value={country}>{country}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CountryPicker;
