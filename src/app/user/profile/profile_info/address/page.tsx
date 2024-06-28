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
const Address = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const selectordata = useSelector((state: any) => state.slice.data);
  const loggeduserdata = selectordata.loggeduser;
  const [mydata, setMydata] = useState({
    village_city: "",
    home_town: "",
    county: "",
    post_code: "",
    userid: "",
  });
  const [editFlag, setEditFlag] = useState(false);
  const onMyprofileData = async (e: any) => {
    e.preventDefault();
    try {
      if (mydata.userid !=="" && editFlag) {
        const sendData = await axios.post(
          "/pages/api/profile/informations/address",
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
    setMydata({
      ...mydata,
      village_city: loggeddatauser.village_city,
      home_town: loggeddatauser.home_town,
      county: loggeddatauser.county,
      post_code: loggeddatauser.post_code,
      userid: loggeddatauser._id,
    });
  }, [mydata.userid]);

  useEffect(() => {
    dispatch(AllbackendData());
    alReadyData();
  }, []);

  return (
    <main className=" text-base pt-20 md:pt-5 p-5 text-white">
      <div className="  h-full w-full">
        <div className=" flex justify-between items-center border-dashed border-b border-purple-500 pb-5">
          <h1>Address</h1>
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
                <h1>Village/City</h1>
                <input
                  value={
                    !editFlag
                      ? loggeduserdata?.village_city
                      : mydata.village_city
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, village_city: e.target.value })
                  }
                  type="text"
                  name="Village/City"
                  id="Village/City"
                  placeholder="Village/City"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Home Town</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.home_town : mydata.home_town
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, home_town: e.target.value })
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={` ${bitter.className} w-full bg-slate-800/80 md:text-xs lg:text-base`}
                />
              </div>

              <div className=" w-full ">
                <h1>Country</h1>
                <input
                  value={!editFlag ? loggeduserdata?.county : mydata.county}
                  onChange={(e) =>
                    setMydata({ ...mydata, county: e.target.value })
                  }
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  className={` ${bitter.className} w-full bg-slate-800/80`}
                />
              </div>

              <div className=" w-full ">
                <h1>Post Code</h1>
                <input
                  value={
                    !editFlag ? loggeduserdata?.post_code : mydata.post_code
                  }
                  onChange={(e) =>
                    setMydata({ ...mydata, post_code: e.target.value })
                  }
                  type="text"
                  name="post_code"
                  id="post_code"
                  placeholder="Post Code"
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

export default Address;
