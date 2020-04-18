import React, { useState, useEffect} from 'react';

import {Cards, Chart, CountryPicker, Footer} from './components/';
import './App.module.css'

import {fetchData} from './api/api';

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('');

  useEffect(()=> {

    const fetchAPI = async () => {
      setData(await fetchData());
    }
    
    fetchAPI()
  }, [])

  const handleCountryChange = async (country) => {
    setData(await fetchData(country))
    setCountry(country);
  }

  return (
    <div className="container">
      <div className="jumbotron mt-1 text-center text-primary bg-white">
          <h3 className="font-weight-bold">COVID-19 Tracker</h3>
      </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange}/>
        <div className="container bg-white rounded my-4">
          <Chart data={data} country={country}/>
        </div>
      <Footer />
    </div>
  )
}

export default App;
