import FormDemo from "../../exploreStorybook/form/Form";
import Button from "./child/Button";

const DisplayButton = () => {
  return (
    <div className="dark">
      {/* <Button>Click Me</Button> */}
      <Button size="large" variant="primary">
        Submit
      </Button>
      <Button
        size="small"
        variant="primary"
        onClick={() => alert("Button clicked!")}
      >
        Alert
      </Button>
      <Button size="medium" variant="secondary">
        Shahin
      </Button>
      <FormDemo />
    </div>
  );
};

export default DisplayButton;
