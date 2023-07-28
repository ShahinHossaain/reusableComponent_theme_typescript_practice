import HoverCounter from "./childComponent/HoverCounter";
import CodePad from "../../shared/Codepad";
import {
  clickCounterCode,
  updateClickCounterCode,
  updateHoverCounterCode,
  withCounterCode,
} from "../../shared/allCode";
import { hoverCounterCode } from "../../shared/allCode";
import { commonPart } from "../../shared/allCode";
import ClickCounter from "./childComponent/ClickCounter";

const HOC = () => {
  return (
    <div className="mx-auto">
      <p>
        Higher Order Component is a function thats takes a component as a
        parameter and return a new component.
      </p>
      <p>Don’t Repeat Yourself (DRY), নিচের কোডগুলো লক্ষ করি</p>
      {/* showing code  */}
      <div className="lg:flex justify-between">
        <div>
          <p>code 1</p>
          <CodePad>{clickCounterCode}</CodePad>
          <p>Output : {<ClickCounter />}</p>
        </div>
        <div>
          <p>code 2</p>
          <CodePad>{hoverCounterCode}</CodePad>
          <p>Output : {<HoverCounter />}</p>
        </div>
      </div>
      {/* common part  */}
      <div className="lg:flex gap-x-4 items-center mt-10">
        <p>দেখা যাচ্ছে উভয় কম্পনেন্টে </p>
        <CodePad>{commonPart}</CodePad>
        <p>এই অংশটুকু কমন, এখানে আমরা Higher Order Component use করতে পারি ।</p>
      </div>
      <div className="md:flex items-center gap-3 mt-10">
        <p>HOC অনেকটা এভাবে কাজ করে </p>
        {
          <CodePad>
            'const newComponent = higherOrderComponent(originalComponent)'
          </CodePad>
        }
        <p>নিচে আমরা কোডের মাধ্যমে জিনিসটা বোঝার চেষ্টা করি,</p>
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <p>code 1</p>
            <CodePad>{updateClickCounterCode}</CodePad>
            <p>Output : {<ClickCounter />}</p>
          </div>
          <div>
            <p>code 2</p>
            <CodePad>{updateHoverCounterCode}</CodePad>
            <p>Output : {<HoverCounter />}</p>
          </div>
        </div>
        <p>HOC code</p>
        <CodePad>{withCounterCode}</CodePad>
      </div>
    </div>
  );
};

export default HOC;
