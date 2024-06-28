"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { AllbackendData } from "@/utils/redux/slices/slice";
import toast from "react-hot-toast";

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const loggeddata = useSelector((state: any) => state.slice?.data?.loggeduser);
  
  const[updateImage,setUpdateImage]=useState<string>("")
  const [updateflag,setUpdateflag]=useState<boolean>(false)

  const onBase64 = (imagedata:any)=>{
    try{
        const reader = new FileReader()
        reader.readAsDataURL(imagedata.target.files[0]);
        reader.onload = (result:any)=>{
          setUpdateImage(result.target.result)
        }
        reader.onerror=(error:any)=>{
            toast.success(error)
        }
    }catch(error:any){
      toast.success("image not convert to base64")
    }

  }
  
  
  
  useEffect(() => {
    dispatch(AllbackendData());
  }, []);
  return (
    <section className=" relative">
      <div className=" flex flex-col items-center">
        <div className=" relative overflow-hidden w-14 h-14 rounded-full">
          <Image
            src={loggeddata?.image || ""}
            alt="profimage"
            width={500}
            height={500}
          />

            <button onClick={()=>setUpdateflag(!updateflag)} className=" absolute top-0 left-0 w-full h-full hover:bg-slate-800/80">

            </button>
        </div>
        <h1 className=" mt-2">{loggeddata?.name || ""}</h1>
        <h1 className="text-xs">{loggeddata?.emailOrnumber || ""}</h1>
      </div>




    {/* update_image_popup_start */}
      <div className={` ${!updateflag?"invisible":"visible"}  bg-slate-800 h-full rounded-md flex flex-col pt-10 items-center fixed z-30 top-0 left-0 w-full `}>
          <div onClick={()=>setUpdateflag(false)} className=" absolute right-5 top-2 w-7 h-7 flex items-center justify-center cursor-pointer">
              <Image src={"/all_svg/close-large-line.svg"} alt="close" width={500} height={500}/>
          </div>
              {/* UploadImage_section_start */}
              <div className="  h-fit ">
                <label htmlFor="profileImage" className=" border pr-5 pl-5 pt-2 pb-2 rounded-md">
                    Choose a image
                </label>
                <input value={""} onChange={(e)=>onBase64(e)} accept="image/**" type="file" name="profile_image" id="profileImage"  className=" hidden "/>
              </div>
            {/* UploadImage_section_end */}

            <div className=" mt-5 rounded-md overflow-hidden w-40 h-40 flex items-center justify-center">
              {
                updateImage !== ""?<Image src={updateImage} alt="profileimage" width={500} height={500}/>:
                <h1>Upload Your Image</h1>
              }
              
            </div> 
       
              <div className=" mt-5  w-full flex items-center justify-center gap-4  ">
                <button  onClick={()=>setUpdateflag(false)} className=" border w-2/6 h-8 rounded-md">cancel</button>
                <button className=" border w-2/6 h-8 rounded-md">update</button>
              </div>
       
    </div>
  {/* update_image_popup_end */}
    </section>
  );
};

export default ProfileDetails;
