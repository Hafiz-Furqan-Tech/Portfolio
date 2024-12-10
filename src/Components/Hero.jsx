const Hero = ({ homeRef }) => {
  return (
    <div
      ref={homeRef}
      className="min-h-[calc(100svh-80px)] w-full bg-bgColor flex flex-col lg:flex-row lg:px-14 px-4 gap-10 lg:gap-0 py-12 lg:py-0"
    >
      <div className="lg:w-1/2 w-full  flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-5">
        <h3 className=" text-base lg:text-lg font-semibold text-center">
          Hey, I'm Muhammad Furqan
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-start">
          Frontend Developer
        </h1>
        <h4 className="lg:text-lg text-base text-center lg:text-start font-medium">
          I am a Frontend Developer skilled in creating responsive,
          user-friendly websites using modern technologies like React, HTML,
          CSS, and JavaScript.
        </h4>
        <h5 className="text-base text-center lg:text-start font-medium">
          I design and develop interactive web solutions, focusing on quality,
          performance, and seamless user experiences.
        </h5>
        <button
          type="button"
          className="bg-btnColor hover:bg-white hover:text-btnColor hover:border-[1px] hover:border-btnColor transition-all duration-[500ms] ease-in-out text-white text-lg font-medium px-4 py-3 rounded-md"
        >
          Get in Touch
        </button>
      </div>
      <div className="lg:w-1/2 w-full -order-1 lg:order-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center h-[200px] w-[280px] lg:h-[400px] lg:w-[480px] rounded-2xl bg-[#8da8b6] overflow-hidden drop-shadow-lg">
          <img
            src="/Photo.png"
            alt="my-photo"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
