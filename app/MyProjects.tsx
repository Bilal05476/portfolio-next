"use client";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div className="p-16 lg:px-36 lg:pr-40 px-6">
      <h2 className="text-black-800 font-bold text-3xl md:w-5/6">Projects</h2>
      <div className="flex flex-wrap md:flex-row flex-col mt-10">
        <ProjectCard
          title="Project 1"
          desc="lorem ipsum"
          img={{ src: "/assets/img/asd.jpg" }}
          link={{ path: "/" }}
        />
      </div>
    </div>
  );
};

export default MyProjects;

type PropTypes = {
  title: string;
  desc: string;
  img: { src: string };
  link: {
    path: string;
  };
};
const ProjectCard = ({ title, desc, img, link }: PropTypes) => {
  const { src } = img;
  return (
    <Link
      href={link.path}
      className="overflow-hidden md:w-auto max-w-xs bg-white-100 shadow shadow-gray-300 rounded md:mr-7 mr-0 my-3 hover:shadow-gray-400 cursor-pointer"
    >
      <Image alt="dummy" src={src} width="500" height="100" />
      <div className="p-4">
        <h2 className="text-black-800 font-bold text-xl md:w-5/6">{title}</h2>
        <p className="my-2 mb-5 text-gray-600 md:w-5/6">{desc}</p>
      </div>
    </Link>
  );
};
