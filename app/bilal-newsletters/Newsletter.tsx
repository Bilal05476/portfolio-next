import Image from "next/image";
import Link from "next/link";
import { BsPinAngleFill, BsPinFill } from "react-icons/bs";

type PropType = {
  toggle: boolean;
};

const Newsletter = ({ toggle }: PropType) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-between p-16 lg:px-36 lg:pr-40 px-6 ${
        toggle && "bg-black text-white"
      }`}
    >
      <div className=" mb-10 mb:mb-0">
        <NewsletterCard />
        <h2 className="my-10 font-bold text-3xl">Latest Newsletters</h2>
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
      </div>
    </div>
  );
};
const NewsletterCard = () => {
  return (
    <div className="mb-2 flex flex-col md:flex-row bg-white shadow-gray-300 hover:shadow-gray-400 shadow rounded overflow-hidden">
      <div className="md:w-1/3 relative">
        <Image width="500" height="200" src="/assets/img/asd.jpg" alt="" />
        <div className="mt-1 ml-1 absolute top-0 rounded-xl left-0 bg-slate-800 backdrop-blur-md p-1">
          <BsPinAngleFill size={23} color="white" className="-rotate-90" />
        </div>
      </div>
      <div className="md:w-2/3 p-5 pt-6 md:p-5 relative">
        <h4 className="font-bold text-2xl">Newsletter name goes here....</h4>
        <p className="m-0 text-gray-600 my-1 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, autem
          odit ipsum assumenda facilis doloremque veritatis quasi eveniet
          aliquid libero. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto, autem odit ipsum assumenda facilis doloremque veritatis
          quasi eveniet aliquid libero.
        </p>
        <p className="text-sm font-semibold absolute top-0 right-0 bg-blue-100 rounded-l p-1 mt-0 md:mt-1">
          {"12/3/2022"}
        </p>
        <Link className="bg-black rounded py-1 px-3 text-white" href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Newsletter;
