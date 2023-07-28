import React from "react";
import RenderClickCounter from "./child/RenderClickCounter";
import Increase from "./Increase";
import RenderHoverCounter from "./child/RenderHoverCounter";

const RenderProps = () => {
  return (
    <div>
      <p>Render Prop is the prop that defines render logic</p>
      <p>
        এখানে Increase component টা render নামে একটা ফাংশন props হিসানে নিচ্ছে,
        যে ফাংশন argument হিসাবে count, increaseCount নিচ্ছে যা সেট হচ্ছে
        Increase component এর ভিতরে এবং Increase component ভিতর থেকেই render
        ফাংশনটিকে return করা হচ্ছে যা RenderClickCounter এবং RenderHoverCounter
        props হিসাবে পাঠানো হচ্ছে ।
      </p>

      <Increase
        render={(count, increaseCount) => (
          <RenderClickCounter count={count} increaseCount={increaseCount} />
        )}
      />

      <Increase
        render={(count, increaseCount) => (
          <RenderHoverCounter count={count} increaseCount={increaseCount} />
        )}
      />
    </div>
  );
};

export default RenderProps;
