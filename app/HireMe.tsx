type PropType = {
  toggle: boolean;
};
const HireMe = ({ toggle }: PropType) => {
  return (
    <div
      id="contact"
      className={`p-16 lg:px-36 lg:pr-40 px-6 ${toggle && "bg-black"}`}
    >
      <h2
        className={`${
          toggle ? "text-white" : "text-black"
        }  font-bold text-3xl`}
      >
        Contact
      </h2>
      <div className="mt-10 flex flex-col md:flex-row">
        <div className=" flex flex-col pr-0">
          <input
            className={`${
              toggle
                ? "border-gray-600 text-gray-300 focus:border-gray-300"
                : "border-gray-400 text-gray-600 focus:border-gray-600"
            } border-2 bg-transparent w-full p-2 pl-4 rounded outline-none mb-3`}
            type="text"
            placeholder="Your name"
          />
          <input
            className={`${
              toggle
                ? "border-gray-600 text-gray-300 focus:border-gray-300"
                : "border-gray-400 text-gray-600 focus:border-gray-600"
            } border-2 bg-transparent w-full p-2 pl-4 rounded outline-none mb-3`}
            type="email"
            placeholder="Your email"
          />
          <textarea
            className={`${
              toggle
                ? "border-gray-600 text-gray-300 focus:border-gray-300"
                : "border-gray-400 text-gray-600 focus:border-gray-600"
            } border-2 bg-transparent w-full p-2 pl-4 rounded outline-none mb-3`}
            rows={4}
            placeholder="Your message"
          />
          <button
            className={`
            ${
              toggle
                ? "bg-white text-black hover:shadow-darkgray-500 border-white"
                : "bg-black text-white hover:shadow-gray-500 border-black"
            }
            hover:translate-y-px rounded p-2 px-5  border-2 border-solid shadow `}
          >
            Submit
          </button>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center mt-10 md:mt-0 md:px-4">
          <p
            className={`mb-10 text-md font-bold text-center ${
              toggle ? "text-gray-100" : "text-gray-600"
            }`}
          >
            Subscribe to my weekly newsletter where I can share my weekly
            highlights and some informative insights about the book I am reading
            and my development stack.
          </p>
          <input
            className={`${
              toggle
                ? "border-gray-600 text-gray-300 focus:border-gray-300"
                : "border-gray-400 text-gray-600 focus:border-gray-600"
            } border-2 bg-transparent w-full p-2 pl-4 rounded outline-none mb-3`}
            type="email"
            placeholder="Your email"
          />
          <button
            className={`
            ${
              toggle
                ? "bg-white text-black hover:shadow-darkgray-500 border-white"
                : "bg-black text-white hover:shadow-gray-500 border-black"
            }
            hover:translate-y-px rounded p-2 px-5  border-2 border-solid shadow `}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
