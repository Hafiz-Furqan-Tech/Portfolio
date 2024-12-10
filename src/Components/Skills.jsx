import Data from "../Data";

const Skills = ({ skillsRef }) => {
  return (
    <div
      ref={skillsRef}
      className="min-h-[calc(100svh-80px)] w-full flex items-center lg:items-start justify-center flex-col lg:px-14 px-4 lg:gap-10 gap-8 lg:py-28 py-14 sm:py-20"
    >
      <h4 className="text-lg font-semibold text-center lg:text-start">
        Technologies & Tools
      </h4>
      <h1 className="lg:text-5xl text-3xl font-bold text-center lg:text-start">
        My Expertise
      </h1>
      <div className="grid place-items-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {Data.Skills.map((obj, index) => (
          <div
            key={index}
            className=" bg-bgColor flex lg:items-start items-center justify-center flex-col lg:gap-6 gap-4 lg:px-5 px-3 py-6 rounded-xl drop-shadow-xl hover:scale-105 transition-all duration-[300ms] cursor-pointer ease-in-out"
          >
            {
              <obj.icon className="text-[#006867] text-6xl font-bold 2xl:text-7xl" />
            }
            <p className="text-2xl font-bold">{obj.skill}</p>
            <p className="text-base font-normal tracking-wide text-center lg:text-start">
              {obj.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
