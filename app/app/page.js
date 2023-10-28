'use client'
import DisplayCards from '@/components/DisplayCards';
import { SAMPLE_DATE } from '@/constants';
import { useStateProvider } from '@/context';
import { useEffect, useState } from 'react';

export default function Home() {
  // fetching the list of escrows
  const {escrowData}=useStateProvider();
  console.log("escrow data",escrowData);
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(escrowData.filter((escrow)=>(escrow.status!=="approved")));
    console.log("pending data",data);
  },[escrowData]);
  return (
    <main className='flex justify-center w-full'>
    <DisplayCards
      data={SAMPLE_DATE}
    />
    </main>
  )
}
