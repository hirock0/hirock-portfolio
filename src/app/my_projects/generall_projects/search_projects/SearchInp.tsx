"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const SearchInp = () => {
  const [searchdata, setSearchData] = useState<string>("");
  const pathName = usePathname();
  const { replace } = useRouter();
  const onSearchData = () => {
    const urlData = new URLSearchParams();
    urlData.set("q", searchdata);
    if (searchdata.length == 0) {
      urlData.delete("q");
    }
    replace(`${pathName}?${urlData}`);
  };
  useEffect(() => {
    onSearchData();
  }, [searchdata]);
  return (
    <div className=" relative border md:w-1/2 max-sm:w-4/5 sm:w-4/5 h-10 rounded-md overflow-hidden">
      <input
        value={searchdata}
        onChange={(e) => setSearchData(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder="Seach..."
        className=" w-full h-full  text-black pl-2 outline-none "
      />
      <div className=" absolute right-0 top-0 bg-white flex items-center justify-center h-full w-10">
        <Image
          src={"/all_svg/search-line.svg"}
          alt="search"
          width={25}
          height={25}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchInp;
