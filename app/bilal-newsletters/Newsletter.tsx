"use client";
import Image from "next/image";
import Link from "next/link";
import { BsPinAngleFill } from "react-icons/bs";
import { newsletters } from "../PData";

type PropType = {
  toggle: boolean;
};
type NewsletterType = {
  title: string;
  excerpt: string;
  date: Date;
  featured_media: string;
  slug: string;
  pin: boolean;
  toggle: boolean;
};

const Newsletter = ({ toggle }: PropType) => {
  const pinNewsletter = newsletters.filter((item) => item.pin === true);
  const oNewsletters = newsletters.filter((item) => item.pin === false);

  return (
    <div
      className={`flex  flex-col justify-between p-16 lg:px-36 lg:pr-40 px-6 ${
        toggle && "bg-black text-white"
      }`}
    >
      <div className=" mb-10 mb:mb-0">
        {pinNewsletter.map((item) => (
          <NewsletterCard
            key={item.title}
            title={item.title}
            date={item.date}
            excerpt={item.excerpt}
            slug={item.slug}
            featured_media={item.featured_media}
            pin={item.pin}
            toggle={toggle}
          />
        ))}
        <h2 className="my-10 font-bold text-3xl">Latest Newsletters</h2>
        {oNewsletters.map((item) => (
          <NewsletterCard
            key={item.title}
            title={item.title}
            date={item.date}
            excerpt={item.excerpt}
            slug={item.slug}
            featured_media={item.featured_media}
            pin={item.pin}
            toggle={toggle}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center mt-10 md:mt-0 md:px-4">
        <p
          className={`mb-10 text-md font-bold text-center ${
            toggle ? "text-gray-100" : "text-gray-600"
          }`}
        >
          Subscribe to my weekly newsletter where I can share my weekly
          highlights and some informative insights about the book I am reading
          and my development stack.
        </p>

        <iframe
          className="rounded w-full p-0"
          src="https://bilal05.substack.com/embed"
          // width="480"
          // height="320"
        ></iframe>
      </div>
    </div>
  );
};
const NewsletterCard = ({
  title,
  excerpt,
  slug,
  featured_media,
  date,
  pin,
  toggle,
}: NewsletterType) => {
  return (
    <div
      className={`
    ${
      toggle
        ? "bg-neutral-900 shadow-neutral-900 hover:shadow-neutral-600"
        : "bg-white shadow-gray-300 hover:shadow-gray-400"
    }
    mb-2 flex shadow rounded overflow-hidden`}
    >
      <div className="md:w-1/3 relative">
        <Image
          className="hidden w-full md:block"
          width="500"
          height="100"
          src={featured_media}
          alt={title}
        />
        {pin && (
          <div
            className={`mt-2 ml-2 absolute top-0 rounded-xl left-0  
          ${toggle ? "bg-white" : "bg-slate-800"}
          p-1`}
          >
            <BsPinAngleFill
              size={18}
              color={toggle ? "black" : "white"}
              className="-rotate-90"
            />
          </div>
        )}
      </div>
      <div className="md:w-2/3 p-5 pt-10 md:py-2 md-px-5 flex flex-col justify-center align-start relative">
        <h4 className="font-bold text-md md:text-2xl md:w-4/5 my-1 md:mb-0 capitalize">
          {title}
        </h4>
        <p
          className={`m-0 
        ${toggle ? "text-gray-100" : "text-gray-600"}
         my-2 mb-4 md:block`}
        >
          {excerpt}
        </p>
        <p
          className={`text-xs md:text-sm font-semibold absolute top-0 right-0 ${
            toggle ? "bg-blue-800" : "bg-blue-100"
          } rounded-l p-1 mt-1`}
        >
          {"12/3/2022"}
        </p>
        <a
          className={`
          ${
            toggle
              ? "bg-white border-white text-black hover:shadow-darkgray-500"
              : "bg-black border-black text-white hover:shadow-gray-500"
          }
           border-2 hover:translate-y-px rounded md:w-1/3 shadow text-center py-1 px-3 `}
          href={slug}
          target="_blank"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
