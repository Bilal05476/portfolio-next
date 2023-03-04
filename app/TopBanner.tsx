"use client"
import Image from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation";

const TopBanner = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between p-16 lg:px-36 lg:pr-40 px-6">
      <div className="md:w-8/12 mb-10 mb:mb-0">
        <h2 className="text-black-800 font-bold text-3xl md:w-5/6">Hello! I'm Bilal, a{" "}
        <RoughNotation type="highlight" color="lightblue" show={true}>
        developer
        </RoughNotation>
        {" "}
        based in Pakistan.</h2>
        <p className="mt-5 text-gray-600 md:w-5/6">
          I love building products that are{" "}
          <RoughNotation type="underline" color="gold" show={true}>
          user friendly, simple and delighful.
          </RoughNotation>
          {" "}
        </p>
        <p className="mt-2 text-gray-600 md:w-5/6">
          I am a bachelor's student of computer science at Iqra university in my hometown(Karachi) where I did all my major courses in 
          {" "}
          <RoughNotation type="highlight" color="lightgreen" show={true}>
            programming
          </RoughNotation>
          {" "}
          and 
          {" "}
          <RoughNotation type="highlight" color="lightgreen" show={true}>
            database.
          </RoughNotation>
          {" "}
          I am working as a freelance developer for the last 2+ years and have done lots of hand on projects 
          for my university pairs, and for outside clients.
        </p>
        <p className="mt-2 text-gray-600 md:w-5/6">
          I worked as
          {" "}
          <RoughNotation type="highlight" color="lightgreen" show={true}>
            front end
          </RoughNotation>
          {" "}
          developer at my start, but now I am fully equipped with
          {" "}
          <RoughNotation type="highlight" color="lightgreen" show={true}>
            full-stack
          </RoughNotation>
          {" "}
          technologies like
          {" "}
          <RoughNotation type="highlight" brackets="top" color="black" show={true}>
            <span className="text-gray-100">NextJs.</span>
          </RoughNotation>
          {" "}
          I have also worked as a vocational developer at a company where I developed a working style that leans toward flexibility and
          {" "}
          <RoughNotation type="highlight" brackets="top" color="lightgreen" show={true}>
            collaboration.
          </RoughNotation>
        </p>
        <p className="mt-2 text-gray-600 md:w-5/6">
          I'm currently looking for a new as a devloper.{" "}
          <RoughNotation type="circle" color="lightblue" show={true}>
            Hire me?
          </RoughNotation> 
        </p>
        <div className="mt-4 flex align-center justify-center md:justify-start">
          <Link className="bg-black text-white rounded p-2 px-5 mr-2 border-black border-2 border-solid shadow hover:shadow-gray-500" href="#">View Linkedin</Link>
          <Link className="text-black p-2 px-5 border-black border-2 border-solid rounded hover:bg-black hover:text-white shadow hover:shadow-gray-500" href="#">View Github</Link>
        </div>

      </div>
      <div className="flex justify-center bg-gray-400 pt-5 rounded shadow shadow-black-300 w-auto md:w-72 h-96">
        <Image src={"/assets/img/man.png"} alt="sample" width="220" height="100"/>
      </div>
    </div>
  )
}

export default TopBanner