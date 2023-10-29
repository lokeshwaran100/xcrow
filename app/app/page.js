'use client'
import DisplayCards from '@/components/DisplayCards';
import Loader from '@/components/Loader';
import { SAMPLE_DATE } from '@/constants';
import { useStateProvider } from '@/context';
import { useEffect, useState } from 'react';

export default function Home() {
  // fetching the list of escrows
  const {escrowData,isLoading}=useStateProvider();
  console.log("escrow data",escrowData);
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(escrowData.filter((escrow)=>(escrow.status==="pending")));
    console.log("pending data",data);
  },[escrowData]);

  if(isLoading)
  {
    return <Loader/>
  }
  return (
    <main className='flex justify-center w-full'>
    <DisplayCards
      data={data}
    />
    </main>
  )
}
