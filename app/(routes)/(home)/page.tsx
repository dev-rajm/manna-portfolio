import ProjectComponent from "@/components/projects";
import IntroComponent from "@/components/intro";

const HomePage = () => {
  return (
    <>
      <IntroComponent />
      <div className="mt-10 lg:mt-32 text-center lg:text-start">
        <ProjectComponent />
      </div>
    </>
  );
};

export default HomePage;
