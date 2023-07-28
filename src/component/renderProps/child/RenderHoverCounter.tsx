// RenderHoverCounter.tsx
import React from "react";

interface RenderHoverCounterProps {
  count: number;
  increaseCount: () => void; // Correct type signature
}

const RenderHoverCounter: React.FC<RenderHoverCounterProps> = ({
  count,
  increaseCount,
}) => {
  return (
    <div>
      <h3>Render Hover Counter</h3>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-lg"
        onMouseOver={increaseCount}
      >
        Hover to Increase
      </button>
    </div>
  );
};

export default RenderHoverCounter;
