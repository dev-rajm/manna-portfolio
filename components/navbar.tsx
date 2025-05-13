"use client";

import { Briefcase, Folder, House, SquarePen, Wrench } from "lucide-react";
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
    label: "Tools",
    icon: Wrench,
    href: "/tools",
  },
  {
    label: "Thoughts",
    icon: SquarePen,
    href: "/thoughts",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-muted-foreground/5 p-2 px-7 flex items-center justify-center mx-auto w-fit space-x-5 rounded-2xl">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "p-2 relative group rounded-sm hover:bg-orange-600 transition-colors duration-150 delay-150",
            pathname === route.href && "bg-orange-600"
          )}
        >
          <route.icon className="w-[1.35rem] h-[1.35rem] text-white" />
          <Badge className="hidden rounded-lg lg:flex items-center absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 bg-neutral-500/30 group-hover:opacity-100 group-hover:translate-y-8 transition delay-150 duration-300">
            {route.label}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
