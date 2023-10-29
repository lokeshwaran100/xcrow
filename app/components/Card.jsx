'use client'
import { useStateProvider } from "@/context";

const Card = ({ id ,title, description, valueLocked, status }) => {
  const {confirmPayment}=useStateProvider();
  const handleApprove=()=>{
    console.log("The payment is processed");
    confirmPayment(id);
  }
  return (
    <div className="w-64 h-64 bg-gradient-to-b bg-[#1D2D49] cursor-pointer text-white rounded-lg  shadow-lg hover:scale-105 transition-transform">
      <div className="p-4">
        <h3 className="text-xl h-12 text-center font-semibold mb-2">{title.slice(0,18)}...</h3>
        <p className="text-sm ml-2 text-gray-300 h-20">{description.slice(0,100)}...</p>
      </div>
      <div className=" p-4 flex justify-between items-center">
        <div>
          <p className="text-white">Value Locked:</p>
          <p className="text-lg font-semibold ">{valueLocked} XDC</p>
        </div>
        <button onClick={handleApprove} className="bg-selected text-text  bg-[#11E0D1] hover:bg-[#3EECE0] transition-all hover:scale-105 duration-300  px-4 py-2 rounded-md">
          {(status==='approved')?(status==="rejected")?'Rejected':'Success':'Approve'}
        </button>
      </div>
    </div>
  );
};

export default Card;
