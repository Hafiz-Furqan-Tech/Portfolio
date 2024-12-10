import { FaArrowUpLong } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Data from "../Data";

const Projects = () => {
  return (
    <div className="min-h-[calc(100svh-80px)] flex-col w-full flex items-center lg:items-start justify-center pt-16 mb-32 lg:px-14 px-4 gap-10">
      <h4 className="text-lg font-semibold text-center lg:text-start">
        Recent Projects
      </h4>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        <h1 className="lg:text-5xl text-3xl text-center lg:text-start font-bold">
          Portfolio
        </h1>
        <button className="flex hover:text-[#E62872] hover:bg-white hover:border-2 hover:border-[#E62872] bg-[#E62872] hover:scale-105 transition-all duration-[400ms] ease-in-out text-white px-2 lg:px-3 py-3 lg:py-4 rounded-xl lg:gap-2 items-center justify-center">
          <FiGithub className="text-3xl lg:text-2xl text-black" />
          <a href="https://github.com/Hafiz-Furqan-Tech" target="blank">
            View All Projects on Github
          </a>
        </button>
      </div>
      <div className="grid w-full place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
        {Data.Projects.map((obj, index) => (
          <div
            key={index}
            className=" bg-bgColor  flex lg:items-start items-center justify-center flex-col lg:gap-6 gap-5 lg:px-5 px-3 py-6 rounded-xl shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-[300ms] cursor-pointer ease-in-out"
          >
            <img
              src={obj.image}
              alt="project"
              className="bg-white lg:px-2 lg:py-2 rounded-lg shadow-lg shadow-gray-400 "
            />
            <p className="text-2xl font-bold text-center lg:text-start">
              {obj.name}
            </p>
            <p className="text-base font-normal tracking-wide text-center lg:text-start">
              {obj.para}
            </p>
            <a
              target="blank"
              href={obj.link}
              className="font-medium text-center lg:justify-start justify-center  lg:text-start w-full flex gap-3 items-center border-b-[1px] border-btnColor"
            >
              View in Github
              <FaArrowUpLong className="rotate-45 text-xl" />
            </a>
            <a
              target="blank"
              href={obj.demo}
              className="font-medium w-full flex lg:justify-start justify-center gap-3 items-center border-b-[1px] border-btnColor text-center lg:text-start"
            >
              Live Demo
              <FaArrowUpLong className="rotate-45 text-xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
