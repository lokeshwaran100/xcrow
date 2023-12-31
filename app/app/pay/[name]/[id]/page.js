'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation';
import { SAMPLE_DATE } from '@/constants'
import { useStateProvider } from '@/context';
import { useWalletContext } from '@/context/Web3ModalProvider';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';

const page = () => {
    const {name,id}=useParams();
    const {lockFunds,connected,isLoading,escrowData}=useStateProvider();
    const {connect}=useWalletContext();
    const [data,setData]=useState(null);
    const router=useRouter();

    useEffect(()=>{
      if(escrowData&&escrowData.length>0)
      {
        setData(escrowData.filter((escrow)=>(escrow.tokenId===id.toString())));
        console.log("from the escrow data",data);
      }
      else{
        console.log("escrow data is empty");
      }
    },[escrowData])

    // a function to connect the walletconnect
    const handleConnect = useCallback(() => {
        connect();
      }, [connect]);

    // a function to lock funds
    const handlePay=async()=>{
        await lockFunds(data[0]);
        router.push("/")
    }
    console.log("data",data);

    if(data===null||data.length===0)
    {
      return <Loader/>
    }
  return (
    <div className='fixed inset-0 flex justify-center  items-center backdrop-blur-sm '>
    <div className="bg-[#131F35] rounded flex justify-center items-center">
      <div className="bg-dark-gray backdrop-blur-3xl pt-7 pb-8 px-10 rounded-lg text-white">
      <div className='fixed inset-0 mx-3 my-3 p-1 rounded-full w-[32px] h-[32px] hover:bg-[#324567] flex justify-center items-center cursor-pointer transition-all duration-300' >
      </div>
        <h1 className=' font-bold text-2xl py-4 text-center w-full'>{data[0].name}</h1>

          <div className="mb-4">
            <label htmlFor="description" className="block text-[#B0C5E7] text-lg font-semibold">
              Description
            </label>
            <p
              className="w-[300px] p-2 h-32 bg-[#324567] outline-none rounded break-words"
            >{data[0].description.slice(0,100)}...</p>
          </div>
          <div className='lg:flex gap-6 justify-between '>
        <div className="mb-4 flex items-center justify-center gap-2">
            <label htmlFor="name" className="block text-[#B0C5E7] text-lg font-semibold">
              TokenId:
            </label>
            <p
              className="w-full text-center outline-none  font-semibold rounded"
            >{data[0].tokenId}</p>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <label htmlFor="amount" className="block text-[#B0C5E7] text-lg font-semibold">
              Amount:
            </label>
            <p
              className="w-full  outline-none font-semibold rounded"
            > {data[0].amount} XDC</p>
          </div>
        </div>
          <div className='flex justify-center pt-2'>
          {
            !connected?<button className='bg-[#11E0D1]  text-white text-lg py-2 px-4 rounded hover:opacity-90' onClick={handleConnect}>
                Connect
            </button>:<button
            className="bg-[#11E0D1]  text-white text-lg py-2 px-4 rounded hover:opacity-90"
            onClick={handlePay}
          >
            Pay
          </button>
          }
          </div>
      </div>
    </div>
    </div>  )
}

export default page