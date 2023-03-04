"use client"
import {useState, useEffect} from "react";
import {BsSuitHeartFill} from "react-icons/bs";
const Footer = () => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
      <small className="flex justify-center py-3">
        Copyright © {year},
        Made with <BsSuitHeartFill className="mx-1 text-red-500" /> By Bilal Ahmed
      </small>
    
  )
}

export default Footer