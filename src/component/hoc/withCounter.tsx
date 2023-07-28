import React, { useState, ComponentType } from "react";

interface WithCounterProps {
  count: number;
  increaseCount: () => void;
}

const withCounter = <P extends WithCounterProps>(
  WrappedComponent: ComponentType<P>
) => {
  const WithCounter = (props: Omit<P, keyof WithCounterProps>) => {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((prevCount) => prevCount + 1);

    const newProps = { count, increaseCount, ...props } as P;
    return <WrappedComponent {...newProps} />;
  };

  return WithCounter;
};

export default withCounter;
