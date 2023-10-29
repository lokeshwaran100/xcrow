import { NextResponse } from "next/server";


export function GET(req, res) {
    return NextResponse.json({
        message:"The api is working"
    },{
        status:200
    });
}