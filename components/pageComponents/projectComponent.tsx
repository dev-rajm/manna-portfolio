import Heading from "@/components/heading";
import ProjectCards from "@/components/projectCards";

const ProjectComponent = () => {
  return (
    <>
      <Heading highlightedLabel="Recent" MutedLabel="Projects" />
      <div className="mt-6">
        <ProjectCards />
      </div>
    </>
  );
};

export default ProjectComponent;
