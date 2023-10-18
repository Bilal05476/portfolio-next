// import Link from "next/link";
// import Shantell_Sans from "next/font";
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links, menus } from "./PData";

type PropType = {
  toggle: boolean;
};
const Header = ({ toggle }: PropType) => {
  const path = usePathname();
  const [openNav, setOpenNav] = useState(false);
  return (
    <div
      className={`${
        toggle && "bg-black"
      } p-5 lg:px-36 px-6 flex flex-col md:flex-row justify-between align-center`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <h4
            className={`font-bold uppercase text-lg ${
              toggle ? "text-gray-100" : "text-gray-600"
            } `}
          >
            Bilal Ahmed
          </h4>
        </Link>
        {path === "/" && (
          <div
            className="flex flex-col md:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <span
              className={`span span1 ${
                toggle ? "bg-white" : "bg-black"
              } w-7 h-0.8 py-px rounded mb-1.5`}
            ></span>
            {!openNav && (
              <span
                className={`span span2 ${
                  toggle ? "bg-white" : "bg-black"
                } w-6 h-0.8 py-px rounded mb-1.5`}
              ></span>
            )}
            <span
              className={`span span3 ${
                toggle ? "bg-white" : "bg-black"
              } w-7 h-0.8 py-px rounded mb-1.5`}
            ></span>
          </div>
        )}
      </div>
      <div
        className={`${openNav ? "block" : "hidden"} 
        ${toggle ? "bg-black" : "bg-white"}
        md:flex absolute md:static mt-6 pb-6 z-10 md:mt-0 md:p-0`}
      >
        {path === "/" && (
          <div className="mt-4 md:mt-0 flex">
            {menus.map((item) => (
              <MenuAnchor
                key={item.id}
                id={item.id}
                name={item.name}
                link={{ path: item.link }}
                toggle={toggle}
              />
            ))}
          </div>
        )}
        {path === "/" && (
          <div className=" flex flex-col md:flex-row">
            {links.map((item) => (
              <MenuLink
                key={item.id}
                id={item.id}
                name={item.name}
                link={{ path: item.link }}
                toggle={toggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

type MenuPropsType = {
  id?: number;
  name?: string;
  link: {
    path: string;
  };
  toggle?: boolean;
};
const MenuLink = ({ name, link, toggle }: MenuPropsType) => {
  return (
    <Link
      className={`text-sm ${
        toggle
          ? "text-gray-100 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }  hover:text-base  subpixel-antialiased font-semibold mt-1 md:mt-0 mr-4 capitalize`}
      href={link.path}
    >
      {name}
    </Link>
  );
};
export const MenuAnchor = ({ name, link, toggle }: MenuPropsType) => {
  return (
    <a
      className={`text-sm ${
        toggle
          ? "text-gray-100 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }  hover:text-base  subpixel-antialiased font-semibold mt-1 md:mt-0 mr-4 capitalize`}
      href={link.path}
    >
      {name}
    </a>
  );
};
export default Header;
