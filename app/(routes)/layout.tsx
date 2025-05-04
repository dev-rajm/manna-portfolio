import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Manna | Home",
  description: "Full-Stack Developer based on India",
};

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full overflow-x-hidden bg-neutral-900 text-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-400 scrollbar-track-neutral-800">
      <main className="pt-5 lg:pt-8">
        <Navbar />
        <div className="mt-8 lg:mt-24 flex flex-col lg:flex-row justify-center w-full gap-16 px-5 lg:p-0">
          <div className="w-full h-full block lg:sticky lg:top-10 lg:w-1/4">
            <Sidebar />
          </div>
          <div className="w-full lg:w-1/2">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default RouteLayout;
