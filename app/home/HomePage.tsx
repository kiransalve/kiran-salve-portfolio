import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const name = "Kiran Salve";
const designation = "React JS Developer";

const summary = (
  <p className="flex flex-col gap-5">
    <div className="">
      I am <span className="text-yellow-500">{designation}</span> based in
      Mumbai, India.
    </div>
    <div className="">
      Skilled in crafting Figma designs to interactive and responsive Next.js
      applications with Tailwind CSS.
    </div>
    <Link href={"/projects"}>
      You can see my front end{" "}
      <span className="text-yellow-400 underline">projects</span>
    </Link>
  </p>
);

const socialData = [
  {
    link: "https://www.linkedin.com/in/kiran-salve-656995188",
    icon: <FaLinkedin size={24} />,
  },
  {
    link: "https://github.com/kiransalve",
    icon: <FaGithub size={24} />,
  },

  {
    link: "https://twitter.com/kiransalve15",
    icon: <FaTwitter size={24} />,
  },
  {
    link: "https://www.instagram.com/kironsalve/",
    icon: <FaInstagram size={24} />,
  },
];
const HomePage = () => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/photo.jpg"
            width={210}
            height={230}
            alt="photo"
            className="rounded-[50%] "
          />
          <div className="font-bold text-[20px]">{name}</div>
          <div className="">{designation}</div>

          <div className="flex gap-5">
            {socialData.map((item, index) => {
              return (
                <div key={index} className="">
                  <Link href={item.link} target={"_blank"}>
                    {item.icon}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="px-4 mb-4 max-w-[440px] mx-auto">{summary}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
