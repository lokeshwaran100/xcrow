import React from 'react'
import Card from './Card'

const DisplayCards = ({data}) => {

  return (
    <div className=' py-8 grid lg:grid-cols-4 md:grid-cols-2 place-content-start grid-cols-1 gap-8'>
    {
        data.map((data)=>{
            return <Card
                key={data.name}
                title={data.name}
                description={data.Description}
                valueLocked={data.amount}
            />
        })
    }
    </div>
  )
}

export default DisplayCards