import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manna | Home",
  description: "Full-Stack Developer based on India",
};

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative bg-black/95 text-white">
      <main className="pt-7">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RouteLayout;
