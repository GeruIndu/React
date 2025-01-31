import { useSelector } from "react-redux";

const ShowCounter = () => {
  const { counter } = useSelector((store) => store.counter);

  return (
    <>
      <p className="lead mb-4">Current Counter value is {counter}</p>
    </>
  );
};

export default ShowCounter;
