import { ArrowUpRight, Layers, PanelsTopLeft } from "lucide-react";
import CountComponent from "./count";
import Heading from "./heading";

const IntroComponent = () => {
  return (
    <>
      <div className="w-full lg:w-lg">
        <Heading highlightedLabel="Software" MutedLabel="Engineer" />
        <p className="mt-3 text-center lg:text-start text-lg lg:text-xl leading-snug text-neutral-400/80">
          Passionate about building scalable and intuitive web applications.
          Specialized in transforming ideas into real world businesses.
        </p>
        <div className="flex mt-10 lg:mt-16">
          <CountComponent count={12} label="Years of experience" />
          <CountComponent count={46} label="Projects Completed" />
          <CountComponent count={20} label="Worldwide clients" />
        </div>
      </div>
      <div className="flex text-3xl font-medium uppercase flex-col lg:flex-row gap-5 mt-20">
        <div className="flex flex-col text-black px-5 py-5 rounded-xl bg-[url(/bg1.svg)] bg-cover bg-center">
          <Layers size={36} />
          <p className="mt-6 mb-3">Dynamic & Responsive Design</p>
          <div className="self-end border border-black hover:bg-black hover:text-white w-fit rounded-sm p-1">
            <ArrowUpRight />
          </div>
        </div>
        <div className="flex flex-col px-5 py-5 rounded-xl bg-[url(/bg2.svg)] bg-cover bg-center">
          <PanelsTopLeft size={36} />
          <p className="mt-6 mb-3">
            Typescript, NextJS, ReactJS, Prisma, Docker
          </p>
          <div className="self-end border hover:bg-white hover:text-black w-fit rounded-sm p-1">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroComponent;
