'use client'
import DisplayCards from '@/components/DisplayCards';
import Loader from '@/components/Loader';
import { SAMPLE_DATE } from '@/constants';
import { useStateProvider } from '@/context';
import { useWalletContext } from '@/context/Web3ModalProvider';
import { useEffect, useState } from 'react';

export default function Home() {
  // fetching the list of escrows
  const {escrowData,isLoading,connected}=useStateProvider();
  const {account}=useWalletContext();
  console.log("escrow data",escrowData);
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(escrowData.filter((escrow)=>(escrow.client===account)).filter((escrow)=>(escrow.status==="pending")));
    console.log("pending data",data);
  },[escrowData,connected]);

  if(!connected)
  {
    return <div className='flex w-full h-[100vh] justify-center font-bold text-[#11E0D1] text-2xl items-center pb-32 pr-32'>
    Please connect you wallet
  </div>
  }
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
