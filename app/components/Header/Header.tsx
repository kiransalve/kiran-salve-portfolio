import Link from "next/link";
import React from "react";

const Header = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Header;
