"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight:["200","200"],
  subsets:["latin"]
})

const Cards = () => {
  const [hoverfalg, setHoverFlag] = useState(false);
  const [hoverfalg2, setHoverFlag2] = useState(false);

  const windowEvent_2 = () => {
    const Welcomepopup_1 = document.querySelector(
      ".wlcomepopup_1"
    ) as HTMLElement;
    const Welcomepopup_2 = document.querySelector(
      ".wlcomepopup_2"
    ) as HTMLElement;

    document.addEventListener("click", (e: any) => {
      if (!Welcomepopup_1.contains(e.target)) {
        setHoverFlag(false);
      }
      if (!Welcomepopup_2.contains(e.target)) {
        setHoverFlag2(false);
      }
    });
  };

  useEffect(() => {
    windowEvent_2();
  }, []);
  return (
    <div className={` ${poppins.className} flex justify-between w-full  mt-5 gap-5 max-sm:flex-col`}>
      <div className="">
        <div
          id=""
          className=" wlcomepopup_1 shadow-sm shadow-white rounded-md overflow-hidden relative"
          onMouseEnter={() => setHoverFlag(!hoverfalg)}
        >
          <Image
            className="rounded-md"
            src={"/background_images/portfolio_home_page_background_4.jpeg"}
            alt="portfolio"
            width={500}
            height={500}
          />
          <div
            id=""
            onMouseLeave={() => setHoverFlag(!hoverfalg)}
            className={` wlcomepopup_1  ${
              !hoverfalg ? "invisible" : "visible"
            } absolute bg-zinc-800/80 top-0 h-full w-full flex items-center justify-center`}
          >
            <div className=" flex flex-col items-center justify-center">
              <h1 >See My Mejor Projects</h1>
              <Link href={"/my_projects/mejor_projects"} className=" mt-5  w-1/2 h-7 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center"><button>click</button></Link>
            </div>
           
          </div>
        </div>
      </div>

      <div
        className=" wlcomepopup_2 shadow-sm shadow-white rounded-md overflow-hidden relative flex items-center justify-end max-sm:justify-start"
        onMouseEnter={() => setHoverFlag2(!hoverfalg2)}
      >
        <Image
          className="rounded-md"
          src={"/background_images/portfolio_home_page_background_5.jpeg"}
          alt="portfolio"
          width={500}
          height={500}
        />
        <div
          id=""
          onMouseLeave={() => setHoverFlag2(!hoverfalg2)}
          className={` wlcomepopup_2 ${
            !hoverfalg2 ? "invisible" : "visible"
          } absolute bg-zinc-800/80 top-0 h-full w-full flex items-center justify-center`}
        >
              <div className=" flex flex-col items-center justify-center">
              <h1>See My Generall Projects</h1>
              <Link href={"/my_projects/generall_projects"} className=" mt-5  w-1/2 h-7 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center"><button >click</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
