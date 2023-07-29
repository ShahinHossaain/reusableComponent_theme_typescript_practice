import "tailwindcss/tailwind.css";
type Props = {
  variant: "green" | "yellow" | "red";
};
const Btn = ({ variant = "green" }: Props) => {
  return (
    <div>
      <button
        style={{
          background: variant,
          padding: 20,
          borderRadius: "50%",
          height: 20,
          width: 20,
        }}
      ></button>
    </div>
  );
};

export default Btn;
