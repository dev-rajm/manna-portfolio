const CountComponent = ({ count, label }: { count: number; label: string }) => {
  return (
    <div className="flex flex-col mt-1">
      <h2 className="text-6xl lg:text-[5.5rem] font-semibold lg:leading-24">
        +{count}
      </h2>
      <p className="text-base lg:text-lg text-neutral-400/80 uppercase leading-5">
        {label}
      </p>
    </div>
  );
};

export default CountComponent;
