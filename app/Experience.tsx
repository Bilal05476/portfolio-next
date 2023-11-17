import { RoughNotation } from "react-rough-notation";
import { experiences } from "./PData";

type PropType = {
  toggle: boolean;
  company?: String;
  duration?: String;
  position?: String;
};

const Experience = ({ toggle }: PropType) => {
  return (
    <div
      id="experience"
      className={`p-16 lg:px-36 lg:pr-40 px-6 ${toggle && "bg-black"}`}
    >
      <h2
        className={`${
          toggle ? "text-white" : "text-black"
        }  font-bold text-3xl`}
      >
        Experience
      </h2>
      <p className={`mt-10 ${toggle ? "text-gray-100" : "text-gray-600"}`}>
        I bring over two years of diverse experience, both as a freelancer and
        in collaborating with software companies.
      </p>

      <div className="flex flex-wrap md:flex-row flex-col mt-5">
        {experiences.map((item) => (
          <ExperienceCard
            key={item.id}
            position={item.position}
            company={item.company}
            duration={item.duration}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ toggle, company, duration, position }: PropType) => {
  return (
    <div className="md:p-2 py-2 md:w-1/3">
      <h4
        className={`${toggle ? "text-white" : "text-black"} font-bold text-lg`}
      >
        {position}
      </h4>

      <p className={`mt-0 ${toggle ? "text-gray-100" : "text-gray-600"}`}>
        {company}
      </p>

      <p
        className={`mt-0 ${toggle ? "text-gray-100" : "text-gray-500"} text-sm`}
      >
        <RoughNotation type="underline" color="gold" show={true}>
          {duration}
        </RoughNotation>
      </p>
    </div>
  );
};

export default Experience;
