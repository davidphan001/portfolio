import React, { useState, useEffect } from "react";
import Logo from "../assets/PsDavidLogo.png";

const Nav = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
      setIsAtTop(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg_color fixed w-full transition-all duration-300 ${
        isHidden ? "-translate-y-full " : "translate-y-0 "
      }${isAtTop ? "" : "shadow-lg"} bg-white`}
    >
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <a
          href="#header"
          className="font-bold text-lg"
          onClick={(e) => props.handleClick(e, "header")}
        >
          <img src={Logo} alt="DavidLogo" className="w-16 h-16"></img>
        </a>
        <ul className="flex items-center">
          <li>
            <a
              href="#about"
              className="hover:font-bold ml-6 text-gray-600 hover:text-gray-800"
              onClick={(e) => props.handleClick(e, "about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:font-bold ml-6 text-gray-600 hover:text-gray-800"
              onClick={(e) => props.handleClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto: david.viet.phan@gmail.com"
              className="hover:font-bold ml-6 text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
