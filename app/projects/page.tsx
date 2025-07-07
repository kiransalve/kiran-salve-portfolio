"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projectData } from "../../data/projectdata";

const Projects = () => {
  return (
    <div className="p-4">
      <div className="text-center text-2xl font-bold mb-6">My Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center w-full">
        {projectData.map(({ githubLink, subtitle, title, imgUrl }, index) => (
          <div
            className="relative rounded-md cursor-pointer overflow-hidden max-w-[270px] mx-auto bg-slate-800"
            key={index}
          >
            <Image
              src={imgUrl}
              width={290}
              height={270}
              alt={title}
              className="rounded-md object-cover h-[150px]"
            />
            <div className="flex flex-col items-center my-3 ">
              <div className="font-semibold text-md text-yellow-500">
                {title}
              </div>
              <div className="flex-grow h-[70px] px-2 text-center text-sm">
                {subtitle}
              </div>
              <div className="flex gap-3 mb-3">
                <Link
                  className="btn bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition"
                  href={githubLink}
                  target="_blank"
                  aria-label={`View ${title} on GitHub`}
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
