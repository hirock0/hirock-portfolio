"use client";
import { useEffect, useState } from "react";
import Style from "./profilerate.module.css";
import { AllbackendData } from "@/utils/redux/slices/slice";
import axios from "axios";

const Profile_Rate = () => {
  const [increaseValue, setIncriseValue] = useState(0);

  const onfullfillRate = async () => {
    try {
      const userloggeddata = await axios.get("/pages/api/signup");
      const loggeddata = userloggeddata.data.loggedUser;
      const My_Profile_fullfill =
        loggeddata?.name !== "" &&
        loggeddata?.emailOrnumber !== "" &&
        loggeddata?.contact !== "" &&
        loggeddata?.district !== "";
      const Additiona_Info =
        loggeddata?.gender !== "" &&
        loggeddata?.martial_staus !== "" &&
        loggeddata?.self_independent !== "" &&
        loggeddata?.belongs_to !== "" &&
        loggeddata?.nationality !== "" &&
        loggeddata?.hobbies !== "";
      const Address =
        loggeddata?.village_city !== "" &&
        loggeddata?.home_town !== "" &&
        loggeddata?.county !== "" &&
        loggeddata?.post_code !== "";
      const Educations =
        loggeddata.degree !== "" &&
        loggeddata.institution !== "" &&
        loggeddata.educational_duration !== "" &&
        loggeddata.skills !== "" &&
        loggeddata.experience !== "" &&
        loggeddata.languages !== "" &&
        loggeddata.testimonials !== "";
      const Important_Links =
        loggeddata.github !== "" &&
        loggeddata.linkedin !== "" &&
        loggeddata.facebook !== "" &&
        loggeddata.whatsapp !== "";

      if (My_Profile_fullfill) {
        setIncriseValue((prev) => prev + 20);
      }
      if (Address) {
        setIncriseValue((prev) => prev + 20);
      }
      if (Additiona_Info) {
        setIncriseValue((prev) => prev + 20);
      }
      if (Educations) {
        setIncriseValue((prev) => prev + 20);
      }
      if (Important_Links) {
        setIncriseValue((prev) => prev + 20);
      }
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    onfullfillRate();
  }, []);

  return (
    <div className="mb-5 flex flex-col gap-2 items-center justify-center">
      <div className=" flex items-center w-full justify-between">
        <h1>Complete your profile</h1>
        <span>{`${increaseValue}%`}</span>
      </div>
      <input
        value={increaseValue}
        onChange={()=>false}
        type="range"
        name="range"
        id="range"
        className={`${Style.profileRateInp} w-full `}
      />
    </div>
  );
};

export default Profile_Rate;
