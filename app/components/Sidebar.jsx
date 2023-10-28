
'use client'
import { NAV_ICONS } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
    // a state to store the active state of the sidebar
    const [active,setActive]=useState('assignment');
    const router=useRouter();
    // a funciton to handle the navigation
    const handleNavigate=(link)=>{
        setActive(link.label)
        router.push(link.link);
    }
  return (
    <div
    className="md:flex h-[100vh] min-w-[250px] md:flex-col gap-10 hidden px-5 py-5 lg:flex lg:flex-col bg-[#101D32]"
    >
      {
        NAV_ICONS.map((link)=>{
            return (
                <div onClick={()=>handleNavigate(link)} className={`flex px-3 rounded-lg py-2 gap-5 ${link.label===active&&'bg-[#2A3E5A]'} justify-start items-center hover:bg-[#2A3E5A] cursor-pointer transition-all duration-300 text-[#B0C5E7] hover:text-white`}>
                <Image src={link.image} alt={link.label} width={36} height={36}/>
                <p className=" ">{link.label}</p>
                </div>
            )
        })
      } 
    </div>
  )
}

export default Sidebar;