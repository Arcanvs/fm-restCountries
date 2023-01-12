import React from 'react'

const SelectorFilter = () => {
  return (
    <div className='select__content'>
        <details>
            <summary>
                Filter by Region 
                <ion-icon name="chevron-down-outline"></ion-icon>
            </summary>
            <ul>
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
            </ul>
        </details>
    </div>
  )
}

export default SelectorFilter