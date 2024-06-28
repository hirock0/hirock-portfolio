"use client";
import { useCallback, useEffect, useState } from "react";
import Style from "./myProfile.module.css";
import { Bitter } from "next/font/google";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AllbackendData } from "@/utils/redux/slices/slice";
import Image from "next/image";
const bitter = Bitter({
  weight: ["400", "400"],
  subsets: ["latin"],
});
import { useRouter } from "next/navigation";
const Education = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const selectordata = useSelector((state: any) => state.slice.data);
  const loggeduserdata = selectordata.loggeduser;

  const [mydata, setMydata] = useState({
    degree: "",
    institution: "",
    educational_duration: "",
    skills: "",
    experience: "",
    languages: "",
    testimonials: "",
    userid: "",
  });

  const [editFlag, setEditFlag] = useState(false);

  const onMyprofileData = async (e: any) => {
    e.preventDefault();
    try {
      if (mydata.userid !=="" && editFlag) {
        const sendData = await axios.post(
          "/pages/api/profile/informations/educations",
          mydata
        );
        if (sendData.data.success) {
          toast.success("Send successful");
          setTimeout(()=>{
            setEditFlag(false)
            router.refresh()
          },2000)
        }
        else {
          toast.success("Data not send");
        }
      }
    } catch (error: any) {
      toast.success("Something went wrong");
    }
  };

  const alReadyData = useCallback(async () => {
    const fethdata = await axios.get("/pages/api/signup");
    const loggeddatauser = fethdata.data.loggedUser;
    setMydata({ ...mydata,
      degree:loggeddatauser.degree,
      institution:loggeddatauser.institution,
      educational_duration:loggeddatauser.educational_duration,
      skills:loggeddatauser.skills,
      experience:loggeddatauser.experience,
      languages:loggeddatauser.languages,
      testimonials:loggeddatauser.testimonials,
      userid: loggeddatauser._id });
  }, [mydata.userid]);

  useEffect(() => {
    dispatch(AllbackendData());
    alReadyData();
  }, []);

  return (
    <main className=" text-base  pt-20 md:pt-5 p-5 text-white">
      <div className="  h-full w-full">
        <div className=" flex justify-between items-center border-dashed border-b border-purple-500 pb-5">
          <h1>Educations</h1>
          <button
            onClick={() => setEditFlag(!editFlag)}
            className=" active:bg-cyan-500"
          >
            <div className="w-7 h-7">
              <Image
                src={"/all_svg/edit-box-line.svg"}
                alt="edit"
                width={500}
                height={500}
              />
            </div>
          </button>
        </div>

        <form action="">
          {/* middle_start */}
          <div className={` ${Style.middleData} mt-5`}>
            {/* part_1_start */}

            <div className=" grid max-md:grid-cols-1 md:grid-cols-2 lg:gap-20 md:gap-10 max-md:gap-10">
              <div className=" w-full ">
                <h1>Degree</h1>
                <input
                  value={!editFlag ? loggeduserdata?.degree : mydata.degree}
                  onChange={(e) =>
                    setMydata({ ...mydata, degree: e.target.value })
                  }
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Degree"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Institution</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.institution : mydata.institution
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, institution: e.target.value })
                  }
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder="Institution"
                  className={` ${bitter.className} w-full bg-slate-800/80 md:text-xs lg:text-base`}
                />
              </div>
              <div className=" w-full ">
                <h1>Educational Duration</h1>
                <input
                  value={
                    !editFlag
                      ? loggeduserdata?.educational_duration
                      : mydata.educational_duration
                  }
                  onChange={(e) =>
                    setMydata({
                      ...mydata,
                      educational_duration: e.target.value,
                    })
                  }
                  type="text"
                  name="Educational_Durational"
                  id="Educational_Durational"
                  placeholder="Educational Durational"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
              <div className=" w-full ">
                <h1>Skills</h1>
                <input
                  value={!editFlag ? loggeduserdata?.skills : mydata.skills}
                  onChange={(e) =>
                    setMydata({ ...mydata, skills: e.target.value })
                  }
                  type="text"
                  name="Skills"
                  id="Skills"
                  placeholder="Skills"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Expirences</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.experience : mydata.experience
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, experience: e.target.value })
                  }
                  type="text"
                  name="Experience"
                  id="Experience"
                  placeholder="Experience"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
              <div className=" w-full ">
                <h1>Languages</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.languages : mydata.languages
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, languages: e.target.value })
                  }
                  type="text"
                  name="Languages"
                  id="Languages"
                  placeholder="Languages"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
              <div className=" w-full ">
                <h1>Testimonials</h1>
                <input
                  value={
                    !editFlag
                      ? loggeduserdata?.testimonials
                      : mydata.testimonials
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, testimonials: e.target.value })
                  }
                  type="text"
                  name="Testimonials"
                  id="Testimonials"
                  placeholder="Testimonials"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
            </div>
            {/* part_1_end */}
          </div>
          {/* middle_end */}

          <div className=" mt-5 flex justify-end border-dashed border-t border-purple-500">
            <button
              disabled={!editFlag}
              onClick={onMyprofileData}
              className={` ${
                editFlag
                  ? " bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-800"
                  : " opacity-50 bg-cyan-400 "
              } mt-5 w-32 rounded-sm h-8 text-black font-semibold `}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Education;
