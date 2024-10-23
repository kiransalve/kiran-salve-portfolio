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

  const links = navlinks.map((item, index) => (
    <div key={index} onClick={toggleMenu}>
      <Link className="btn" href={item.path}>
        {item.title}
      </Link>
    </div>
  ));

  return (
    <div className="w-full mx-auto my-2">
      <div className="flex justify-between items-center max-w-[1250px] mx-auto">
        <div
          className="text-xl m-[16px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          {logo}
        </div>

        {/* For Desktop */}
        <div className="hidden md:flex gap-6">{links}</div>

        {/* For Mobile device */}
        {menuOpen && (
          <div className="md:hidden absolute w-full bg-white text-slate-900 top-0 h-screen z-10">
            <div className="flex justify-between items-center m-[19px]">
              <div className="text-xl font-bold">kir@n $alve</div>
              <RxCross2
                size={27}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-10 items-center">{links}</div>
          </div>
        )}

        {/* Menu Icon */}
        {!menuOpen && (
          <div className="absolute top-6 right-6 md:hidden">
            <IoMenuOutline size={27} onClick={toggleMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
