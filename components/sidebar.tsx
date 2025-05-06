import { Github, Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="p-7 pb-10 relative overflow-hidden md:mx-7 lg:px-14 lg:py-9 flex flex-col text-neutral-500 bg-white w-full lg:w-[24rem] rounded-2xl">
      <Image
        width={200}
        height={80}
        src="/path.svg"
        alt="Dashed Path Logo"
        className="absolute -top-10 lg:-top-4 -left-0 md:left-1/4 lg:-left-0 z-10"
      />
      <div className="relative w-64 lg:w-full h-52 md:h-80 mx-auto">
        <Image
          fill
          src="/avatar.png"
          alt="Raj Manna Illustrated Avatar"
          className="rounded-2xl object-cover object-top"
        />
      </div>
      <div className="text-center text-lg font-medium">
        <h1 className="text-black text-4xl font-bold mt-6 mb-4">Raj Manna</h1>
        <div className="relative h-0 lg:h-[80px]">
          <Image
            width={200}
            height={80}
            src="/path-fire.svg"
            alt="Dashed Path with Fire Logo"
            className="absolute -left-40 lg:-left-48 -top-40 md:-top-full lg:-top-14 w-52 md:w-64 lg:w-full"
          />
        </div>
        <p className="leading-6 max-w-80 font-medium text-xl mx-auto">
          A Software Engineer who has developed countless scalable solutions.
        </p>
      </div>
      <div className="flex justify-center text-orange-600 space-x-6 mt-6">
        <Link href="https://github.com/dev-rajm">
          <Github />
        </Link>
        <Link href="https://github.com/dev-rajm">
          <Twitter />
        </Link>
        <Link href="https://github.com/dev-rajm">
          <Instagram />
        </Link>
        <Link href="https://github.com/dev-rajm">
          <Mail />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
