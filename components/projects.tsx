import Heading from "./heading";
import ProjectCard from "./projectCard";

const ProjectsComponent = () => {
  return (
    <>
      <Heading highlightedLabel="Recent" MutedLabel="Projects" />
      <div className="mt-6">
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectsComponent;
