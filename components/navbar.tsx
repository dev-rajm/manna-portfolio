"use client";

import {
  Briefcase,
  Folder,
  House,
  Mail,
  SquarePen,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";

const routes = [
  {
    label: "Home",
    icon: House,
    href: "/",
  },
  {
    label: "Projects",
    icon: Folder,
    href: "/projects",
  },
  {
    label: "Experience",
    icon: Briefcase,
    href: "/experience",
  },
  {
    label: "Skills",
    icon: Wrench,
    href: "/skills",
  },
  {
    label: "Thoughts",
    icon: SquarePen,
    href: "/thoughts",
  },
  {
    label: "Contact",
    icon: Mail,
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-neutral-500/10 p-2 px-6 flex items-center justify-center mx-auto w-fit space-x-2.5 lg:space-x-5 rounded-2xl">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "p-2 relative group rounded-sm hover:bg-red-700 transition-colors duration-300 delay-150",
            pathname === route.href && "bg-red-700"
          )}
        >
          <route.icon className="w-5 h-5 text-white" />
          <Badge className="hidden rounded-lg md:flex h-[23px] py-0 items-center absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 bg-neutral-500/30 group-hover:opacity-100 group-hover:translate-y-8 transition delay-150 duration-300">
            {route.label}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
