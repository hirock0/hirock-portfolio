"use client";
import Image from "next/image";
import Style from "./profilenav.module.css";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const sideMenuDetaills = [
  {
    id: 0,
    title: "My Profile",
    icon: "/all_svg/user-line.svg",
    pathlink: "/user/profile",
  },
  {
    id: 1,
    title: "My Classes",
    icon: "/all_svg/my-classes.svg",
    pathlink: "/user/info/my_classes",
  },
  {
    id: 2,
    title: "Concept Crackerz",
    icon: "/all_svg/concept_crackerz.svg",
    pathlink: "/user/info/concept_crackerz",
  },
  {
    id: 3,
    title: "Bookmarks",
    icon: "/all_svg/bookmark.svg",
    pathlink: "/user/info/bookmarks",
  },
  {
    id: 4,
    title: "Leadboard",
    icon: "/all_svg/leaderboard.svg",
    pathlink: "/user/info/leaderboard",
  },
  {
    id: 5,
    title: "Announcement",
    icon: "/all_svg/announcement.svg",
    pathlink: "/user/info/announcement",
  },
  {
    id: 6,
    title: "Helpdesk",
    icon: "/all_svg/help-desk.svg",
    pathlink: "/user/info/helpdesk",
  },
];

interface Props {
  profileflag: boolean;
  loggeddata: object | any;
  onClick: () => void;
}
const ProfileNav: React.FC<Props> = ({ profileflag, loggeddata, onClick }) => {
  const sessiondata = useSession();
  const nextauthuser = sessiondata?.data;

  const pathname = usePathname()

  return (
    <div
      className={` profiledataDiv  ${Style.ProfileDetailsDiv}  ${
        !profileflag
          ? " invisible opacity-0 w-0 h-0 text-opacity-0"
          : " text-opacity-100 visible opacity-100 w-48 sm:w-52 md:w-60 lg:w-72 h-screen"
      } max-sm:text-sm fixed z-30 top-0 left-0 `}
    >
      <div
        className={`${Style.insideProfileDetailsDiv} backdrop:filter backdrop-blur-3xl h-full pt-10 pb-10 overflow-y-scroll `}
      >
        {/* Profile_data_Part_Start */}
        <div className=" flex flex-col items-center justify-center">
          {loggeddata !== null ? (
            <div>
              <div
                className={` profileAndlogoDiv w-20 max-sm:h-16 h-20 max-sm:w-16 rounded-full overflow-hidden`}
              >
                <Image
                  className=""
                  src={loggeddata?.image || ""}
                  alt="logo"
                  height={500}
                  width={500}
                />
              </div>
              <div className=" mt-2">
                <div className=" flex flex-col items-center justify-center">
                  <h1>{loggeddata?.name}</h1>
                  <h1 className=" text-xs">{loggeddata?.emailOrnumber}</h1>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {/* Profile_data_Part_end */}
        {/* ============================================================ */}
        <div className=" w-full border-t-2 mt-5"></div>
        {/* profile_middle_data_start */}

        <div className="">
          <ul
            className={`${Style.ProfileUl} flex flex-col gap-5 mt-5 sm:pl-4 p-2 w-full `}
          >
            {sideMenuDetaills.map((item: any) => (
              <Link key={item.id} href={item.pathlink}>
                <li className=" flex items-center gap-5 p-2 max-sm:text-xs sm:text-xs md:text-sm lg:text-base">
                  <div className=" w-7 h-7 max-sm:w-6 max-sm:h-6 ">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="">
                    <h1 className={`${pathname == item.pathlink?"text-yellow-600":"white"}`}>{item.title}</h1>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* profile_middle_data_end */}
        {/* =========================================================== */}
        {/* logout_part_start */}
        <div className=" flex items-center justify-center mt-10">
          {nextauthuser == null ? (
            <div className=" active:text-red-400 hover:text-blue-200 flex items-center gap-3">
              <div className=" w-7 h-7 ">
                <Image
                  src={"/all_svg/logout.svg"}
                  alt="logout"
                  width={500}
                  height={500}
                />
              </div>
              <button onClick={onClick}>logout</button>
            </div>
          ) : (
            <div className=" active:text-red-400 hover:text-blue-200 flex items-center gap-3">
              <div className=" w-7 h-7">
                <Image
                  src={"/all_svg/logout.svg"}
                  alt="logout"
                  width={500}
                  height={500}
                />
              </div>
              <button
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              >
                logout
              </button>
            </div>
          )}
        </div>
        {/* logout_part_end */}
      </div>
    </div>
  );
};

export default ProfileNav;
