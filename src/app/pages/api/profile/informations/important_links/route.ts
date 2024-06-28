import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { github, linkedin, facebook, whatsapp, userid } = reqData;
    const id = { _id: userid };
    const fields = {
      github,
      linkedin,
      facebook,
      whatsapp,
    };
    await SignUpSchema.findByIdAndUpdate(id, {
      $set: {
        github: fields.github,
        linkedin: fields.linkedin,
        facebook: fields.facebook,
        whatsapp: fields.whatsapp,
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
