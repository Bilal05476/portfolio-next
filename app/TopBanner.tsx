"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const TopBanner = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`flex md:flex-row flex-col justify-between p-16 lg:px-36 lg:pr-40 px-6 ${
        toggle && "bg-black text-white"
      }`}
    >
      <div className="md:w-8/12 mb-10 mb:mb-0">
        <h2 className="font-bold text-3xl md:w-5/6">
          Hello! I'm Bilal, a{" "}
          <RoughNotation
            type="highlight"
            color={toggle ? "darkblue" : "lightblue"}
            show={true}
          >
            developer
          </RoughNotation>{" "}
          based in Pakistan.
        </h2>
        <p
          className={`mt-5 ${
            toggle ? "text-white" : "text-gray-600"
          }  md:w-5/6`}
        >
          I love building products that are{" "}
          <RoughNotation type="underline" color="gold" show={true}>
            user friendly, simple and delighful.
          </RoughNotation>{" "}
        </p>
        <p
          className={`mt-2 ${
            toggle ? "text-white" : "text-gray-600"
          }  md:w-5/6`}
        >
          I am a bachelor's student of computer science at Iqra university in my
          hometown(Karachi) where I did all my major courses in{" "}
          <RoughNotation
            type="highlight"
            color={toggle ? "darkgreen" : "lightgreen"}
            show={true}
          >
            programming
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            type="highlight"
            color={toggle ? "darkgreen" : "lightgreen"}
            show={true}
          >
            database.
          </RoughNotation>{" "}
          I am working as a freelance developer for the last 2+ years and have
          done lots of hand on projects for my university pairs, and for outside
          clients.
        </p>
        <p
          className={`mt-2 ${
            toggle ? "text-white" : "text-gray-600"
          }  md:w-5/6`}
        >
          I worked as{" "}
          <RoughNotation
            type="highlight"
            color={toggle ? "darkgreen" : "lightgreen"}
            show={true}
          >
            front end
          </RoughNotation>{" "}
          developer at my start, but now I am fully equipped with{" "}
          <RoughNotation
            type="highlight"
            color={toggle ? "darkgreen" : "lightgreen"}
            show={true}
          >
            full-stack
          </RoughNotation>{" "}
          technologies like{" "}
          <RoughNotation
            type="highlight"
            brackets="top"
            color={toggle ? "white" : "black"}
            show={true}
          >
            <span className={toggle ? "text-black" : "text-gray-100"}>
              NextJs.
            </span>
          </RoughNotation>{" "}
          I have also worked as a vocational developer at a company where I
          developed a working style that leans toward flexibility and{" "}
          <RoughNotation
            type="highlight"
            brackets="top"
            color={toggle ? "darkgreen" : "lightgreen"}
            show={true}
          >
            collaboration.
          </RoughNotation>
        </p>
        <p
          className={`mt-2 ${
            toggle ? "text-white" : "text-gray-600"
          }  md:w-5/6`}
        >
          I'm currently looking for a new as a devloper.{" "}
          <RoughNotation
            type="circle"
            color={toggle ? "darkblue" : "lightblue"}
            show={true}
          >
            Hire me?
          </RoughNotation>
        </p>
        <div className="mt-4 flex align-center justify-center md:justify-start">
          <Link
            className={`
            ${
              toggle
                ? "bg-white text-black hover:shadow-darkgray-500 border-white"
                : "bg-black text-white hover:shadow-gray-500 border-black"
            }
            hover:translate-y-px rounded p-2 px-5 mr-2  border-2 border-solid shadow `}
            href="https://linkedin.com"
            target="blank"
          >
            View Linkedin
          </Link>
          <Link
            className={`
            ${
              toggle
                ? "border-white text-white hover:shadow-darkgray-500 hover:bg-white hover:text-black"
                : "border-black text-black hover:shadow-gray-500 hover:bg-black hover:text-white"
            }
            hover:translate-y-px p-2 px-5 border-2 border-solid rounded  shadow hover:shadow-gray-500`}
            href="https://github.com/bilal05476"
            target="blank"
          >
            View Github
          </Link>
          {/* <button className="text-blue-500" onClick={() => setToggle(!toggle)}>
            Toggle
          </button> */}
        </div>
      </div>
      <div className="flex justify-center bg-gray-400 pt-5 rounded shadow shadow-black-300 w-auto md:w-72 h-96">
        <Image
          src={"/assets/img/man.png"}
          alt="sample"
          width="220"
          height="100"
        />
      </div>
    </div>
  );
};

export default TopBanner;
