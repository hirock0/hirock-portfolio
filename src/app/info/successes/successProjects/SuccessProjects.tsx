"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AllGeneralAndMejorProjectsData } from "@/utils/redux/slices/slice";
import Link from "next/link";
const SuccessProjects = () => {
  const dispatch = useDispatch();
  const AllProjectsData = useSelector(
    (state: any) => state.slice?.generalAndmejorprojects
  );
  const AllProjects = AllProjectsData?.GeneralAndmejorprojects;

  const AllslideTopAnimation = () => {
    const Text1 = document.querySelectorAll("#commonAnimation");
    const windowHeight = window.outerHeight - 200;
    Text1.forEach((item: any, idx: any) => {
      document.addEventListener("scroll", (e: any) => {
        const ScrollHeight = item.getBoundingClientRect().top;
        if (windowHeight > ScrollHeight) {
          item.style.paddingTop = "0";
          item.style.transition = "1s";
          item.style.opacity = "1";
        } else {
          item.style.paddingTop = "128px";
          item.style.opacity = "0";
        }
      });
    });
  };

  useEffect(() => {
    dispatch(AllGeneralAndMejorProjectsData());
    AllslideTopAnimation();
  }, []);

  return (
    <div className=" w-full mt-5 grid max-sm:grid-cols-1 md:grid-cols-2 gap-5">
      {AllProjects == undefined ? (
        <div>
          <h1 className=" text-center">Please wait....</h1>
        </div>
      ) : (
        AllProjects?.map((item: any) => (
          <div
            key={item._id}
            id="commonAnimation"
            className=" rounded-md overflow-hidden relative w-full h-80"
          >
            <Image
              src={item?.projectImage}
              alt="project"
              width={500}
              height={500}
              className=" h-full w-full object-cover"
            />
            <div className=" absolute bottom-0 backdrop:filter backdrop-blur-3xl opacity-80 w-full h-2/5">
              <h1 className=" text-center">{item.projectName}</h1>
              <h1 className=" text-sm text-center opacity-80">
                {item.projectTitle}
              </h1>
              <div className=" flex items-center justify-center">
                <Link
                  href={item?.projectLink}
                  className=" text-sm w-1/2 h-7 mt-2 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center"
                >
                  <button className=" ">See it</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SuccessProjects;
