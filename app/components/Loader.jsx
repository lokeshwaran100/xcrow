import React from 'react'
import { loader } from '@/assets'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col'>
    <Image className='w-[100px] h-[100px]' src={loader} alt="loading" />
    <p className='mt-[20px] font-bold text-[20px] text-white text-center'>Transaction is in progress <br/> Please wait...</p>
    </div>
  )
}

export default Loader;