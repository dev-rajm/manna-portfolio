import ProjectComponent from "@/components/projects";
import IntroComponent from "@/components/intro";
import ExperienceComponent from "@/components/experienceComponent";
import ToolComponent from "@/components/toolComponent";

const HomePage = () => {
  return (
    <>
      <IntroComponent />
      <div className="mt-16 lg:mt-32">
        <ProjectComponent />
      </div>
      <div className="mt-16 lg:mt-32">
        <ExperienceComponent />
      </div>
      <div className="mt-16 lg:mt-32">
        <ToolComponent />
      </div>
    </>
  );
};

export default HomePage;
