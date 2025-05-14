import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const projects = [
  {
    src: "/ai.jpg",
    title: "GeniusAI",
    desc: "All-in-One AI SaaS Application",
    href: "https://github.com/dev-rajm/ai-saas",
  },
  {
    src: "/blogging.jpg",
    title: "Zedium Blogs",
    desc: "Full-stack Blogging Application",
    href: "https://github.com/dev-rajm/zedium",
  },
  {
    src: "/chatting.jpg",
    title: "Chat App",
    desc: "Real-time Chatting Application",
    href: "https://mern-chat-app-s8eh.onrender.com/",
  },
];

const ProjectCards = () => {
  return (
    <>
      {projects.map((project) => (
        <Link key={project.href} href={project.href}>
          <div className="flex justify-between hover:bg-black/30 py-2 lg:p-5 rounded-2xl transition group">
            <div className="flex items-center">
              <div className="w-28 h-28 lg:w-36 lg:h-36 relative">
                <Image
                  fill
                  src={project.src}
                  className="rounded-lg object-cover object-center"
                  alt={project.title}
                />
              </div>
              <div className="ml-3 lg:ml-5 text-start">
                <h2 className="text-xl lg:text-2xl font-bold">
                  {project.title}
                </h2>
                <p className="text-sm lg:text-lg text-muted-foreground mt-0.5">
                  {project.desc}
                </p>
              </div>
            </div>
            <MoveUpRight className="text-orange-500 delay-150 duration-300 group-hover:-translate-y-5 group-hover:translate-x-5 hidden lg:block" />
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectCards;
