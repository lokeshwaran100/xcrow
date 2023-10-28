import React from 'react'
import DisplayCards from '@/components/DisplayCards'
import { SAMPLE_DATE } from '@/constants'

const page = () => {
  return (    
  <main className='flex justify-center w-full'>
  <DisplayCards
    data={SAMPLE_DATE}
  />
  </main>
  )
}

export default page