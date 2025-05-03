import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="py-8 flex flex-col text-gray-500 bg-white w-full lg:w-[22rem] rounded-2xl">
      <div className="relative mx-auto bg-red-500">
        <Image fill src="/avatar.png" alt="Raj Manna Illustrated Avatar" />
      </div>
      <div className="text-center text-lg font-medium px-7">
        <h1 className="text-black text-4xl font-bold mb-5">Raj Manna</h1>
        <p className="leading-tight">
          A Software Engineer who has developed countless scalable solutions.
        </p>
        <p className="mt-2">Kolkata, India</p>
      </div>
    </div>
  );
};

export default Sidebar;
