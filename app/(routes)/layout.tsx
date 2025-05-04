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
        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center w-full gap-16">
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>
          <div className="w-1/2">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default RouteLayout;
