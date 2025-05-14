import ExperienceCards from "./experienceCard";
import Heading from "./heading";

const ExperienceComponent = () => {
  return (
    <>
      <Heading highlightedLabel="4 Years of" MutedLabel="experience" />
      <div>
        <ExperienceCards />
      </div>
    </>
  );
};

export default ExperienceComponent;
