import FreeLancingField from "@/components/home_page/freelancingFields/FreeLancingField";
import ScrollSkills from "@/components/home_page/scrollSkills/ScrollSkills";
import Cards from "@/components/home_page/section_1/cards/Cards";
import { Poppins } from "next/font/google";
const popins = Poppins({
  weight: ["200", "200"],
  subsets: ["latin"],
});
const Home = async() => {
  return (
    <main className={` ${popins.className} `}>
      {/* section_1_start */}
      <section
        id="Home_1"
        className=" relative pt-20 text-white pr-10 pl-10 max-sm:pl-5 max-sm:pr-5"
      >
                <div className=" absolute top-0 left-0 w-full h-full object-cover rounded-md overflow-hidden">
                  <video className=" h-full w-full object-cover" src="/videos/about_page_video.mp4" autoPlay loop muted controls={false}/>
              </div>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="  max-sm:w-full sm:w-full md:w-4/5 lg:w-3/5 mt-5 flex flex-col items-center justify-center backdrop:filter backdrop-blur-3xl p-5 rounded-md">
            <div className=" flex items-center">


              <h1 className=" text-3xl text-center  w-full">Portfolio</h1>

            </div>
            <p className=" mt-5 max-sm:text-sm">
               Welcome to my portfolio! I am a web developer proficient in Next.js, JavaScript, MongoDB, React, Redux, HTML, and CSS. With expertise in building dynamic and responsive web applications, I leverage Next.js for its robust framework capabilities, ensuring server-side rendering and optimal performance. My skills in JavaScript and React allow me to create interactive user interfaces, while Redux ensures efficient state management. I use MongoDB for scalable database solutions and craft visually appealing designs with HTML and CSS. Explore my projects to see how these technologies come together to create seamless and engaging user experiences.
            </p>
            <Cards />
          </div>
        </div>
        <div className="">
          <ScrollSkills />
        </div>
      </section>
      {/* section_1_end */}
      {/* ========================================================= */}
      {/* section_2 Start */}
      <section className={` section_2 pr-10 pl-10 max-sm:pl-5 max-sm:pr-5`}>
        <div id="commonAnimation" className="">
          <FreeLancingField />
        </div>

        <div className={`max-md:pr-5 max-md:pl-5 pt-10 overflow-hidden `}>
          <div className=" h-full">
            <h1 className=" text-center text-2xl underline underline-offset-4">
              Our Goal
            </h1>
            <div className="  flex items-center justify-center flex-col">
              <div
                id="commonAnimation"
                className=" pt-32 flex items-end justify-center  p-5 mt-5 max-sm:text-sm "
              >
                <p className={` sm:w-full md:w-4/5 lg:3/5`}>
                  As a web developer skilled in Next.js, MongoDB, JavaScript,
                  HTML, CSS, Tailwind CSS, and TypeScript, my goal is to create
                  high-performance, scalable web applications that provide
                  seamless user experiences. I aim to leverage modern
                  technologies and best practices to build innovative and robust
                  solutions that meet client needs and exceed expectations. By
                  staying updated with the latest industry trends and
                  continuously honing my skills, I strive to deliver efficient,
                  maintainable, and aesthetically pleasing web applications.
                </p>
              </div>

              <div className=" w-full">
                <h1 className=" text-center underline underline-offset-4">
                  Useable Tecnologies
                </h1>
              </div>
              <div
                id="commonAnimation"
                className={`pt-32 flex items-end justify-center  p-5 mt-5  `}
              >
                <ul
                  className={` projectToolDetailsUl list-inside list-decimal  sm:text-base md:w-4/5 sm:w-full  max-sm:text-sm `}
                >
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4 ">Next.Js</h1>
                    <p className="  mt-2 ">
                      Next.js is a React framework that enables server-side
                      rendering and static site generation. It simplifies the
                      development of fast and scalable web applications by
                      providing features like automatic code splitting,
                      optimized performance, and built-in routing.
                    </p>
                  </li>
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4 ">
                      JavaScript
                    </h1>
                    <p className="  mt-2  ">
                      JavaScript is a versatile, high-level programming language
                      used to create dynamic and interactive content on the web.
                      It is a core technology of web development, enabling the
                      implementation of complex features on web pages.
                    </p>
                  </li>
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4 "> HTML </h1>
                    <p className="  mt-2  ">
                      HTML is the standard markup language used to create and
                      structure content on the web. It forms the backbone of web
                      pages, allowing the inclusion of text, images, links, and
                      other media.
                    </p>
                  </li>
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4 "> CSS</h1>
                    <p className="  mt-2  ">
                      CSS is a style sheet language used to describe the
                      presentation of a document written in HTML. It controls
                      the layout, colors, fonts, and overall visual appearance
                      of web pages, ensuring a consistent and aesthetically
                      pleasing design.
                    </p>
                  </li>
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4 ">MongoDB</h1>
                    <p className="  mt-2  ">
                      MongoDB is a NoSQL database known for its flexibility,
                      scalability, and performance. It stores data in JSON-like
                      documents, allowing for dynamic schema design, making it
                      ideal for applications with evolving data requirements and
                      real-time data processing needs.
                    </p>
                  </li>
                  <li id="commonAnimation" className="">
                    <h1 className=" underline underline-offset-4">
                      {" "}
                      Redux Toolkit
                    </h1>
                    <p className=" mt-2 ">
                      Redux Toolkit is an official, opinionated, and powerful
                      set of tools for efficient Redux development. It
                      simplifies the process of writing Redux logic, reducing
                      boilerplate code and improving developer experience with
                      built-in best practices and utilities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section_2 end */}
      {/* ==================================================== */}
      {/* section_3_start */}

        <section>

          
        </section>
      {/* section_3_end */}
    </main>
  );
};

export default Home;
