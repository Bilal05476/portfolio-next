"use client";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyProjects from "./MyProjects";
import TopBanner from "./TopBanner";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import MySkills from "./MySkills";
import HireMe from "./HireMe";
import About from "./About";

const page = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <>
      <button
        className={`right-0 mt-20 fixed p-2 pr-4 outline-0 rounded-l-xl ${
          toggle ? "bg-gray-800" : "bg-gray-200"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <BsSunFill
            className={`text-lg ${
              toggle ? "text-gray-200" : "text-gray-800"
            } subpixel-antialiased`}
          />
        ) : (
          <BsMoonFill
            className={`text-lg ${
              toggle ? "text-gray-200" : "text-gray-800"
            } subpixel-antialiased`}
          />
        )}
      </button>
      <Header toggle={toggle} />
      <TopBanner toggle={toggle} />
      <About toggle={toggle} />
      <MyProjects toggle={toggle} />
      <MySkills toggle={toggle} />
      <HireMe toggle={toggle} />
      <Footer toggle={toggle} />
    </>
  );
};

export default page;
