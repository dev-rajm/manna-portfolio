import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Manna | Home",
  description: "Full-Stack Developer based on India",
};

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative bg-neutral-900 text-white">
      <main className="pt-7">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10 lg:mt-20 lg:gap-x-20 px-5 lg:px-0">
          <div className="col-span-5 w-full place-self-center lg:place-self-end">
            <Sidebar />
          </div>
          <div className="col-span-7">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default RouteLayout;
