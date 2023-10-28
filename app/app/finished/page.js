'use client'
import React, { useEffect, useState } from 'react'
import DisplayCards from '@/components/DisplayCards'
import { SAMPLE_DATE } from '@/constants'
import { useStateProvider } from '@/context';

const page = () => {
  const {escrowData}=useStateProvider();
  console.log("escrow data",escrowData);
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(escrowData.filter((escrow)=>(escrow.status==="approved")));
    console.log("finished data ",data);
  },[escrowData]);
  return (    
  <main className='flex justify-center w-full'>
  <DisplayCards
    data={SAMPLE_DATE}
  />
  </main>
  )
}

export default page