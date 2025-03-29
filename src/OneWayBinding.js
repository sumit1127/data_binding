import Child from "./Child";

const OneWayBinding = () => {
  const data = "One way binding through props";
  return (
    <div>
      <Child data={data} />
    </div>
  );
};

export default OneWayBinding;
