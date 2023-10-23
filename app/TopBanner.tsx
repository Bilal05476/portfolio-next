"use client";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { MenuAnchor } from "./Header";

type PropType = {
  toggle: boolean;
};
const TopBanner = ({ toggle }: PropType) => {
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
            Software
          </RoughNotation>{" "}
          developer based in Pakistan.
        </h2>
        <p
          className={`mt-5 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  md:w-5/6`}
        >
          I love building products that are{" "}
          <RoughNotation type="underline" color="gold" show={true}>
            user friendly, simple and delightful.
          </RoughNotation>{" "}
        </p>

        <p
          className={`mt-5 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  md:w-5/6`}
        >
          Welcome to my portfolio! 👋 I'm a results-driven and detail-oriented
          professional with a Bachelor's degree in Computer Science. I bring
          over two years of diverse experience, both as a freelancer and in
          collaborating with software companies.{" "}
          <RoughNotation
            type="circle"
            color={toggle ? "darkblue" : "lightblue"}
            show={true}
          >
            <MenuAnchor
              name="Read more"
              link={{ path: "#about" }}
              toggle={toggle}
            />
          </RoughNotation>
        </p>
        <p
          className={`mt-2 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  md:w-5/6`}
        >
          I'm currently looking for a new role as a MERN Stack Developer or Jr.
          DevOps Engineer.{" "}
          <RoughNotation
            type="circle"
            color={toggle ? "darkblue" : "lightblue"}
            show={true}
          >
            <MenuAnchor
              name="Hire me?"
              link={{ path: "#contact" }}
              toggle={toggle}
            />
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
            href="https://www.linkedin.com/in/bilal-ahmed-b75125184"
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
            hover:translate-y-px p-2 px-5 border-2 border-solid rounded shadow`}
            href="https://github.com/bilal05476"
            target="blank"
          >
            View Github
          </Link>
        </div>
      </div>
      <div
        className={`flex justify-center overflow-hidden   rounded shadow ${
          toggle ? "shadow-gray-300 bg-black" : "shadow-gray-500 bg-gray-800"
        } w-auto md:w-72 h-96`}
      >
        <Image
          src={"/assets/img/profile.jpeg"}
          alt="sample"
          width="350"
          height="100"
        />
      </div>
    </div>
  );
};

export default TopBanner;
