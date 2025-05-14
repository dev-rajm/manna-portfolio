import ExperienceCards from "@/components/experienceCards";
import Heading from "@/components/heading";

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
