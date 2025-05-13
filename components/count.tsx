const CountComponent = ({ count, label }: { count: number; label: string }) => {
  return (
    <div className="flex flex-col mt-1">
      <h2 className="text-5xl lg:text-7xl font-semibold lg:leading-tight">
        +{count}
      </h2>
      <p className="text-base lg:text-lg text-neutral-400/80 uppercase leading-tight">
        {label}
      </p>
    </div>
  );
};

export default CountComponent;
