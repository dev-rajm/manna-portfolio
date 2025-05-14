import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    name: "Nextjs",
    desc: "React Framework",
    src: "/nextjs.png",
    href: "https://nextjs.org",
  },
  {
    name: "Cloudflare Workers",
    desc: "Serverless Platform",
    src: "/cloudflare.png",
    href: "https://workers.cloudflare.com/",
  },
  {
    name: "ChatGPT",
    desc: "API Provider",
    src: "/chatgpt.png",
    href: "https://chatgpt.com/",
  },
  {
    name: "TurboRepo",
    desc: "Build System",
    src: "/turborepo.png",
    href: "https://turborepo.com/",
  },
  {
    name: "Docker",
    desc: "Environment Manager",
    src: "/docker.png",
    href: "https://www.docker.com/",
  },
];

const ToolCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-5 lg:space-y-0">
      {tools.map((tool) => (
        <Link key={tool.name} href={tool.href}>
          <div className="flex items-center p-0 lg:p-5 rounded-2xl hover:bg-black/30">
            <Image
              width={65}
              height={65}
              src={tool.src}
              alt={tool.name}
              className="mr-4 rounded-2xl"
            />
            <div>
              <h4 className="text-xl lg:text-2xl font-bold">{tool.name}</h4>
              <p className="text-base lg:text-lg text-neutral-500">
                {tool.desc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ToolCards;
