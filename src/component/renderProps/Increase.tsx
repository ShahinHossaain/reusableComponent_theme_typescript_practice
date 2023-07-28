import React, { useState } from "react";

const Increase = ({
  render,
}: {
  render: (count: number, increaseCount: () => void) => React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  return render(count, increaseCount);
};

export default Increase;
