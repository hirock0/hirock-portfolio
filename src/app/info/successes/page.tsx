import Image from "next/image";
import Style from "./successes.module.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["200", "200"],
  subsets: ["latin"],
});
import { Bitter } from "next/font/google";
import SuccessProjects from "./successProjects/SuccessProjects";
const bitter = Bitter({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Successes = () => {
  return (
    <main className={`${poppins.className}`}>
      <div className=" relative pr-10 pl-10 max-sm:pl-5 max-sm:pr-5  ">
        <div className=" absolute top-0 left-0 w-full h-full ">
          <video
            src="/videos/successes.mp4"
            loop
            muted
            autoPlay
            controls={false}
            className=" h-full w-full object-cover"
          />
        </div>
        <div className=" pt-20 ">
          {/* specialist_start */}
          <div className=" flex items-center justify-center mt-5 ">
            <div className=" backdrop:filter backdrop-blur-0 hidden lg:block">
              <div className="">
                <Image
                  id={Style.manPicTop}
                  src={"/images/man_indicates.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className=" p-5  rounded-md backdrop:filter backdrop-blur-2xl pr-5 pl-5 md:w-4/5 lg:w-3/5 sm:w-full max-sm:w-full max-sm:text-sm">
              <h1
                className={`text-center text-2xl underline underline-offset-4`}
              >
                Specialist
              </h1>
              <p className={` mt-3`}>
                As a web programmer, I specialize in creating and maintaining
                dynamic, user-friendly websites and web applications. My
                expertise lies in various programming languages, including HTML,
                CSS, and JavaScript, as well as back-end technologies like
                Python and PHP. I have a strong eye for design and a deep
                understanding of responsive web design principles, ensuring my
                projects look great and function seamlessly across all devices.
                I enjoy collaborating with designers, content creators, and
                other developers to bring innovative ideas to life, solve
                complex problems, and optimize web performance. My passion for
                coding drives me to continuously learn and adapt to the
                ever-evolving landscape of web development, delivering top-notch
                digital experiences for users and businesses alike.
              </p>
            </div>
            <div className=" backdrop:filter backdrop-blur-0 hidden lg:block">
              <div className="">
                <Image
                  src={"/images/indicator.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          {/* specialist_end */}
          {/* ............................................................. */}
          {/* My_Completed_task_start */}
          <div className=" backdrop:filter backdrop-blur-2xl flex items-center justify-center">
            <div className={` w-full mt-5  `}>
              <h1
                className={`max-sm:text-base text-xl text-center bg-emerald-800/80 pt-5 pb-5 max-sm:pt-3 max-sm:pb-3 rounded-sm object-cover `}
              >
                My Completed Projects
              </h1>

              <SuccessProjects />
            </div>
          </div>
          {/* My_Completed_task_end */}

          <div
            className={` backdrop:filter backdrop-blur-2xl mt-5 pt-5 pr-5 pl-5`}
          >
            <div id="commonAnimation" className="  ">
              <h1
                id="commonAnimation"
                className="  text-2xl underline underline-offset-4 text-center"
              >
                About our successes
              </h1>

              <p id="commonAnimation" className=" mt-5">
                As a dedicated team of web developers, our successes are defined
                by our commitment to innovation, quality, and client
                satisfaction. We have consistently delivered cutting-edge
                websites and web applications that are not only visually
                stunning but also highly functional and user-friendly. Our
                portfolio boasts successful projects across various industries,
                each tailored to meet unique client needs and drive their
                business goals.
              </p>
              <h1 id="commonAnimation" className=" mt-5">
                Key achievements include:
              </h1>
              <ul
                id="commonAnimation"
                className={` ${Style.SuccessesUl} list-inside list-disc gap-5 mt-2 grid lg:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2`}
              >
                <li id="commonAnimation">
                  <p>
                    {" "}
                    E-commerce Excellence: Developed robust, scalable e-commerce
                    platforms that have significantly increased our clients'
                    online sales and customer engagement.
                  </p>
                </li>
                <li>
                  <p>
                    Custom Solutions: Created bespoke web applications with
                    complex functionalities, solving specific business
                    challenges and improving operational efficiency for our
                    clients.
                  </p>
                </li>
                <li id="commonAnimation">
                  <p>
                    {" "}
                    Responsive Design: Ensured all our websites are fully
                    responsive, providing an optimal user experience across all
                    devices and screen sizes.
                  </p>
                </li>
                <li id="commonAnimation">
                  <p>
                    {" "}
                    SEO Optimization: Implemented best practices in SEO,
                    resulting in higher search engine rankings and increased
                    organic traffic for our clients' websites.{" "}
                  </p>
                </li>
                <li id="commonAnimation">
                  <p>
                    {" "}
                    User-Centric Approach: Prioritized user experience (UX) and
                    user interface (UI) design, leading to intuitive,
                    easy-to-navigate websites that enhance user satisfaction and
                    retention.
                  </p>
                </li>
              </ul>

              <p id="commonAnimation" className=" mt-5 pb-5">
                Through our technical expertise and creative vision, we have
                built a reputation for excellence, helping businesses transform
                their online presence and achieve measurable success
              </p>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </main>
  );
};

export default Successes;
