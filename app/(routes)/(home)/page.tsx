import ProjectComponent from "@/components/projects";
import IntroComponent from "@/components/intro";
import ExperienceComponent from "@/components/experienceComponent";

const HomePage = () => {
  return (
    <>
      <IntroComponent />
      <div className="mt-16 lg:mt-32 text-center lg:text-start">
        <ProjectComponent />
      </div>
      <div className="mt-16 lg:mt-32 text-center lg:text-start">
        <ExperienceComponent />
      </div>
    </>
  );
};

export default HomePage;
