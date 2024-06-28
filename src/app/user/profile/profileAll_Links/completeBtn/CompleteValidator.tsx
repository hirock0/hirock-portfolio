"use client";
import { AllbackendData } from "@/utils/redux/slices/slice";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";


interface Props {
  flag: string;
}

const CompleteValidator: React.FC<Props> = ({ flag }) => {


  const onCheck = async () => {
    const flagArray = [
      "My_Profile",
      "Additional_Info",
      "Address",
      "Education",
      "Important_Links",
    ];
    const allCheckedBtn = document.querySelectorAll(".Allchecked") as NodeList;
    const logged = await axios.get("/pages/api/signup");
    const loggedUserData = logged.data.loggedUser;
    allCheckedBtn.forEach((item: any, idx: any) => {
      item.setAttribute("id", flagArray[idx]);
    });
    const My_profile =
      loggedUserData.name !== "" &&
      loggedUserData.emailOrnumber !== "" &&
      loggedUserData.contact !== "" &&
      loggedUserData.district !== "";
    const Additiona_Info =
      loggedUserData?.gender !== "" &&
      loggedUserData?.martial_staus !== "" &&
      loggedUserData?.self_independent !== "" &&
      loggedUserData?.belongs_to !== "" &&
      loggedUserData?.nationality !== "" &&
      loggedUserData?.hobbies !== "";
    const Address =
      loggedUserData?.village_city !== "" &&
      loggedUserData?.home_town !== "" &&
      loggedUserData?.county !== "" &&
      loggedUserData?.post_code !== "";
    const Educations =
      loggedUserData.degree !== "" &&
      loggedUserData.institution !== "" &&
      loggedUserData.educational_duration !== "" &&
      loggedUserData.skills !== "" &&
      loggedUserData.experience !== "" &&
      loggedUserData.languages !== "" &&
      loggedUserData.testimonials !== "";
    const Important_Links =
      loggedUserData.github !== "" &&
      loggedUserData.linkedin !== "" &&
      loggedUserData.facebook !== "" &&
      loggedUserData.whatsapp !== "";

    const Div_1 = document.querySelector("#My_Profile") as HTMLElement;
    const Div_2 = document.querySelector("#Additional_Info") as HTMLElement;
    const Div_3 = document.querySelector("#Address") as HTMLElement;
    const Div_4 = document.querySelector("#Education") as HTMLElement;
    const Div_5 = document.querySelector("#Important_Links") as HTMLElement;
    if (My_profile) {
      Div_1.style.backgroundColor = "green";
    } else {
      Div_1.style.backgroundColor = "none";
    }
    if (Additiona_Info) {
      Div_2.style.backgroundColor = "green";
    } else {
      Div_2.style.backgroundColor = "none";
    }
    if (Address) {
      Div_3.style.backgroundColor = "green";
    } else {
      Div_3.style.backgroundColor = "none";
    }
    if (Educations) {
      Div_4.style.backgroundColor = "green";
    } else {
      Div_4.style.backgroundColor = "none";
    }
    if (Important_Links) {
      Div_5.style.backgroundColor = "green";
    } else {
      Div_5.style.backgroundColor = "none";
    }
  };

  useEffect(() => {
    onCheck();
  }, []);

  return (
    <div className=" absolute right-5 top-0 bottom-0 pl-2 pr-2 flex items-center justify-center ">
      <label htmlFor="checkbox" className=" ">
        <div className="w-6 h-6 flex ">
          <Image
            src={"/logos/checkbox-circle-linesvg.svg"}
            alt="check"
            width={500}
            height={500}
            className=" Allchecked  rounded-full opacity-60"
          />
        </div>
      </label>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className=" z-20 hidden"
      />
    </div>
  );
};

export default CompleteValidator;
