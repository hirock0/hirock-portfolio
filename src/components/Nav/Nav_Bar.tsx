"use client";
import Image from "next/image";
import Style from "./nav.module.css";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Side_nav from "../Side_Nav/Side_nav";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AllbackendData } from "@/utils/redux/slices/slice";
import ProfileNav from "../profile_nav/ProfileNav";
import { usePathname } from "next/navigation";
const popins = Poppins({
  weight: ["200", "200"],
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

const Nav_Bar = () => {
  const pathname = usePathname();

  const router = useRouter();

  const [menuFlag, setMenuFlag] = useState(false);
  const [profileflag, setProfileFlag] = useState(false);

  // ============================================
  // authentication_Part_start
  const dispatch: any = useDispatch();
  const reduxData = useSelector((state: any) => state.slice);
  const authLoggedUser = reduxData?.data?.loggeduser;

  // authentatication_Part_end
  // ===========================================

  const windowEvent = () => {
    const MenuLineDivAll = document.querySelector(
      "#MenuLineDiv"
    ) as HTMLElement;
    const SideNavvAll = document.querySelector(".SideNav") as HTMLElement;

    const ProfiledataDiv = document.querySelector(
      ".profiledataDiv"
    ) as HTMLElement;
    const ProfileAndlogoDiv = document.querySelector(
      ".profileAndlogoDiv"
    ) as HTMLElement;

    document.addEventListener("click", (e: any) => {
      if (
        !SideNavvAll.contains(e.target) &&
        !MenuLineDivAll.contains(e.target)
      ) {
        setMenuFlag(false);
      }
      if (
        !ProfiledataDiv.contains(e.target) &&
        !ProfileAndlogoDiv.contains(e.target)
      ) {
        setProfileFlag(false);
      }
    });
  };

  const onGeneralLogout = async () => {
    try {
      const fetchlogout = await axios.get("/pages/api/logout");
      if (fetchlogout.data.success) {
        toast.success("Logout successful");
        router.refresh();
        router.push("/");
        setProfileFlag(false);
      }
    } catch (error: any) {
      toast.success("something went wrong");
    }
  };

  useEffect(() => {
    windowEvent();
    dispatch(AllbackendData());
  }, []);

  return (
    <main>
      <nav
        id={Style.Nav}
        className={`${popins.className} fixed z-50 left-0 top-0 w-full  h-20 backdrop:filter backdrop-blur-3xl  text-white flex items-center justify-between pr-10 pl-10 max-sm:pl-5 max-sm:pr-5`}
      >
        <div
          className={` profileAndlogoDiv w-12 h-12 rounded-full overflow-hidden`}
        >
          {authLoggedUser == null ? (
            <Image
              className=""
              src={"/logos/Hirock.png"}
              alt="logo"
              height={500}
              width={500}
            />
          ) : (
            <Image
              onClick={() => setProfileFlag(!profileflag)}
              className=""
              src={authLoggedUser?.image.toString()}
              alt="image"
              height={500}
              width={500}
            />
          )}
        </div>
        {/* side_nav_start */}
        <Side_nav flag={menuFlag} loggeddata={authLoggedUser} />
        <ProfileNav
          onClick={onGeneralLogout}
          profileflag={profileflag}
          loggeddata={authLoggedUser}
        />
        {/* side_nav_start */}

        {/* menu_Line_start */}
        <div id="MenuLineDiv" className=" hidden max-sm:block">
          <div
            onClick={() => setMenuFlag(!menuFlag)}
            className={`${
              !menuFlag ? "block" : "hidden"
            } cursor-pointer select-none w-7 h-7`}
          >
            <Image
              onClick={() => setMenuFlag(!menuFlag)}
              src={"/all_svg/menu-2-line.svg"}
              alt="menu"
              width={500}
              height={500}
            />
          </div>
          <div
            onClick={() => setMenuFlag(!menuFlag)}
            className={`${
              !menuFlag ? "hidden" : "block"
            } cursor-pointer select-none w-7 h-7`}
          >
            <Image
              src={"/all_svg/close-large-line.svg"}
              alt="menu"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* menu_Line_end */}
        <div className=" max-sm:hidden">
          <ul id={Style.NavUl} className={` flex gap-5 select-none`}>
            {NavRoute.map((item: any) => (
              <Link key={item.id} href={item.href}>
                {
                  <li
                    className={`${
                      pathname == item.href ? " text-yellow-600" : null
                    }`}
                  >
                    {item.title}
                  </li>
                }
              </Link>
            ))}

            {authLoggedUser == null ? (
              <Link href={"/user/login"}>
                <li>Login</li>
              </Link>
            ) : null}
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav_Bar;
