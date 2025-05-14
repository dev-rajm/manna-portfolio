import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Paytm Clone",
    desc: "Worked as a full-stack developer, a tool designed to handle transition and payment wallet.",
    timeline: "May 2025 - Present",
    href: "#",
  },
  {
    title: "Automated Notice Bot",
    desc: "Worked as a freelance developer for a upwork client, a python bot designed to deliver latest reports direct to the subscribers inbox.",
    timeline: "Mar 2025 - Apr 2025",
    href: "#",
  },
  {
    title: "DakshSCRA Testing",
    desc: "Worked as a freelance developer on DakshSCRA, a tool designed to analyze security bug on your app.",
    timeline: "Nov 2024 - Jan 2025",
    href: "https://github.com/coffeeandsecurity/DakshSCRA",
  },
];

const ExperienceCards = () => {
  return (
    <div className="mt-8">
      {experiences.map((exp) => (
        <Link key={exp.title} href={exp?.href}>
          <div className="flex justify-between hover:bg-black/30 px-3 py-4 lg:px-5 lg:py-6 rounded-2xl transition group">
            <div className="text-neutral-500 w-full lg:w-2/3">
              <h3 className="text-xl lg:text-3xl font-bold text-white">
                {exp.title}
              </h3>
              <p className="my-4 leading-normal lg:leading-tight text-base lg:text-lg">
                {exp.desc}
              </p>
              <span className="">{exp.timeline}</span>
            </div>
            <MoveUpRight className="text-orange-500 delay-150 duration-300 group-hover:-translate-y-5 group-hover:translate-x-5 hidden lg:block" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ExperienceCards;
