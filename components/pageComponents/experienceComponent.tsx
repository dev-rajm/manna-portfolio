import ExperienceCards from "../experienceCard";
import Heading from "../heading";

const ExperienceComponent = () => {
  return (
    <>
      <Heading highlightedLabel="4 Years of" MutedLabel="experience" />
      <div className="mt-6">
        <ExperienceCards />
      </div>
    </>
  );
};

export default ExperienceComponent;
