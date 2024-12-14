import { IoStarSharp } from "react-icons/io5";
import Data from "../Data";

const Reviews = () => {
  return (
    <div className="min-h-[calc(100svh-80px)] w-full flex lg:items-start items-center justify-center flex-col lg:px-14 px-4 lg:gap-10 gap-8 lg:py-28 py-14 sm:py-20 bg-bgColor">
      <h4 className="text-lg font-semibold text-center lg:text-start 2xl:text-2xl 2xl:font-bold">
        Clients Feedback
      </h4>
      <h1 className="lg:text-5xl text-3xl font-bold lg:text-start text-center 2xl:text-6xl 2xl:font-extrabold">
        Customer Feedback
      </h1>
      <div className="grid place-items-center w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-10">
        {Data.Reviews.map((obj, index) => (
          <div
            key={index}
            className="flex items-center justify-around gap-8 2xl:gap-9 rounded-lg px-7 2xl:px-8 py-8 2xl:py-9 flex-col border-2 border-[#006A69] min-h-full"
          >
            <div className="flex items-start justify-center">
              {[...Array(5)].map((_, index) => (
                <IoStarSharp
                  key={index}
                  className="text-yellow-500 text-4xl font-bold 2xl:text-6xl"
                />
              ))}
            </div>
            <p className="text-base font-normal tracking-wide text-center 2xl:text-lg 2xl:font-medium">
              {obj.feedback}
            </p>
            <div className="flex lg:gap-8 2xl:gap-10 gap-3  items-center justify-center">
              <img src={obj.image} alt="client" />
              <div>
                <p className="lg:text-xl 2xl:text-2xl text-lg font-bold 2xl:font-extrabold">
                  {obj.fName}
                </p>
                <p className="lg:text-lg 2xl:text-xl text-base font-normal 2xl:font-medium">
                  {obj.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
