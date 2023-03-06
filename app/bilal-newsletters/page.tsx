"use client";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Newsletter from "./Newsletter";

const page = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <button
        className={`right-0 my-5 fixed p-2 pr-4 outline-0 rounded-l-xl ${
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
      <Newsletter toggle={toggle} />
      <Footer toggle={toggle} />
    </>
  );
};

export default page;
