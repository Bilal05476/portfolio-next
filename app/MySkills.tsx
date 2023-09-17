type PropType = {
  toggle: boolean;
};
import { FaBootstrap } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
  SiLinux,
  SiReact,
  SiTerraform,
  SiDocker,
  SiCplusplus,
  SiCsharp,
} from "react-icons/si";

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
        <FaBootstrap
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiJavascript
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiReact
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiExpress
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiMongodb
          size={32}
          className={`mr-0 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
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
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiPrisma
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiTailwindcss
          size={32}
          className={`mr-0 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiLinux
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiTerraform
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiDocker
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiCplusplus
          size={32}
          className={`mr-7 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
        <SiCsharp
          size={32}
          className={`mr-0 my-3 md:m-0 ${toggle ? "text-white" : "text-black"}`}
        />
      </div>
    </div>
  );
};


export default MySkills;
