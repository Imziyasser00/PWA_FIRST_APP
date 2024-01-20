import React, { useState } from 'react'
import './App.css'
import { fetchWeather } from './api/fetchWeather';


const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = async (e) => {
        if(e.key == 'Enter'){
            const data = await fetchWeather(query);
            console.log(query)
            console.log(data);
            setWeather(data);
            setQuery('');
        }
    }

  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='search ...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
        </div>
      )}
    </div>
  )
}

export default App
