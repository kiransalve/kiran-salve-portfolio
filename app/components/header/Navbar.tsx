"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
const logo = "kir@n $alve";

const navlinks = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const router = useRouter();

  const links = navlinks.map((item, index) => {
    return (
      <div className="" key={index} onClick={toggleMenu}>
        <Link className="btn" href={item.path}>
          {item.title}
        </Link>
      </div>
    );
  });
  return (
    <div className="w-full max-w-[1240px] mx-auto my-2">
      <div className="flex justify-between items-center mr-3">
        <div
          className="text-xl m-[16px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          {logo}
        </div>
        {/* For Dekstop */}
        <div className="hidden md:flex gap-6">{links}</div>
        {/* For Mobile device */}
        {menuOpen && (
          <>
            <div className="md:hidden absolute w-full bg-white text-slate-900 top-0 h-screen">
              <div className="text-xl m-[19px] font-bold">kir@n $alve</div>
              <div className="flex flex-col gap-10 items-center">{links}</div>
            </div>
          </>
        )}
        {menuOpen ? (
          <div className="absolute top-6 right-6 md:hidden">
            <RxCross2
              size={24}
              onClick={toggleMenu}
              className="text-slate-900"
            />
          </div>
        ) : (
          <div className="absolute top-6 right-6 md:hidden">
            <IoMenuOutline size={27} onClick={toggleMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
