import Heading from "@/components/heading";
import ToolCards from "@/components/toolCards";

const ToolComponent = () => {
  return (
    <>
      <Heading highlightedLabel="Premium" MutedLabel="Tools" />
      <div className="mt-6">
        <ToolCards />
      </div>
    </>
  );
};

export default ToolComponent;
