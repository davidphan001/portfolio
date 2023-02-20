import React from "react";

function About({ id }) {
  return (
    <div
      id={id}
      className="bg_color flex flex-col items-center justify-center px-5 py-5"
    >
      <div className="max-w-5xl bg-white shadow-md rounded-md px-8 py-5">
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hello there, My name is David and I am fond of building applications
          that provide users with a great experience. My interest in software
          development started around the Myspace era when I tried editing my
          profile, it became apparent that hacking together a music playlist
          taught me a lot about HTML/CSS!
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Sped up to now, I have had the privilege to work for
          <span className=" text-blue-500">
            {" "}
            <a
              href="https://www.webhostingpad.com/"
              target="_blank"
              rel="noreferrer"
            >
              a web hosting company
            </a>
          </span>
          ,
          <span className=" text-blue-500">
            {" "}
            <a href="https://www.rantizo.com/" target="_blank" rel="noreferrer">
              an agricultural drone spraying start-up
            </a>
          </span>
          ,
          <span className=" text-blue-500">
            {" "}
            <a
              href="https://appfactoryuwp.com/"
              target="_blank"
              rel="noreferrer"
            >
              a university design studio
            </a>
          </span>
          , and
          <span className=" text-blue-500">
            {" "}
            <a
              href="https://companionprotect.com/"
              target="_blank"
              rel="noreferrer"
            >
              a pet insurance company
            </a>
          </span>
          . I am currently looking for my next venture. With my persistence and
          passion I can help companies with their products through technology.
        </p>
      </div>
    </div>
  );
}

export default About;
