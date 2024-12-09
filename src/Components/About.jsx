const About = ({ aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="min-h-[calc(100svh-80px)] w-full flex flex-col  lg:flex-row items-center justify-center lg:pt-16 mb-20 lg:px-14 px-4 gap-20 lg:gap-0"
    >
      <div className="lg:w-1/2 w-full lg:h-full  flex items-center justify-center ">
        <img
          src="/about-me.png"
          alt="about"
          className="lg:size-[570px] size-[400px] object-contain"
        />
      </div>
      <div className="lg:w-1/2 w-full lg:h-full flex  flex-col items-center lg:items-start justify-center  gap-6 lg:pr-[150px] ">
        <h3 className="text-lg font-semibold text-center lg:text-start">
          About
        </h3>
        <h1 className="lg:text-5xl text-3xl font-bold text-center lg:text-start">
          About Me
        </h1>
        <p className="text-base font-medium tracking-wide text-center lg:text-start">
          I am a skilled web developer with expertise in React, Firebase, and
          Redux Toolkit. He has a strong focus on building user-friendly
          interfaces and integrating APIs to deliver high-quality web
          applications. His work reflects creativity and a commitment to solving
          complex challenges effectively.
        </p>
        <p className="text-base font-medium tracking-wide text-center lg:text-start">
          Currently, I am expanding my skills into backend development with
          frameworks like Node.js and Next.js. With a keen interest in AI-driven
          solutions, I am passionate about creating impactful projects that
          blend innovation with functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
