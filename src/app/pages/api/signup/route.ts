import { NextRequest, NextResponse } from "next/server";
import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
ConnectionToDB();

import { getServerSession } from "next-auth";
export async function POST(request: NextRequest) {
  try {
    const ReqBody = await request.json();
    const {
      nanoId,
      name,
      emailOrnumber,
      password,
      address,
      image,
      recentDate,
      contact,
      district,
      gender,
      martial_staus,
      self_independent,
      belongs_to,
      nationality,
      hobbies,
      village_city,
      home_town,
      county,
      post_code,
      degree,
      institution,
      educational_duration,
      skills,
      experience,
      languages,
      testimonials,
      github,
      linkedin,
      facebook,
      whatsapp,
      reTypePassword,
    } = ReqBody;
    if (password !== reTypePassword) {
      return NextResponse.json({
        message: "Password is not matched",
        success: false,
      });
    } else {
      const hashedpassword = await bcrypt.hash(password, 10);
      const presaveData = await new SignUpSchema({
        nanoId,
        name,
        emailOrnumber,
        password: hashedpassword,
        image,
        recentDate,
        address: "",
        contact: "",
        district: "",
        gender: "",
        martial_staus: "",
        self_independent: "",
        belongs_to: "",
        nationality: "",
        hobbies: "",
        village_city: "",
        home_town: "",
        county,
        post_code: "",
        degree: "",
        institution: "",
        educational_duration: "",
        skills: "",
        experience: "",
        languages: "",
        testimonials: "",
        github: "",
        linkedin: "",
        facebook: "",
        whatsapp: "",
      });

      const savedata = await presaveData.save();
      const tokenData = {
        id: savedata._id,
        name: savedata.name,
        nanoid: savedata.nanoId,
      };
      const token = Jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
        expiresIn: "1d",
      });
      const response = NextResponse.json({
        message: "signup successful",
        success: true,
      });
      response.cookies.set("token", token, { httpOnly: true });
      return response;
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "signup not successful",
      success: false,
    });
  }
}
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    if (token == "") {
      const NextAuthToken = await getServerSession();
      const NextAuthEmail = NextAuthToken?.user?.email;
      const loggedUser = await SignUpSchema.findOne({
        emailOrnumber: NextAuthEmail,
      });
      const AllData = await SignUpSchema.find();
      return NextResponse.json({
        message: "file is found",
        success: true,
        AllData,
        loggedUser,
      });
    } else {
      const decodedToken: any = Jwt.decode(token);
      const loggedUser = await SignUpSchema.findById({ _id: decodedToken.id });
      const AllData = await SignUpSchema.find();
      return NextResponse.json({
        message: "file is found",
        success: true,
        AllData,
        loggedUser,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ message: "file not found", success: false });
  }
}
