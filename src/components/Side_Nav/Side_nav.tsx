"use client";
import Link from "next/link";
import Style from "./side_nav.module.css";
import { Poppins } from "next/font/google";
const popins = Poppins({
  weight: ["700", "700"],
  subsets: ["latin"],
});

const NavRoute = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "About Us",
    href: "/info/about_us",
  },
  {
    id: 2,
    title: "Projects",
    href: "/info/projects",
  },
  {
    id: 3,
    title: "Successes",
    href: "/info/successes",
  },
];

interface Props {
  flag: boolean;
  loggeddata: object | any;
}
const Side_nav: React.FC<Props> = ({ flag, loggeddata }) => {
  return (
    <div
      id={Style.SideNavBar}
      className={`${popins.className} ${
        !flag ? " translate-x-full" : " translate-x-0"
      }  sm:hidden flex items-center  SideNav p-4 h-48 w-full bg-slate-800 text-white fixed z-50 right-0 top-20`}
    >
      <ul id={Style.SidenavUl} className={` w-full select-none`}>
        {NavRoute.map((item: any) => (
          <Link key={item.id} href={item.href}>
            {
              <li>
                {item.title}
              </li>
            }
          </Link>
        ))}
        {loggeddata == null ? (
          <Link href={"/user/login"}>
            <li>Login</li>
          </Link>
        ) : null}
      </ul>
    </div>
  );
};

export default Side_nav;
