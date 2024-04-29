import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-4xl lg:text-6xl text-center tracking-wide">
        Virtual Build Tool
        <br />
        <span>for developers</span>
      </h1>
      <div className="mt-10 text-lg text-center font-bold max-w-4xl">
        Open-source library of interactive UI components built with the utility
        classes from Tailwind CSS.
      </div>
      <div className="flex justify-center my-10">
        <Link href={"/signin"} className="gradient">
          Start for Free
        </Link>
        <Link
          className="px-4 py-3 mx-3 border rounded-md hover:gradient"
          href={"/docs"}
        >
          Documentation
        </Link>
      </div>
    </div>
  );
};

export default Hero;
