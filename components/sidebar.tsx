import { Github, Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="p-7 pb-10 relative overflow-hidden lg:px-14 lg:py-9 flex flex-col text-neutral-500 bg-white w-full lg:w-[24rem] rounded-2xl">
      <Image
        width={200}
        height={80}
        src="/path.svg"
        alt="Dashed Path Logo"
        className="absolute -top-4 -left-0 z-10"
      />
      <div className="relative w-full h-48 lg:h-80 mx-auto">
        <Image
          fill
          src="/avatar.png"
          alt="Raj Manna Illustrated Avatar"
          className="rounded-2xl object-cover object-top"
        />
      </div>
      <div className="text-center text-lg font-medium">
        <h1 className="text-black text-4xl font-bold my-7">Raj Manna</h1>
        <div className="relative lg:h-[80px]">
          <Image
            width={200}
            height={80}
            src="/path-fire.svg"
            alt="Dashed Path with Fire Logo"
            className="absolute lg:relative -left-40 lg:-left-48 -top-40 lg:-top-14 lg:w-full"
          />
        </div>
        <p className="leading-tight">
          A Software Engineer who has developed countless scalable solutions.
        </p>
      </div>
      <div className="flex justify-center text-red-500 space-x-6 mt-8 mb-2">
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
