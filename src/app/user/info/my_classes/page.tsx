import Style from "./myclasses.module.css";
const My_classes = () => {
  return (
    <main
      id={Style.main}
      className=" pr-10 pl-10 pt-20 max-sm:pl-5 max-sm:pr-5"
    >
      <div className={`${Style.insideMain} mt-5 `}>
        <h1 className=" text-center underline underline-offset-8 text-2xl">
          My Classes
        </h1>

        {/* part_1_start */}
        <div className=" mt-5">
          <h1>Junior Web Developer</h1>
          <p className=" mt-5">
            As a Junior Web Developer, I focus on building and maintaining
            websites and web applications. My role involves writing clean,
            efficient code using languages like HTML, CSS, and JavaScript. I
            collaborate closely with senior developers and designers to
            implement their vision and ensure that the final product is
            user-friendly and meets all functional requirements.
          </p>
          <p className=" mt-5">
            I also handle basic debugging and testing to identify and fix any
            issues that arise. This role requires me to stay updated with the
            latest web development trends and technologies, continuously
            improving my skills through hands-on experience and mentorship from
            senior team members. My tasks often include:
          </p>
          <ul className=" mt-5">
            <li>Developing and implementing front-end features.</li>
            <li>Assisting with back-end development tasks.</li>
            <li>
              Collaborating with designers to create responsive and visually
              appealing websites.
            </li>
            <li>
              Writing and maintaining documentation for code and processes.
            </li>
            <li>
              Participating in code reviews to learn best practices and improve
              code quality.
            </li>
          </ul>
        </div>
        {/* part_2_end */}
        <div className=" mt-10">
          <h1>Senior Web Developer</h1>
          <p className=" mt-5">
            As a Senior Web Developer, I take on a leadership role within the
            development team, overseeing projects from conception to completion.
            My responsibilities include designing the architecture of web
            applications, ensuring scalability and performance, and leading a
            team of junior developers.
          </p>
          <p className=" mt-5">
            I work closely with clients and stakeholders to understand their
            needs and translate them into technical requirements. My role
            involves mentoring junior developers, conducting code reviews, and
            setting coding standards to maintain high-quality output. I also
            stay abreast of industry advancements and integrate new technologies
            into our development processes when appropriate. Key
            responsibilities include:
          </p>
          <ul className=" mt-5">
            <li>Leading the development of complex web applications.</li>
            <li>Designing and implementing robust, scalable architectures.</li>
            <li>
              Mentoring and guiding junior developers to enhance their skills.
            </li>
            <li>
              Ensuring code quality through rigorous testing and code reviews.
            </li>
            <li>
              Collaborating with cross-functional teams, including designers,
              project managers, and clients.
            </li>
            <li>
              Staying informed about the latest web technologies and trends to
              drive innovation within the team.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default My_classes;
