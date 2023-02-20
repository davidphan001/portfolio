import React from "react";
import Resume from "../assets/DavidPResume2023.pdf";

const CTA = () => {
  return (
    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto grid grid-cols-1 pt-10 px-20 gap-5 md:grid-cols-2">
      <a
        className="bg-black  text-white font-bold py-2 rounded-md border-2 border-black transition-all duration-200 hover:-mx-2 hover:shadow-xl"
        href={Resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a
        className="bg-transparent  text-black font-bold py-2 rounded-md border-2 border-black transition-all duration-200 hover:-mx-2 hover:shadow-xl"
        href="mailto: david.viet.phan@gmail.com"
      >
        Let's chat
      </a>
    </div>
  );
};

export default CTA;
