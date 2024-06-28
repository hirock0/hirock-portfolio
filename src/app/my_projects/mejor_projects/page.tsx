import Style from "./mejor.module.css";
import SearchInp from "./search_projects/SearchInp";
import AllMejor_Projects from "./all_mejor_projects/Mejor_Projects";

interface Props {
  searchParams: string | any;
}

const Mejor_Projects: React.FC<Props> = ({ searchParams }) => {
  return (
    <main className=" pt-20 pr-10 pl-10 max-sm:pr-5 max-sm:pl-5">
      <div className=" pt-5 w-full h-full bg-slate-900 rounded-md pb-10">
        {/* search_part_start */}
        <h1 className=" text-center ">Here is my all Mejor projects</h1>
        <h1 className=" text-center mt-2">Please Search down</h1>
        <div className=" flex items-center justify-center mt-5 border-b-2 pb-5">
          <SearchInp />
        </div>
        {/* search_part_end */}
        <div className="  mt-5">
          <AllMejor_Projects searchdata={searchParams.q || ""} />
        </div>
      </div>
    </main>
  );
};

export default Mejor_Projects;
