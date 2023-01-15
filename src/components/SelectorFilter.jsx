import React from 'react'
import { useState, useRef } from 'react';

const SelectorFilter = ({onChangeSelect}) => {
  const [regiones, setRegiones] = useState(['Africa','America','Asia','Europe','Oceania']);
  const [regionSelected, setRegionSelected] = useState(null);
  const detailsRef = useRef(null);
  
  const handleClick = (index) => {
    if(regionSelected === index){
      setRegionSelected(null);
      onChangeSelect('');
      detailsRef.current.removeAttribute("open");
    }else{
      setRegionSelected(index);
      onChangeSelect(regiones[index]);
      detailsRef.current.removeAttribute("open");
    }
  };
  
  return (
    <div className='select__content'>
        <details ref={detailsRef}>
            <summary>
                Filter by { regionSelected != null ? regiones[regionSelected] : 'Region' } 
                <ion-icon name="chevron-down-outline"></ion-icon>
            </summary>
            <ul>
              {
                regiones.map((region, index) => (
                  <li key={index} 
                      onClick={() => handleClick(index)}
                      style={{backgroundColor: regionSelected === index ? 'lightgray' : 'white'}}                  
                  >{region}</li>
                ))
              }
            </ul>
        </details>
    </div>
  )
}

export default SelectorFilter