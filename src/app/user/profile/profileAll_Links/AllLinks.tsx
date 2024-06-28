"use client";
import CompleteValidator from "./completeBtn/CompleteValidator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const AllProfileDetsIcon = [
  {
    id: 0,
    title: "My Profile",
    icon: "/all_svg/user-line.svg",
    profilePathLink: "/user/profile/profile_info/my_profile",
    flag: "My_Profile",
  },
  {
    id: 1,
    title: "Additional Info",
    icon: "/all_svg/information-2-line.svg",
    profilePathLink: "/user/profile/profile_info/additional_info",
    flag: "Additional_Info",
  },
  {
    id: 2,
    title: "Address",
    icon: "/all_svg/map-pin-line.svg",
    profilePathLink: "/user/profile/profile_info/address",
    flag: "Address",
  },
  {
    id: 3,
    title: "Education",
    icon: "/all_svg/book-open-line.svg",
    profilePathLink: "/user/profile/profile_info/education",
    flag: "Education",
  },
  {
    id: 4,
    title: "Important Links",
    icon: "/all_svg/external-link-line.svg",
    profilePathLink: "/user/profile/profile_info/importants_links",
    flag: "Important_Links",
  },
];

const AllLinks = () => {
  const pathname = usePathname();
  const allprofileinfoArray = AllProfileDetsIcon;
  return (
    <div className=" w-full">
      <ul className=" w-full flex flex-col gap-2">
        <li
          className={` bg-slate-950 hover:bg-slate-900 active:bg-slate-800 relative flex items-center w-full rounded-md`}
        >
          <Link href={"/user/profile"} className=" w-full">
            <div className=" rounded-md pl-5 pr-5 h-14 w-full flex items-center gap-5">
              <div className="w-6 h-6">
                <Image
                  src={"/all_svg/information-2-line.svg"}
                  alt="user"
                  width={500}
                  height={500}
                />
              </div>
              <h1>Profile Home</h1>
            </div>
          </Link>
        </li>

        {allprofileinfoArray.map((item: any) => (
          <li
            key={item.id}
            className={`${
              pathname == item.profilePathLink
                ? pathname == "/user/profile"
                  ? " bg-slate-950"
                  : "bg-slate-600  "
                : "bg-slate-950"
            } hover:bg-slate-900 active:bg-slate-800    relative flex items-center w-full rounded-md`}
          >
            <Link href={item.profilePathLink} className=" w-full">
              <div className=" rounded-md pl-5 pr-5 h-14 w-full flex items-center gap-5">
                <div className="w-6 h-6">
                  <Image src={item.icon} alt="user" width={500} height={500} />
                </div>
                <h1>{item.title}</h1>
              </div>
            </Link>
            <CompleteValidator flag={item.flag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllLinks;
