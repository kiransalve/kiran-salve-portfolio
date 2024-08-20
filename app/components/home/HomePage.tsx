"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const name = "Kiran Salve";
const designation = "React JS Developer";

const summaryText = [
  `I am ${designation} based in Mumbai`,
  "Skilled in crafting Figma designs to interactive and responsive Next.js applications with Tailwind CSS.",
  "You can see my front end",
];

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
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < summaryText.length) {
      if (charIndex < summaryText[currentIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + summaryText[currentIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50); // Adjust typing speed here
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setCharIndex(0);
          if (currentIndex === summaryText.length - 1) {
            setTypingComplete(true);
          } else {
            setCurrentText((prev) => prev + "\n");
          }
        }, 1000); // Delay before typing next line
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentIndex]);

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
          <div className="font-bold text-[20px] ">{name}</div>
          <div className="animating-rays">{designation}</div>

          <div className="flex gap-5">
            {socialData.map((item, index) => (
              <div key={index}>
                <Link href={item.link} target={"_blank"}>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>

          <div className="px-4 mb-4 max-w-[440px] mx-auto">
            <p className="whitespace-pre-wrap leading-relaxed neon-glow ">
              {currentText}{" "}
              {typingComplete && (
                <Link href="/projects" className="text-yellow-400 underline">
                  projects
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
