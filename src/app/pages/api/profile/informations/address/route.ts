import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
ConnectionToDB();
import { NextRequest, NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { village_city,home_town,county,post_code, userid } = reqData;
    const id = { _id:userid };
    const fields = {
            village_city,
            home_town,
            county,
            post_code
    };
      await SignUpSchema.findByIdAndUpdate(id, {
      $set: {
        village_city: fields.village_city,
        home_town: fields.home_town,
        post_code: fields.post_code,
        county:fields.county
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

