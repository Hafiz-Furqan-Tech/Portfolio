import { useRef } from "react";

export const useRefs = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return { homeRef, skillsRef, aboutRef, contactRef };
};

export const scrollToSection = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};
