import React from "react";
import CTA from "./CTA";
import PCDeveloper from "../assets/developerPC.png";

const Header = ({ id }) => {
  return (
    <section className="showcase" id={id}>
      <div className="text-center">
        <h1 className="px-5 text-lg">Hello there, I am David Phan, a</h1>
        <h1 className="pt-2 text-4xl font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/davidvphan/"
            rel="noreferrer"
          >
            <span className="foot_link hover:font-extrabold">
              Software Engineer
            </span>
          </a>
        </h1>
        <h1 className="pt-2 text-4xl font-bold sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl ">
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=UjZw1kG8Ts0&ab_channel=PhantasyFootage"
            rel="noreferrer"
          >
            <span className="foot_link hover:font-extrabold">
              & Drone Pilot
            </span>
          </a>
        </h1>
        <h1 className="pt-2 text-lg">based in Wisconsin, United States.</h1>
        <CTA />
        <div className="justify-center flex">
          <img
            src={PCDeveloper}
            alt="developerPC"
            className="max-h-96 sm:max-h-96 sm:max-w-full lg:max-h-full lg:max-w-lg h-auto"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Header;
