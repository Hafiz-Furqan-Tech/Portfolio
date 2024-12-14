import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { scrollToSection } from "../Refs";

const Footer = ({ pages }) => {
  return (
    <div className="min-h-[400px] flex-col w-full flex items-start justify-center pt-16 px-4 lg:px-14 2xl:px-16 gap-5 lg:gap-10 2xl:gap-12 bg-bgColor py-2 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-10 lg:gap-0">
        <img
          src="/logo.png"
          className="lg:h-[80px] h-[65px] 2xl:h-[100px] w-24 lg:w-28 2xl:w-[132px] object-cover"
          alt="Logo"
        />
        <ul className="hidden items-center gap-6  text-xl 2xl:text-2xl font-bold lg:flex">
          {pages.map((obj, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => scrollToSection(obj.ref)}
            >
              <p>{obj.Page}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-7 text-3xl 2xl:text-4xl">
          <a href="https://www.facebook.com/MuhammadFurqan06/" target="blank">
            <FaFacebookF className="cursor-pointer hover:scale-105" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-furqan"
            target="blank"
          >
            <FaLinkedin className="cursor-pointer hover:scale-105" />
          </a>
        </div>
      </div>
      <hr className="h-1 w-full bg-black" />
      <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row w-full gap-8 lg:gap-0">
        <h2 className="text-lg 2xl:text-xl font-semibold  text-center lg:text-start">
          Developed By Muhammad Furqan
        </h2>
        <div className="flex gap-5 text-sm 2xl:text-base text-center lg:text-start flex-col lg:flex-row -order-1 lg:order-1">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
