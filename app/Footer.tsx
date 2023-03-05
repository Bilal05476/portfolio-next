"use client";
import { useState, useEffect } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
type PropType = {
  toggle: boolean;
};
const Footer = ({ toggle }: PropType) => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <small
      className={`flex align-center justify-center py-3 ${
        toggle && "bg-black text-white"
      }`}
    >
      Copyright © {year}, Made with{" "}
      <BsSuitHeartFill className="m-0 mx-1 text-red-500" /> By Bilal Ahmed
    </small>
  );
};

export default Footer;
