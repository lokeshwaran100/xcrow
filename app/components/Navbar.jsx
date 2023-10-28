'use client'
import React,{ useState,useCallback } from 'react'
import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import { disconnect as disconnectIcon } from '@/assets'
import FormModal from './Modals/FormModal'
import { useWalletContext } from '@/context/Web3ModalProvider'

const Navbar = () => {
    // getting the context from the wallet 
    const { account, connect, disconnect, connected } = useWalletContext();

    // a function to handle the create form
    const [formModal,setFormModal]=useState(false);
    const handleModal=()=>{
      setFormModal(true);
    }

    // a function to handle connection
    const handleConnect = useCallback(() => {
      connect();
    }, [connect]);

    // a function to disconnect
    const handleDisconnect = useCallback(() => {
      disconnect();
    }, [disconnect]);

  return (
    <>
    <div className='bg-[#060E1F] flex justify-between items-center p-4 mx-4'>
        <div>
        <Link href="/">
        <Image src={logo} alt="logo" width={40} height={40}/>
        </Link>
        </div>
        {connected?<div className='flex justify-between items-center gap-4'>
          <button className='bg-[#11E0D1] px-4 py-2 rounded' onClick={handleModal}>Create Service</button>
          <div className='p-2 hover:bg-[#B0C5E7] transition-all duration-300 cursor-pointer rounded-full flex justify-center items-center'>
          <Image className=' ' onClick={handleDisconnect} src={disconnectIcon} alt="disconnect" height={32} width={32}/>
          </div>
        </div>:<button onClick={handleConnect} className='bg-[#11E0D1] px-4 py-2 rounded'>Connect</button>}
    </div>
    {
      formModal&&<FormModal
      setFormModal={setFormModal}
      />
    }
    </>
  )
}

export default Navbar