const Heading = ({
  highlightedLabel,
  MutedLabel,
}: {
  highlightedLabel: string;
  MutedLabel: string;
}) => {
  return (
    <h1 className="text-[3.56rem] lg:text-[6.5rem] leading-[3.56rem] lg:leading-[6.5rem] font-bold uppercase">
      {highlightedLabel}{" "}
      <span className="text-neutral-700/70">{MutedLabel}</span>
    </h1>
  );
};

export default Heading;
