const Heading = ({
  highlightedLabel,
  MutedLabel,
}: {
  highlightedLabel: string;
  MutedLabel: string;
}) => {
  return (
    <h1 className="text-5xl lg:text-[6.5rem] lg:leading-[6.5rem] font-bold uppercase text-center lg:text-start">
      {highlightedLabel}{" "}
      <span className="text-muted-foreground/30">{MutedLabel}</span>
    </h1>
  );
};

export default Heading;
