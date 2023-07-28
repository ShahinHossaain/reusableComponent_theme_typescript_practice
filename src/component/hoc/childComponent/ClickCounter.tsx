import withCounter from "../withCounter";
interface comingProps {
  count: number;
  increaseCount: () => number;
}
const ClickCounter = ({ count, increaseCount }: comingProps) => {
  return (
    <button onClick={increaseCount} className="mr-10 text-blue-800">
      click it for increase {count}
    </button>
  );
};

export default withCounter(ClickCounter);
