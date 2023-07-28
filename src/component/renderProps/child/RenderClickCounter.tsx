// RenderClickCounter.tsx
import React from "react";

interface RenderClickCounterProps {
  count: number;
  increaseCount: () => void; // Correct type signature
}

const RenderClickCounter: React.FC<RenderClickCounterProps> = ({
  count,
  increaseCount,
}) => {
  return (
    <div>
      <h3>Render Click Counter</h3>
      <p>Count: {count}</p>
      <button
        className="bg-primary-500 text-white px-3 py-1 rounded-lg"
        onClick={increaseCount}
      >
        Click to Increase
      </button>
    </div>
  );
};

export default RenderClickCounter;
