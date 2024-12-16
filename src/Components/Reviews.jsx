import { IoStarSharp } from "react-icons/io5";
import Data from "../Data";

const Reviews = () => {
  return (
    <div className="min-h-[calc(100svh-80px)] w-full flex items-center justify-center  lg:px-14 px-4  lg:py-28 py-14 sm:py-20 bg-bgColor">
      <div className="w-full h-full max-w-[1600px] flex flex-col justify-center lg:items-start items-center lg:gap-10 gap-8">
        <h4 className="text-lg font-semibold text-center lg:text-start">
          Clients Feedback
        </h4>
        <h1 className="lg:text-5xl text-3xl font-bold lg:text-start text-center">
          Customer Feedback
        </h1>
        <div className="grid place-items-center w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {Data.Reviews.map((obj, index) => (
            <div
              key={index}
              className="flex items-center justify-around gap-8 rounded-lg px-7 py-8 flex-col border-2 border-[#006A69] min-h-full"
            >
              <div className="flex items-start justify-center">
                {[...Array(5)].map((_, index) => (
                  <IoStarSharp
                    key={index}
                    className="text-yellow-500 text-4xl font-bold"
                  />
                ))}
              </div>
              <p className="text-base font-normal tracking-wide text-center">
                {obj.feedback}
              </p>
              <div className="flex lg:gap-8 gap-3  items-center justify-center">
                <img src={obj.image} alt="client" />
                <div>
                  <p className="lg:text-xl text-lg font-bold">{obj.fName}</p>
                  <p className="lg:text-lg text-base font-normal">
                    {obj.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
