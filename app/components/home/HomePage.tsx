"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const name = "Kiran Salve";
const designation = "Power BI Developer";

const summaryText = [
  `I am ${designation} based in Mumbai`,
  "Have 6+ years of experience in Data Analysis for Sales & Marketing Team.",
  "",
];

const socialData = [
  {
    link: "https://www.linkedin.com/in/kiran-salve-656995188",
    icon: <FaLinkedin size={24} />,
  },
  {
    link: "https://github.com/salvekiran",
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
    <div className="w-full h-full">
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/photo.jpg"
            width={210}
            height={230}
            alt="photo"
            className="rounded-[50%]"
          />
          <div className="font-bold text-[20px]">{name}</div>
          <div className="text-yellow-400 font-bold">{designation}</div>

          <div className="flex gap-5">
            {socialData.map((item, index) => (
              <div key={index}>
                <Link href={item.link} target={"_blank"}>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>

          <div className="px-4 mb-4 max-w-[350px] md:w-full text-justify mx-auto">
            <p className="text-justify">
              Professional Power BI Developer with 6+ years of experience in
              Data Analysis for Sales & Marketing Department of Manufacturing
              firms, based in Mumbai.
            </p>
            <p>
              You can see my projects{" "}
              <Link href="/projects" className="text-yellow-400 underline">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
