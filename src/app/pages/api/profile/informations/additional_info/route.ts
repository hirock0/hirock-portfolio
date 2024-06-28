import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { gender,martial_staus,self_independent,belongs_to,nationality,hobbies, userid } = reqData;

    const id = { _id:userid };
    const fields = {
        gender,martial_staus,self_independent,belongs_to,nationality,hobbies, 
    };
      await SignUpSchema.findByIdAndUpdate(id, {
      $set: {
        gender: fields.gender,
        martial_staus: fields.martial_staus,
        self_independent: fields.self_independent,
        belongs_to:fields.belongs_to,
        nationality:fields.nationality,
        hobbies:fields.hobbies
      },
    });

    return NextResponse.json({
      message: "Data send successful",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: "Data is not send", success: false });
  }
}

