type PropType = {
  toggle: boolean;
};
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const MySkills = ({ toggle }: PropType) => {
  return (
    <div
      id="skills"
      className={`p-16 lg:px-36 lg:pr-40 px-6 ${toggle && "bg-black"}`}
    >
      <h2
        className={`${
          toggle ? "text-white" : "text-black"
        }  font-bold text-3xl`}
      >
        Skills
      </h2>
      <p className={`mt-10 ${toggle ? "text-gray-100" : "text-gray-600"}`}>
        I love what I do and I do what my clients love & work with great clients
        all over the world to create thoughtful and purposeful websites. I don't
        just create websites, I create websites that SELL.
      </p>
      <div className="mt-5 flex flex-wrap align-center justify-between">
        <FaHtml5
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <FaCss3Alt
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <FaBootstrap
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiJavascript
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <RiReactjsLine
          size={32}
          className={`mr-0 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <FaNodeJs
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiMongodb
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiFirebase
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiNextdotjs
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiPython
          size={32}
          className={`mr-0 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
      </div>
    </div>
  );
};

export default MySkills;
