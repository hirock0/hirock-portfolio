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
const My_Profile = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const selectordata = useSelector((state: any) => state.slice.data);
  const loggeduserdata = selectordata.loggeduser;
  const [mydata, setMydata] = useState({
    name: "",
    emailOrnumber: "",
    contact: "",
    district: "",
    userid: "",
  });
  const [editFlag, setEditFlag] = useState(false);
  const onMyprofileData = async (e: any) => {
    e.preventDefault();
    try {

      if (mydata.userid !=="" && editFlag) {
        const sendData = await axios.post("/pages/api/profile/informations/my_profile", mydata);
        if (sendData.data.success) {
          toast.success("Send successful");
          setTimeout(()=>{
            setEditFlag(false)
            router.refresh()
          },2000)

        } else {
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
    setMydata({
      ...mydata,
      name: loggeddatauser.name,
      contact: loggeddatauser.contact,
      district: loggeddatauser.district,
      userid: loggeddatauser._id,
      emailOrnumber: loggeddatauser.emailOrnumber,
    });
  }, [mydata.emailOrnumber, mydata.userid]);

  useEffect(() => {
    dispatch(AllbackendData());
    alReadyData();
  }, []);

  return (
    <main className=" text-base  pt-20 md:pt-5 p-5 text-white">
      <div className="  h-full w-full">
        <div className=" flex justify-between items-center border-dashed border-b border-purple-500 pb-5">
          <h1>My Profile</h1>
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
                <h1>Name</h1>
                <input
                  value={!editFlag ? loggeduserdata?.name : mydata.name}
                  onChange={(e) =>
                    setMydata({ ...mydata, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Email</h1>
                <input
                  value={loggeduserdata?.emailOrnumber}
                  onChange={(e) =>
                    setMydata({ ...mydata, emailOrnumber: e.target.value })
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={` ${bitter.className} w-full bg-slate-800/80 md:text-xs lg:text-base`}
                  disabled={true}
                />
              </div>

              <div className=" w-full ">
                <h1>Contact</h1>
                <input
                  value={!editFlag ? loggeduserdata?.contact : mydata.contact}
                  onChange={(e) =>
                    setMydata({ ...mydata, contact: e.target.value })
                  }
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Contact"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>District:</h1>
                <input
                  value={!editFlag ? loggeduserdata?.district : mydata.district}
                  onChange={(e) =>
                    setMydata({ ...mydata, district: e.target.value })
                  }
                  type="text"
                  name="district"
                  id="district"
                  placeholder="District"
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

export default My_Profile;