import Button from "./child/Button";

const DisplayButton = () => {
  return (
    <div>
      <Button>Click Me</Button>
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
    </div>
  );
};

export default DisplayButton;
