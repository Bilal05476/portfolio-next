"use client";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { projects } from "./PData";

type PropType = {
  toggle: boolean;
};

type ProjectPropTypes = {
  id: number;
  title: string;
  desc: string;
  img: { src: string };
  link: {
    path: string;
  };
  tools: string[];
  purpose: string;
  toggle: boolean;
  indx: number;
};

const MyProjects = ({ toggle }: PropType) => {
  return (
    <div
      id="projects"
      className={`p-16 lg:px-36 lg:pr-40 px-6 ${toggle && "bg-black"}`}
    >
      <h2
        className={`${
          toggle ? "text-white" : "text-black"
        }  font-bold text-3xl`}
      >
        Projects
      </h2>
      <div className="flex flex-wrap md:flex-row flex-col mt-10">
        {projects.map((item, ind) => (
          <ProjectCard
            id={item.id}
            indx={ind}
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={{ src: item.img }}
            link={{ path: item.link }}
            tools={item.tools}
            purpose={item.purpose}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

const ProjectCard = ({
  title,
  desc,
  img,
  link,
  purpose,
  tools,
  toggle,
  indx,
}: ProjectPropTypes) => {
  const { src } = img;
  return (
    <Link
      target="blank"
      href={link.path}
      className={`${
        toggle
          ? "bg-neutral-900 shadow-neutral-900 hover:shadow-neutral-600"
          : "bg-white shadow-gray-300 hover:shadow-gray-400"
      } 
      ${(indx + 1) % 3 === 0 ? "md:mr-0" : "md:mr-3"}
      overflow-hidden md:w-auto md:max-w-xs shadow rounded mr-0 my-3 cursor-pointer`}
    >
      <Image
        className="hover:scale-105"
        alt="dummy"
        src={src}
        width="500"
        height="100"
      />
      <div className="p-4">
        <h2
          className={`${
            toggle ? "text-white" : "text-black"
          } font-bold text-xl`}
        >
          {title}
        </h2>
        <p
          className={`my-2 mb-5 ${toggle ? "text-gray-100" : "text-gray-600"}`}
        >
          {desc}
        </p>
        <p className={`text-sm ${toggle && "text-white"}`}>
          Purpose:{" "}
          <RoughNotation
            type="highlight"
            brackets="top"
            color={toggle ? "darkblue" : "lightblue"}
            show={true}
          >
            <span className="font-bold">{purpose}</span>
          </RoughNotation>
        </p>
        <p className={`text-sm mt-2 ${toggle && "text-white"}`}>
          Tools:{" "}
          {tools.map((item) => (
            <span className="font-bold">
              <RoughNotation
                type="highlight"
                brackets="top"
                color={toggle ? "darkgreen" : "lightgreen"}
                show={true}
              >
                {item}
                {", "}
              </RoughNotation>
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};
