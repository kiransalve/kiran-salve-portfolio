"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { LuMenu } from "react-icons/lu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu);
  };
  const navlink = [
    {
      path: "/",
      title: "home",
    },
    {
      path: "/features",
      title: "features",
    },
    {
      path: "/pricing",
      title: "pricing",
    },
    {
      path: "/testimonial",
      title: "testimonial",
    },
  ];
  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrin-0">
            <div className="text-2xl">XRVirtual</div>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navlink.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>{item.title.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link className="py-2 px-3 border rounded-md" href={"/signin"}>
              Sign In
            </Link>
            <Link
              className="bg-gradient-to-r from-orange-600 to-orange-900 py-2 px-3 rounded-md"
              href={"/signup"}
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileMenu ? <ImCross size={20} /> : <LuMenu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navlink.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.path} className="">
                    {item.title.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href={"/signin"} className="py-2 px-3 border rounded-md">
                Sing In
              </Link>
              <Link className="gradient " href={"/signup"}>
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
