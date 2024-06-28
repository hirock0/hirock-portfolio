import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { degree,institution,educational_duration,skills,experience,languages,testimonials, userid } = reqData;
    const id = { _id:userid };
    const fields = {
        degree,institution,educational_duration,skills,experience,languages,testimonials,
    };
      await SignUpSchema.findByIdAndUpdate(id, {
      $set: {
        degree:fields.degree,
        institution: fields.institution,
        educational_duration: fields.educational_duration,
        skills:fields.skills,
        experience:fields.experience,
        languages:fields.languages,
        testimonials:fields.testimonials
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

