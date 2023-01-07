import React from 'react'

const SelectorFilter = () => {
  return (
    <div className='select__content'>
        <select name="select">
            <option value="" disabled selected>Filter by Region</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
        </select> 
    </div>
  )
}

export default SelectorFilter