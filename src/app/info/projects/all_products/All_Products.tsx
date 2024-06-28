"use client";
import { useEffect, useState } from "react";
import Style from "./allProducts.module.css";
import Image from "next/image";
import Link from "next/link";
const ProductsArray = [
  {
    id: 0,
    name: "Frotend Design",
    title: "Only you can get frontend design",
    image: "/project_images/frontendev.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 1,
    name: "Minimalist design",
    title: "Only you can get backend design",
    image: "/project_images/fullstack_1.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 2,
    name: "Minimalist design",
    title: "Only you can get backend design",
    image: "/project_images/fullstack_2.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 3,
    name: "Frotend Design",
    title: "Only you can get frontend design",
    image: "/project_images/fullstack_3.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 4,
    name: "Minimalist design",
    title: "Only you can get backend design",
    image: "/project_images/fullstack_4.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 5,
    name: "Frotend Design",
    title: "Only you can get frontend design",
    image: "/project_images/fullstack_5.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 6,
    name: "Minimalist design",
    title: "Only you can get backend design",
    image: "/project_images/fullstack_6.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
  {
    id: 7,
    name: "Frotend Design",
    title: "Only you can get frontend design",
    image: "/project_images/fullstack_7.jpeg",
    projecctLink: "https://www.fiverr.com/users/hirock06/manage_gigs",
  },
];

const All_Products = () => {
  const onProducts = () => {
    const AllPopupArray: any = [];
    const AllPopup = document.querySelectorAll("#popup") as NodeList;
    const Allproducts = document.querySelectorAll(".allproducts") as NodeList;
    AllPopup.forEach((item: any, idx: any) => {
      AllPopupArray.push(item as HTMLElement);
    });

    Allproducts.forEach((item: any, idx: any) => {
      item.addEventListener("mouseover", () => {
        AllPopupArray[idx].style.visibility = "visible";
      });
    });
    AllPopupArray.forEach((item: any, idx: any) => {
      item.addEventListener("mouseleave", () => {
        item.style.visibility = "hidden";
      });
    });
  };



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
    onProducts();
    AllslideTopAnimation();
  }, []);

  return (
    <div id={Style.AllProductDiv} className="">
      {ProductsArray.map((item: any) => (
        <div id="commonAnimation"  key={item.id} className={`allproducts md:text-sm relative  bg-zinc-700 `}>
          <Image
            src={item.image}
            alt="project"
            width={500}
            height={500}
            className=" hover:scale-110"
          />
          <div
            id="popup"
            className={` invisible flex flex-col gap-3 items-center justify-center  absolute z-30 top-0 left-0 h-full w-full bg-slate-800/80`}
          >
            <div className=" max-sm:text-sm flex flex-col justify-center items-center">
              <h1>{item.name}</h1>
              <h1>{item.title}</h1>
            </div>
            <Link
              className=" w-2/5 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 max-sm:text-sm max-sm:p-1 flex items-center justify-center "
              href={item.projecctLink}
            >
              {" "}
              <button className=" ">click</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All_Products;
