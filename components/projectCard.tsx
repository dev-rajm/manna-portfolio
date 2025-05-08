import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    src: "bg1.svg",
    title: "Revo",
    desc: "Free Framer Template",
  },
  {
    src: "bg2.svg",
    title: "Revo",
    desc: "Free Framer Template",
  },
];

const ProjectCard = () => {
  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.src}
          className="flex justify-between hover:bg-black/20 p-5 rounded-2xl transition group"
        >
          <div className="flex items-center">
            <div className="w-36 h-36 relative">
              <Image
                fill
                src={project.src}
                className="rounded-lg object-cover object-center"
                alt="Project 1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-lg text-muted-foreground">{project.desc}</p>
            </div>
          </div>
          <MoveUpRight className="text-orange-500 delay-150 duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
