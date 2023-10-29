import dbConnect from "@/utils/conDB";
import { NextResponse } from "next/server";
import Escrow from "@/models/Escrow";

export const revalidate = 0;

export async function GET(req, res) {
    try{
        await dbConnect();  
        const data=await Escrow.find();
        return NextResponse.json({
            message:data
        },{
            status:200
        });
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message:"There was some form of a error"
        },{
            status:500
        });
    }
}