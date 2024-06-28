"use client";

import { AllGeneralAndMejorProjectsData } from "@/utils/redux/slices/slice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  searchdata: string | any;
}

const AllMejor_Projects: React.FC<Props> = ({ searchdata }) => {
  const dispatch = useDispatch();
  const allGeneralAndMejordata = useSelector(
    (state: any) => state.slice?.generalAndmejorprojects
  );
  const GeneralAndMejorProjects =
    allGeneralAndMejordata?.GeneralAndmejorprojects;
  const MejorProjects = GeneralAndMejorProjects?.filter(
    (item: any) => item.projectType == "mejor"
  );
  const Projects = MejorProjects?.filter((item: any) => {
    if (item.projectName.toLowerCase().includes(searchdata.toLowerCase())) {
      return item;
    }
  });
  useEffect(() => {
    dispatch(AllGeneralAndMejorProjectsData());
  }, []);

  return (
    <div className=" flex items-center justify-center pr-10 pl-10 max-sm:pl-5 max-sm:pr-5">
      <ul className=" grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
        {GeneralAndMejorProjects !== undefined ? (
          Projects.length !== 0 ? (
            Projects?.map((item: any) => (
              <li
                key={item._id}
                className=" relative h-72 rounded-md overflow-hidden"
              >
                <Image
                  src={item.projectImage}
                  alt="img"
                  width={500}
                  height={500}
                  className=" h-full w-full object-cover"
                />
                <div className=" text-sm absolute bottom-0 left-0 h-3/6 max-sm:h-2/6 md:h-2/5 w-full backdrop:filter backdrop-blur-3xl opacity-85 pt-5 max-sm:pt-1">
                  <h1 className=" text-center">{item.projectName}</h1>
                  <h1 className=" text-center">{item.projectTitle}</h1>
                  <div className=" flex items-center justify-center mt-2">
                    <Link
                      href={item.projectLink}
                      className=" flex items-center justify-center w-1/2 h-8 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 max-sm:h-7"
                    >
                      <button className="">see it</button>
                    </Link>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className=" h-screen  ">
              <h1 className=" text-center">Search data is not found...</h1>
            </div>
          )
        ) : (
          <div className=" h-screen">
            <h1 className=" text-center">Please Wait...</h1>
          </div>
        )}
      </ul>
    </div>
  );
};

export default AllMejor_Projects;
