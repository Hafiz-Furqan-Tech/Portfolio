import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { scrollToSection } from "../Refs";

const Navbar = ({ pages }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="h-20 overflow-hidden w-full flex items-center justify-between px-2 lg:px-14 sticky top-0 bg-white z-[1060]">
<<<<<<< HEAD
      <div>
        <img
          src="/logo.png"
          className="lg:h-[80px] h-[65px] 2xl:h-[100px] w-24 lg:w-28 2xl:w-[132px] object-cover"
          alt="Logo"
        />
      </div>
      <div
        className="lg:hidden text-2xl font-extrabold hover:scale-110 transition-all duration-200 ease-in-out"
        onClick={handleToggle}
        aria-label="Toggle Navigation Menu"
        role="button"
        tabIndex="0"
      >
        <RiMenu3Fill />
      </div>
      {/* Mobile View */}
      <ul
        className={`${toggle ? "translate-x-0" : "-translate-x-full"}
        inset-0 fixed flex  bg-[#F5FCFF] items-center justify-center flex-col gap-10 text-xl font-bold transition-all duration-300 ease-in-out md:right-[55%] lg:hidden`}
      >
        <li
          className="absolute top-2 right-2  text-3xl hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
=======
      <div className="h-full w-full max-w-[1600px] flex items-center justify-between overflow-hidden">
        <div>
          <img
            src="/logo.png"
            className="lg:h-[80px] h-[65px] w-24 lg:w-28 object-cover"
            alt="Logo"
          />
        </div>
        <div
          className="lg:hidden text-2xl font-extrabold hover:scale-110 transition-all duration-200 ease-in-out"
>>>>>>> 2aef984
          onClick={handleToggle}
          aria-label="Toggle Navigation Menu"
          role="button"
          tabIndex="0"
        >
          <RiMenu3Fill />
        </div>

<<<<<<< HEAD
      {/* Laptop View */}

      <ul className="hidden items-center gap-6  2xl:text-2xl text-xl font-bold lg:flex">
        {pages.map((obj, index) => (
=======
        {/* Mobile View */}
        <ul
          className={`${toggle ? "translate-x-0" : "-translate-x-full"}
        inset-0 fixed flex bg-[#F5FCFF] items-center justify-center flex-col gap-10 text-xl font-bold transition-all duration-300 ease-in-out md:right-[55%] lg:hidden`}
        >
>>>>>>> 2aef984
          <li
            className="absolute top-2 right-2 text-3xl hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            onClick={handleToggle}
          >
            <IoClose />
          </li>
<<<<<<< HEAD
        ))}
      </ul>
      <button
        type="button"
        className="hidden lg:block text-btnColor outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-2 border-btnColor hover:text-white hover:bg-btnColor transition-all duration-[500ms] ease-in-out whitespace-nowrap 2xl:px-5 2xl:py-3 2xl:font-semibold 2xl:text-base"
      >
        Get started
      </button>
=======
          {pages.map((obj, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => (handleToggle(), scrollToSection(obj.ref))}
            >
              <p>{obj.Page}</p>
            </li>
          ))}
          <li>
            <a
              href="/Resume.pdf"
              download="Muhammad_Furqan_Resume.pdf"
              className="lg:hidden text-btnColor outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-2 border-btnColor hover:text-white hover:bg-btnColor transition-all duration-[600ms] ease-in-out whitespace-nowrap"
            >
              Download My Resume
            </a>
          </li>
        </ul>

        {/* Laptop View */}
        <ul className="hidden items-center gap-6 text-xl font-bold lg:flex">
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
        <a
          href="/Resume.pdf"
          download="Muhammad_Furqan_Resume.pdf"
          className="hidden lg:block text-btnColor outline-none font-medium rounded-lg text-sm px-4 py-2 text-center border-2 border-btnColor hover:text-white hover:bg-btnColor transition-all duration-[500ms] ease-in-out whitespace-nowrap"
        >
          Download My Resume
        </a>
      </div>
>>>>>>> 2aef984
    </nav>
  );
};

export default Navbar;
