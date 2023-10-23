"use client";

import { RoughNotation } from "react-rough-notation";

type PropType = {
  toggle: boolean;
  title?: String;
  para?: String;
};
const About = ({ toggle }: PropType) => {
  return (
    <div
      id="about"
      className={`p-16 lg:px-36 lg:pr-40 px-6 ${toggle && "bg-black"}`}
    >
      <h2
        className={`${
          toggle ? "text-white" : "text-black"
        }  font-bold text-3xl`}
      >
        About Me
      </h2>
      <div className="flex flex-wrap md:flex-row flex-col mt-10">
        <p
          className={`mt-5 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  w-auto`}
        >
          🚀 MERN Stack Developer | Freelancer | DevOps and Cloud Enthusiast
        </p>
        <p
          className={`mt-5 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  w-auto`}
        >
          <AboutPointer toggle={toggle} title={"💻 Tech Stack"} />- MERN Stack:
          Proficient in developing robust and scalable applications using
          <GreenNotation
            toggle={toggle}
            title={"MongoDB, Express.js, React.js, and Node.js."}
          />
          <br />- Databases: Expertise in
          <GreenNotation toggle={toggle} title={"MySQL"} /> and
          <GreenNotation toggle={toggle} title={"Firebase"} />, ensuring
          efficient data management and retrieval.
          <br />- Next.js: Experienced in leveraging
          <GreenNotation toggle={toggle} title={"Next.js"} />
          to build performant and SEO-friendly web applications.
        </p>

        <AboutNote
          toggle={toggle}
          title={"🌐 Full-Stack Development"}
          para={
            "I thrive in crafting end-to-end solutions, from conceptualization and design to implementation and deployment. My commitment to delivering high-quality code is evident in my track record of successful freelance projects."
          }
        />

        <p
          className={`mt-5 ${
            toggle ? "text-gray-100" : "text-gray-600"
          }  w-auto`}
        >
          <AboutPointer
            toggle={toggle}
            title={"🛠️ DevOps and Cloud Technologies"}
          />
          Excited about the potential of
          <GreenNotation toggle={toggle} title={"DevOps"} />
          and
          <GreenNotation toggle={toggle} title={"Cloud Computing"} />, I'm
          actively exploring tools and methodologies to enhance deployment
          processes and ensure seamless scalability. Hands-on practice with{" "}
          <br />
          <GreenNotation
            toggle={toggle}
            title={"Jenkins, Docker, Terraform, AWS, Ansible, and Kubernetes."}
          />
        </p>

        <AboutNote
          toggle={toggle}
          title={"🤝 Collaboration and Teamwork"}
          para={
            "Having worked with cross-functional teams, I understand the importance of effective communication and collaboration. I'm adept at translating complex technical concepts into clear, actionable insights for both technical and non-technical stakeholders."
          }
        />

        <AboutNote
          toggle={toggle}
          title={"🔗 Let's Connect"}
          para={
            "I'm always open to connecting with like-minded professionals, whether it's to discuss potential collaborations, share insights, or explore new opportunities. Let's contact and build something amazing together!"
          }
        />
      </div>
    </div>
  );
};

const AboutPointer = ({ title, toggle }: PropType) => {
  return (
    <RoughNotation
      type="highlight"
      brackets="top"
      color={toggle ? "white" : "black"}
      show={true}
    >
      <span className={toggle ? "text-black" : "text-gray-100"}>{title}</span>
      <br />
      <br />
    </RoughNotation>
  );
};

const GreenNotation = ({ title, toggle }: PropType) => {
  return (
    <RoughNotation
      type="highlight"
      color={toggle ? "darkgreen" : "lightgreen"}
      show={true}
    >
      {" "}
      {title}{" "}
    </RoughNotation>
  );
};

const AboutNote = ({ title, toggle, para }: PropType) => {
  return (
    <p className={`mt-5 ${toggle ? "text-gray-100" : "text-gray-600"}  w-auto`}>
      <AboutPointer toggle={toggle} title={title} />
      {para}
    </p>
  );
};

export default About;
