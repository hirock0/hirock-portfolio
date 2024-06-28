import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
import { ConnectionToDB } from "@/utils/connectionDB/connectiondb";
import { nanoid } from "@reduxjs/toolkit";
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const authOption: NextAuthOptions = {
  pages: {
    signIn: "/user/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await ConnectionToDB();
      try {
        const findUser = await SignUpSchema.findOne({
          emailOrnumber: user?.email,
        });
        if (findUser) {
          return findUser;
        } else {
          const Datedata = new Date();
          const recentdate = Datedata.toLocaleDateString();
          const presavedata = await new SignUpSchema({
            name: user.name,
            image: user.image,
            emailOrnumber: user.email,
            password: "",
            address: "",
            recentDate: recentdate,
            //  my_profile_data_start
            contact: "",
            district: "",
            //  my_profile_data_end
            // additional_data_start
            gender: "",
            martial_staus: "",
            self_independent: "",
            belongs_to: "",
            nationality: "",
            hobbies: "",
            // additional_data_end

            // address_start
            village_city: "",
            home_town: "",
            county: "",
            post_code: "",
            // address_end

            // Educational_start
            degree: "",
            institution: "",
            educational_duration: "",
            skills: "",
            experience: "",
            languages: "",
            testimonials: "",
            // educational_end

            // important_Links_start
            github: "",
            linkedin: "",
            facebook: "",
            whatsapp: "",
            // important_Links_end
            nanoId: nanoid(),
          });
          const savedata = await presavedata.save();
          return savedata;
        }
      } catch (error: any) {
        console.log("the error is", error);
        return false;
      }
    },
  },
};

const Handler: any = NextAuth(authOption);
export { Handler as GET, Handler as POST };
