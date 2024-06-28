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
const Additional_Info = () => {
  const router =useRouter()
  const dispatch = useDispatch();
  const selectordata = useSelector((state: any) => state.slice.data);
  const loggeduserdata = selectordata.loggeduser;

  const [mydata, setMydata] = useState({
    gender: "",
    martial_staus: "",
    self_independent: "",
    belongs_to: "",
    nationality: "",
    hobbies: "",
    userid: "",
  });

  const [editFlag, setEditFlag] = useState(false);
  const onMyprofileData = async (e: any) => {
    e.preventDefault();
    try {
      if (mydata.userid!=="" && editFlag) {
        const sendData = await axios.post(
          "/pages/api/profile/informations/additional_info",
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
      gender:loggeddatauser.gender,
      martial_staus:loggeddatauser.martial_staus,
      self_independent:loggeddatauser.self_independent,
      belongs_to:loggeddatauser.belongs_to,
      nationality:loggeddatauser.nationality,
      hobbies:loggeddatauser.hobbies,
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
          <h1>Additional Informations</h1>
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
                <h1>Gender</h1>
                <input
                  value={!editFlag ? loggeduserdata?.gender : mydata.gender}
                  onChange={(e) =>
                    setMydata({ ...mydata, gender: e.target.value })
                  }
                  type="text"
                  name="Gender"
                  id="Gender"
                  placeholder="Gender"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Martial Status</h1>
                <input
                  value={
                    !editFlag
                      ? loggeduserdata?.martial_staus
                      : mydata.martial_staus
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, martial_staus: e.target.value })
                  }
                  type="text"
                  name="Marital_Status"
                  id="Marital_Status"
                  placeholder="Marital Status"
                  className={` ${bitter.className} w-full bg-slate-800/80 md:text-xs lg:text-base`}
                />
              </div>

              <div className=" w-full ">
                <h1>Self Independent</h1>
                <input
                  value={
                    !editFlag
                      ? loggeduserdata?.self_independent
                      : mydata.self_independent
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, self_independent: e.target.value })
                  }
                  type="text"
                  name="self_independent"
                  id="self_independent"
                  placeholder="Self Independent"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Belongs to</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.belongs_to : mydata.belongs_to
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, belongs_to: e.target.value })
                  }
                  type="text"
                  name="belongs_to"
                  id="belongs_to"
                  placeholder="Belongs To"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
              <div className=" w-full ">
                <h1>Nationality</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.nationality : mydata.nationality
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, nationality: e.target.value })
                  }
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder="Nationality"
                  className={` ${bitter.className} w-full bg-slate-800/80  `}
                />
              </div>
              <div className=" w-full ">
                <h1>Hobbies</h1>
                <input
                  value={!editFlag ? loggeduserdata?.hobbies : mydata.hobbies}
                  onChange={(e) =>
                    setMydata({ ...mydata, hobbies: e.target.value })
                  }
                  type="text"
                  name="hobbies"
                  id="hobbies"
                  placeholder="Hobbies"
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

export default Additional_Info;
