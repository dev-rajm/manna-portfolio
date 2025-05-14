import Heading from "@/components/heading";
import CountComponent from "@/components/count";
import { ArrowUpRight, Layers, PanelsTopLeft } from "lucide-react";

const Stats = () => {
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
      <div className="flex text-2xl font-medium uppercase flex-col lg:flex-row gap-5 mt-20">
        <div className="flex flex-2/3 flex-col px-5 pb-5 pt-5 lg:pt-10 rounded-xl bg-[url(/b1.svg)] bg-cover">
          <Layers size={36} />
          <p className="my-5">Dynamic Functionality, Responsive Design</p>
          <div className="self-end border hover:bg-white hover:text-accent-foreground w-fit rounded-sm p-1">
            <ArrowUpRight />
          </div>
        </div>
        <div className="flex flex-col px-5 pb-5 pt-5 lg:pt-10 rounded-xl bg-[url(/b2.svg)] text-black bg-cover">
          <PanelsTopLeft size={36} />
          <p className="my-5">
            Typescript, NextJS, ReactJS, Prisma ORM, Docker, TurboRepo
          </p>
          <div className="self-end border border-black hover:bg-black hover:text-white w-fit rounded-sm p-1">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
