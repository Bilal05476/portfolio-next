"use client";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { projects } from "./PData";

const MyProjects = () => {
  return (
    <div className="p-16 lg:px-36 lg:pr-40 px-6">
      <h2 className="text-black-800 font-bold text-3xl md:w-5/6">Projects</h2>
      <div className="flex flex-wrap md:flex-row flex-col mt-10">
        {projects.map((item) => (
          <ProjectCard
            id={item.id}
            key={item.id}
            title={item.title}
            desc={item.desc}
            img={{ src: item.img }}
            link={{ path: item.link }}
            tools={item.tools}
            purpose={item.purpose}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

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
};
const ProjectCard = ({
  title,
  desc,
  img,
  link,
  purpose,
  tools,
}: ProjectPropTypes) => {
  const { src } = img;
  return (
    <Link
      target="blank"
      href={link.path}
      className="overflow-hidden md:w-auto md:max-w-xs bg-white-100 shadow shadow-gray-300 rounded md:mr-7 mr-0 my-3 hover:shadow-gray-400 cursor-pointer"
    >
      <Image alt="dummy" src={src} width="500" height="100" />
      <div className="p-4">
        <h2 className="text-black-800 font-bold text-xl md:w-5/6">{title}</h2>
        <p className="my-2 mb-5 text-gray-600 md:w-5/6">{desc}</p>
        <p className="text-sm">
          Purpose:{" "}
          <RoughNotation
            type="highlight"
            brackets="top"
            color="lightblue"
            show={true}
          >
            <span className="font-bold">{purpose}</span>
          </RoughNotation>
        </p>
        <p className="text-sm mt-1">
          Tools:{" "}
          {tools.map((item) => (
            <span className="font-bold">
              <RoughNotation
                type="highlight"
                brackets="top"
                color="lightgreen"
                show={true}
              >
                {item},
              </RoughNotation>
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};
