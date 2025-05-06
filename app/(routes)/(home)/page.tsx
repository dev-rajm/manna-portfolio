import CountComponent from "@/components/count";
import Heading from "@/components/heading";

const HomePage = () => {
  return (
    <div className="w-full lg:w-lg mt-10 lg:m-0 text-center lg:text-start">
      <Heading highlightedLabel="Software" MutedLabel="Engineer" />
      <p className="mt-3 text-xl text-neutral-400/80">
        Passionate about building scalable and intuitive web applications.
        Specialized in transforming ideas into real world businesses.
      </p>
      <div className="flex justify-between mt-16">
        <CountComponent count={4} label="Years of experience" />
        <CountComponent count={10} label="Projects Completed" />
        <CountComponent count={5} label="Worldwide clients" />
      </div>
    </div>
  );
};

export default HomePage;
