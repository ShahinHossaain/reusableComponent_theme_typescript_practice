import React from "react";
import withCounter from "../withCounter";
interface comingProps {
  count: number;
  increaseCount: () => number;
}
const HoverCounter = ({ count, increaseCount }: comingProps) => {
  return (
    <button onMouseOver={increaseCount}>Hover for increase {count}</button>
  );
};

export default withCounter(HoverCounter);
