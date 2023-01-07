import { useState } from 'react'
import CountriesTemplate from './components/CountriesTemplate';
import Navbar from './components/Navbar'
import './styles/main.scss';

function App() {

  return (
    <div className="App">
      <div className="countries">
        <Navbar />
        <CountriesTemplate />
      </div>
    </div>
  )
}

export default App
