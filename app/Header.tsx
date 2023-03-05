// import Link from "next/link";
// import Shantell_Sans from "next/font";
import { menus } from "./PData";

type PropType = {
  toggle: boolean;
};
const Header = ({ toggle }: PropType) => {
  return (
    <div
      className={`${
        toggle && "bg-black"
      } p-5 lg:px-36 px-6 flex flex-col md:flex-row justify-between items-center`}
    >
      <h4
        className={`font-bold uppercase text-lg ${
          toggle ? "text-gray-100" : "text-gray-600"
        } `}
      >
        Bilal Ahmed
      </h4>
      <div className="mt-4 md:mt-0">
        {menus.map((item) => (
          <MenuLink
            key={item.id}
            id={item.id}
            name={item.name}
            link={{ path: item.link }}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

type MenuPropsType = {
  id: number;
  name: string;
  link: {
    path: string;
  };
  toggle: boolean;
};
const MenuLink = ({ name, link, toggle }: MenuPropsType) => {
  return (
    <a
      className={`text-sm ${
        toggle
          ? "text-gray-100 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }  hover:text-base  subpixel-antialiased font-semibold mr-4 capitalize`}
      href={link.path}
    >
      {name}
    </a>
  );
};
export default Header;
