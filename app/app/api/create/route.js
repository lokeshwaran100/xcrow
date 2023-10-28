import dbConnect from "@/utils/conDB";
import Escrow from "@/models/Escrow";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        await dbConnect();
        // fetch the data from the api route
        const data=await req.json();
  
        // Save the document to the database
        await Escrow.create(data);

        return NextResponse.json({
            message:"You have succesfully added to the DB"
        },{
            status:200
        })
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message: err
        },{
            status:500
        })
    }
}