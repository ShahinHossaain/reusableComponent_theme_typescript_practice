const clickCounterCode = `
import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((p) => ++p);

  return (
    <button onClick={increaseCount} className="mr-10 text-blue-800">
      click it for increase {count}
    </button>
  );
};

export default ClickCounter;
`;

const hoverCounterCode = `
import React, { useState } from "react";

const HoverCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((p) => ++p);
  return (
    <button onMouseOver={increaseCount}>Hover for increase {count}</button>
  );
};

export default HoverCounter;

`;

const commonPart = `const [count, setCount] = useState(0);
const increaseCount = () => setCount((p) => ++p);
`;

const updateClickCounterCode = `import React from "react";
import withCounter from "../withCounter";

const ClickCounter = ({ count, increaseCount }) => {
  return (
    <button onClick={increaseCount} className="mr-10 text-blue-800">
      click it for increase {count}
    </button>
  );
};

export default withCounter(ClickCounter);
`;

const updateHoverCounterCode = `import React from "react";
import withCounter from "../withCounter";
const HoverCounter = ({ count, increaseCount }) => {
  return (
    <button onMouseOver={increaseCount}>Hover for increase {count}</button>
  );
};

export default withCounter(HoverCounter);
`;
const withCounterCode = `import React, { useState } from "react";
const withCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((p) => ++p);
    return <WrappedComponent count={count} increaseCount={increaseCount} />;
  };
  return WithCounter;
};

export default withCounter;
`;
export {
  clickCounterCode,
  hoverCounterCode,
  commonPart,
  updateClickCounterCode,
  updateHoverCounterCode,
  withCounterCode,
};
