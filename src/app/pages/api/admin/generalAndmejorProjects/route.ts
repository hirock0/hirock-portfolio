import { NextRequest, NextResponse } from "next/server";
import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
import { GeneralAndMejorProjectsSchema } from "@/lib/SchemaDB/schemaModel";
ConnectionToDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      nanoId,
      projectName,
      projectType,
      projectImage,
      projectLink,
      projectTitle,
      recentDate,
      project_descriptions,
    } = reqBody;
    const preSendData = await new GeneralAndMejorProjectsSchema({
      nanoId,
      projectName,
      projectType,
      projectImage,
      projectLink,
      projectTitle,
      recentDate,
      project_descriptions,
    });
    await preSendData.save();
    return NextResponse.json({ message: "Data is found", success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not found", success: false });
  }
}

export async function GET(){
  try{
    const allGrneralAndMejorProjects = await GeneralAndMejorProjectsSchema.find().sort({dateFeild:-1});
    return NextResponse.json({message:"Data is here",success:true,allGrneralAndMejorProjects})
  }catch(error:any){
    return NextResponse.json({message:"Data is not here",success:false})
  }
}