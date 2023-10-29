'use client'
import React, { useEffect, useState } from 'react'
import DisplayCards from '@/components/DisplayCards'
import { SAMPLE_DATE } from '@/constants'
import { useStateProvider } from '@/context';
import Loader from '@/components/Loader';

const page = () => {
  const {escrowData,isLoading}=useStateProvider();
  console.log("escrow data",escrowData);
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(escrowData.filter((escrow)=>(escrow.status==="approved")));
    console.log("finished data ",data);
  },[escrowData]);

  if(isLoading)
  {
    return <Loader/>;
  }
  return (    
  <main className='flex justify-center w-full'>
    <DisplayCards
      data={data}
    />
  </main>
  )
}

export default page