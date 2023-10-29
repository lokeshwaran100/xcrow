import  { useState } from 'react'
import { back,copy as copyIcon,copyTick } from '@/assets';
import Image from 'next/image';
import copy from 'clipboard-copy';
import { useStateProvider } from '@/context';
import Loader from '../Loader';

const FormModal = ({setFormModal}) => {
    // using state provider 
    const {mintNft,isLoading}=useStateProvider();
    // to store the form data
    const [formData,setForm]=useState({name:'',amount:'',description:''});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({...formData,[name]:value});
    }

    // a fucntion to deal with the form open and close
    const handleClick=()=>{
        console.log("closing the modal");
        setFormModal(false);
    }
    // a function to handle submit 
    const [hasMint,setHasMint]=useState(false);
    const [tokenId,setTokenId]=useState(null);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setTokenId(await mintNft(formData));
        setHasMint(true);
    }

    // a fucntion to handle copy
    const [copied, setCopied] = useState(false);
    const handleCopy=()=>{
        console.log("You are in copy");
        // a function to generate a random url
        const generateRandomURL = () => {
            // const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            // const urlLength = 10; // You can adjust the URL length as needed.
            
            let randomURL = process.env.NEXT_PUBLIC_URL+"pay/";
            randomURL+=encodeURIComponent(formData.name).toLowerCase().replace(/%20/g, '-')+"/";
            randomURL+=tokenId;
        
            // for (let i = 0; i < urlLength; i++) {
            //   const randomIndex = Math.floor(Math.random() * characters.length);
            //   randomURL += characters.charAt(randomIndex);
            // }
            return randomURL;
          };
        copy(generateRandomURL());
        setCopied(true);
    }

    // to show the loading state
    if(isLoading)
    {
      return <Loader/>
    }
  return (
    <div className='fixed inset-0 flex justify-center  items-center backdrop-blur-sm '>
    <div className="bg-[#131F35] rounded flex justify-center items-center">
      <div className="bg-dark-gray backdrop-blur-3xl pt-14 pb-8 px-10 rounded-lg text-white">
      <div className='fixed inset-0 mx-3 my-3 p-1 rounded-full w-[32px] h-[32px] hover:bg-[#324567] flex justify-center items-center cursor-pointer transition-all duration-300' onClick={handleClick}>
        <Image src={back} alt="back" height={40} width={40}/>
      </div>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className='lg:flex gap-6 justify-between'>
        <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Title
            </label>
            <input
              placeholder='name'
              type="text"
              id="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-[#324567] outline-none rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-lg font-semibold">
              Amount
            </label>
            <input
              placeholder='XDC'
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 bg-[#324567] outline-none rounded"
              required
            />
          </div>
        </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-semibold">
              Description
            </label>
            <textarea
              placeholder='Description'
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 h-32 bg-[#324567] outline-none rounded"
              required
            />
          </div>
          <div className='flex justify-center pt-2'>
          {hasMint?<div className='flex flex-col align-center gap-2'>
            <p className=' font-bold '>Your funds are successfully proccessed</p>
            <button type='button' onClick={handleCopy} className='bg-[#324567] font-semibold flex justify-center gap-5 items-center  text-white text-lg py-2 px-4 rounded hover:opacity-90'>
            <Image className=' transition-all duration-300' src={(copied)?copyTick:copyIcon} alt='copy' height={24} width={24}/>
            <span>{(copied)?'URL Copied':'Copy URL'}</span>
            </button>
          </div>
          :
          <button
            className="bg-[#11E0D1]  text-white text-lg py-2 px-4 rounded hover:opacity-90"
          >
            CreateEscrow
          </button>
          }
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default FormModal