"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiPowerbi, SiMicrosoftexcel, SiPython, SiMysql } from "react-icons/si";
import { projectData } from "../../data/projectdata";

const skillData = [
  { Icon: SiPowerbi, title: "Power BI" },
  { Icon: SiMicrosoftexcel, title: "Excel" },
  { Icon: SiPython, title: "Python" },
  { Icon: SiMysql, title: "SQL" },
];

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  const filteredProjects =
    selectedSkill === "All"
      ? projectData
      : projectData.filter((project) => project.skill === selectedSkill);

  return (
    <div className="p-4">
      <div className="text-center text-2xl font-bold mb-6">My Projects</div>

      <div className="flex gap-5 w-full justify-center my-4">
        <div
          className={`cursor-pointer flex flex-col items-center justify-center ${
            selectedSkill === "All" ? "font-bold text-yellow-500" : ""
          }`}
          onClick={() => setSelectedSkill("All")}
        >
          All
        </div>
        {skillData.map(({ Icon, title }, index) => (
          <div
            key={index}
            className={`cursor-pointer flex flex-col items-center  ${
              selectedSkill === title ? "font-bold text-yellow-500" : ""
            }`}
            onClick={() => setSelectedSkill(title)}
          >
            <div className="text-2xl md:text-3xl">
              <Icon />
            </div>
            <div>{title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center w-full">
        {filteredProjects.map(
          ({ githubLink, subtitle, title, imgUrl, videoUrl }, index) => (
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

                  <Link
                    className="btn bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    href={`https://www.youtube.com/embed/${videoUrl}`}
                    target="_blank"
                    aria-label={`Watch ${title} video`}
                  >
                    Video
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
