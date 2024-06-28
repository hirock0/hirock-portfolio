import { GeneralAndMejorProjectsSchema } from "@/lib/SchemaDB/schemaModel";
import { NextRequest, NextResponse } from "next/server";
import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB()
export async function POST(request:NextRequest){
    try{
        const reqId = await request.json()
        const nanId = {nanoId:reqId.Id}
        await GeneralAndMejorProjectsSchema .findOneAndDelete(nanId)
        return NextResponse.json({message:"Data is deleted" ,success:true})
    }catch(error:any){
        return NextResponse.json({message:"Data is not deleted" ,success:true})
    }

}