import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { name,contact, district, userid } = reqData;
    const id = { _id:userid };
    const fields = {
      name,
      contact,
      district,
    };
      await SignUpSchema.findByIdAndUpdate(id, {
      $set: {
        name: fields.name,
        contact: fields.contact,
        district: fields.district,
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

