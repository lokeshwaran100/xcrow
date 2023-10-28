import dbConnect from "@/utils/conDB";
import Escrow from "@/models/Escrow";
import { NextResponse } from "next/server";


export async function POST(req,res){
    try {
        const data=await req.json();
        // console.log(data);
        await dbConnect();
        const escrow = await Escrow.findOne({ tokenId: data.tokenId});
      
        if (!escrow) {
          return NextResponse.json({ message: 'escrow not found' });
        }
      
        // Add the participant to the Participants array
        escrow.client=data.account;
      
        // Save the updated ChitFund
        await escrow.save();
      
        return NextResponse.json({
          message:"successfully approved"
        },{
          status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message:error
          },{
            status: 500
          })
    }

}
