import React from 'react'
import Card from './Card'
import Filter from './Filter'

const HomePage = () => {
  return (
    <>
        <Filter />
        <div className='body__card'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
  )
}

export default HomePage