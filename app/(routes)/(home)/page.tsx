import Stats from "@/components/Introduction/introStat";
import ProjectComponent from "@/components/pageComponents/projectComponent";
import ExperienceComponent from "@/components/pageComponents/experienceComponent";
import ToolComponent from "@/components/pageComponents/toolComponent";

const HomePage = () => {
  return (
    <>
      <Stats />
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
